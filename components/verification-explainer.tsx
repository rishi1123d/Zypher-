import { Steps } from "@/components/ui/steps"

export default function VerificationExplainer() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">How Zero-Knowledge Proofs Work</h3>
        <p className="text-gray-600">
          Zero-knowledge proofs allow you to prove a statement is true without revealing the underlying data. Here's how
          Zypher's verification process works:
        </p>
      </div>

      <Steps>
        <Steps.Step>
          <Steps.StepIndicator>
            <Steps.StepNumber>1</Steps.StepNumber>
          </Steps.StepIndicator>
          <Steps.StepSeparator />
          <Steps.StepContent>
            <Steps.StepTitle>Create a Claim</Steps.StepTitle>
            <Steps.StepDescription>
              Define what you want to prove (e.g., "I earn over $50k annually") and connect the relevant data source.
            </Steps.StepDescription>
          </Steps.StepContent>
        </Steps.Step>

        <Steps.Step>
          <Steps.StepIndicator>
            <Steps.StepNumber>2</Steps.StepNumber>
          </Steps.StepIndicator>
          <Steps.StepSeparator />
          <Steps.StepContent>
            <Steps.StepTitle>Generate Proof</Steps.StepTitle>
            <Steps.StepDescription>
              Our system creates a cryptographic proof that validates your claim without exposing the underlying data.
            </Steps.StepDescription>
          </Steps.StepContent>
        </Steps.Step>

        <Steps.Step>
          <Steps.StepIndicator>
            <Steps.StepNumber>3</Steps.StepNumber>
          </Steps.StepIndicator>
          <Steps.StepSeparator />
          <Steps.StepContent>
            <Steps.StepTitle>Verify On-Chain</Steps.StepTitle>
            <Steps.StepDescription>
              The proof is verified on-chain, creating a tamper-proof record that can be checked by authorized parties.
            </Steps.StepDescription>
          </Steps.StepContent>
        </Steps.Step>

        <Steps.Step>
          <Steps.StepIndicator>
            <Steps.StepNumber>4</Steps.StepNumber>
          </Steps.StepIndicator>
          <Steps.StepContent>
            <Steps.StepTitle>Share Securely</Steps.StepTitle>
            <Steps.StepDescription>
              Share your verified proof with services that need it, without revealing your sensitive information.
            </Steps.StepDescription>
          </Steps.StepContent>
        </Steps.Step>
      </Steps>

      <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mt-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-primary-800 mb-1">Technical Details</h4>
            <p className="text-sm text-primary-700">
              Zypher uses zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) with the Groth16
              proving system. All proofs are verified on the Solana blockchain for maximum security and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
