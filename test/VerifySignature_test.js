const VerifySignature = artifacts.require("VerifySignature");

contract("VerifySignature", async accounts =>{
    it("Test signed message and recover holder address", async function(){
        const rawMessage = "I love D8";
        const signatureVerifier = await VerifySignature.deployed();
        let hashMessage = await signatureVerifier.getMessageHash(rawMessage);
        console.log("hashMessage: "+hashMessage);

        let ethSignedMessageHash = await signatureVerifier.getEthSignedMessageHash(hashMessage);
        console.log("hashEthMessage: "+ ethSignedMessageHash);
       var signature = await web3.eth.accounts.sign(rawMessage,'1955fb6ad56fd0b2668664e1800e6888d3d69e640966cf777947e1ab9e3667e3');
       console.log("Signature: "+ signature.signature);

      var author = await web3.eth.accounts.recover(signature);

       assert.equal(author,'0xa9081632DFd8D492AD5E9aA3859637C5302b3624');

    });
});
