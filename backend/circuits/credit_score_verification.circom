pragma circom 2.0.0;

template CreditScoreVerification() {
    signal input creditScore;
    signal input minimumScore;
    signal output verified;

    verified <== creditScore >= minimumScore;
}

component main = CreditScoreVerification();