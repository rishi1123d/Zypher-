"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Code, Play, Check, Copy, Info, AlertTriangle, Server } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function CircuitExplorer() {
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [incomeValue, setIncomeValue] = useState(85000)
  const [threshold, setThreshold] = useState(50000)
  const [age, setAge] = useState(25)
  const [ageThreshold, setAgeThreshold] = useState(21)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleRunCircuit = (circuitType: string) => {
    setIsRunning(true)
    setOutput(null)

    // Simulate circuit execution
    setTimeout(() => {
      setIsRunning(false)

      if (circuitType === "income") {
        const verified = incomeValue >= threshold ? 1 : 0
        setOutput(
          JSON.stringify(
            {
              proof: {
                pi_a: [
                  "12794267630795334355528807682956673209453752566856901207050103158743911818844",
                  "5780183152290389688081596333994068329244948389212887943235722283841986931986",
                  "1",
                ],
                pi_b: [
                  [
                    "21469570648165240285407171953282571352290157844871911899625353906248666651417",
                    "2559534635723336376317510502066454773039643398156334391088664365248050432952",
                  ],
                  [
                    "1626188646183620463580428883138641279699714089202736127875036488834938175361",
                    "5356262877306626055623999608562613679157995321003953536342337473902825981360",
                  ],
                  ["1", "0"],
                ],
                pi_c: [
                  "18861383574484543564019727832897053329440931444635857392024883376950374859456",
                  "2246551052923861255360195525226586521303698084170055898990140652571667631279",
                  "1",
                ],
                protocol: "groth16",
                curve: "bn128",
              },
              publicSignals: [verified.toString(), threshold.toString(), incomeValue.toString()],
            },
            null,
            2,
          ),
        )
      } else if (circuitType === "age") {
        const verified = age >= ageThreshold ? 1 : 0
        setOutput(
          JSON.stringify(
            {
              proof: {
                pi_a: [
                  "8794267630795334355528807682956673209453752566856901207050103158743911818844",
                  "3780183152290389688081596333994068329244948389212887943235722283841986931986",
                  "1",
                ],
                pi_b: [
                  [
                    "11469570648165240285407171953282571352290157844871911899625353906248666651417",
                    "1559534635723336376317510502066454773039643398156334391088664365248050432952",
                  ],
                  [
                    "626188646183620463580428883138641279699714089202736127875036488834938175361",
                    "4356262877306626055623999608562613679157995321003953536342337473902825981360",
                  ],
                  ["1", "0"],
                ],
                pi_c: [
                  "8861383574484543564019727832897053329440931444635857392024883376950374859456",
                  "1246551052923861255360195525226586521303698084170055898990140652571667631279",
                  "1",
                ],
                protocol: "groth16",
                curve: "bn128",
              },
              publicSignals: [verified.toString(), ageThreshold.toString(), age.toString()],
            },
            null,
            2,
          ),
        )
      }
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Zero-Knowledge Circuit Explorer</h2>
        <p className="text-muted-foreground">
          Explore and understand the zero-knowledge circuits that power Zypher's verification system.
        </p>
      </div>

      <div className="rounded-lg border border-border/50 bg-card/50 p-6">
        <div className="flex items-start space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
            <Info className="h-5 w-5 text-purple-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">What are Zero-Knowledge Circuits?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Zero-knowledge circuits are mathematical constructs that enable proving a statement is true without
              revealing the underlying data. In Zypher, these circuits are used to verify claims like "income exceeds
              $50,000" without revealing the actual income amount.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h4 className="mb-2 text-sm font-medium">Private Inputs</h4>
                <p className="text-xs text-muted-foreground">
                  Data that remains hidden (e.g., your actual income amount)
                </p>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h4 className="mb-2 text-sm font-medium">Public Inputs</h4>
                <p className="text-xs text-muted-foreground">Data that is shared (e.g., the threshold amount)</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h4 className="mb-2 text-sm font-medium">Circuit Logic</h4>
                <p className="text-xs text-muted-foreground">Mathematical operations that process the inputs</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h4 className="mb-2 text-sm font-medium">Proof Output</h4>
                <p className="text-xs text-muted-foreground">
                  Cryptographic proof that can be verified without seeing private inputs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="income" className="space-y-6">
        <TabsList>
          <TabsTrigger value="income">Income Verification</TabsTrigger>
          <TabsTrigger value="identity">Identity Verification</TabsTrigger>
          <TabsTrigger value="age">Age Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="income" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-medium">Income Verification Circuit</h3>
                </div>
                <Button
                  onClick={() => handleRunCircuit("income")}
                  disabled={isRunning}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {isRunning ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
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
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Run Circuit
                    </>
                  )}
                </Button>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium">Circuit Description</h4>
                  <p className="text-sm text-muted-foreground">
                    This circuit verifies that a user's income exceeds a specified threshold without revealing the
                    actual income amount. It takes the user's actual income as a private input and the threshold as a
                    public input.
                  </p>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="circuit-code">
                    <AccordionTrigger className="text-sm font-medium">Circuit Code (Circom)</AccordionTrigger>
                    <AccordionContent>
                      <div className="relative rounded-lg bg-black/20 p-4">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`pragma circom 2.0.0;

// Income verification circuit
template IncomeVerification() {
    // Private input: actual income amount
    signal private input actualIncome;
    
    // Public input: threshold to compare against
    signal input threshold;
    
    // Public output: 1 if income >= threshold, 0 otherwise
    signal output verified;
    
    // Ensure actualIncome is non-negative
    signal incomeIsPositive;
    incomeIsPositive <== actualIncome >= 0;
    
    // Check if income exceeds threshold
    signal comparison;
    comparison <== actualIncome >= threshold;
    
    // Output verification result
    verified <== comparison * incomeIsPositive;
}

component main = IncomeVerification();`}</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() =>
                            handleCopy(
                              `pragma circom 2.0.0;

// Income verification circuit
template IncomeVerification() {
    // Private input: actual income amount
    signal private input actualIncome;
    
    // Public input: threshold;
    
    // Public output: 1 if income >= threshold, 0 otherwise
    signal output verified;
    
    // Ensure actualIncome is non-negative
    signal incomeIsPositive;
    incomeIsPositive <== actualIncome >= 0;
    
    // Check if income exceeds threshold
    signal comparison;
    comparison <== actualIncome >= threshold;
    
    // Output verification result
    verified <== comparison * incomeIsPositive;
}

component main = IncomeVerification();`,
                              "income-circuit",
                            )
                          }
                        >
                          {copied === "income-circuit" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Interactive Demo</h4>
                <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                  <div className="mb-6 space-y-4">
                    <div>
                      <Label className="mb-2 block">Your Actual Income (Private Input)</Label>
                      <div className="flex items-center space-x-4">
                        <Slider
                          value={[incomeValue]}
                          min={0}
                          max={200000}
                          step={1000}
                          onValueChange={(value) => setIncomeValue(value[0])}
                          className="flex-1"
                        />
                        <div className="w-24">
                          <Input
                            type="number"
                            value={incomeValue}
                            onChange={(e) => setIncomeValue(Number(e.target.value))}
                            className="h-8"
                          />
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        This value remains private and is never revealed
                      </p>
                    </div>

                    <div>
                      <Label className="mb-2 block">Income Threshold (Public Input)</Label>
                      <div className="flex items-center space-x-4">
                        <Slider
                          value={[threshold]}
                          min={0}
                          max={200000}
                          step={5000}
                          onValueChange={(value) => setThreshold(value[0])}
                          className="flex-1"
                        />
                        <div className="w-24">
                          <Input
                            type="number"
                            value={threshold}
                            onChange={(e) => setThreshold(Number(e.target.value))}
                            className="h-8"
                          />
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        This value is public and known to the verifier
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                    <h5 className="mb-2 text-sm font-medium">Expected Result</h5>
                    <div className="flex items-center space-x-2">
                      {incomeValue >= threshold ? (
                        <>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                            <Check className="h-3 w-3 text-green-500" />
                          </div>
                          <p className="text-sm">Income exceeds threshold (${threshold.toLocaleString()})</p>
                        </>
                      ) : (
                        <>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20">
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                          </div>
                          <p className="text-sm">Income does not exceed threshold (${threshold.toLocaleString()})</p>
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      The verifier will only learn whether the income exceeds the threshold, not the actual income
                      amount.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-medium">Circuit Execution</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-medium">Inputs</p>
                    <pre className="overflow-x-auto rounded-lg bg-black/20 p-4 text-xs">
                      <code>{`{
  "privateInputs": {
    "actualIncome": ${incomeValue}
  },
  "publicInputs": {
    "threshold": ${threshold}
  }
}`}</code>
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium">Output</p>
                    {output ? (
                      <pre className="overflow-x-auto rounded-lg bg-black/20 p-4 text-xs">
                        <code>{output}</code>
                      </pre>
                    ) : (
                      <div className="flex h-[200px] items-center justify-center rounded-lg bg-black/20 p-4">
                        <p className="text-xs text-muted-foreground">
                          {isRunning ? "Running circuit..." : "Run the circuit to see output"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-blue-500" />
                  <h3 className="text-lg font-medium">Verification</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  The verification process checks the proof without accessing the private inputs.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-black/20 p-4 text-xs">
                  <code>{`// Verification code
const { verifyProof } = require("snarkjs");

async function verifyIncomeProof(proof, publicSignals) {
  const vKey = await readVerificationKey();
  return await verifyProof(vKey, proof, publicSignals);
}

// Only needs public signals: [verified, threshold]
// Does NOT need or see the actual income`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-medium">On-Chain Integration</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  How the proof verification works on-chain with Solana.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-black/20 p-4 text-xs">
                  <code>{`// Solana program for verification
use anchor_lang::prelude::*;

#[program]
pub mod income_verifier {
    use super::*;

    pub fn verify_income(
        ctx: Context<VerifyIncome>,
        proof: Vec<u8>,
        public_inputs: Vec<u8>,
    ) -> Result<()> {
        // Verify the zero-knowledge proof
        let is_valid = verify_groth16_proof(&proof, &public_inputs)?;
        
        if !is_valid {
            return Err(ErrorCode::InvalidProof.into());
        }
        
        // If we reach here, the proof is valid
        // We can now use the verified claim (e.g., income > threshold)
        // without knowing the actual income amount
        
        Ok(())
    }
}

#[derive(Accounts)]
pub struct VerifyIncome<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System],
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="age" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-medium">Age Verification Circuit</h3>
                </div>
                <Button
                  onClick={() => handleRunCircuit("age")}
                  disabled={isRunning}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {isRunning ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
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
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Run Circuit
                    </>
                  )}
                </Button>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium">Circuit Description</h4>
                  <p className="text-sm text-muted-foreground">
                    This circuit verifies a user is above a certain age without revealing their birthdate. It takes the
                    user's actual age as a private input and the minimum age threshold as a public input.
                  </p>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="circuit-code">
                    <AccordionTrigger className="text-sm font-medium">Circuit Code (Circom)</AccordionTrigger>
                    <AccordionContent>
                      <div className="relative rounded-lg bg-black/20 p-4">
                        <pre className="overflow-x-auto text-xs">
                          <code>{`pragma circom 2.0.0;

// Age verification circuit
template AgeVerification() {
    // Private input: actual age
    signal private input actualAge;
    
    // Public input: minimum age requirement
    signal input minAge;
    
    // Public output: 1 if age >= minAge, 0 otherwise
    signal output verified;
    
    // Ensure actualAge is non-negative
    signal ageIsPositive;
    ageIsPositive <== actualAge >= 0;
    
    // Check if age meets minimum requirement
    signal comparison;
    comparison <== actualAge >= minAge;
    
    // Output verification result
    verified <== comparison * ageIsPositive;
}

component main = AgeVerification();`}</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() =>
                            handleCopy(
                              `pragma circom 2.0.0;

// Age verification circuit
template AgeVerification() {
    // Private input: actual age
    signal private input actualAge;
    
    // Public input: minimum age requirement
    signal input minAge;
    
    // Public output: 1 if age >= minAge, 0 otherwise
    signal output verified;
    
    // Ensure actualAge is non-negative
    signal ageIsPositive;
    ageIsPositive <== actualAge >= 0;
    
    // Check if age meets minimum requirement
    signal comparison;
    comparison <== actualAge >= minAge;
    
    // Output verification result
    verified <== comparison * ageIsPositive;
}

component main = AgeVerification();`,
                              "age-circuit",
                            )
                          }
                        >
                          {copied === "age-circuit" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">Interactive Demo</h4>
                <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                  <div className="mb-6 space-y-4">
                    <div>
                      <Label className="mb-2 block">Your Actual Age (Private Input)</Label>
                      <div className="flex items-center space-x-4">
                        <Slider
                          value={[age]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => setAge(value[0])}
                          className="flex-1"
                        />
                        <div className="w-24">
                          <Input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                            className="h-8"
                          />
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        This value remains private and is never revealed
                      </p>
                    </div>

                    <div>
                      <Label className="mb-2 block">Age Threshold (Public Input)</Label>
                      <div className="flex items-center space-x-4">
                        <Slider
                          value={[ageThreshold]}
                          min={0}
                          max={100}
                          step={1}
                          onValueChange={(value) => setAgeThreshold(value[0])}
                          className="flex-1"
                        />
                        <div className="w-24">
                          <Input
                            type="number"
                            value={ageThreshold}
                            onChange={(e) => setAgeThreshold(Number(e.target.value))}
                            className="h-8"
                          />
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        This value is public and known to the verifier
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                    <h5 className="mb-2 text-sm font-medium">Expected Result</h5>
                    <div className="flex items-center space-x-2">
                      {age >= ageThreshold ? (
                        <>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20">
                            <Check className="h-3 w-3 text-green-500" />
                          </div>
                          <p className="text-sm">Age exceeds threshold ({ageThreshold} years)</p>
                        </>
                      ) : (
                        <>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20">
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                          </div>
                          <p className="text-sm">Age does not exceed threshold ({ageThreshold} years)</p>
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      The verifier will only learn whether the age exceeds the threshold, not the actual age.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-medium">Circuit Execution</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-medium">Inputs</p>
                    <pre className="overflow-x-auto rounded-lg bg-black/20 p-4 text-xs">
                      <code>{`{
  "privateInputs": {
    "actualAge": ${age}
  },
  "publicInputs": {
    "minAge": ${ageThreshold}
  }
}`}</code>
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium">Output</p>
                    {output ? (
                      <pre className="overflow-x-auto rounded-lg bg-black/20 p-4 text-xs">
                        <code>{output}</code>
                      </pre>
                    ) : (
                      <div className="flex h-[200px] items-center justify-center rounded-lg bg-black/20 p-4">
                        <p className="text-xs text-muted-foreground">
                          {isRunning ? "Running circuit..." : "Run the circuit to see output"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="identity" className="space-y-6">
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-medium">Identity Verification Circuit</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                This circuit verifies identity attributes without revealing the actual identity documents.
              </p>

              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium">How It Works</h4>
                <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h5 className="mb-2 text-sm font-medium">Private Inputs</h5>
                      <ul className="ml-4 list-disc space-y-1 text-xs text-muted-foreground">
                        <li>Full name</li>
                        <li>Date of birth</li>
                        <li>Document number</li>
                        <li>Document hash</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="mb-2 text-sm font-medium">Public Inputs</h5>
                      <ul className="ml-4 list-disc space-y-1 text-xs text-muted-foreground">
                        <li>Issuer public key</li>
                        <li>Verification parameters</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-2 text-sm font-medium">Verification Process</h5>
                    <p className="text-xs text-muted-foreground">
                      The circuit verifies the digital signature from the document issuer without revealing the document
                      contents. It can also check additional properties like document expiration without revealing the
                      actual dates.
                    </p>
                  </div>
                </div>
              </div>

              <pre className="overflow-x-auto rounded-lg bg-black/20 p-4 text-xs">
                <code>{`pragma circom 2.0.0;

// Identity verification circuit
template IdentityVerification() {
    // Private inputs: hashed identity document fields
    signal private input idHash;
    signal private input fullName;
    signal private input dateOfBirth;
    signal private input documentNumber;
    
    // Public input: issuer public key
    signal input issuerPubKey;
    
    // Public output: 1 if identity is valid
    signal output verified;
    
    // Verify digital signature from issuer
    // (simplified for demonstration)
    signal signature <== verifySignature(idHash, issuerPubKey);
    
    // Check document hasn't expired
    signal notExpired <== checkNotExpired(dateOfBirth);
    
    // Output verification result
    verified <== signature * notExpired;
}

component main = IdentityVerification();`}</code>
              </pre>

              <div className="mt-6 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20">
                    <Info className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Real-World Applications</h4>
                    <p className="text-xs text-muted-foreground">
                      Identity verification circuits are used for KYC compliance, age verification for regulated
                      services, and credential verification without exposing personal data.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
              <Code className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Circuit Composition</h3>
            <p className="text-sm text-muted-foreground">
              Circuits can be composed together to create complex verification systems that maintain privacy.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
              <Server className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Proof Generation</h3>
            <p className="text-sm text-muted-foreground">
              Proofs are generated using Render Network's distributed GPU infrastructure for optimal performance.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardContent className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
              <Zap className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="mb-2 text-lg font-medium">On-Chain Verification</h3>
            <p className="text-sm text-muted-foreground">
              Proofs can be verified on-chain with Solana for transparent and tamper-proof verification.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
