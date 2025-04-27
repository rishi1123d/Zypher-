use anchor_lang::prelude::*;

declare_id!("YourProgramIdHere...");

#[program]
pub mod zypher_verifier {
    use super::*;

    pub fn submit_proof(ctx: Context<SubmitProof>, proof_hash: [u8; 32]) -> Result<()> {
        let proof_account = &mut ctx.accounts.proof_account;
        proof_account.proof_hash = proof_hash;
        proof_account.submitter = ctx.accounts.submitter.key();
        proof_account.timestamp = Clock::get()?.unix_timestamp;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SubmitProof<'info> {
    #[account(init, payer = submitter, space = 8 + 32 + 32 + 8)]
    pub proof_account: Account<'info, ProofAccount>,
    #[account(mut)]
    pub submitter: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct ProofAccount {
    pub proof_hash: [u8; 32],
    pub submitter: Pubkey,
    pub timestamp: i64,
}