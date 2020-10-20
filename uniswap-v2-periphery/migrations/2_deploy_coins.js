const BATToken = artifacts.require("./BATToken.sol");
const LINKToken = artifacts.require("./LINKToken.sol");
const DAIToken = artifacts.require("./DAIToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(BATToken);
  deployer.deploy(LINKToken);
  deployer.deploy(DAIToken);
}
