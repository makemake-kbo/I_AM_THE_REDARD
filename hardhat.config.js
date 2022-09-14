require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
    {
      version: "0.8.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    }
    ],
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    local: {
      url: "http://localhost:8545",
      accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [""],
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [""],
    },
    mainnet: {
      url: process.env.MAINNET_URL || "",
      accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [""],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY !== undefined ? [process.env.ETHERSCAN_API_KEY] : [""],
      goerli: process.env.ETHERSCAN_API_KEY
    },
  },
};
