import ProtectedRoute from "@/components/protected-route"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Your Proofs</h2>
            <p className="text-muted-foreground mb-4">
              You haven't generated any ZK proofs yet. Go to the Generate Proof page to create your first proof.
            </p>
            <div className="flex justify-end">
              <a 
                href="/generate"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary hover:bg-primary/90 text-primary-foreground h-10 py-2 px-4"
              >
                Generate Proof
              </a>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Connected Accounts</h2>
            <p className="text-muted-foreground">
              Manage your connected wallets and authentication methods.
            </p>
            <div className="mt-4 py-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Sign in methods will appear here once you connect them.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
} 