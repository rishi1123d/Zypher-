"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BanknoteIcon as Bank, Briefcase, FileText, Lock, CreditCard } from "lucide-react"

interface DataSourceConnectorProps {
  proofType: string
  selectedSource: string | null
  onSelectSource: (source: string) => void
}

export default function DataSourceConnector({ proofType, selectedSource, onSelectSource }: DataSourceConnectorProps) {
  const [isConnecting, setIsConnecting] = useState(false)

  const getDataSources = () => {
    switch (proofType) {
      case "income":
        return [
          {
            id: "bank",
            name: "Bank Account",
            description: "Connect your bank account to verify income from deposits",
            icon: <Bank className="h-6 w-6 text-blue-500" />,
          },
          {
            id: "payroll",
            name: "Payroll Provider",
            description: "Connect to your employer's payroll system",
            icon: <Briefcase className="h-6 w-6 text-purple-500" />,
          },
          {
            id: "tax",
            name: "Tax Documents",
            description: "Upload tax returns or W-2 forms",
            icon: <FileText className="h-6 w-6 text-emerald-500" />,
          },
        ]
      case "identity":
      case "age":
        return [
          {
            id: "id",
            name: "Government ID",
            description: "Connect to a government ID verification service",
            icon: <FileText className="h-6 w-6 text-blue-500" />,
          },
          {
            id: "passport",
            name: "Passport",
            description: "Verify using passport data",
            icon: <FileText className="h-6 w-6 text-purple-500" />,
          },
        ]
      case "credit":
        return [
          {
            id: "credit-bureau",
            name: "Credit Bureau",
            description: "Connect to a credit reporting agency",
            icon: <CreditCard className="h-6 w-6 text-blue-500" />,
          },
          {
            id: "bank",
            name: "Bank Account",
            description: "Use your banking history to verify credit worthiness",
            icon: <Bank className="h-6 w-6 text-purple-500" />,
          },
        ]
      default:
        return []
    }
  }

  const handleConnect = (sourceId: string) => {
    setIsConnecting(true)

    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false)
      onSelectSource(sourceId)
    }, 1500)
  }

  const dataSources = getDataSources()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Step 2: Connect data source</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Connect to a trusted data source to verify your information.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {dataSources.map((source) => (
          <Card
            key={source.id}
            className={`cursor-pointer border-2 transition-all ${
              selectedSource === source.id
                ? "border-blue-500 bg-blue-500/10"
                : "border-border/50 bg-card/50 hover:border-blue-500/50"
            }`}
            onClick={() => !selectedSource && handleConnect(source.id)}
          >
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card/50">
                {source.icon}
              </div>
              <h3 className="mb-2 text-lg font-medium">{source.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{source.description}</p>

              {selectedSource === source.id ? (
                <div className="flex items-center text-sm text-green-500">
                  <Lock className="mr-1 h-4 w-4" />
                  Connected securely
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled={isConnecting}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleConnect(source.id)
                  }}
                >
                  {isConnecting ? "Connecting..." : "Connect"}
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedSource && (
        <div className="mt-6 rounded-lg border border-border/50 bg-card/50 p-4">
          <div className="flex items-start">
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
              <Lock className="h-4 w-4 text-blue-500" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Secure Connection</h4>
              <p className="text-xs text-muted-foreground">
                Your data is encrypted and never stored. Only the mathematical proof is generated.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
