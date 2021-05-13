var ip = admin.nodeInfo.ip
var chainId = admin.nodeInfo.protocols.eth.config.chainId

if(chainId>4){
    console.log("Your chainId " + chainId + "@" + ip + " is a private network")
}else{
    console.log("Your chainId " + chainId + "@" + ip + " is not a private network")
}