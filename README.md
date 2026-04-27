<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="90" alt="Devopstrio Logo" />

<h1>AWS Bedrock Blueprints</h1>

<p><strong>Production-Ready Generative AI Architectures, Secure Foundational AI Operating Models & RAG Accelerators</strong></p>

[![Solution](https://img.shields.io/badge/Stack-AWS_Bedrock-ff9900?style=for-the-badge&logo=amazonwebservices&labelColor=000000)](https://devopstrio.co.uk/)
[![Inference](https://img.shields.io/badge/Orchestrator-Multi_Model-522c72?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![Governance](https://img.shields.io/badge/Policy-Guardrails-success?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![Logic](https://img.shields.io/badge/Engine-Agentic_Workflows-962964?style=for-the-badge&labelColor=000000)](/apps/agent-engine)

</div>

---

## 🏛️ Executive Summary

**AWS Bedrock Blueprints** is a flagship enterprise platform designed to accelerate the adoption of Generative AI within regulated organizations. By providing a curated collection of production-ready reference architectures, the platform establishes a secure, governed, and scalable foundation for deploying **Amazon Bedrock** solutions. From high-performance **RAG (Retrieval-Augmented Generation)** pipelines to complex **Agentic Workflows**, this platform codifies the engineering standards required for enterprise AI.

The platform integrates advanced **Governance, Cost, and Security Engines** to ensure that AI innovation does not come at the cost of compliance or budget. Organizations can now launch secure model experimentations, deploy internal knowledge assistants, and orchestrate multi-model workflows with the confidence of built-in **PII redaction**, **guardrail enforcements**, and **automated token-cost allocation**.

### Strategic Business Outcomes
- **Accelerated Time-to-Value**: Deploy secure GenAI solutions in hours instead of months through standardized, IaC-backed blueprint patterns.
- **Enterprise-Grade Governance**: Enforce responsible AI principles with automated prompt approvals, model access controls, and continuous drift detection.
- **Optimized AI Economics**: Gain granular visibility into token consumption and model performance through the integrated Cost Engine and chargeback reporting.
- **Uncompromised Data Sovereignty**: Protect sensitive data through Private VPC Endpoints, KMS integration, and automated guardrail filtering before data reaches the model.

---

## 🏗️ Technical Architecture Details

### 1. High-Level AI Operating Model
```mermaid
graph TD
    App[Consumer Application] --> Gateway[Bedrock Blueprint API]
    Gateway --> Gov[Governance Engine]
    Gov --> Router[Model Router]
    
    subgraph "Bedrock Core"
        Router --> Claude[Claude 3.5 Sonnet]
        Router --> Llama[Llama 3]
        Router --> Titan[Amazon Titan]
    end
    
    subgraph "Context Engines"
        RAG[RAG Accelerator]
        Agent[Agent Orchestrator]
    end
    
    RAG --> OS[OpenSearch Vector DB]
    Agent --> Tools[Internal Tools / API]
    
    Gateway --> Cost[Cost Engine]
    Gateway --> Sec[Security Engine]
```

### 2. RAG Ingestion Workflow
```mermaid
sequenceDiagram
    participant S3 as S3 Data Source
    participant Ingest as Ingestion Pipeline
    participant Chunk as Chunking / Overlap
    participant Vec as Embedding Model
    participant DB as OpenSearch Vector

    S3->>Ingest: New Document Trigger
    Ingest->>Chunk: Normalize & Split (Recursive)
    Chunk->>Vec: Generate High-Dim Vectors
    Vec->>DB: Upsert Vector + Metadata
```

### 3. Agent Execution Lifecycle
```mermaid
graph TD
    Prompt[User Input] --> Plan[Task Decomposition]
    Plan --> Search[Vector Search / Tool Call]
    Search --> Execute[API Action]
    Execute --> Reflect[Observation & Summary]
    Reflect --> Final[Response Generation]
```

### 4. Prompt Approval Flow
```mermaid
graph LR
    Draft[New System Prompt] --> Scan[PII & Injection Scan]
    Scan --> Human[Security Lead Approval]
    Human --> Live[Active Baseline]
```

### 5. Cost Governance Workflow
```mermaid
graph TD
    Usage[Token Consumption] --> Alloc[Project Attribution]
    Alloc --> Budget[Alert Threshold Check]
    Budget --> Report[Executive Chargeback]
```

### 6. Security Trust Boundary
```mermaid
graph TD
    Client[Untrusted App] --> WAF[AWS WAF]
    WAF --> VPCE[Private VPC Endpoint]
    VPCE --> Bedrock[Amazon Bedrock Service]
```

### 7. AWS Multi-Region AI Topology
```mermaid
graph LR
    Primary[US-East-1 Hub] --> Sync[Control Plane Sync]
    Sync --> Secondary[UK-South Spoke]
    Primary -.->|Failover| Secondary
```

### 8. API Request Lifecycle
```mermaid
graph TD
    Req[POST /rag/query] --> Auth[JWT & IAM]
    Auth --> Gov[Guardrail Filter]
    Gov --> RAG[Retrieve Context]
    RAG --> LLM[Bedrock Invoke]
    LLM --> Post[PII Redaction]
    Post --> Resp[JSON Citation]
```

### 9. Multi-Tenant Tenancy Model
```mermaid
graph TD
    Holding[Global Org]
    Holding --> BU1[Finance AI Sandbox]
    Holding --> BU2[Sales GPT Ops]
    BU1 --> Policy[Scoped IAM Policies]
```

### 10. Monitoring & Telemetry Flow
```mermaid
graph LR
    CloudWatch[Model Events] --> Prometheus[Token Metrics]
    Prometheus --> Grafana[AI Dashboard]
```

### 11. Disaster Recovery Topology
```mermaid
graph TD
    Prod[Active Stack] --> BK[Async Vector DB Backup]
    BK --> DR[Standby Passive Stack]
```

### 12. Private Endpoint Flow
```mermaid
graph LR
    Data[Internal Data] --> End[VPC Interface Endpoint]
    End --> Private[AWS Global Network]
    Private --> Model[Bedrock Inference]
```

### 13. Identity Federation Model
```mermaid
graph LR
    IC[IAM Identity Center] --> SSO[OIDC Auth]
    SSO --> API[Blueprint API Access]
```

### 14. Model Routing Workflow
```mermaid
graph TD
    Req[Task Request] --> Class[Classify Complexity]
    Class --> Cheap[Low: Haiku / Llama3]
    Class --> Exp[High: Sonnet / Opus]
```

### 15. CI/CD Pipeline
```mermaid
graph LR
    Push[Commit Prompt] --> Test[LLM-as-a-Judge Eval]
    Test --> Release[Deploy to EKS]
```

### 16. Executive Governance Workflow
```mermaid
graph TD
    Risk[AI Risk Score] --> Board[Operational Review]
    Board --> Policy[Metadata Update]
```

### 17. Data Source Sync Flow
```mermaid
graph LR
    SharePoint[Connector] --> S3[Landing Zone]
    S3 --> RAG[Vector Pipeline]
```

### 18. Global Region AI Topology
```mermaid
graph TD
    Center[Global Command]
    Center --> R1[EMEA Model Cluster]
    Center --> R2[APAC Model Cluster]
```

### 19. Chargeback Workflow
```mermaid
graph TD
    Inference[Model Call] --> Tag[Resource Tagging]
    Tag --> Bill[AWS CUR Analysis]
```

### 20. Responsible AI Control Loop
```mermaid
graph TD
    RealTime[User Request] --> Filter[Guardrails V2]
    Filter --> Audit[CloudTrail Capture]
```

---

## 🚀 Deployment Guide

### Terraform Orchestration
```bash
cd terraform/environments/prd
terraform init
terraform apply -auto-approve
```

---
<sub>&copy; 2026 Devopstrio &mdash; Engineering the Scalable Foundation for the Enterprise AI Revolution.</sub>
