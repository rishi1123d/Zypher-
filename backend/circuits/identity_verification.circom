pragma circom 2.0.0;

template IdentityVerification() {
    signal input documentValid;
    signal output verified;

    // User must present a valid ID (documentValid = 1)
    verified <== documentValid == 1;
}

component main = IdentityVerification();