var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var abi =[{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"powerOf2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];
var addr = "0x91F6FC6A1A06a0C645Bd1bB836683CeE00d7C61D";
var math = new web3.eth.Contract(abi,addr);

math.methods.powerOf2(8).call().then(function(value){ console.log("input: 8, output: " + value)});
math.methods.powerOf2(32).call().then(function(value){ console.log("input: 32, output: " + value)});