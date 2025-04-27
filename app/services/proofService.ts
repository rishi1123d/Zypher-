import axios from "axios";

export async function generateProof({ userId, claimType, dataSource, userInput }: any) {
  const response = await axios.post("/api/claim", {
    userId,
    claimType,
    dataSource,
    userInput,
  });
  return response.data;
}