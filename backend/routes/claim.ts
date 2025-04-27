import express from "express";
import { generateProofViaRender } from "../services/proofService";
import { saveProof } from "../services/proofStore";
import { anchorToWalrus } from "../services/walrusService";
import { hashProof } from "../lib/crypto";

const router = express.Router();

router.post("/claim", async (req, res) => {
  const { userId, claimType, dataSource, userInput } = req.body;

  try {
    const proofResult = await generateProofViaRender(claimType, userInput);

    const proofHash = hashProof(proofResult.proof);
    const walrusAnchorId = await anchorToWalrus(proofHash);

    await saveProof({
      userId,
      proofType: claimType,
      dataSource,
      inputData: userInput,
      proof: proofResult.proof,
      publicSignals: proofResult.publicSignals,
      walrusAnchorHash: walrusAnchorId,
    });

    res.status(200).json({
      message: "Proof generated and anchored successfully",
      walrusAnchorId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Proof generation failed" });
  }
});

export default router;