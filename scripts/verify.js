const main = async () => {
  const [deployer] = await ethers.getSigners();

  await hre.run("verify:verify", {
    address: `${process.env.GREBO_ADDRESS}`,
  });

  await hre.run("verify:verify", {
    address: `${process.env.OFFSET_ADDRESS}`,
    constructorArguments: [
      deployer.address,
      deployer.address,
      `${process.env.GREBO_ADDRESS}`,
    ],
  });
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
