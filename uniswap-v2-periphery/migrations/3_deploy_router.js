const UniswapRouter = artifacts.require("./UniswapV2Router02.sol");
const factory = artifacts.require("./UniswapV2Factory");
const weth = artifacts.require("./WETH9.sol");

//const factory = "0xa97c38Aba912B9641f70b311ac52F6D55c3a44D2";
//const WETH = "0x66777171BEb745ec4A3690DfE5f95550C35570E9";

module.exports = function(deployer) {
 deployer.deploy(UniswapRouter, factory.address, weth.address);
}
