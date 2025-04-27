pragma circom 2.0.0;

template IncomeVerification() {
    signal input income;
    signal input threshold;
    signal output verified;

    verified <== income >= threshold;
}

component main = IncomeVerification();