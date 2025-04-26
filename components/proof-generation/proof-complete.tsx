import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, Copy, Share2 } from "lucide-react"
import Link from "next/link"

interface ProofCompleteProps {
  proof: any
}

export default function ProofComplete({ proof }: ProofCompleteProps) {
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Proof Generated Successfully</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Your zero-knowledge proof has been created and is ready to use.
        </p>
      </div>

      <div className="rounded-lg border border-green-500/50 bg-green-500/10 p-6">
        <div className="mb-6 flex items-start space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Proof Verification Complete</h3>
            <p className="text-muted-foreground">
              Your proof has been cryptographically verified and anchored to the blockchain.
            </p>
          </div>
        </div>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="mb-6">
              <h4 className="mb-2 text-sm font-medium">Proof Details</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Proof ID</p>
                  <p className="font-mono text-xs">{proof.id}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="text-sm">{proof.type.charAt(0).toUpperCase() + proof.type.slice(1)} Verification</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Claim</p>
                  <p className="text-sm">{proof.claim}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Generated At</p>
                  <p className="text-sm">{formatDate(proof.timestamp)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Circuit</p>
                  <p className="text-sm">{proof.circuit}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Status</p>
                  <div className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                    <p className="text-sm">Verified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Proof Hash</p>
              <div className="flex items-center space-x-2">
                <code className="flex-1 overflow-hidden overflow-ellipsis rounded bg-background p-2 text-xs">
                  {proof.hash}
                </code>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Share2 className="mr-2 h-4 w-4" />
            Share Proof
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Proof
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-border/50 bg-card/50 p-6">
        <h3 className="mb-4 text-lg font-medium">What's Next?</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">1</div>
            <div>
              <h4 className="font-medium">Share your proof</h4>
              <p className="text-sm text-muted-foreground">
                Send your proof to verifiers who need to confirm your claim.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">2</div>
            <div>
              <h4 className="font-medium">Verify on-chain</h4>
              <p className="text-sm text-muted-foreground">
                Your proof can be verified on-chain by smart contracts or off-chain by applications.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">3</div>
            <div>
              <h4 className="font-medium">Generate more proofs</h4>
              <p className="text-sm text-muted-foreground">
                Create additional proofs for different claims or update existing ones.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button asChild variant="outline" className="w-full">
            <Link href="/generate">Generate Another Proof</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
