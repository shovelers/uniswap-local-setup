const UniswapFactory = artifacts.require("./UniswapV2Factory.sol");

module.exports = function(deployer) {
  deployer.deploy(UniswapFactory);
}
