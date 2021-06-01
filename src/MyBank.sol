pragma solidity ^0.6.0;

contract MyBank{
    address owner;
    uint balance;
    
    constructor() public {
        owner = msg.sender;
        balance = 0;
    }
    
    event Sent(address from, address to, uint amount );

    function forwardTo(address payable _receiver) public payable {
        balance -= msg.value;
        require(msg.sender == owner);
        _receiver.transfer(msg.value);
        emit Sent(msg.sender, _receiver, msg.value);
    }
    function getBalance() public view returns(uint, uint) {
        return (balance, address(this).balance);
    }
    function deposit(uint amount) public payable {
        require(msg.value == amount);
        balance += amount;
    }
    function widthdrawAll() public {
        balance -= address(this).balance;
        require(msg.sender == owner);
        msg.sender.transfer(address(this).balance);
    }

}