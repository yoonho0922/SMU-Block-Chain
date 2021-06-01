var Web3=require('web3');
var _abiJson = require('./MyBankABI.json');
var _binJson = require('./MyBankBIN.json');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8447"));

contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]); 
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);  
_bin=_binJson.contracts[contractName].bin;
var bank = new web3.eth.Contract(_abiArray,"0x94cB2FE10e499fcb7260F88Ef8C42Bca9e4549F8");


async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    
    const balance0Before = await web3.eth.getBalance(accounts[0]);
    console.log("Balance0 before: " + balance0Before);
    const balance1Before = await web3.eth.getBalance(accounts[1]);
    console.log("Balance1 before: " + balance1Before);
    
    await bank.methods.deposit(11111)
    .send({from:accounts[0],gas:100000, value:11111})
    
    const balance0After = await web3.eth.getBalance(accounts[0]);
    console.log("Balance0 after: " + balance0After);
    const balance1After = await web3.eth.getBalance(accounts[1]);
    console.log("Balance1 after: " + balance1After);
}
doIt();