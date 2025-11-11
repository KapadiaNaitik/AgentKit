export const config={
    "type": "sequential",
    "flows": {
      "step1": {
        "name": "Generate Steps",
        "workflowId": "38342c75-fe8a-4b93-9f61-44273f0a1b36",
        "description": "Generates high-level reasoning steps for the query",
        "mode": "sync",
        "expectedOutput": "steps",
        "inputSchema": {
          "query": "string",
          "history": "array"
        },
        "outputSchema": {
          "steps": "string"
        }
      },
      "step2A": {
        "name": "Process Steps - Live Search",
        "workflowId": "6dbb7475-1110-41aa-b3fa-10126099c4f2",
        "description": "Processes the generated steps into research queries + links",
        "mode": "sync",
        "dependsOn": ["step1"],
        "expectedOutput": ["research", "links"],
        "inputSchema": {
          "steps": "string"
        },
        "outputSchema": {
          "research": "array",
          "links": "array"
        }
      },
      "step2B": {
        "name": "Process Steps - Database Search",
        "workflowId": "f11fd889-b027-4d7f-a9e0-030124e96309",
        "description": "Processes the generated steps into research queries + links",
        "mode": "sync",
        "dependsOn": ["step1"],
        "expectedOutput": ["research", "links"],
        "inputSchema": {
          "steps": "string"
        },
        "outputSchema": {
          "research": "array",
          "links": "array"
        }
      },
      "step3": {
        "name": "Final Writer",
        "workflowId": "50cc2b64-b9c0-4444-b3bb-8501db81f05b",
        "description": "Takes query and research results and generates the final markdown answer",
        "mode": "sync",
        "dependsOn": ["step2A", "step2B", "step2C"],
        "expectedOutput": "answer",
        "inputSchema": {
          "query": "string",
          "research": "array"
        },
        "outputSchema": {
          "answer": "string"
        }
      }
    },
    "api": {
      "endpoint": "https://lamaticshowcase-firecrawl310.lamatic.dev/graphql",
      "projectId": "3387843c-b9c7-47ee-a96e-d6708e28ad6c"
    }
  }