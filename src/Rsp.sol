
pragma solidity ^0.6.0;

contract Rsp {
    uint8 betA; //1 scissor, 2 rock or 3 paper
    uint8 betB; //1 scissor, 2 rock or 3 paper
    string matchResult; //win or lose message
    bytes32 winnerAorB;  //bytes32 enables the '==' comparison 
    //string winnerAorB;  //A or B
    uint betAmount;     //smaller bet between A and B
    mapping(address => uint256) public balanceOf;
    mapping(string => address) playersAddr;
    //mapping(bytes32 => address) public playersAddr;
    
    event PrintLog(string);
    //event PrintLog(bytes32);
    function setA(uint8 n, uint amount) public payable {
        // ADD: check if 'n' is 1,2 or 3
        betA=n;
        betAmount=amount;
        depositBalance(betAmount);
        addPlayersAddr("A");
    }
    function setB(uint8 n, uint amount) public payable {
        betB=n;
        betAmount=amount;   // bets of A and B to be the same
        depositBalance(betAmount);
        addPlayersAddr("B");
    }
    function play() public {
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
            // deduct from the loser and give all to ther winner
            balanceOf[playersAddr["A"]]+=betAmount;
            balanceOf[playersAddr["B"]]-=betAmount;
        } else if (winnerAorB=="B") {
            // deduct from the loser and betAmountgive all to ther winner
            balanceOf[playersAddr["B"]]+=betAmount;
            balanceOf[playersAddr["A"]]-=betAmount;
        }
    }
    function queryBalance() view public returns(uint) {
        return address(this).balance;
    }
    function queryBalanceOf(string memory player) view public returns(uint) {
        //ADD: check a to be 'A' or 'B'
        return balanceOf[playersAddr[player]];
    }
    function depositBalance(uint amount) public payable {
        require(msg.value==amount);
        // ADD: check if msg.sender exists
        balanceOf[msg.sender]+=amount;        
    }
    function addPlayersAddr(string memory p) internal {
        // ADD: check if p exists
        playersAddr[p]=msg.sender;
    }
}