var Web3 = require('web3');
var web3 = new Web3('http://localhost:8345');
console.log(web3.utils.randomHex(32));    //generate random 32 byte hex
console.log(web3.utils.keccak256('234'));  //calculate keccak256 for '234'
console.log(web3.utils.isAddress('0x35381C3cf07BbFE985E7A2d92cDb55455716e7Ee'));  //check if the input is a valid address
console.log(web3.utils.utf8ToHex('안녕'));
console.log(web3.utils.toWei('1', 'ether'));