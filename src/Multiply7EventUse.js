var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var _abiArray = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"param1","type":"address"},{"indexed":false,"internalType":"uint256","name":"param2","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"param3","type":"uint256"}],"name":"Print","type":"event"},{"inputs":[{"internalType":"uint256","name":"param4","type":"uint256"}],"name":"multiply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]
var _test = new web3.eth.Contract(_abiArray, '0xEAAB95114d0c961aCdCa788FfFfca3A9c658D53C');

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);

    const value1 = await _test.methods.multiply(8)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})

    console.log("---> multifly called " + JSON.stringify(value1.events.Print.returnValues));
    
        const value2 = await _test.methods.multiply(16)
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})

    console.log("---> multifly called " + JSON.stringify(value2.events.Print.returnValues));
}
doIt()