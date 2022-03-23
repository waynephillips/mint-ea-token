// credit - https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js

const HDWalletProvider = require("@truffle/hdwallet-provider");
const web3 = require("web3");
const fs = require("fs");
const MNEMONIC = fs.readFileSync(".secret").toString().trim();
const NODE_API_KEY = "9403ee03acdf42088eb7cb1ec0e43ea9"; //infurakey for rinkeby
const NFT_CONTRACT_ADDRESS = "0x5E9A75e1a1f9A178FFe89518A5Fee37a72E47433";   //SolnSquareVerifier Contract Address
const OWNER_ADDRESS = "0xF89cAE4Be6d11a98a531cb1c7bbbBe3D321c6A96";
const NUM_NFT_TOKENS = 10;
const NFT_ABI = JSON.parse(fs.readFileSync("./eth-contracts/build/contracts/ERC721Mintable.json"));

async function main() {
  const provider = new HDWalletProvider( MNEMONIC,"https://rinkeby.infura.io/v3/" + NODE_API_KEY);
  const web3Instance = new web3(provider);

if (NFT_CONTRACT_ADDRESS) {
    const nftContract = new web3Instance.eth.Contract(
      NFT_ABI.abi,
      NFT_CONTRACT_ADDRESS,
      {  "gas": 4712388, "gasPrice": 100000000000 }
    );

    // WaynesRealEstateToken NFTs issued directly to the owner.
    let tokenid = 100;
    let i = 0;
    result = await nftContract.methods.mint(OWNER_ADDRESS,102).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,103).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,104).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,105).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,106).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,107).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,108).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,109).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,110).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
    result = await nftContract.methods.mint(OWNER_ADDRESS,111).send({from:OWNER_ADDRESS});
    console.log("Address Minted. Transaction: " + result.transactionHash);
  } else {
    console.error("Add NFT_CONTRACT_ADDRESS to the environment variables");
  }
}

main();
