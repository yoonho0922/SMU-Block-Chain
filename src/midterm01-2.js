
var bal1 = eth.getBalance(eth.accounts[0]); 
ether1 = web3.fromWei(bal1, "ether")

var bal2 = eth.getBalance(eth.accounts[1]); 
ether2 = web3.fromWei(bal2, "ether")

tc = eth.blockNumber

console.log("-Before")
console.log("\t- coinbase balance in Wei: " + bal1 + " ether: " + ether1)
console.log("\t- account1 balance in Wei: " + bal2 + " ether: " + ether2)
console.log("\t- transaction count: " + tc)