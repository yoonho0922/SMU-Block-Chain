var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var abi =[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var addr = "0x36d072eCea5AF6274EfFb6dBCf94a2ff79558EA3";
var counter = new web3.eth.Contract(abi,addr);

counter.methods.getCounter().call().then(function(str) {console.log(str);});
//counter.methods.subtract().send({from:"0x03D8F3F2a4Ca98C225168DF094B96347B6Eb8A70",gas:100000});
//counter.methods.add().send({from:"0x03D8F3F2a4Ca98C225168DF094B96347B6Eb8A70",gas:100000});
counter.methods.getCounter().call().then(function(str) {console.log(str);});