#!/bin/bash

cd ./uniswap-v2-core
yarn install
truffle migrate
cd ../uniswap-v2-periphery
mkdir -p ./build/contracts
cp ../uniswap-v2-core/build/contracts/UniswapV2Factory.json ./build/contracts/
cp ../uniswap-v2-core/build/contracts/WETH9.json ./build/contracts/
yarn install
truffle migrate
truffle exec setup.js
