pragma solidity ^0.6.0;

contract PracOrderEvent {
    uint unitPrice = 10;
    event OrderLog(address indexed _from, bytes2 _itemId, uint indexed quantity, string shipping);
    
    address payable owner;
    constructor() public {
        owner = msg.sender;
    }


    function order(bytes2 _itemId, uint quantity, string memory shipping) public payable {
        uint256 orderAmount = quantity * unitPrice;
        require(msg.value == orderAmount);
        emit OrderLog(msg.sender, _itemId, quantity, shipping);
    }
    
    
    function getBalance() view public returns(uint) {
        return address(this).balance;
    }
}