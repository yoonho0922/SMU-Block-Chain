var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var shelloContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}],
                                      "0xc18bF0103aF73058d1a26e8Bb0F6ccE9eA85Ad84");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});