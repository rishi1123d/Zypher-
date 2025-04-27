import axios from "axios";

export async function generateProofViaRender(claimType: string, userInput: any) {
  const response = await axios.post(process.env.RENDER_API_URL + "/generate", {
    claimType,
    userInput,
  });

  return {
    proof: response.data.proof,
    publicSignals: response.data.publicSignals,
  };
}