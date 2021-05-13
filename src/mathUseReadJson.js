var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var _abiJson = require('./MathABI.json');

contractName=Object.keys(_abiJson.contracts);
var abi = JSON.parse(_abiJson.contracts[contractName].abi);
var addr = "0x7d1049438f13901Eb73DddE1b32F6D10f1b04D09";
var math = new web3.eth.Contract(abi,addr);

math.methods.powerOf2(8).call().then(function(value){ console.log("input: 8, output: " + value)});
math.methods.powerOf2(32).call().then(function(value){ console.log("input: 32, output: " + value)});