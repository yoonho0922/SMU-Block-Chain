var primary = eth.accounts[1];
console.log("primary ac: ",primary);
console.log("balance: ",eth.getBalance(primary));
loadScript('src/TimerGeth.js')

contractName=Object.keys(_compiled.contracts)

_abi=JSON.parse(_compiled.contracts[contractName[0]].abi)
_code=_compiled.contracts[contractName[0]].bin
_class=eth.contract(_abi);

console.log('bin code: ', _code)