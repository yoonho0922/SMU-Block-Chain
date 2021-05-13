var Web3=require('web3');
var _abiJson = require('./MathABI.json');
var _binJson = require('./MathBIN.json');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

contractName=Object.keys(_abiJson.contracts);
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);
_bin=_binJson.contracts[contractName].bin;

var _contract = new web3.eth.Contract(_abiArray);

_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0xbaCA39ac31BD3049f82AD30Ea8CbB364e1dAd268", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log("Contract Address: "+ newContractInstance.options.address)
    });