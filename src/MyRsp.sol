pragma solidity ^0.6.0;

contract MyRsp{
    uint8 betA;
    uint8 betB;
    string matchResult;
    bytes32 winnerAorB;
    
    uint betAmount;
    mapping(address => uint256) public balanceOf;
    mapping(string => address) playersAddr;
    
    function rand1and3() public view returns(uint8) {
        return uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%3)+1;
    }
    
    function addPlayersAddr(string memory p) internal {
        playersAddr[p]=msg.sender;
    }
    
    function setA() public payable returns(uint8){
        betA= rand1and3();
        betAmount= 1000;
        addPlayersAddr("A");
    }
    
    function setB(uint8 n) public payable {
        betB=n;
        betAmount= 1000;
        addPlayersAddr("B");
    }
    
    function depositBalance(uint amount) public payable {
        require(msg.value==amount);
        balanceOf[msg.sender]+=amount;        
    }
    
    function getBalanceThis() view public returns(uint) {
        return address(this).balance;
    }
    function getBalanceOfPlayer(string memory player) view public returns(uint) {
        return balanceOf[playersAddr[player]];
    }
    
    function play() public returns(string memory){
        if(betA==betB) {
            matchResult="tie";
            winnerAorB="N";
        } else if(betA==1 && betB==2) {
            matchResult="B wins";
            winnerAorB="B";
        } else if(betA==1 && betB==3) {
            matchResult="A wins";
            winnerAorB="A";
        } else if(betA==2 && betB==1) {
            matchResult="A wins";
            winnerAorB="A";
        } else if(betA==2 && betB==3) {
            matchResult="B wins";
            winnerAorB="B";
        } else if(betA==3 && betB==1) {
            matchResult="B wins";
            winnerAorB="B";
        } else if(betA==3 && betB==2) {
            matchResult="A wins";
            winnerAorB="A";
        }
    }
    
    function getMatchResult() view public returns(string memory) {
        return matchResult;
    }
    
    function distributeBetAmount() public {
        if (winnerAorB=="A") {
            balanceOf[playersAddr["A"]]+=betAmount;
            balanceOf[playersAddr["B"]]-=betAmount;
        } else if (winnerAorB=="B") {
            balanceOf[playersAddr["B"]]+=betAmount;
            balanceOf[playersAddr["A"]]-=betAmount;
        }
    }
    
    
}