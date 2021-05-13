
var bal1 = eth.getBalance(eth.accounts[0]); 
ether1 = web3.fromWei(bal1, "ether")

var bal2 = eth.getBalance(eth.accounts[1]); 
ether2 = web3.fromWei(bal2, "ether")

tc = eth.blockNumber

console.log("-After")
console.log("\t- ether: " + ether1)
console.log("\t- ether: " + ether2+ "increased by 10101")
console.log("\t- transaction count: " + tc + "increased by 1")
console.log("- gas used: __ won (1 ether = 2500000): __")