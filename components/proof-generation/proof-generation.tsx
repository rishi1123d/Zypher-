import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Cpu, Server, Shield, CheckCircle } from "lucide-react"

interface ProofGenerationProps {
  proofType: string
  dataSource: string
  claim: string
  status: "idle" | "generating" | "complete" | "error"
}

export default function ProofGeneration({ proofType, dataSource, claim, status }: ProofGenerationProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Step 4: Generate your proof</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Creating a cryptographic zero-knowledge proof of your claim.
        </p>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardContent className="p-6">
          <div className="mb-6 space-y-2">
            <h3 className="text-lg font-medium">Proof Generation</h3>
            <p className="text-sm text-muted-foreground">
              {status === "idle"
                ? "Ready to generate your proof"
                : status === "generating"
                  ? "Generating your zero-knowledge proof..."
                  : status === "complete"
                    ? "Proof generated successfully!"
                    : "Error generating proof"}
            </p>
          </div>

          <div className="mb-8 space-y-6">
            {status === "generating" && (
              <div className="space-y-2">
                <Progress value={65} className="h-2 w-full" />
                <p className="text-center text-xs text-muted-foreground">This may take a few moments</p>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-3">
              <div
                className={`rounded-lg border p-4 ${status === "generating" || status === "complete" ? "border-blue-500/50 bg-blue-500/10" : "border-border/50 bg-card/50"}`}
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                  <Cpu className="h-4 w-4 text-blue-500" />
                </div>
                <h4 className="mb-1 text-sm font-medium">Circuit Compilation</h4>
                <p className="text-xs text-muted-foreground">Preparing the zero-knowledge circuit</p>
                {(status === "generating" || status === "complete") && (
                  <div className="mt-2 text-xs font-medium text-blue-500">
                    <CheckCircle className="mr-1 inline-block h-3 w-3" /> Complete
                  </div>
                )}
              </div>

              <div
                className={`rounded-lg border p-4 ${status === "generating" || status === "complete" ? "border-purple-500/50 bg-purple-500/10" : "border-border/50 bg-card/50"}`}
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                  <Server className="h-4 w-4 text-purple-500" />
                </div>
                <h4 className="mb-1 text-sm font-medium">Proof Computation</h4>
                <p className="text-xs text-muted-foreground">Computing via Render Network</p>
                {status === "generating" ? (
                  <div className="mt-2 text-xs font-medium text-purple-500">
                    <svg className="mr-1 inline-block h-3 w-3 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    In progress
                  </div>
                ) : status === "complete" ? (
                  <div className="mt-2 text-xs font-medium text-purple-500">
                    <CheckCircle className="mr-1 inline-block h-3 w-3" /> Complete
                  </div>
                ) : null}
              </div>

              <div
                className={`rounded-lg border p-4 ${status === "complete" ? "border-green-500/50 bg-green-500/10" : "border-border/50 bg-card/50"}`}
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                  <Shield className="h-4 w-4 text-green-500" />
                </div>
                <h4 className="mb-1 text-sm font-medium">Verification</h4>
                <p className="text-xs text-muted-foreground">Anchoring to Walrus Protocol</p>
                {status === "complete" && (
                  <div className="mt-2 text-xs font-medium text-green-500">
                    <CheckCircle className="mr-1 inline-block h-3 w-3" /> Complete
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/50 p-4">
            <h4 className="mb-2 text-sm font-medium">Proof Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Proof Type</span>
                <span className="text-xs font-medium">
                  {proofType.charAt(0).toUpperCase() + proofType.slice(1)} Verification
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Data Source</span>
                <span className="text-xs font-medium">{dataSource}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Claim</span>
                <span className="text-xs font-medium">{claim}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Circuit Type</span>
                <span className="text-xs font-medium">Groth16</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-muted-foreground">Status</span>
                <span
                  className={`text-xs font-medium ${
                    status === "idle"
                      ? "text-muted-foreground"
                      : status === "generating"
                        ? "text-blue-500"
                        : status === "complete"
                          ? "text-green-500"
                          : "text-red-500"
                  }`}
                >
                  {status === "idle"
                    ? "Ready"
                    : status === "generating"
                      ? "Generating"
                      : status === "complete"
                        ? "Complete"
                        : "Error"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
