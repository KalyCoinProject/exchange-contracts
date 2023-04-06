import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import "hardhat-tracer";
import { task, HardhatUserConfig } from "hardhat/config";
import "ts-node/register";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.16"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          },
          outputSelection: {
            "*": {
                "*": ["storageLayout"],
            },
          },
        }
      },
      {
        version: "0.7.0"
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          },
          outputSelection: {
            "*": {
                "*": ["storageLayout"],
            },
          },
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          },
          outputSelection: {
            "*": {
                "*": ["storageLayout"],
            },
          },
        }
      },
    ]
  },
  networks: {
    localhost: {
      gasPrice: 470000000000,
      chainId: 3888,
      url: "http://127.0.0.1:8545/"
    },
    hardhat: {
      gasPrice: 470000000000,
      chainId: 3888,
      forking: {
        url: 'https://rpc.kalychain.io/rpc', 
        enabled: true
      },
      accounts: {
        accountsBalance: "1000000000000000000000000000000", 
        count: 50
      }
    },
    testnet: {
      url: 'https://testnetrpc.kalychain.io/rpc',
      gasPrice: 470000000000,
      chainId: 3889,
      accounts: []
    },
    mainnet: {
      url: 'https://rpc.kalychain.io/rpc',
      gasPrice: 470000000000,
      chainId: 3888,
      accounts: []
    }
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  gasReporter: {
    enabled: true,
    showTimeSpent: true, 
    gasPrice: 225
  },
};

export default config;