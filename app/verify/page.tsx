"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle, Clock, AlertTriangle, FileText, ArrowUpDown } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for verification requests
const mockVerifications = [
  {
    id: "ver-1",
    subject: "Income Verification",
    requestor: "Acme Bank",
    timestamp: "2023-04-15T14:32:21Z",
    status: "verified",
    type: "income",
  },
  {
    id: "ver-2",
    subject: "Age Verification",
    requestor: "Legal Services Inc",
    timestamp: "2023-04-10T09:15:43Z",
    status: "pending",
    type: "identity",
  },
  {
    id: "ver-3",
    subject: "Identity Verification",
    requestor: "Rental Agency",
    timestamp: "2023-03-28T16:45:12Z",
    status: "verified",
    type: "identity",
  },
  {
    id: "ver-4",
    subject: "Credit Score Verification",
    requestor: "Auto Finance Co",
    timestamp: "2023-03-15T11:22:09Z",
    status: "rejected",
    type: "credit",
  },
]

export default function VerifyPage() {
  const [verifications, setVerifications] = useState(mockVerifications)
  const [proofId, setProofId] = useState("")
  const [verificationResult, setVerificationResult] = useState<null | {
    valid: boolean
    details: any
  }>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/20">
            <CheckCircle className="mr-1 h-3 w-3" /> Verified
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20">
            <Clock className="mr-1 h-3 w-3" /> Pending
          </Badge>
        )
      case "rejected":
        return (
          <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/20">
            <AlertTriangle className="mr-1 h-3 w-3" /> Rejected
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  const handleVerifyProof = () => {
    // Simulate proof verification
    setTimeout(() => {
      setVerificationResult({
        valid: true,
        details: {
          id: proofId || "proof-123456789",
          type: "income",
          claim: "Income exceeds $50,000 annually",
          timestamp: new Date().toISOString(),
          issuer: "Zypher Protocol",
          verificationTime: new Date().toISOString(),
          cryptographicDetails: {
            circuit: "Groth16",
            publicInputs: {
              threshold: "$50,000",
              merkleRoot: "0x7a9fe92d8c9e8b9e8f7a9f8e7a9f8e7a9f8e7a9f8e7a9f8e7a9f8e7a9f8e7a",
            },
          },
        },
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Verifier Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Verify zero-knowledge proofs and manage verification requests.</p>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:w-auto">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="verify">Verify Proof</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-8">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-500" />
                Recent Verification Requests
              </CardTitle>
              <CardDescription>View and manage verification requests from users and organizations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Subject</TableHead>
                      <TableHead>Requestor</TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          Date
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verifications.map((verification) => (
                      <TableRow key={verification.id}>
                        <TableCell className="font-medium">{verification.subject}</TableCell>
                        <TableCell>{verification.requestor}</TableCell>
                        <TableCell>{formatDate(verification.timestamp)}</TableCell>
                        <TableCell>{getStatusBadge(verification.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-border/50 p-6">
              <Button variant="outline">Export Log</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">View All</Button>
            </CardFooter>
          </Card>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">247</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Verification Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">98.2%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,024</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="verify">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Verify a Proof</CardTitle>
              <CardDescription>Enter a proof ID or upload a proof file to verify its authenticity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter proof ID or hash"
                      value={proofId}
                      onChange={(e) => setProofId(e.target.value)}
                    />
                  </div>
                  <Button onClick={handleVerifyProof} className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <Search className="mr-2 h-4 w-4" />
                    Verify
                  </Button>
                </div>
                <div className="flex items-center justify-center border-2 border-dashed border-border/50 rounded-lg p-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="mb-1 text-sm font-medium">Drop proof file here</h3>
                    <p className="text-xs text-muted-foreground">or click to browse</p>
                  </div>
                </div>
              </div>

              {verificationResult && (
                <div
                  className={`rounded-lg border p-6 ${verificationResult.valid ? "border-green-500/50 bg-green-500/10" : "border-red-500/50 bg-red-500/10"}`}
                >
                  <div className="mb-4 flex items-center">
                    {verificationResult.valid ? (
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    ) : (
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-medium">
                        {verificationResult.valid ? "Valid Proof" : "Invalid Proof"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {verificationResult.valid
                          ? "This proof has been cryptographically verified."
                          : "This proof could not be verified."}
                      </p>
                    </div>
                  </div>

                  {verificationResult.valid && (
                    <div className="mt-6 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Proof Type</p>
                          <p>{verificationResult.details.type}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Claim</p>
                          <p>{verificationResult.details.claim}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Issued At</p>
                          <p>{formatDate(verificationResult.details.timestamp)}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Verified At</p>
                          <p>{formatDate(verificationResult.details.verificationTime)}</p>
                        </div>
                      </div>

                      <div className="rounded border border-border/50 bg-card/50 p-4">
                        <p className="mb-2 text-xs font-medium text-muted-foreground">Cryptographic Details</p>
                        <pre className="overflow-x-auto rounded bg-black/20 p-2 text-xs">
                          {JSON.stringify(verificationResult.details.cryptographicDetails, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
