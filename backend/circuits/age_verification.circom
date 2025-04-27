pragma circom 2.0.0;

template AgeVerification() {
    signal input age;
    signal input minimumAge;
    signal output verified;

    verified <== age >= minimumAge;
}

component main = AgeVerification();