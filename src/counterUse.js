var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var abi =[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var addr = "0x36d072eCea5AF6274EfFb6dBCf94a2ff79558EA3";
var counter = new web3.eth.Contract(abi,addr);

counter.methods.getCounter().call().then(function(str) {console.log(str);});
//counter.methods.subtract().send({from:"0x988c7734a7D3f5e57d45870a83aE6CdC4d0Ad9b5",gas:100000});
//counter.methods.add().send({from:"0xF9e3D4bCDAA6E04a8a599Bf87EAb7f7d972D3142",gas:100000});
counter.methods.getCounter().call().then(function(str) {console.log(str);});