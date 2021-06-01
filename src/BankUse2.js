var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var abi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sent","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"widthdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var addr = "0x4F847995B6472BAa800d66400c85fdb89c67868D";
var bank = new web3.eth.Contract(abi,addr);

bank.methods.getBalance().call().then(console.log);

//자신의 2번째 계정으로 계좌이체 333 wei하고 컨트랙 잔고 11000 wei 출력,
//bank.methods.forwardTo("0x07B033B74C32804F8c2cc1879501e3C806cE2652").send({from:"0x117732fBb3A00538eeA94c8C80d70e460490F1C3",gas:100000, value:333});
bank.methods.getBalance().call();

//2번째 계정 증가분(+333wei) 출력
web3.eth.getBalance("0x07B033B74C32804F8c2cc1879501e3C806cE2652", (err,res) => {
    console.log("balance: " + res); 
});