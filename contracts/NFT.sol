pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
using Strings for uint256;
contract NFT is ERC721, Ownable {
  constructor() ERC721("Grebo", "GREBO") Ownable() {}

  uint256 minted;
  mapping(uint256 => string) uris;
  string baseUri = "https://boredapeyachtclub.com/api/mutants/";

  // TODO: adminMint function
  function adminMint(address to) external onlyOwner {
    _safeMint(to, minted);
    minted = minted + 1;
  }

  function tokenURI(uint256 id) public view override returns (string memory) {
    return string.concat(baseUri, id.toString());
  }
}
