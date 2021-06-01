var primary = eth.accounts[0];
console.log("primary ac: ",primary);
console.log("balance: ",eth.getBalance(primary));
loadScript('../src/Timer.js')
contractName=Object.keys(_compiled.contracts)

_abi=JSON.parse(_compiled.contracts[contractName[0]].abi)

_code=_compiled.contracts[contractName[0]].bin
_class=eth.contract(_abi);

_object=_class.new({from:primary,data:'0x'+_code,gas:1000000}, function(err, contract) {
    if(err) console.log(err)
    
    if (!err && contract.address)
        console.log("contractAddress: ", contract.address);
        console.log("transactionHash: ", contract.transactionHash);
});