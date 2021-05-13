const Web3 = require('web3');
const web3 = new Web3('http://localhost:8345');

web3.eth.getCoinbase((err,res) => { console.log("coinbase: " + res); } );

const coinbase = "0xc70d29f8efb8342193f67b51fdbfb92fb8fdd03a"
const hqaccount = "0x8a1cccfe08c0abe30c24d485ac290f84534ef1c9"
web3.eth.getBalance(coinbase, (err,res) => { console.log("balance: " + res); } );
web3.eth.sendTransaction({from:coinbase, to:hqaccount, value:1000000000000000000});
web3.eth.getBalance(coinbase, (err,res) => { console.log("balance: " + res); } );