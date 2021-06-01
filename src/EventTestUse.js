var Web3=require('web3');
var fs=require('fs');
var _abiJson = require('./EventTestABI.json');
var _binJson = require('./EventTestBIN.json');

var web3;
var web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));
contractName=Object.keys(_abiJson.contracts); 
console.log("- contract name: ", contractName[0]); 
_abiArray=JSON.parse(_abiJson.contracts[contractName].abi);

var _test = new web3.eth.Contract(_abiArray, '0x0c2D722b03ABFc82c7aF7844dB021C19E64a4f93');

var event = _test.events.MyLog({fromBlock: 0}, function (error, result) {
    if (!error) {
        log = JSON.stringify(result.returnValues);
        console.log("Event fired: " + log);
        fs.writeFile("../src/EventTestLog.txt", log, "utf-8", function(e) {
            if(!e) {
                console.log(">> Writing to file");
            }
        });
        
        //기존 파일에 내용을 추가할 때
        //fs.appendFile("../src/EventTestLog.txt", log, "utf-8", function(e) {
            
        //대기 후 종료
        setTimeout(function() {
          process.exit(1);
        }, 1000);
    }
});


async function doIt() {
    const accounts = await web3.eth.getAccounts();
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    
    const value = await _test.methods.myFunction()
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'})
        //.then(function(value) {console.log("---> myFunction called " + JSON.stringify(value.events.MyLog.returnValues));});
   
    console.log("---> myFunction called " + JSON.stringify(value.events.MyLog.returnValues));
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
}
doIt()