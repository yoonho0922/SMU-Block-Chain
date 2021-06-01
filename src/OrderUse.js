var Web3=require('web3');
var fs=require('fs');
var _abiJson = require('./OrderABI.json');
var _binJson = require('./OrderBIN.json');


var web3;
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8345"));
contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]); 
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);

var _order = new web3.eth.Contract(_abiArray, '0xA1Bd56EB57beDa3211E8fd41263a90F1020A7c8F');

var event = _order.events.OrderLog({filter: {_from: web3.eth.accounts[0], _value: 30}, fromBlock: 0}, function (error, result) {
    if (!error) {
        var addr = JSON.stringify(result.returnValues[0])
        var product = JSON.stringify(result.returnValues[1])
        var amount = JSON.stringify(result.returnValues[2])
        var shipping = JSON.stringify(result.returnValues[3])
        var log = `address: ${addr} \nproduct: ${product} \namount: ${amount} \nshipping: ${shipping}`
        
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
}

doIt()