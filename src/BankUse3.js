var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var abi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sent","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"widthdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var addr = "0x4F847995B6472BAa800d66400c85fdb89c67868D";
var bank = new web3.eth.Contract(abi,addr);

//전액 인출하고 11000 wei
bank.methods.widthdrawAll().send({from:"0x117732fBb3A00538eeA94c8C80d70e460490F1C3",gas:100000});
bank.methods.getBalance().call()

// 자신의 잔고 증가분 출력 (+11000 wei)
web3.eth.getBalance("0x117732fBb3A00538eeA94c8C80d70e460490F1C3", (err,res) => {
    console.log("balance: " + res); 
});