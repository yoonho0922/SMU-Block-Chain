pragma solidity ^0.6.0;
contract Multiply7Event {

    event Print(address param1, uint256 param2, uint param3);

    function multiply(uint param4) public returns(uint){
        uint result = param4 * 7;
        emit Print(msg.sender,now,result);
        return result;
    }

}