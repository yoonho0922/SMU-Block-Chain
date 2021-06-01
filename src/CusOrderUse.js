var Web3=require('web3');
var _abiJson = require('./CusOrderABI.json');
var _binJson = require('./CusOrderBIN.json');


var web3;
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
contractName=Object.keys(_abiJson.contracts); 
_bin=_binJson.contracts[contractName[1]].bin;
_abiArray=JSON.parse(_abiJson.contracts[contractName[1]].abi);

var _order = new web3.eth.Contract(_abiArray, '0xd7e54504C14e21A1fBD6FAD65a9A85AAA43130B4');

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    
    
    await _order.methods.addCustomer(111, "kim", "010-2017-1111", "111 hongji-dong jongro-gu seoul")
    .send({from: accounts[0], gas: 300000})
    
    await _order.methods.addCustomer(112, "lee", "010-2017-1112", "112 hongji-dong jongro-gu seoul")
    .send({from: accounts[1], gas: 300000})
    
    await _order.methods.addCustomer(113, "lim", "010-2017-1113", "113 hongji-dong jongro-gu seoul")
    .send({from: accounts[2], gas: 300000})
    
    var home = await _order.methods.getHomeAddress.call({from: accounts[1]})
    console.log(home)
    
    // wait and exit
    setTimeout(function() {
      process.exit(1);
    }, 5000);
}

doIt()