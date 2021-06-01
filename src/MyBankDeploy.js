var Web3=require('web3');
var _abiJson = require('./MyBankABI.json');
var _binJson = require('./MyBankBIN.json');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8447"));

contractName=Object.keys(_abiJson.contracts); // reading ['src//Timer.sol:Timer'];
console.log("- contract name: ", contractName[0]); //or console.log(contractName);
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);    //JSON parsing needed!!
_bin=_binJson.contracts[contractName].bin;

var _contract = new web3.eth.Contract(_abiArray);

_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0x5c46b33dc12cf6ebbb834310ef235730f6c8449e", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log("- Contract Address: "+newContractInstance.options.address) // instance with the new contract address
    });