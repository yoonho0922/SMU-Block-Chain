var Web3=require('web3');
var _abiJson = require('./PracOrderABI.json');


var web3;

//web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8345"));
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));


contractNames=Object.keys(_abiJson.contracts); 
contractName=contractNames[0];
console.log("- contract name: ", contractName); //or console.log(contractName);
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);    //JSON parsing needed!!

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    var _instance = new web3.eth.Contract(_abiArray, "0x221d4dfc48ee26e0AC113C64fd5B79b7cF67BdBD");


}

doIt()