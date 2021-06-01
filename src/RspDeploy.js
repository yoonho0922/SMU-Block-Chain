var Web3=require('web3');
var _abiJson = require('./RspABI.json');
var _binJson = require('./RspBIN.json');

var web3;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));


contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]);
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);
_bin=_binJson.contracts[contractName].bin;

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 3641240, gasPrice: '10000000000'}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()