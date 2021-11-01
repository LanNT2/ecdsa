const SignatureVerifier = artifacts.require("SignatureVerifier");
const VerifySignature = artifacts.require("VerifySignature");

module.exports = function (deployer) {
  deployer.deploy(SignatureVerifier);
  deployer.deploy(VerifySignature);
};
