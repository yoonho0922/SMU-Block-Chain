var Web3=require('web3');
var _abiJson = require('./FallbackTestABI.json');

var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    //web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhot:8345"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}

contractName=Object.keys(_abiJson.contracts); // reading ['..//src//FallbackTest.sol:FallbackTest']
console.log("- contract name: ", contractName[0]); //or console.log(contractName);
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);    //JSON parsing needed!!


async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    var _instance = new web3.eth.Contract(_abiArray, "0x0609642c3FC959Aec47968d990Ef448A17AD40Ca");
    var event = _instance.events.PrintLog(function (error, result) {
        if (!error) {
            console.log("Event fired: " + JSON.stringify(result) + "\n---> " + JSON.stringify(result.returnValues));
        }
    });

    _instance.methods.callA().call().then(console.log);  //null
    
    web3.eth.sendTransaction({from:accounts[0], to: "0xC5F7533Aeaaa59A63eB800B97aBa1EF4DE08A9B6"}); //fallback called
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
}


doIt()