loadScript('../src/Timer.js')
contractName=Object.keys(_compiled.contracts)
_abi=JSON.parse(_compiled.contracts[contractName[0]].abi)
//_abi=JSON.parse(_compiled.contracts['src/Example.sol:Example'].abi)
var _contract=eth.contract(_abi);
var _address="0x417B8c4a8427a0f02FeFD6fd839a845e7A4cDB6c";
var _instance=eth.contract(_abi).at(_address);
console.log(_instance.getNow.call());
_instance.start.sendTransaction({from:eth.accounts[0]});
console.log(_instance.timePassed.call());