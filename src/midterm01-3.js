
miner.setEtherbase(eth.accounts[0])
personal.unlockAccount(eth.accounts[0], "1111")

var hash = eth.sendTransaction({
    from: eth.accounts[0],
    to: eth.accounts[1],
    value: 10101
})

console.log("...mining start " + hash)
miner.start();admin.sleepBlocks(1);miner.stop();
console.log("mining done...")