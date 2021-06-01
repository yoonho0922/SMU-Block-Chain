var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8447"));

var abi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sent","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"widthdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var addr = "0xA72246dAe3F982ab723F24273dC6f3aA3B98c0fd";
var bank = new web3.eth.Contract(abi,addr);

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const balance0Before = await web3.eth.getBalance(accounts[0]);
    console.log("Balance0 before: " + balance0Before);
    const balance1Before = await web3.eth.getBalance(accounts[1]);
    console.log("Balance0 before: " + balance1Before);
    
    bank.methods.getBalance().call().then(console.log);
}
doIt();