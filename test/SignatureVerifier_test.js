const SignatureVerifier = artifacts.require("SignatureVerifier");

contract("SignatureVerifier", async accounts =>{
    it("Test signed message and recover holder address", async function(){
        const rawMessage = "I love D8";
        const signatureVerifier = await SignatureVerifier.deployed();
        let hashMessage = await signatureVerifier.getHash(rawMessage);
        console.log("hashMessage: "+hashMessage);

        let hashEthMessage = await signatureVerifier.getEthSignedHash(hashMessage);
        console.log("hashEthMessage: "+hashEthMessage);
        console.log("privateKey: "+ accounts[0].privateKey);
       var signature = await web3.eth.sign(hashEthMessage,accounts[0]);
       console.log("Signature: "+ signature);

       var holder = await signatureVerifier.recover(hashEthMessage,signature);

       console.log("holder"+holder);

    });
});
