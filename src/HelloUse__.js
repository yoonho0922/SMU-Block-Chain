var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var shelloContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}]);
var hello = shelloContract.at("0x50Dc3fef3864BA7E325AcFAE8217204090dd91a9");
console.log(hello.sayHello.call());