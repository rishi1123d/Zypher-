import pool from "../lib/db";

export async function saveProof({ userId, proofType, dataSource, inputData, proof, publicSignals, walrusAnchorHash }: any) {
  const query = `
    INSERT INTO proofs (user_id, proof_type, data_source, input_data, proof, public_signals, walrus_anchor_hash)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id;
  `;
  const values = [userId, proofType, dataSource, inputData, proof, publicSignals, walrusAnchorHash];

  const result = await pool.query(query, values);
  return result.rows[0];
}