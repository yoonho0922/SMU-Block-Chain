var Web3=require('web3');
var _abiJson = require('./OrderABI.json');
var _binJson = require('./OrderBIN.json');

var web3;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));


contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]);
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);
_bin=_binJson.contracts[contractName].bin;

async function deploy() {
    const accounts = await web3.eth.getAccounts();

    //gas check
    new web3.eth.Contract(_abiArray).deploy({data: _bin}).estimateGas(function(err, gas) {
        if(!err) console.log(">> gas: "+ gas);
    });
    
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()