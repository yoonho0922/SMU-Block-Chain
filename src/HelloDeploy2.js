var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var shelloContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}]);

web3.eth.personal.unlockAccount("0x8a1cccfe08c0abe30c24d485ac290f84534ef1c9","password",1111).then(console.log('unlocked!'));

shelloContract
    .deploy({
            data: '0x608060405234801561001057600080fd5b5061011e806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ef5fb05b14602d575b600080fd5b603360ab565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101560715780820151818401526020810190506058565b50505050905090810190601f168015609d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60606040518060400160405280600b81526020017f48656c6c6f20576f726c6400000000000000000000000000000000000000000081525090509056fea26469706673582212208a64817a1edd701acbf705fa54d8456cb0f7e048bb24d7ad7c11a9ccb223366c64736f6c63430006040033', 
    })
    .send({
     from: "0x8a1cccfe08c0abe30c24d485ac290f84534ef1c9",
     gas: '4700000'
    }, function (error, transactionHash){ 
            console.log(error, transactionHash); 
    })
    .on('transactionHash', function(error,transactionHash) {
        console.log("hash-- "+transactionHash);
    })
    .on('receipt', function(receipt) {
        console.log('receipt:: '+receipt.contractAddress);
    })
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address)
    });