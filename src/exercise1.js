
miner.setEtherbase(eth.accounts[0])

console.log("1. current block number : " + eth.blockNumber)
console.log("2. enode : " + admin.nodeInfo.enode)
console.log("3. peer : " + net.peerCount)
console.log("4. accounts : " + eth.accounts)

console.log("5. balance of accounts")
console.log(web3.fromWei('\t' + eth.getBalance(eth.accounts[0]), "ether"))
console.log(web3.fromWei('\t' + eth.getBalance(eth.accounts[1]), "ether"))
console.log(web3.fromWei('\t' + eth.getBalance(eth.accounts[2]), "ether"))

console.log("6. change coinbase")
console.log('\t' + eth.coinbase)
console.log('\t' + miner.setEtherbase(eth.accounts[1]))
console.log('\t' + eth.coinbase)
console.log()

console.log("7. transaction pool")
var objectValues = txpool.status
for (var key in objectValues){
    console.log(key + " : " + objectValues[key])
}

console.log("8. current block number : " + eth.blockNumber)
console.log()