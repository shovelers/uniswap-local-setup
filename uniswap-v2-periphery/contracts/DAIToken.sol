pragma solidity >=0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract DAIToken is ERC20 {

  constructor() public ERC20("DAI TOKEN", "DAI") {}

  function mint(address _account, uint256 _amount) public {
    _mint(_account, _amount);
  }
}
