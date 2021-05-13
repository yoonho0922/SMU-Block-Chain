pragma solidity ^0.6.0;

contract Greeter {
    
    bytes32 greeting;
    
    constructor() public {
        greeting='Hello';
    }
    function setGreeting(bytes32 _greeting) public {
        greeting = _greeting;
    }
    function greet() view public returns (bytes32) {
        return greeting;
    }
}