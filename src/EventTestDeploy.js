var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
//var _abiArray = JSON.parse(_abiStr);
var _abiArray  = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"my","type":"string"}],"name":"MyLog","type":"event"},{"inputs":[],"name":"myFunction","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin = "0x" + "6080604052348015600f57600080fd5b5060d58061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c3780a3a14602d575b600080fd5b60336035565b005b7f5186edd9beca61d795526ca1f274260b3fc74be3e10e1f02e1be1552e14f137360405180806020018281038252600c8152602001807f48656c6c6f20576f726c6421000000000000000000000000000000000000000081525060200191505060405180910390a156fea2646970667358221220ff7b72290a2cdb2fbee8af39cca06e50ce52c3f07da773ec07a75843a5e810a664736f6c63430006040033";

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
        //.then(function(newContractInstance) {
        //    console.log(newContractInstance.options.address)
        //});
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()