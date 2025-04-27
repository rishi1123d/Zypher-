import crypto from "crypto";

export function hashProof(proof: any) {
  return crypto.createHash("sha256").update(JSON.stringify(proof)).digest("hex");
}