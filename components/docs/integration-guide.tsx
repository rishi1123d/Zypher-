"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, ExternalLink, FileText, Code, Server, Database } from "lucide-react"
import {
  Steps,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepContent,
  StepTitle,
  StepDescription,
} from "@/components/ui/steps"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function IntegrationGuide() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Integration Guides</h2>
        <p className="text-muted-foreground">
          Step-by-step guides for integrating Zypher with various platforms and services.
        </p>
      </div>

      <div className="rounded-lg border border-border/50 bg-card/50 p-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Documentation</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Comprehensive guides and API reference for all Zypher services.
            </p>
            <Button variant="outline" size="sm" className="mt-auto">
              View Docs <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
              <Code className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Sample Code</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Ready-to-use code examples for common integration scenarios.
            </p>
            <Button variant="outline" size="sm" className="mt-auto">
              GitHub Repo <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20">
              <Server className="h-8 w-8 text-cyan-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Developer Support</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get help from our engineering team for your integration.
            </p>
            <Button variant="outline" size="sm" className="mt-auto">
              Contact Support <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="financial" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="financial">Financial Institutions</TabsTrigger>
          <TabsTrigger value="defi">DeFi Protocols</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment Platforms</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium">Financial Institution Integration</h3>
                <p className="mt-2 text-muted-foreground">
                  Integrate Zypher's zero-knowledge proofs into your financial services for secure KYC and income
                  verification.
                </p>
              </div>

              <div className="mb-6 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                    <Database className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Integration Benefits</h4>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Reduce fraud risk with cryptographic verification</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Minimize PII data storage and associated compliance risks</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Streamline KYC and income verification processes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Enhance customer privacy while meeting regulatory requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Steps>
                <Step>
                  <StepIndicator>
                    <StepNumber>1</StepNumber>
                  </StepIndicator>
                  <StepSeparator />
                  <StepContent>
                    <StepTitle>Set Up API Access</StepTitle>
                    <StepDescription>
                      Register for an API key in the Zypher developer portal and configure authentication.
                    </StepDescription>

                    <Accordion type="single" collapsible className="mt-4 w-full">
                      <AccordionItem value="code-example-1">
                        <AccordionTrigger className="text-sm">View Code Example</AccordionTrigger>
                        <AccordionContent>
                          <div className="relative rounded-lg bg-black/20 p-3">
                            <pre className="overflow-x-auto text-xs">
                              <code>{`// Example API key configuration
const zypher = new ZypherClient({
  apiKey: process.env.ZYPHER_API_KEY,
  environment: 'production'
});`}</code>
                            </pre>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-2"
                              onClick={() =>
                                handleCopy(
                                  `// Example API key configuration
const zypher = new ZypherClient({
  apiKey: process.env.ZYPHER_API_KEY,
  environment: 'production'
});`,
                                  "api-config",
                                )
                              }
                            >
                              {copied === "api-config" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">Authentication</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/20">API Keys</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/20">Security</Badge>
                    </div>
                  </StepContent>
                </Step>

                <Step>
                  <StepIndicator>
                    <StepNumber>2</StepNumber>
                  </StepIndicator>
                  <StepSeparator />
                  <StepContent>
                    <StepTitle>Implement Verification Flow</StepTitle>
                    <StepDescription>
                      Add the verification flow to your KYC or loan application process.
                    </StepDescription>

                    <Accordion type="single" collapsible className="mt-4 w-full">
                      <AccordionItem value="code-example-2">
                        <AccordionTrigger className="text-sm">View Code Example</AccordionTrigger>
                        <AccordionContent>
                          <div className="relative rounded-lg bg-black/20 p-3">
                            <pre className="overflow-x-auto text-xs">
                              <code>{`// Example verification flow
async function verifyIncome(proofId) {
  try {
    const result = await zypher.proofs.verify({
      proofId: proofId
    });
    
    if (result.data.verified) {
      // Proof is valid, proceed with application
      return {
        success: true,
        claim: result.data.claim
      };
    } else {
      // Proof verification failed
      return {
        success: false,
        error: 'Income verification failed'
      };
    }
  } catch (error) {
    console.error('Verification error:', error);
    return {
      success: false,
      error: 'Verification service error'
    };
  }
}`}</code>
                            </pre>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-2"
                              onClick={() =>
                                handleCopy(
                                  `// Example verification flow
async function verifyIncome(proofId) {
  try {
    const result = await zypher.proofs.verify({
      proofId: proofId
    });
    
    if (result.data.verified) {
      // Proof is valid, proceed with application
      return {
        success: true,
        claim: result.data.claim
      };
    } else {
      // Proof verification failed
      return {
        success: false,
        error: 'Income verification failed'
      };
    }
  } catch (error) {
    console.error('Verification error:', error);
    return {
      success: false,
      error: 'Verification service error'
    };
  }
}`,
                                  "verify-flow",
                                )
                              }
                            >
                              {copied === "verify-flow" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Implementation Notes</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                        <li>Add verification as a step in your existing application flow</li>
                        <li>Provide clear UI for users to understand the privacy benefits</li>
                        <li>Handle verification failures gracefully with clear error messages</li>
                        <li>Consider implementing a fallback to traditional verification if needed</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">Verification</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/20">Error Handling</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/20">UX</Badge>
                    </div>
                  </StepContent>
                </Step>

                <Step>
                  <StepIndicator>
                    <StepNumber>3</StepNumber>
                  </StepIndicator>
                  <StepSeparator />
                  <StepContent>
                    <StepTitle>Integrate with Existing Systems</StepTitle>
                    <StepDescription>
                      Connect Zypher verification with your existing KYC and compliance systems.
                    </StepDescription>

                    <Accordion type="single" collapsible className="mt-4 w-full">
                      <AccordionItem value="code-example-3">
                        <AccordionTrigger className="text-sm">View Code Example</AccordionTrigger>
                        <AccordionContent>
                          <div className="relative rounded-lg bg-black/20 p-3">
                            <pre className="overflow-x-auto text-xs">
                              <code>{`// Example integration with existing KYC system
class KYCService {
  constructor(zypherClient, existingKYCSystem) {
    this.zypher = zypherClient;
    this.kycSystem = existingKYCSystem;
  }
  
  async verifyCustomer(customerId, proofId) {
    // First verify with Zypher
    const zypherResult = await this.zypher.proofs.verify({
      proofId: proofId
    });
    
    if (!zypherResult.data.verified) {
      return { approved: false, reason: 'ZK proof verification failed' };
    }
    
    // Then check existing KYC flags
    const kycStatus = await this.kycSystem.checkCustomer(customerId);
    
    return {
      approved: zypherResult.data.verified && kycStatus.approved,
      zypherVerification: zypherResult.data,
      kycStatus: kycStatus
    };
  }
}`}</code>
                            </pre>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-2"
                              onClick={() =>
                                handleCopy(
                                  `// Example integration with existing KYC system
class KYCService {
  constructor(zypherClient, existingKYCSystem) {
    this.zypher = zypherClient;
    this.kycSystem = existingKYCSystem;
  }
  
  async verifyCustomer(customerId, proofId) {
    // First verify with Zypher
    const zypherResult = await this.zypher.proofs.verify({
      proofId: proofId
    });
    
    if (!zypherResult.data.verified) {
      return { approved: false, reason: 'ZK proof verification failed' };
    }
    
    // Then check existing KYC flags
    const kycStatus = await this.kycSystem.checkCustomer(customerId);
    
    return {
      approved: zypherResult.data.verified && kycStatus.approved,
      zypherVerification: zypherResult.data,
      kycStatus: kycStatus
    };
  }
}`,
                                  "kyc-integration",
                                )
                              }
                            >
                              {copied === "kyc-integration" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Integration Patterns</h4>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div className="rounded-md border border-border/50 bg-card/50 p-2 text-center">
                          <p className="text-xs font-medium">Parallel Verification</p>
                        </div>
                        <div className="rounded-md border border-border/50 bg-card/50 p-2 text-center">
                          <p className="text-xs font-medium">Sequential Verification</p>
                        </div>
                        <div className="rounded-md border border-border/50 bg-card/50 p-2 text-center">
                          <p className="text-xs font-medium">Hybrid Approach</p>
                        </div>
                        <div className="rounded-md border border-border/50 bg-card/50 p-2 text-center">
                          <p className="text-xs font-medium">Fallback Strategy</p>
                        </div>
                      </div>
                    </div>
                  </StepContent>
                </Step>

                <Step>
                  <StepIndicator>
                    <StepNumber>4</StepNumber>
                  </StepIndicator>
                  <StepContent>
                    <StepTitle>Audit and Compliance</StepTitle>
                    <StepDescription>
                      Set up audit logs and compliance reporting for regulatory requirements.
                    </StepDescription>

                    <Accordion type="single" collapsible className="mt-4 w-full">
                      <AccordionItem value="code-example-4">
                        <AccordionTrigger className="text-sm">View Code Example</AccordionTrigger>
                        <AccordionContent>
                          <div className="relative rounded-lg bg-black/20 p-3">
                            <pre className="overflow-x-auto text-xs">
                              <code>{`// Example audit logging
async function logVerificationForAudit(verificationResult, userId) {
  // Store verification metadata in Walrus Protocol
  const auditRecord = {
    userId: userId,
    proofId: verificationResult.data.proofId,
    proofType: verificationResult.data.proofType,
    claim: verificationResult.data.claim,
    verificationTime: verificationResult.data.verificationTime,
    verified: verificationResult.data.verified,
    // Note: We don't store the actual proof or private data
  };
  
  // Anchor to Walrus Protocol for tamper-proof audit trail
  await walrusClient.store({
    namespace: 'verification-audit',
    key: \`verification:\${verificationResult.data.proofId}\`,
    value: JSON.stringify(auditRecord)
  });
  
  // Also log to internal compliance system
  await complianceSystem.logVerification(auditRecord);
}`}</code>
                            </pre>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-2"
                              onClick={() =>
                                handleCopy(
                                  `// Example audit logging
async function logVerificationForAudit(verificationResult, userId) {
  // Store verification metadata in Walrus Protocol
  const auditRecord = {
    userId: userId,
    proofId: verificationResult.data.proofId,
    proofType: verificationResult.data.proofType,
    claim: verificationResult.data.claim,
    verificationTime: verificationResult.data.verificationTime,
    verified: verificationResult.data.verified,
    // Note: We don't store the actual proof or private data
  };
  
  // Anchor to Walrus Protocol for tamper-proof audit trail
  await walrusClient.store({
    namespace: 'verification-audit',
    key: \`verification:\${verificationResult.data.proofId}\`,
    value: JSON.stringify(auditRecord)
  });
  
  // Also log to internal compliance system
  await complianceSystem.logVerification(auditRecord);
}`,
                                  "audit-logging",
                                )
                              }
                            >
                              {copied === "audit-logging" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Compliance Considerations</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                        <li>Maintain detailed audit logs of all verification activities</li>
                        <li>Store only the minimum necessary data for compliance</li>
                        <li>Implement appropriate data retention policies</li>
                        <li>Ensure audit trails are tamper-proof using Walrus Protocol</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">Compliance</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/20">Audit</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/20">Walrus Protocol</Badge>
                    </div>
                  </StepContent>
                </Step>
              </Steps>

              <div className="mt-8 rounded-lg border border-border/50 bg-card/50 p-6">
                <h3 className="mb-4 text-lg font-medium">Case Study: Acme Bank</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Acme Bank implemented Zypher's zero-knowledge proofs for income verification in their mortgage
                  application process, reducing fraud by 87% while improving customer privacy and satisfaction.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-border/50 bg-card/50 p-3 text-center">
                    <p className="text-2xl font-bold text-blue-500">87%</p>
                    <p className="text-xs text-muted-foreground">Reduction in fraud</p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-card/50 p-3 text-center">
                    <p className="text-2xl font-bold text-purple-500">63%</p>
                    <p className="text-xs text-muted-foreground">Faster verification</p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-card/50 p-3 text-center">
                    <p className="text-2xl font-bold text-cyan-500">92%</p>
                    <p className="text-xs text-muted-foreground">Customer satisfaction</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">
                    Read Full Case Study <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="defi" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium">DeFi Protocol Integration</h3>
                <p className="mt-2 text-muted-foreground">
                  Integrate Zypher's zero-knowledge proofs into your DeFi protocol for compliant on-chain verification.
                </p>
              </div>

              <div className="mb-6 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                    <Database className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Integration Benefits</h4>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Enable compliant DeFi with privacy-preserving KYC</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Verify user eligibility without exposing personal data</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>On-chain verification with Solana integration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Balance regulatory compliance with DeFi principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Steps>
                <Step>
                  <StepIndicator>
                    <StepNumber>1</StepNumber>
                  </StepIndicator>
                  <StepSeparator />
                  <StepContent>
                    <StepTitle>Smart Contract Integration</StepTitle>
                    <StepDescription>Implement the Zypher verification contract in your DeFi protocol.</StepDescription>

                    <Accordion type="single" collapsible className="mt-4 w-full">
                      <AccordionItem value="code-example-1">
                        <AccordionTrigger className="text-sm">View Code Example</AccordionTrigger>
                        <AccordionContent>
                          <div className="relative rounded-lg bg-black/20 p-3">
                            <pre className="overflow-x-auto text-xs">
                              <code>{`// Solana program for ZK verification
use anchor_lang::prelude::*;

#[program]
pub mod defi_verifier {
    use super::*;

    pub fn initialize_lending_pool(
        ctx: Context<InitializeLendingPool>,
        require_kyc: bool,
        require_income_verification: bool,
        min_income_threshold: u64,
    ) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.require_kyc = require_kyc;
        pool.require_income_verification = require_income_verification;
        pool.min_income_threshold = min_income_threshold;
        Ok(())
    }

    pub fn request_loan(
        ctx: Context<RequestLoan>,
        amount: u64,
        kyc_proof: Option<Vec<u8>>,
        income_proof: Option<Vec<u8>>,
        public_inputs: Option<Vec<u8>>,
    ) -> Result<()> {
        let pool = &ctx.accounts.pool;
        
        // Verify KYC if required
        if pool.require_kyc {
            if kyc_proof.is_none() {
                return Err(ErrorCode::MissingKycProof.into());
            }
            
            let is_kyc_valid = verify_kyc_proof(
                &kyc_proof.unwrap(),
                &ctx.accounts.user.key(),
            )?;
            
            if !is_kyc_valid {
                return Err(ErrorCode::InvalidKycProof.into());
            }
        }
        
        // Verify income if required
        if pool.require_income_verification {
            if income_proof.is_none() || public_inputs.is_none() {
                return Err(ErrorCode::MissingIncomeProof.into());
            }
            
            let is_income_valid = verify_income_proof(
                &income_proof.unwrap(),
                &public_inputs.unwrap(),
                pool.min_income_threshold,
            )?;
            
            if !is_income_valid {
                return Err(ErrorCode::InvalidIncomeProof.into());
            }
        }
        
        // Process loan...
        
        Ok(())
    }
}`}</code>
                            </pre>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-2"
                              onClick={() =>
                                handleCopy(
                                  `// Solana program for ZK verification
use anchor_lang::prelude::*;

#[program]
pub mod defi_verifier {
    use super::*;

    pub fn initialize_lending_pool(
        ctx: Context<InitializeLendingPool>,
        require_kyc: bool,
        require_income_verification: bool,
        min_income_threshold: u64,
    ) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.require_kyc = require_kyc;
        pool.require_income_verification = require_income_verification;
        pool.min_income_threshold = min_income_threshold;
        Ok(())
    }

    pub fn request_loan(
        ctx: Context<RequestLoan>,
        amount: u64,
        kyc_proof: Option<Vec<u8>>,
        income_proof: Option<Vec<u8>>,
        public_inputs: Option<Vec<u8>>,
    ) -> Result<()> {
        let pool = &ctx.accounts.pool;
        
        // Verify KYC if required
        if pool.require_kyc {
            if kyc_proof.is_none() {
                return Err(ErrorCode::MissingKycProof.into());
            }
            
            let is_kyc_valid = verify_kyc_proof(
                &kyc_proof.unwrap(),
                &ctx.accounts.user.key(),
            )?;
            
            if !is_kyc_valid {
                return Err(ErrorCode::InvalidKycProof.into());
            }
        }
        
        // Verify income if required
        if pool.require_income_verification {
            if income_proof.is_none() || public_inputs.is_none() {
                return Err(ErrorCode::MissingIncomeProof.into());
            }
            
            let is_income_valid = verify_income_proof(
                &income_proof.unwrap(),
                &public_inputs.unwrap(),
                pool.min_income_threshold,
            )?;
            
            if !is_income_valid {
                return Err(ErrorCode::InvalidIncomeProof.into());
            }
        }
        
        // Process loan...
        
        Ok(())
    }
}`,
                                  "solana-program",
                                )
                              }
                            >
                              {copied === "solana-program" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">Solana</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/20">Smart Contract</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/20">Anchor</Badge>
                    </div>
                  </StepContent>
                </Step>

                <Step>
                  <StepIndicator>
                    <StepNumber>2</StepNumber>
                  </StepIndicator>
                  <StepSeparator />
                  <StepContent>
                    <StepTitle>Frontend Integration</StepTitle>
                    <StepDescription>
                      Add the Zypher proof generation flow to your DeFi application frontend.
                    </StepDescription>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Implementation Steps</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                        <li>Integrate Zypher's JavaScript SDK into your frontend</li>
                        <li>Add proof generation UI to your application flow</li>
                        <li>Connect with Solana wallet for proof submission</li>
                        <li>Implement error handling and user feedback</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        View Frontend SDK Documentation <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </StepContent>
                </Step>

                <Step>
                  <StepIndicator>
                    <StepNumber>3</StepNumber>
                  </StepIndicator>
                  <StepContent>
                    <StepTitle>Testing and Deployment</StepTitle>
                    <StepDescription>Test the integration and deploy to mainnet.</StepDescription>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Testing Checklist</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                        <li>Test proof generation with various user scenarios</li>
                        <li>Verify on-chain verification works correctly</li>
                        <li>Test error handling and edge cases</li>
                        <li>Perform security audit of the integration</li>
                        <li>Deploy to testnet before mainnet launch</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">Testing</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/20">Security</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/20">Deployment</Badge>
                    </div>
                  </StepContent>
                </Step>
              </Steps>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recruitment" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium">Recruitment Platform Integration</h3>
                <p className="mt-2 text-muted-foreground">
                  Integrate Zypher's zero-knowledge proofs for credential verification in recruitment processes.
                </p>
              </div>

              <div className="mb-6 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20">
                    <Database className="h-5 w-5 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium">Integration Benefits</h4>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Verify education credentials without exposing transcripts</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Confirm employment history while preserving privacy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Reduce credential fraud in hiring processes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-500/20 text-center text-green-500">
                          ✓
                        </div>
                        <span>Streamline background verification workflows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Steps>
                <Step>
                  <StepIndicator>
                    <StepNumber>1</StepNumber>
                  </StepIndicator>
                  <StepSeparator />
                  <StepContent>
                    <StepTitle>API Integration</StepTitle>
                    <StepDescription>Integrate the Zypher API for credential verification.</StepDescription>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Implementation Steps</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                        <li>Set up API authentication with your Zypher account</li>
                        <li>Implement credential verification endpoints</li>
                        <li>Create verification request and response handlers</li>
                        <li>Set up webhook notifications for verification status updates</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        View API Documentation <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </StepContent>
                </Step>

                <Step>
                  <StepIndicator>
                    <StepNumber>2</StepNumber>
                  </StepIndicator>
                  <StepSeparator />
                  <StepContent>
                    <StepTitle>Applicant Flow</StepTitle>
                    <StepDescription>Add credential verification to the applicant submission flow.</StepDescription>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">User Experience Design</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                        <li>Add credential verification option to application form</li>
                        <li>Provide clear explanation of privacy benefits to applicants</li>
                        <li>Design intuitive flow for connecting to credential sources</li>
                        <li>Implement status indicators for verification process</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/20">UX Design</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/20">Frontend</Badge>
                      <Badge className="bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/20">Privacy</Badge>
                    </div>
                  </StepContent>
                </Step>

                <Step>
                  <StepIndicator>
                    <StepNumber>3</StepNumber>
                  </StepIndicator>
                  <StepContent>
                    <StepTitle>Employer Dashboard</StepTitle>
                    <StepDescription>Update the employer dashboard to show verified credentials.</StepDescription>

                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Dashboard Features</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-muted-foreground">
                        <li>Add verification status indicators to applicant profiles</li>
                        <li>Implement filtering by verification status</li>
                        <li>Design detailed verification information views</li>
                        <li>Create reporting tools for verification analytics</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        View Dashboard Examples <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </StepContent>
                </Step>
              </Steps>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="rounded-lg border border-border/50 bg-card/50 p-6">
        <h3 className="mb-4 text-xl font-medium">Need Help with Integration?</h3>
        <p className="mb-6 text-muted-foreground">
          Our team of experts is ready to help you integrate Zypher into your platform. Schedule a consultation to
          discuss your specific requirements and get personalized guidance.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Schedule Consultation</Button>
          <Button variant="outline">Join Developer Community</Button>
        </div>
      </div>
    </div>
  )
}
