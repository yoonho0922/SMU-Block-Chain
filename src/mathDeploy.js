
var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abiArray=[{"inputs":[{"internalType":"uint256","name":"input","type":"uint256"}],"name":"powerOf2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];
var _bin="6080604052348015600f57600080fd5b5060af8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063bdacc0cf14602d575b600080fd5b605660048036036020811015604157600080fd5b8101908080359060200190929190505050606c565b6040518082815260200191505060405180910390f35b60008160020a905091905056fea26469706673582212203c57dcb25372bc6830ec4f8d5a31b8f895857085bb330dde0f10b6e6e36efff364736f6c63430006040033";
var _contract = new web3.eth.Contract(_abiArray);

_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0xbaCA39ac31BD3049f82AD30Ea8CbB364e1dAd268", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address)
    });