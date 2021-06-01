var Web3=require('web3');
var fs=require('fs')
var _abiJson = require('./OrderABI.json');

var web3;
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8546"));
contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]); 
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);

var _order = new web3.eth.Contract(_abiArray, '0xe5673EA8992cb4ea3b25ff7448eD3861abA4C184');

var event = _order.events.OrderLog({filter: {_from: web3.eth.accounts[0], _value: 30}, fromBlock: 0}, function (error, result) {
    if (!error) {
        var log = JSON.stringify(result.returnValues)
        console.log("Event fired: " + log);
        console.log()
        
        fs.writeFile("../src/OrderLog.txt", log, "utf-8", function(e) {
            if(!e) {
                console.log(">> Writing to file\n");
            }
        });
        
        //대기 후 종료
        setTimeout(function() {
          process.exit(1);
        }, 1000);
    }
});

async function doIt() {
    const accounts = await web3.eth.getAccounts();

    var value;
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    
    // this will fire an event
    my = await _order.methods.order("0x1234", 3, "20 2-gil Hongji-dong Jongro-gu Busan")
        .send({from: accounts[0], gas: 100000, value:30})
    console.log("---> MyFunction called ");

    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
    
    
    //대기 후 종료
    setTimeout(function() {
      process.exit(1);
    }, 1000);
}

doIt()