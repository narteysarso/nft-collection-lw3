const {ethers} = require("hardhat");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main(){
    const crypotdevContract = await ethers.getContractFactory("CryptoDevs");

    const deployedCrypotdevContract = await crypotdevContract.deploy(
        METADATA_URL,
        WHITELIST_CONTRACT_ADDRESS
    );


    await deployedCrypotdevContract.deployed();

    console.log(
        "Crypo Devs Contract Address:",
        deployedCrypotdevContract.address
    );


}

main().then(()=> process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});