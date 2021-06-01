var Web3=require('web3');
var _abiJson = require('./ArrayTest2ABI.json');
var _binJson = require('./ArrayTest2BIN.json');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
contractName=Object.keys(_abiJson.contracts); // reading ['src/ArrayTest2.sol:ArrayTest2']

_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);    //JSON parsing needed!!
_bin=_binJson.contracts[contractName].bin; //ok without "0x"

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);

    new web3.eth.Contract(_abiArray).deploy({data: _bin}).estimateGas(function(err, gas) {
        if(!err) console.log(">> gas: "+ gas);
    });

    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 1226648}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}

deploy()