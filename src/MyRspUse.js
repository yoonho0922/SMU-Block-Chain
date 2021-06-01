var Web3=require('web3');
var fs=require('fs');
var _abiJson = require('./MyRspABI.json');
var _binJson = require('./MyRspBIN.json');


var web3;
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
contractName=Object.keys(_abiJson.contracts); 
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);

var _myrsp = new web3.eth.Contract(_abiArray, '0xd56b466d26738a1E596007d0E854c46EaeE22d6e');

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    const selectB = 3;
    
    // setPlayers
    await _myrsp.methods.setA().send({from: accounts[0], gas: 3000000, value:5000})
    .then(console.log("setA bet 1000wei, select random"))
    await _myrsp.methods.setB(selectB).send({from: accounts[1], gas: 300000, value:5000})
    .then(console.log(`setB bet 1000wei, select ${selectB} (paper)`))
    console.log()
    
    // deposit players
    await _myrsp.methods.depositBalance(1000).send({from: accounts[0], gas: 300000, value:1000})
    await _myrsp.methods.depositBalance(1000).send({from: accounts[1], gas: 300000, value:1000})
    
    // balance before game
    var beforeA = await _myrsp.methods.getBalanceOfPlayer('A').call()
    var beforeB = await _myrsp.methods.getBalanceOfPlayer('B').call()

    console.log("beforeA : " + beforeA)
    console.log("beforeB : " + beforeB)
    console.log()
    
    // play
    await _myrsp.methods.play().send({from: accounts[2], gas: 300000})
    await _myrsp.methods.getMatchResult().call().then(console.log)
    await _myrsp.methods.distributeBetAmount().send({from: accounts[2], gas: 300000})
    .then(console.log("distribute complete. \n"))
    
    // balance after game
    var afterA = await _myrsp.methods.getBalanceOfPlayer('A').call()
    var afterB = await _myrsp.methods.getBalanceOfPlayer('B').call()
    var afterContract = await _myrsp.methods.getBalanceThis().call()
    console.log("afterA : " + afterA)
    console.log("afterB : " + afterB)
    console.log("balance of this contract : " + afterContract)
}


doIt()