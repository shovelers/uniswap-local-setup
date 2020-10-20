pragma solidity >=0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract LINKToken is ERC20 {

  constructor() public ERC20("LINK TOKEN", "LINK") {}

  function mint(address _account, uint256 _amount) public {
    _mint(_account, _amount);
  }
}
