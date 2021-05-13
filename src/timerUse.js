var Web3=require('web3');
var my = require('./Timer');  //cotaining abi,bin
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

// abi from Timer.js
var _abiArray=JSON.parse(my._compiled.contracts['src/Timer.sol:Timer'].abi);   //JSON parsing needed!!
// contract address
var timer = new web3.eth.Contract(_abiArray,"0x0583A82C585a4aAF32dE71863aA9e15Ad8C01Ad0");

//timer.methods.start().send({from:"0x96c60339b39C8Faf126540B6a9BEa830fE5B43ff",gas:100000});
timer.methods.getStart().call().then(function(value) {console.log("startTime: " + value);});
timer.methods.getNow().call().then(function(value) {console.log("now: " + value);});
timer.methods.timePassed().call().then(function(value) {console.log("passed: " + value);});