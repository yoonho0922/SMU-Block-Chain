var Web3=require('web3');
var _abiJson = require('./CusOrderABI.json');
var _binJson = require('./CusOrderBIN.json');

var web3;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));


contractName=Object.keys(_abiJson.contracts); 
_abiArray=JSON.parse(_abiJson.contracts[contractName[1]].abi);
_bin=_binJson.contracts[contractName[1]].bin;

async function deploy() {
    const accounts = await web3.eth.getAccounts();

    //gas check
    new web3.eth.Contract(_abiArray).deploy({data: _bin}).estimateGas(function(err, gas) {
        if(!err) console.log(">> gas: "+ gas);
    });
    
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 1662136, gasPrice: '1000000000'}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()