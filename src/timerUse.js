var Web3=require('web3');
var _abiJson = require('./GethTimerABI.json');
var _binJson = require('./GethTimerBIN.json');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8447"));

//var my = require('./Timer');  //cotaining abi,bin
//abi from Timer.js
//var _abiArray=JSON.parse(my._compiled.contracts['src/Timer.sol:Timer'].abi);   //JSON parsing needed!!
//console.log("- ABI: "+my._compiled.contracts['src/Timer.sol:Timer'].abi);

contractName=Object.keys(_abiJson.contracts); // reading ['src//Timer.sol:Timer'];
console.log("- contract name: ", contractName[0]); //or console.log(contractName);
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);    //JSON parsing needed!!
_bin=_binJson.contracts[contractName].bin;
var timer = new web3.eth.Contract(_abiArray,"0xF341440f0dC9119ea6556bbdCCC6b0edF499eC34");


timer.methods.getNow().call().then(function(value) {console.log(value);});
timer.methods.start().send({from:"0x5c46b33dc12cf6ebbb834310ef235730f6c8449e",gas:100000});
timer.methods.timePassed().call().then(function(value) {console.log(value);});