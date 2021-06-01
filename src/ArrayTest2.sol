pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract ArrayTest2 {
    string[3] cities1=["Seoul", "Sydney", "Tokyo"];
    string[] cities2 = new string[](2);
    string[] cities3;
    int[5] mathMarks;
    uint[3][] marks=[[100, 80, 95],[20,30,40]];
    
    function getDynamicArrMemory() pure public returns(uint[] memory){
        uint[] memory num = new uint[](3);
        for(uint i = 0; i<num.length; i++)
            num[i] = i;
        return num;
    }
    
    function getStringDynamicArrMemory() pure public {
        string[2] memory places = ["9000", "Sydney"];
        //return places
        places[0] = "Seoul";
    }
    
    function getCities1() view public returns(string memory) {
        return cities1[0];
    }
    
    function setCities23() public {
        cities2[0]="New York";
        cities2.push("Busan");
        cities3.push("New York");
        cities3.push("Beijing");
    }
    
        //dynamic array return needs "pragma experimental ABIEncoderV2;"
    function getCities2() view public returns(string[] memory){
        return cities2;
    }
    
    function setMathMarks() public {
        mathMarks=[100,60,95,50,80];
    }
    
    function getMathAbove70() view public returns(int[] memory) {
        uint lengthOfMathAbove70=0;
        uint counter=0;
        
        for(uint8 i=0; i<mathMarks.length; i++)
            if(mathMarks[i]>70)
                lengthOfMathAbove70++;
        
        int[] memory mathAbove70=new int[](lengthOfMathAbove70);
        
        counter=0;
        for(uint i=0;i<mathMarks.length;i++) {
            if(mathMarks[i]>70) {
                mathAbove70[counter]=mathMarks[i];
                counter++;
            }
        }
        return mathAbove70;
    }
    
    function updateMarks() public returns(uint[3][] memory){
        marks[0][0]=90;
        return marks;
    }
    
    function getMarksArr() view public returns(uint[3][] memory) {
        return marks;
    }
    function getMarksLength() view public returns(uint) {
        return marks.length;
    }
}