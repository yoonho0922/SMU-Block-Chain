var Web3=require('web3');
var my = require('./Timer');  //cotaining abi,bin

var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}


//abi from Timer.js
var _abiArray=JSON.parse(my._compiled.contracts['src/Timer.sol:Timer'].abi);   //JSON parsing needed!!
console.log("- ABI: "+my._compiled.contracts['src/Timer.sol:Timer'].abi);

//bin from Timer.js
var _bin=my._compiled.contracts['src/Timer.sol:Timer'].bin;
console.log("- Bytecode: "+my._compiled.contracts['src/Timer.sol:Timer'].bin);

var _contract = new web3.eth.Contract(_abiArray);
//unlock the account with a password provided
//web3.personal.unlockAccount(web3.eth.accounts[0],'password');

_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0x03D8F3F2a4Ca98C225168DF094B96347B6Eb8A70", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log("- Contract Address: "+newContractInstance.options.address) // instance with the new contract address
    });