-- Devopstrio AWS Bedrock Blueprints
-- Core AI Governance & Orchestration Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    aws_account_id VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'Developer', -- Admin, Architect, Auditor, Developer
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Model & Blueprint Catalog
CREATE TABLE IF NOT EXISTS models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider VARCHAR(100) NOT NULL, -- Anthropic, Meta, Amazon, Mistral
    model_id VARCHAR(255) UNIQUE NOT NULL, -- anthropic.claude-3-sonnet-20240229-v1:0
    is_active BOOLEAN DEFAULT TRUE,
    cost_per_1k_tokens_input FLOAT,
    cost_per_1k_tokens_output FLOAT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blueprints (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- RAG, Chat, Agent, Analytics
    config JSONB NOT NULL, -- Model selection, prompt refs, guardrail settings
    status VARCHAR(50) DEFAULT 'Draft',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Prompt Management (PromptOps)
CREATE TABLE IF NOT EXISTS prompts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    blueprint_id UUID REFERENCES blueprints(id),
    version INT DEFAULT 1,
    content TEXT NOT NULL,
    parameters JSONB,
    is_approved BOOLEAN DEFAULT FALSE,
    approved_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Ingestion & Vector Tracking
CREATE TABLE IF NOT EXISTS vectorsets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    engine VARCHAR(50) DEFAULT 'OpenSearch',
    index_name VARCHAR(255) NOT NULL,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vectorset_id UUID REFERENCES vectorsets(id),
    source_uri VARCHAR(512) NOT NULL,
    status VARCHAR(50) DEFAULT 'Indexed', -- Pending, Indexing, Indexed, Failed
    last_sync TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Cost & Usage Records
CREATE TABLE IF NOT EXISTS cost_records (
    id BIGSERIAL PRIMARY KEY,
    tenant_id UUID REFERENCES tenants(id),
    blueprint_id UUID REFERENCES blueprints(id),
    model_id VARCHAR(255) NOT NULL,
    tokens_input INT DEFAULT 0,
    tokens_output INT DEFAULT 0,
    estimated_cost FLOAT DEFAULT 0.0,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Audit & Performance
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    payload JSONB,
    resource_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- AI Intelligence Indexes
CREATE INDEX idx_blueprint_tenant ON blueprints(tenant_id);
CREATE INDEX idx_cost_blueprint ON cost_records(blueprint_id);
CREATE INDEX idx_prompt_approved ON prompts(is_approved);
CREATE INDEX idx_doc_vectorset ON documents(vectorset_id);
CREATE INDEX idx_audit_time ON audit_logs(created_at);
CREATE INDEX idx_cost_time ON cost_records(timestamp);
