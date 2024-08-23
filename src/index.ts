import * as ed from "@noble/ed25519";

async function main() {
    // Generate a random private key
    const privKey = ed.utils.randomPrivateKey();
     console.log(privKey)
    // Encode the message as a Uint8Array
    const message = new TextEncoder().encode("hello world");

    // Generate the corresponding public key
    const pubKey = await ed.getPublicKeyAsync(privKey);
    console.log(pubKey)
    // Sign the message with the private key
    const signature = await ed.signAsync(message, privKey);

    // Verify the signature using the public key
    const isValid = await ed.verifyAsync(signature, message, pubKey);

    // Output the result of the verification
    console.log(isValid); // Should print 'true' if the signature is valid
}

main();
