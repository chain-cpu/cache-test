const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log(`deploy address is ${deployer.address}`);
  const nftFactory = await hre.ethers.getContractFactory("NFT");
  const nftContract = await nftFactory.deploy();
  await nftContract.deployed();
  console.log(`nftContract deployed to ${nftContract.address}`);
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
