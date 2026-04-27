# Devopstrio AWS Bedrock Blueprints
# Core GenAI Infrastructure (Terraform)
# Target: AWS

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# 1. Foundation VPC for AI Workloads
resource "aws_vpc" "ai_vpc" {
  cidr_block           = "10.10.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
  tags = {
    Domain     = "GenAI-Foundation"
    Platform   = "Bedrock-Blueprints"
  }
}

# 2. Bedrock Private VPC Gateway Endpoint
resource "aws_vpc_endpoint" "bedrock" {
  vpc_id              = aws_vpc.ai_vpc.id
  service_name        = "com.amazonaws.us-east-1.bedrock-runtime"
  vpc_endpoint_type   = "Interface"
  private_dns_enabled = true
  subnet_ids          = [aws_subnet.private_ai.id]
  security_group_ids  = [aws_security_group.bedrock_access.id]
}

# 3. OpenSearch Serverless (Vector Database)
resource "aws_opensearchserverless_collection" "vector_db" {
  name        = "avd-ai-knowledge-base"
  description = "Primary Vector Repository for RAG Blueprints"
  type        = "VECTORSEARCH"
}

# 4. KMS Key for AI Data Sovereignty
resource "aws_kms_key" "ai_key" {
  description             = "Master key for Bedrock Data Protection"
  deletion_window_in_days = 30
  enable_key_rotation     = true
}

# 5. S3 Landing Zone for Knowledge Retrieval
resource "aws_s3_bucket" "knowledge_landing" {
  bucket = "devopstrio-ai-landing-zone"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "kms_enc" {
  bucket = aws_s3_bucket.knowledge_landing.id
  rule {
    apply_server_side_encryption_by_default {
      kms_master_key_id = aws_kms_key.ai_key.arn
      sse_algorithm     = "aws:kms"
    }
  }
}

# 6. Bedrock Guardrail Baseline
resource "aws_bedrock_guardrail" "enterprise_standard" {
  name                      = "enterprise-standard-guardrail"
  blocked_input_messaging   = "This request violated corporate AI safety policies."
  blocked_outputs_messaging = "The generated response was suppressed due to governance constraints."
  description               = "Standard PII and content filter for all blueprints."

  content_policy_config {
    filters_config {
      type            = "HATE"
      input_strength  = "HIGH"
      output_strength = "HIGH"
    }
    filters_config {
      type            = "INSULT"
      input_strength  = "HIGH"
      output_strength = "HIGH"
    }
  }
}

# Outputs
output "vpc_id" {
  value = aws_vpc.ai_vpc.id
}

output "opensearch_endpoint" {
  value = aws_opensearchserverless_collection.vector_db.collection_endpoint
}
