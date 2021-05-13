pragma solidity ^0.6.0;
contract Timer {
    
    uint256 startTime;
    
    function start() public {
        startTime=now;
    }
    function timePassed() public view returns(uint256) {
        return now-startTime;
    }
    function getStart() public view returns(uint256) {
        return startTime;
    }
    function getNow() view public returns(uint) {
        return now;
    }
}