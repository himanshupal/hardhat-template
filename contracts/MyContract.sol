// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MyContract {
    string private _name;

    constructor(string memory name) {
        _name = name;
    }

    function getName() public view returns (string memory) {
        return _name;
    }

    function add(uint16 a, uint16 b) public pure returns (uint32) {
        return a + b;
    }
}
