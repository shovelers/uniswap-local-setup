var Router = artifacts.require('UniswapV2Router02');
var LINKToken = artifacts.require('LINKToken');
var DAIToken = artifacts.require('DAIToken');
var BATToken = artifacts.require('BATToken');


var tokensToMint = 9000000000000000;

module.exports = async function(callback) {
  try {
    accounts = await web3.eth.getAccounts()
    console.log("account is", accounts[0]);
    var router = await Router.deployed(); 
    var bat = await BATToken.deployed(); 
    var link = await LINKToken.deployed(); 
    var dai = await DAIToken.deployed(); 
    console.log("link address is", link.address);
    console.log("dai address is", dai.address);
    console.log("bat address is", bat.address);
    await link.mint(accounts[0], tokensToMint);
    await dai.mint(accounts[0], tokensToMint);
    await bat.mint(accounts[0], tokensToMint);
    await link.approve(router.address, tokensToMint);
    await dai.approve(router.address, tokensToMint);
    await bat.approve(router.address, tokensToMint);

    var deadline = new Date().getTime() + 3000
    await router.addLiquidityETH(link.address, tokensToMint, 1, 1, accounts[0], deadline, {value: tokensToMint}) 
 //   await router.addLiquidityETH(dai.address, tokensToMint, 1, 1, accounts[0], deadline, {value: tokensToMint}) 
  //  await router.addLiquidityETH(bat.address, tokensToMint, 1, 1, accounts[0], deadline, {value: tokensToMint}) 
  }
  catch(error) {
    console.log(error);
  }
};
