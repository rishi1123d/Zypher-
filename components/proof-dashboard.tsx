"use client"

import { useState } from "react"
import ProofRequestForm from "@/components/proof-request-form"
import ProofStatus from "@/components/proof-status"
import VerificationExplainer from "./verification-explainer"
import ProofHistory from "./proof-history"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProofDashboard() {
  const [proofRequest, setProofRequest] = useState("")
  const [proofStatus, setProofStatus] = useState<"idle" | "pending" | "generated" | "failed">("idle")
  const [proof, setProof] = useState<any>(null)

  const handleProofRequested = (request: string) => {
    setProofRequest(request)
    setProofStatus("pending")

    // Simulate proof generation
    setTimeout(() => {
      // Mock proof data
      const mockProof = {
        id: `proof-${Date.now()}`,
        statement: request,
        timestamp: new Date().toISOString(),
        hash: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`,
        verified: true,
        circuit: "groth16",
        publicInputs: {
          merkleRoot: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`,
        },
      }

      setProof(mockProof)
      setProofStatus("generated")
    }, 3000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-4">Generate a New Proof</h2>
          <ProofRequestForm onProofRequested={handleProofRequested} />

          {proofStatus !== "idle" && (
            <ProofStatus
              status={proofStatus}
              proof={proof}
              error={proofStatus === "failed" ? "Failed to generate proof" : undefined}
            />
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Tabs defaultValue="history">
            <div className="border-b border-gray-100">
              <TabsList className="bg-transparent p-0">
                <TabsTrigger
                  value="history"
                  className="py-4 px-6 data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none"
                >
                  Proof History
                </TabsTrigger>
                <TabsTrigger
                  value="how-it-works"
                  className="py-4 px-6 data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:shadow-none rounded-none"
                >
                  How It Works
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="history" className="p-6">
              <ProofHistory />
            </TabsContent>

            <TabsContent value="how-it-works" className="p-6">
              <VerificationExplainer />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
          <h2 className="text-xl font-semibold mb-4">Why Zero-Knowledge?</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Privacy Preserving</h3>
                <p className="text-sm text-gray-600">
                  Prove claims without revealing sensitive data. You control what information is shared.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Mathematically Verified</h3>
                <p className="text-sm text-gray-600">
                  Cryptographic proofs provide mathematical certainty that claims are valid.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">AI-Fraud Resistant</h3>
                <p className="text-sm text-gray-600">
                  Unlike document verification, zero-knowledge proofs can't be faked by AI.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Interoperable</h3>
                <p className="text-sm text-gray-600">
                  Use your proofs across different platforms and services securely.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="font-medium text-gray-900 mb-3">Ready to get started?</h3>
            <button className="w-full button-gradient text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-button hover:shadow-lg flex items-center justify-center transition-all duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
