"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CheckCircle, AlertTriangle } from "lucide-react"

interface ClaimPreviewProps {
  proofType: string
  claim: string
  onUpdateClaim: (claim: string) => void
}

export default function ClaimPreview({ proofType, claim, onUpdateClaim }: ClaimPreviewProps) {
  const [threshold, setThreshold] = useState<number>(
    proofType === "income" ? 50000 : proofType === "age" ? 21 : proofType === "credit" ? 700 : 0,
  )

  const handleThresholdChange = (value: number[]) => {
    const newValue = value[0]
    setThreshold(newValue)

    let newClaim = ""
    switch (proofType) {
      case "income":
        newClaim = `I earn more than $${newValue.toLocaleString()} annually`
        break
      case "age":
        newClaim = `I am over ${newValue} years old`
        break
      case "identity":
        newClaim = "I have a valid government-issued ID"
        break
      case "credit":
        newClaim = `My credit score is above ${newValue}`
        break
      default:
        newClaim = claim
    }

    onUpdateClaim(newClaim)
  }

  const getSliderConfig = () => {
    switch (proofType) {
      case "income":
        return { min: 10000, max: 200000, step: 5000, defaultValue: 50000 }
      case "age":
        return { min: 18, max: 65, step: 1, defaultValue: 21 }
      case "credit":
        return { min: 300, max: 850, step: 10, defaultValue: 700 }
      default:
        return { min: 0, max: 100, step: 1, defaultValue: 50 }
    }
  }

  const sliderConfig = getSliderConfig()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Step 3: Preview your claim</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          This is what will be proven without revealing your actual data.
        </p>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardContent className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-medium">Your Claim</h3>
            <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-500">
              Privacy Preserving
            </div>
          </div>

          <div className="mb-8 rounded-lg border border-border/50 bg-background p-6 text-center">
            <p className="text-xl font-medium">{claim}</p>
          </div>

          {(proofType === "income" || proofType === "age" || proofType === "credit") && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>
                    {proofType === "income"
                      ? "Income Threshold"
                      : proofType === "age"
                        ? "Age Threshold"
                        : "Credit Score Threshold"}
                  </Label>
                  <span className="text-sm font-medium">
                    {proofType === "income" ? `$${threshold.toLocaleString()}` : threshold}
                  </span>
                </div>
                <Slider
                  defaultValue={[sliderConfig.defaultValue]}
                  min={sliderConfig.min}
                  max={sliderConfig.max}
                  step={sliderConfig.step}
                  value={[threshold]}
                  onValueChange={handleThresholdChange}
                  className="py-4"
                />
              </div>

              <div className="rounded-lg border border-border/50 bg-blue-500/10 p-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-blue-500" />
                  <div>
                    <h4 className="text-sm font-medium">How Zero-Knowledge Works</h4>
                    <p className="text-xs text-muted-foreground">
                      {proofType === "income"
                        ? "Your exact income amount remains private. Only the fact that it exceeds the threshold is proven."
                        : proofType === "age"
                          ? "Your exact birthdate remains private. Only the fact that your age exceeds the threshold is proven."
                          : "Your exact credit score remains private. Only the fact that it exceeds the threshold is proven."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
            <div className="flex items-start">
              <AlertTriangle className="mr-2 mt-0.5 h-5 w-5 text-amber-500" />
              <div>
                <h4 className="text-sm font-medium">What's Not Revealed</h4>
                <p className="text-xs text-muted-foreground">
                  {proofType === "income"
                    ? "Your exact salary, pay stubs, bank statements, or tax documents"
                    : proofType === "age"
                      ? "Your exact birthdate, name, address, or ID number"
                      : proofType === "identity"
                        ? "Your name, address, ID number, or photo"
                        : "Your exact credit score, account numbers, or credit history"}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
