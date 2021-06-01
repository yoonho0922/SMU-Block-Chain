
var _abiJson = require('./GethTimerABI.json');
var _binJson = require('./GethTimerBIN.json');
contractName=Object.keys(_abiJson.contracts); // reading ['src//Timer.sol:Timer']
console.log("- contract name: ", contractName[0]); //or console.log(contractName);

_abi=_abiJson.contracts[contractName].abi
_bin=_binJson.contracts[contractName].bin
console.log("- ABI: ", _abi);
console.log("- Bytecode: ", _bin);