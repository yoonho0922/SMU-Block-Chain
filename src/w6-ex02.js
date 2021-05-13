const Web3 = require('web3');
const web3 = new Web3('http://localhost:8345');
web3.eth.getCoinbase((err,res) => {
    web3.eth.getBalance(res, (err, res) =>{
        const coinbase = web3.utils.fromWei(res, "ether");
        console.log("coinbase:" + coinbase + " ether")
        
        console.log("KRW: " + coinbase * 2614000);
    });
} );