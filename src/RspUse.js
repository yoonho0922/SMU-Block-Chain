var Web3=require('web3');
var fs=require('fs');
var _abiJson = require('./RspABI.json');
var _binJson = require('./RspBIN.json');


var web3;
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]); 
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);

var _rsp = new web3.eth.Contract(_abiArray, '0xe97341e9e1721530f5D360b0C36AccED33ed0f7D');

async function doIt() {
    const accounts = await web3.eth.getAccounts();

    await _rsp.methods.queryBalance().call().then(console.log)

    await _rsp.methods.setA(1, 1000).send({from: accounts[0], gas: 300000, value:1000})
    
    await _rsp.methods.queryBalanceOf("A").call().then(console.log)
}


doIt()