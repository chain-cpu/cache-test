const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const nftFactory = await hre.ethers.getContractFactory("NFT");
  const nftContract = await nftFactory.attach(`${process.env.CONTRACT_ADDR}`);
  const randomWallet = ethers.Wallet.createRandom();
  let tx = await nftContract.adminMint(randomWallet.address);
  await tx.wait();
  console.log(`new token has ben minted to ${randomWallet.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
