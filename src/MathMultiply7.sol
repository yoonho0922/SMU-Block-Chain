pragma solidity ^0.6.0;

contract Multiply7 {
   //event Print(uint);
   receive() external payable {}
   fallback() external payable {}
   function multiply(uint input) pure public returns (uint) {
      //emit Print(input * 7);
      return input * 7;
   }
   function getAddress() view public returns(address) {
       return address(this);
   }
}

contract Math {
    Multiply7 m7=new Multiply7();
    function deposit(uint amount) payable public {
        require(msg.value==amount);
    }
    function setM7(address payable _addr) public { m7 = Multiply7(_addr); }
    function multiply() view public returns(uint) {
        uint res=m7.multiply(8);
        //this.send11(); It does not send value.
        return res;
    }
    function send11M7() public payable {
        //m7.multiply.value(11)(9);
        //m7.multiply(9);
        address(m7).transfer(11);
    }
    function getBalanceOfThis() public view returns(uint) {
        return address(this).balance;
    }
    function getBalanceOfM7() public view returns(uint) {
        return address(m7).balance;
    }
    function getAddressOfM7() view public returns(address) {
        return address(m7);
   }    
}