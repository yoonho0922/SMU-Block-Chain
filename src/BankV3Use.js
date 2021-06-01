var Web3=require('web3');
var fs=require('fs');
var _abiJson = require('./BankV3ABI.json');
var _binJson = require('./BankV3BIN.json');


var web3;
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]); 
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);

var _bank = new web3.eth.Contract(_abiArray, '0xeFbcE6949851E5c4F68DE5027006c144852a898C');

async function doIt() {
    const accounts = await web3.eth.getAccounts();

    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    
    _bank.methods.getBalance().call().then(console.log);
    
    await _bank.methods.deposit(111).send({from: accounts[0], value:111});
    _bank.methods.getBalance().call().then(console.log);
    
    await _bank.methods.withdrawAll().send({from: accounts[0]});    //greater than 101
    _bank.methods.getBalance().call().then(console.log);
    
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
    
    
    //대기 후 종료
    setTimeout(function() {
      process.exit(1);
    }, 1000);
    

    
}
doIt()