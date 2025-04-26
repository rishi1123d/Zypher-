"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, Calendar, Database, CreditCard } from "lucide-react"

interface ProofTypeSelectorProps {
  selectedType: string | null
  onSelectType: (type: string) => void
}

export default function ProofTypeSelector({ selectedType, onSelectType }: ProofTypeSelectorProps) {
  const proofTypes = [
    {
      id: "income",
      name: "Income Verification",
      description: "Prove your income meets certain thresholds without revealing exact amounts",
      icon: <Database className="h-6 w-6 text-blue-500" />,
    },
    {
      id: "identity",
      name: "Identity Verification",
      description: "Verify your identity without sharing personal documents",
      icon: <UserCheck className="h-6 w-6 text-purple-500" />,
    },
    {
      id: "age",
      name: "Age Verification",
      description: "Prove you're above a certain age without revealing your birthdate",
      icon: <Calendar className="h-6 w-6 text-cyan-500" />,
    },
    {
      id: "credit",
      name: "Credit Score Verification",
      description: "Verify your credit score meets requirements without revealing the exact score",
      icon: <CreditCard className="h-6 w-6 text-emerald-500" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Step 1: Select what to prove</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose the type of information you want to verify without revealing.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {proofTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer border-2 transition-all ${
              selectedType === type.id
                ? "border-blue-500 bg-blue-500/10"
                : "border-border/50 bg-card/50 hover:border-blue-500/50"
            }`}
            onClick={() => onSelectType(type.id)}
          >
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card/50">{type.icon}</div>
              <h3 className="mb-2 text-lg font-medium">{type.name}</h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
