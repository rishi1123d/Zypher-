import axios from "axios";

export async function anchorToWalrus(proofHash: string) {
  const response = await axios.post("https://api.walrus.xyz/anchor", {
    proofHash,
    metadata: {
      app: "Zypher",
      type: "zk-proof",
    }
  }, {
    headers: {
      Authorization: `Bearer ${process.env.WALRUS_API_KEY}`,
    }
  });

  return response.data.anchorId;
}