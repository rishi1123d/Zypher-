"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ProofTypeSelector from "@/components/proof-generation/proof-type-selector"
import DataSourceConnector from "@/components/proof-generation/data-source-connector"
import ClaimPreview from "@/components/proof-generation/claim-preview"
import ProofGeneration from "@/components/proof-generation/proof-generation"
import ProofComplete from "@/components/proof-generation/proof-complete"

export default function GeneratePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [proofType, setProofType] = useState<string | null>(null)
  const [dataSource, setDataSource] = useState<string | null>(null)
  const [claim, setClaim] = useState<string | null>(null)
  const [proofStatus, setProofStatus] = useState<"idle" | "generating" | "complete" | "error">("idle")
  const [proof, setProof] = useState<any>(null)

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }

    // Simulate proof generation in step 4
    if (currentStep === 4) {
      setProofStatus("generating")
      setTimeout(() => {
        setProofStatus("complete")
        setProof({
          id: `proof-${Date.now()}`,
          type: proofType,
          claim: claim,
          timestamp: new Date().toISOString(),
          hash: `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`,
          verified: true,
          circuit: "groth16",
        })
      }, 3000)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSelectProofType = (type: string) => {
    setProofType(type)

    // Set default claims based on proof type
    switch (type) {
      case "income":
        setClaim("I earn more than $50,000 annually")
        break
      case "identity":
        setClaim("I am over 18 years old")
        break
      case "age":
        setClaim("I am over 21 years old")
        break
      case "credit":
        setClaim("My credit score is above 700")
        break
      default:
        setClaim(null)
    }
  }

  const handleSelectDataSource = (source: string) => {
    setDataSource(source)
  }

  const handleUpdateClaim = (newClaim: string) => {
    setClaim(newClaim)
  }

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">1</div>
        )
      case 2:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">2</div>
        )
      case 3:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">3</div>
        )
      case 4:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">4</div>
        )
      case 5:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">✓</div>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Generate Zero-Knowledge Proof</h1>
          <p className="mt-2 text-muted-foreground">
            Create a cryptographic proof to verify your information without revealing sensitive data.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getStepIcon(1)}
              <span className={currentStep >= 1 ? "font-medium" : "text-muted-foreground"}>Select Proof Type</span>
            </div>
            <div className="h-px flex-1 bg-border mx-4"></div>
            <div className="flex items-center space-x-2">
              {getStepIcon(2)}
              <span className={currentStep >= 2 ? "font-medium" : "text-muted-foreground"}>Connect Data</span>
            </div>
            <div className="h-px flex-1 bg-border mx-4"></div>
            <div className="flex items-center space-x-2">
              {getStepIcon(3)}
              <span className={currentStep >= 3 ? "font-medium" : "text-muted-foreground"}>Preview Claim</span>
            </div>
            <div className="h-px flex-1 bg-border mx-4"></div>
            <div className="flex items-center space-x-2">
              {getStepIcon(4)}
              <span className={currentStep >= 4 ? "font-medium" : "text-muted-foreground"}>Generate</span>
            </div>
          </div>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            {currentStep === 1 && <ProofTypeSelector selectedType={proofType} onSelectType={handleSelectProofType} />}

            {currentStep === 2 && (
              <DataSourceConnector
                proofType={proofType || ""}
                selectedSource={dataSource}
                onSelectSource={handleSelectDataSource}
              />
            )}

            {currentStep === 3 && (
              <ClaimPreview proofType={proofType || ""} claim={claim || ""} onUpdateClaim={handleUpdateClaim} />
            )}

            {currentStep === 4 && (
              <ProofGeneration
                proofType={proofType || ""}
                dataSource={dataSource || ""}
                claim={claim || ""}
                status={proofStatus}
              />
            )}

            {currentStep === 5 && proof && <ProofComplete proof={proof} />}
          </CardContent>

          <CardFooter className="flex justify-between border-t border-border/50 p-6">
            <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1 || currentStep === 5}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>

            <Button
              onClick={handleNextStep}
              disabled={
                (currentStep === 1 && !proofType) ||
                (currentStep === 2 && !dataSource) ||
                (currentStep === 3 && !claim) ||
                (currentStep === 4 && proofStatus !== "complete") ||
                currentStep === 5
              }
              className={currentStep < 5 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
            >
              {currentStep < 4 ? (
                <>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : currentStep === 4 ? (
                <>
                  Complete <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Done"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
