var Web3 = require('web3');
var web3 = new Web3('http://localhost:8345');
web3.eth.getCoinbase().then(console.log);
//web3.eth.getChainId().then(console.log);
web3.eth.getAccounts(console.log);
web3.eth.getCoinbase().then(console.log);
web3.eth.getBlockNumber().then(console.log);
web3.eth.getBalance('0x35381C3cf07BbFE985E7A2d92cDb55455716e7Ee').then(console.log);
web3.eth.getNodeInfo().then(console.log);