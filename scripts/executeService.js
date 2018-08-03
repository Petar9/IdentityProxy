const IdentityProxy = require('../build/IdentityProxy.json');

const ethers = require('ethers');
const providers = ethers.providers;
const Wallet = ethers.Wallet;
const utils = ethers.utils;
const keys = require('./../restApi/config/keys.js')

let serviceAddress = keys.serviceAddress;

var provider;

async function executeService(identityProxyAddress, serviceContractAddress, reward, wei, data, signedDataHash, deployerWallet){
	provider = new providers.JsonRpcProvider('http://localhost:8545', providers.networks.unspecified);
	deployerWallet.provider = provider
	const identityContract = new ethers.Contract(identityProxyAddress, IdentityProxy.abi, deployerWallet);
	let transaction = await identityContract.execute(serviceContractAddress, reward, wei, data, signedDataHash);
	return true;

}

module.exports = executeService;