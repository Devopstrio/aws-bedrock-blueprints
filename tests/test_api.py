import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio AWS Bedrock Blueprints
# Integration Tests for GenAI Orchestration & RAG Accelerators

client = TestClient(app)

def test_health_check_operational():
    """Verify that the AI gateway is healthy and Bedrock is reachable."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["bedrock_reachable"] is True

def test_model_catalog_retrieval():
    """Ensure the platform can list foundational models available via Bedrock."""
    response = client.get("/models")
    assert response.status_code == 200
    assert len(response.json()) > 0
    assert "Claude 3.5 Sonnet" in [m["name"] for m in response.json()]

def test_rag_query_execution():
    """Verify that a retrieval-augmented generation query is correctly handled."""
    payload = {
        "collection_id": "bp-01",
        "query": "What is the holiday policy?",
        "top_k": 3
    }
    response = client.post("/rag/query", json=payload)
    assert response.status_code == 200
    assert "response" in response.json()
    assert "citations" in response.json()

def test_agent_execution_async():
    """Test the initiation of a multi-step agentic workflow."""
    payload = {
        "blueprint_id": "bp-ops-01",
        "input_text": "Generate a weekly status report for Project X."
    }
    response = client.post("/agents/execute", json=payload)
    assert response.status_code == 202
    assert "job_id" in response.json()

def test_ai_analytics_metrics():
    """Ensure the platform reports token costs and usage trends."""
    response = client.get("/analytics/summary")
    assert response.status_code == 200
    assert "total_cost_usd" in response.json()

def test_governance_posture_score():
    """Verify the platform provides a score against Responsible AI principles."""
    response = client.get("/governance/posture")
    assert response.status_code == 200
    assert response.json()["pii_redaction_rate"] == "100%"
