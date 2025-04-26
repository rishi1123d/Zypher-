"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Check, Play, Code, Server, Database, Key } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ApiDocs() {
  const [copied, setCopied] = useState<string | null>(null)
  const [testResponse, setTestResponse] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const simulateApiCall = () => {
    setIsLoading(true)
    setTestResponse(null)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setTestResponse(
        JSON.stringify(
          {
            status: "success",
            data: {
              proofId: "proof_" + Math.random().toString(36).substring(2, 10),
              proofType: "income",
              claim: "Income exceeds $50,000 annually",
              timestamp: new Date().toISOString(),
              verified: true,
              verificationTime: new Date().toISOString(),
            },
          },
          null,
          2,
        ),
      )
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">API Documentation</h2>
        <p className="text-muted-foreground">
          Integrate with Zypher's API to generate and verify zero-knowledge proofs in your applications.
        </p>
      </div>

      <div className="rounded-lg border border-border/50 bg-card/50 p-6">
        <div className="flex items-start space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
            <Key className="h-5 w-5 text-blue-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">Authentication</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              All API requests require authentication using an API key. Include your API key in the request headers.
            </p>
            <div className="mt-4 rounded-lg bg-black/20 p-4">
              <div className="flex items-center justify-between">
                <code className="text-xs">Authorization: Bearer YOUR_API_KEY</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy("Authorization: Bearer YOUR_API_KEY", "auth")}
                >
                  {copied === "auth" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="generate" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="generate">Generate Proofs</TabsTrigger>
          <TabsTrigger value="verify">Verify Proofs</TabsTrigger>
          <TabsTrigger value="manage">Manage Proofs</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <h3 className="text-lg font-medium">Generate Proof</h3>
                  <Badge className="ml-2 bg-green-500/20 text-green-500 hover:bg-green-500/20">POST</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Generate a zero-knowledge proof based on provided data and claim type.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Endpoint</h4>
                <div className="flex items-center rounded-lg bg-black/20 p-3">
                  <code className="flex-1 text-xs">https://api.zypher.io/v1/proofs/generate</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy("https://api.zypher.io/v1/proofs/generate", "gen-endpoint")}
                  >
                    {copied === "gen-endpoint" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="request-body">
                  <AccordionTrigger className="text-sm font-medium">Request Body</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-lg bg-black/20 p-3">
                      <div className="flex items-start justify-between">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`{
  "proofType": "income",
  "dataSource": {
    "type": "bank",
    "connectionId": "conn_123456789"
  },
  "claim": {
    "type": "threshold",
    "threshold": 50000,
    "currency": "USD",
    "period": "annual"
  }
}`}</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleCopy(
                              `{
  "proofType": "income",
  "dataSource": {
    "type": "bank",
    "connectionId": "conn_123456789"
  },
  "claim": {
    "type": "threshold",
    "threshold": 50000,
    "currency": "USD",
    "period": "annual"
  }
}`,
                              "gen-body",
                            )
                          }
                        >
                          {copied === "gen-body" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h5 className="text-xs font-medium">Parameters</h5>
                        <div className="mt-2 space-y-2">
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div className="font-medium">proofType</div>
                            <div className="col-span-2">Type of proof to generate (income, identity, age, credit)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div className="font-medium">dataSource</div>
                            <div className="col-span-2">Information about the data source to use for verification</div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div className="font-medium">claim</div>
                            <div className="col-span-2">Details about the claim being made</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="response">
                  <AccordionTrigger className="text-sm font-medium">Response</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-lg bg-black/20 p-3">
                      <div className="flex items-start justify-between">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`{
  "status": "success",
  "data": {
    "proofId": "proof_abcdef123456",
    "proofType": "income",
    "claim": "Income exceeds $50,000 annually",
    "timestamp": "2023-04-15T14:32:21Z",
    "proof": {
      "pi_a": [...],
      "pi_b": [...],
      "pi_c": [...],
      "protocol": "groth16",
      "curve": "bn128"
    },
    "publicSignals": [
      "1",
      "50000"
    ]
  }
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h5 className="text-xs font-medium">Response Fields</h5>
                        <div className="mt-2 space-y-2">
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div className="font-medium">status</div>
                            <div className="col-span-2">Status of the request (success or error)</div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div className="font-medium">data.proofId</div>
                            <div className="col-span-2">Unique identifier for the generated proof</div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div className="font-medium">data.proof</div>
                            <div className="col-span-2">The cryptographic proof data</div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div className="font-medium">data.publicSignals</div>
                            <div className="col-span-2">Public inputs used for verification</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Code Examples</h4>
                <Tabs defaultValue="js">
                  <TabsList className="mb-4">
                    <TabsTrigger value="js">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>
                  <TabsContent value="js">
                    <div className="relative rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{`// Using fetch API
const generateProof = async () => {
  const response = await fetch('https://api.zypher.io/v1/proofs/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      proofType: "income",
      dataSource: {
        type: "bank",
        connectionId: "conn_123456789"
      },
      claim: {
        type: "threshold",
        threshold: 50000,
        currency: "USD",
        period: "annual"
      }
    })
  });
  
  const data = await response.json();
  return data;
};`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() =>
                          handleCopy(
                            `// Using fetch API
const generateProof = async () => {
  const response = await fetch('https://api.zypher.io/v1/proofs/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      proofType: "income",
      dataSource: {
        type: "bank",
        connectionId: "conn_123456789"
      },
      claim: {
        type: "threshold",
        threshold: 50000,
        currency: "USD",
        period: "annual"
      }
    })
  });
  
  const data = await response.json();
  return data;
};`,
                            "js-example",
                          )
                        }
                      >
                        {copied === "js-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="python">
                    <div className="relative rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{`# Using requests library
import requests
import json

def generate_proof():
    url = "https://api.zypher.io/v1/proofs/generate"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
    }
    payload = {
        "proofType": "income",
        "dataSource": {
            "type": "bank",
            "connectionId": "conn_123456789"
        },
        "claim": {
            "type": "threshold",
            "threshold": 50000,
            "currency": "USD",
            "period": "annual"
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    return response.json()`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() =>
                          handleCopy(
                            `# Using requests library
import requests
import json

def generate_proof():
    url = "https://api.zypher.io/v1/proofs/generate"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
    }
    payload = {
        "proofType": "income",
        "dataSource": {
            "type": "bank",
            "connectionId": "conn_123456789"
        },
        "claim": {
            "type": "threshold",
            "threshold": 50000,
            "currency": "USD",
            "period": "annual"
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    return response.json()`,
                            "py-example",
                          )
                        }
                      >
                        {copied === "py-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="curl">
                    <div className="relative rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{`curl -X POST https://api.zypher.io/v1/proofs/generate \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "proofType": "income",
    "dataSource": {
      "type": "bank",
      "connectionId": "conn_123456789"
    },
    "claim": {
      "type": "threshold",
      "threshold": 50000,
      "currency": "USD",
      "period": "annual"
    }
  }'`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() =>
                          handleCopy(
                            `curl -X POST https://api.zypher.io/v1/proofs/generate \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "proofType": "income",
    "dataSource": {
      "type": "bank",
      "connectionId": "conn_123456789"
    },
    "claim": {
      "type": "threshold",
      "threshold": 50000,
      "currency": "USD",
      "period": "annual"
    }
  }'`,
                            "curl-example",
                          )
                        }
                      >
                        {copied === "curl-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h4 className="mb-4 text-sm font-medium">Try It Out</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                      <Input placeholder="Your API Key" type="password" />
                    </div>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600"
                      onClick={simulateApiCall}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Testing...
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Test API
                        </>
                      )}
                    </Button>
                  </div>

                  {testResponse && (
                    <div className="rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{testResponse}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-2 text-sm font-medium">Error Codes</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Badge className="mr-2 bg-red-500/20 text-red-500 hover:bg-red-500/20">400</Badge>
                    <p className="text-xs">Invalid request parameters</p>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mr-2 bg-red-500/20 text-red-500 hover:bg-red-500/20">401</Badge>
                    <p className="text-xs">Unauthorized - Invalid API key</p>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mr-2 bg-red-500/20 text-red-500 hover:bg-red-500/20">403</Badge>
                    <p className="text-xs">Forbidden - Insufficient permissions</p>
                  </div>
                  <div className="flex items-start">
                    <Badge className="mr-2 bg-red-500/20 text-red-500 hover:bg-red-500/20">500</Badge>
                    <p className="text-xs">Server error during proof generation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verify" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <h3 className="text-lg font-medium">Verify Proof</h3>
                  <Badge className="ml-2 bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">POST</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Verify a zero-knowledge proof to confirm its validity.</p>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Endpoint</h4>
                <div className="flex items-center rounded-lg bg-black/20 p-3">
                  <code className="flex-1 text-xs">https://api.zypher.io/v1/proofs/verify</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy("https://api.zypher.io/v1/proofs/verify", "verify-endpoint")}
                  >
                    {copied === "verify-endpoint" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="request-body">
                  <AccordionTrigger className="text-sm font-medium">Request Body</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-lg bg-black/20 p-3">
                      <div className="flex items-start justify-between">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`{
  "proofId": "proof_abcdef123456",
  // Or alternatively, provide the full proof
  "proof": {
    "pi_a": [...],
    "pi_b": [...],
    "pi_c": [...],
    "protocol": "groth16",
    "curve": "bn128"
  },
  "publicSignals": [
    "1",
    "50000"
  ]
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="response">
                  <AccordionTrigger className="text-sm font-medium">Response</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-lg bg-black/20 p-3">
                      <div className="flex items-start justify-between">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`{
  "status": "success",
  "data": {
    "verified": true,
    "proofId": "proof_abcdef123456",
    "proofType": "income",
    "claim": "Income exceeds $50,000 annually",
    "timestamp": "2023-04-15T14:32:21Z",
    "verificationTime": "2023-04-15T15:01:45Z"
  }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Code Examples</h4>
                <Tabs defaultValue="js">
                  <TabsList className="mb-4">
                    <TabsTrigger value="js">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                  </TabsList>
                  <TabsContent value="js">
                    <div className="relative rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{`// Using fetch API
const verifyProof = async (proofId) => {
  const response = await fetch('https://api.zypher.io/v1/proofs/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      proofId: proofId
    })
  });
  
  const data = await response.json();
  return data;
};`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() =>
                          handleCopy(
                            `// Using fetch API
const verifyProof = async (proofId) => {
  const response = await fetch('https://api.zypher.io/v1/proofs/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      proofId: proofId
    })
  });
  
  const data = await response.json();
  return data;
};`,
                            "js-verify-example",
                          )
                        }
                      >
                        {copied === "js-verify-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="python">
                    <div className="relative rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{`# Using requests library
import requests

def verify_proof(proof_id):
    url = "https://api.zypher.io/v1/proofs/verify"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
    }
    payload = {
        "proofId": proof_id
    }
    
    response = requests.post(url, headers=headers, json=payload)
    return response.json()`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() =>
                          handleCopy(
                            `# Using requests library
import requests

def verify_proof(proof_id):
    url = "https://api.zypher.io/v1/proofs/verify"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
    }
    payload = {
        "proofId": proof_id
    }
    
    response = requests.post(url, headers=headers, json=payload)
    return response.json()`,
                            "py-verify-example",
                          )
                        }
                      >
                        {copied === "py-verify-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <h3 className="text-lg font-medium">List Proofs</h3>
                  <Badge className="ml-2 bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">GET</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Retrieve a list of proofs generated by the authenticated user.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Endpoint</h4>
                <div className="flex items-center rounded-lg bg-black/20 p-3">
                  <code className="flex-1 text-xs">https://api.zypher.io/v1/proofs</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy("https://api.zypher.io/v1/proofs", "list-endpoint")}
                  >
                    {copied === "list-endpoint" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="query-params">
                  <AccordionTrigger className="text-sm font-medium">Query Parameters</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div className="font-medium">limit</div>
                        <div className="col-span-2">Number of proofs to return (default: 10, max: 100)</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div className="font-medium">offset</div>
                        <div className="col-span-2">Number of proofs to skip (default: 0)</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div className="font-medium">proofType</div>
                        <div className="col-span-2">Filter by proof type (income, identity, age, credit)</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div className="font-medium">status</div>
                        <div className="col-span-2">Filter by proof status (active, expired, revoked)</div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="response">
                  <AccordionTrigger className="text-sm font-medium">Response</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-lg bg-black/20 p-3">
                      <div className="flex items-start justify-between">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`{
  "status": "success",
  "data": {
    "proofs": [
      {
        "proofId": "proof_abcdef123456",
        "proofType": "income",
        "claim": "Income exceeds $50,000 annually",
        "timestamp": "2023-04-15T14:32:21Z",
        "status": "active"
      },
      {
        "proofId": "proof_ghijkl789012",
        "proofType": "identity",
        "claim": "Valid government ID",
        "timestamp": "2023-04-10T09:15:43Z",
        "status": "active"
      }
    ],
    "pagination": {
      "total": 2,
      "limit": 10,
      "offset": 0
    }
  }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Code Examples</h4>
                <Tabs defaultValue="js">
                  <TabsList className="mb-4">
                    <TabsTrigger value="js">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                  </TabsList>
                  <TabsContent value="js">
                    <div className="relative rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{`// Using fetch API
const listProofs = async (limit = 10, offset = 0, proofType = null) => {
  let url = \`https://api.zypher.io/v1/proofs?limit=\${limit}&offset=\${offset}\`;
  
  if (proofType) {
    url += \`&proofType=\${proofType}\`;
  }
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data;
};`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() =>
                          handleCopy(
                            `// Using fetch API
const listProofs = async (limit = 10, offset = 0, proofType = null) => {
  let url = \`https://api.zypher.io/v1/proofs?limit=\${limit}&offset=\${offset}\`;
  
  if (proofType) {
    url += \`&proofType=\${proofType}\`;
  }
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  });
  
  const data = await response.json();
  return data;
};`,
                            "js-list-example",
                          )
                        }
                      >
                        {copied === "js-list-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="python">
                    <div className="relative rounded-lg bg-black/20 p-3">
                      <pre className="overflow-x-auto text-xs">
                        <code>{`# Using requests library
import requests

def list_proofs(limit=10, offset=0, proof_type=None):
    url = f"https://api.zypher.io/v1/proofs?limit={limit}&offset={offset}"
    
    if proof_type:
        url += f"&proofType={proof_type}"
    
    headers = {
        "Authorization": "Bearer YOUR_API_KEY"
    }
    
    response = requests.get(url, headers=headers)
    return response.json()`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() =>
                          handleCopy(
                            `# Using requests library
import requests

def list_proofs(limit=10, offset=0, proof_type=None):
    url = f"https://api.zypher.io/v1/proofs?limit={limit}&offset={offset}"
    
    if proof_type:
        url += f"&proofType={proof_type}"
    
    headers = {
        "Authorization": "Bearer YOUR_API_KEY"
    }
    
    response = requests.get(url, headers=headers)
    return response.json()`,
                            "py-list-example",
                          )
                        }
                      >
                        {copied === "py-list-example" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <h3 className="text-lg font-medium">Revoke Proof</h3>
                  <Badge className="ml-2 bg-red-500/20 text-red-500 hover:bg-red-500/20">DELETE</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Revoke a previously generated proof to invalidate it.</p>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Endpoint</h4>
                <div className="flex items-center rounded-lg bg-black/20 p-3">
                  {/* The proofId variable is undeclared. Please fix the import or declare the variable before using it. */}
                  <code className="flex-1 text-xs">https://api.zypher.io/v1/proofs/{`proofId`}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy("https://api.zypher.io/v1/proofs/{proofId}", "revoke-endpoint")}
                  >
                    {copied === "revoke-endpoint" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="response">
                  <AccordionTrigger className="text-sm font-medium">Response</AccordionTrigger>
                  <AccordionContent>
                    <div className="rounded-lg bg-black/20 p-3">
                      <div className="flex items-start justify-between">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`{
  "status": "success",
  "data": {
    "proofId": "proof_abcdef123456",
    "revoked": true,
    "revokedAt": "2023-04-16T10:25:33Z"
  }
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
              <Code className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">SDK Libraries</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Use our official client libraries to integrate Zypher into your applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-md bg-card/50 p-2">
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs">JavaScript/TypeScript</span>
                </div>
                <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">v1.2.0</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md bg-card/50 p-2">
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Python</span>
                </div>
                <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">v1.1.0</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md bg-card/50 p-2">
                <div className="flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Java</span>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20">Beta</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
              <Server className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Webhooks</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Receive real-time notifications when proofs are generated or verified.
            </p>
            <Button variant="outline" className="w-full">
              Configure Webhooks
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
              <Database className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Rate Limits</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              API rate limits and quotas for different subscription tiers.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Free Tier</span>
                <span className="text-xs font-medium">100 requests/day</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Pro Tier</span>
                <span className="text-xs font-medium">10,000 requests/day</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Enterprise</span>
                <span className="text-xs font-medium">Custom limits</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
