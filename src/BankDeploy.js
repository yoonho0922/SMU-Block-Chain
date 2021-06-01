
var Web3=require('web3');
var web3;


web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abiArray=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sent","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"widthdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin="608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600181905550610367806100686000396000f3fe60806040526004361061003f5760003560e01c806312065fe01461004457806327d8ad88146100765780633c459375146100ba578063b6b55f25146100d1575b600080fd5b34801561005057600080fd5b506100596100ff565b604051808381526020018281526020019250505060405180910390f35b6100b86004803603602081101561008c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061010e565b005b3480156100c657600080fd5b506100cf610260565b005b6100fd600480360360208110156100e757600080fd5b8101908080359060200190929190505050610312565b005b60008060015447915091509091565b346001600082825403925050819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461017757600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156101bd573d6000803e3d6000fd5b507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345338234604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a150565b476001600082825403925050819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102c957600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561030f573d6000803e3d6000fd5b50565b80341461031e57600080fd5b806001600082825401925050819055505056fea2646970667358221220f3b523a844fcfde76ea1453f80b9304ef5f76671f2c62972468d51675c07103764736f6c63430006040033";
var _contract = new web3.eth.Contract(_abiArray);

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 1000000}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()