var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var abi =[{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"multiply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];
var addr = "0x42012C306dd72d6223041309847DECD14894a20E";
var counter = new web3.eth.Contract(abi,addr);

counter.methods.multiply(8).call().then(function(value){ console.log("output: " + value)});