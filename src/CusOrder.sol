pragma solidity ^0.6.0;

contract Customer {
    uint id;
    string name;
    string ph;
    string home;
    
    mapping(address => uint256) public balanceOf;
    mapping(string => address) playersAddr;
    
    function addCustomer(uint _id, string memory _name, string memory _ph, string memory _home)  public payable {
        id=_id;
        name=_name;
        ph=_ph;
        home=_home;
    }
    
    function getHomeAddress() public view returns(string memory) {
        return home;
    }
    
    function getId() view public returns(uint) {
        return id;
    }
}


contract Order {
    
    mapping(uint=>Customer) customerById;
    
    struct OrderStruct{
        uint id;
        string p;
        uint n;
        uint amount;
        
        uint time;
        string status;
        string shipping;
    }
    uint orderLen = 0;
    uint totalAmount = 0;
    
    mapping(address=>OrderStruct) orderMap;
    mapping(uint=>address) addressById;
    mapping(address=>string) homeByAddr;
    
    address payable owner;
    constructor() public {
        owner = msg.sender;
    }
    
    
    function placeOrder(uint _id, string memory _p, uint _n, uint _amount) public payable{
        
        string memory  home = getHomeAddress();
        OrderStruct memory o=OrderStruct(_id, _p, _n, _amount, now, "Orderd", home);
        
        orderMap[tx.origin] = o;
        addressById[_id] = tx.origin;
        orderLen += 1;
        totalAmount += _amount;
    }
    
    function addCustomer(uint _id, string memory _name, string memory _ph, string memory _home) public payable{
        Customer cus = new Customer();
        cus.addCustomer(_id, _name, _ph, _home);
        
        customerById[_id]=cus;
        homeByAddr[tx.origin] = _home;
    }
    

    function getHomeAddress() public view returns(string memory){
        string memory home = homeByAddr[tx.origin];
        return home;
    }
    
    function getStatus() public view returns(string memory){
        return orderMap[tx.origin].status;
    }
    
    function updateStatus(uint _id, string memory _s) public isOwner {
        orderMap[addressById[_id]].status = _s;
    }
    
    function getOrderItem() public view returns(uint, string memory, string memory, string memory){
        return (orderMap[tx.origin].id, orderMap[tx.origin].p, orderMap[tx.origin].status, orderMap[tx.origin].shipping);
    }
    
    function getOrderById(uint _id)  public view returns(uint, string memory, string memory, string memory){
        OrderStruct memory o = orderMap[addressById[_id]];
        return (o.id, o.p, o.status, o.shipping);
    }
    
    function getNOrder() public view returns(uint){
        return orderLen;
    }
    
    function getTotalOrderAmount() public view returns(uint){
        return totalAmount;
    }
    
    function queryBalance()  view public returns(uint){
        return address(this).balance;
    }
    
    modifier isOwner{
        require(msg.sender == owner);
        _;
    }
        
    // }
}