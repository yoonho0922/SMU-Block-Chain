var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abiArray  = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"param1","type":"address"},{"indexed":false,"internalType":"uint256","name":"param2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"param3","type":"uint256"}],"name":"Print","type":"event"},{"inputs":[{"internalType":"uint256","name":"param4","type":"uint256"}],"name":"multiply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]
var _bin = "0x" + "6080604052348015600f57600080fd5b506101278061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c6888fa114602d575b600080fd5b605660048036036020811015604157600080fd5b8101908080359060200190929190505050606c565b6040518082815260200191505060405180910390f35b6000806007830290507f91da4985ab616136202f4e81fd2d8cac1eb12591132d609cece407f7c6fb9205334283604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a18091505091905056fea2646970667358221220543b1fc75a3f7d28ee6e2afda316405b85b0ffed69acdac88afe5cd573d1cbb764736f6c63430006040033";

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()