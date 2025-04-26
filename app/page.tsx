import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Lock } from "lucide-react"
import HeroAnimation from "@/components/hero-animation"
import FeatureCard from "@/components/feature-card"
import ThreatCard from "@/components/threat-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-background/80 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.1),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.15),transparent_60%)]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                  Document verification is{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    obsolete
                  </span>
                  <br />
                  Prove without revealing.
                </h1>
                <p className="max-w-[600px] text-xl text-muted-foreground">
                  Zypher uses zero-knowledge proofs to verify identity and financial information without exposing
                  sensitive data. Combat AI-generated document fraud with mathematical certainty.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Link href="/generate">
                    Generate Proof <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/verify">Verify Proof</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Key Benefits</h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Zypher transforms identity verification with zero-knowledge cryptography, providing benefits for both
              users and verifiers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="Compliance without risk"
              description="Meet regulatory requirements without storing sensitive documents that could be compromised in a data breach."
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 text-purple-500" />}
              title="User privacy"
              description="Users control what information is shared, proving claims without revealing underlying data."
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-cyan-500" />}
              title="Mathematical trust"
              description="Cryptographic proofs provide mathematical certainty that claims are valid without exposing sensitive information."
            />
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background/80 to-background py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">The Threat of AI-Generated Fraud</h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              AI models can now generate perfect replicas of passports, bank statements, and bills in seconds. Most
              automated verification systems can't tell the difference.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ThreatCard
              title="Compliance Risk"
              description="Banks and fintechs using traditional KYC are exposed to unprecedented fraud risk."
            />
            <ThreatCard
              title="User Privacy"
              description="Current systems store complete copies of sensitive documents. One breach could expose everything."
            />
            <ThreatCard
              title="Trust Gap"
              description="Users have no way to prove document authenticity without exposing all their personal data."
            />
            <ThreatCard
              title="Synthetic Identity"
              description="AI-generated identities with fake documents can bypass traditional verification systems."
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/docs">
                Learn More About ZK Proofs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
