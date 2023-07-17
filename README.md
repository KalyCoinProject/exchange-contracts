# KalySwap Smart Contracts
This repo contains all of the smart contracts used to run [KalySwap](https://kalyswap.io).

## Deployed Kalychain Mainnet Contracts
Factory address: `0xb7b7a31C69199EB3D7378E84499c5335A9E99311`

Router address: `0xA39723dC2713C9eECe0CecC74AC519Aa2dFB4206`

InitHash: `0x91b0fa855886c040a2fba5b67e7149d8d4d774e27c10798019a4ae8e3e83c5e0`

## Running
These contracts are compiled and deployed using [Hardhat](https://hardhat.org/). They can also be run using the Remix IDE.

To prepare the dev environment, run `yarn install`. To compile the contracts, run `yarn compile`. Yarn is available to install [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable) if you need it.

## Accessing the ABI
If you need to use any of the contract ABIs, you can install this repo as an npm package with `npm install --dev @kalycoinproject/exchange-contracts`. Then import the ABI like so: `import { abi as IKalyswapPairABI } from '@kalycoinproject/exchange-contracts/artifacts/contracts/kalyswap-core/interfaces/IKalyswapPair.sol/IKalyswapPair.json'`.

## Attribution
These contracts were adapted from these Uniswap repos: [uniswap-v2-core](https://github.com/Uniswap/uniswap-v2-core), [uniswap-v2-periphery](https://github.com/Uniswap/uniswap-v2-core), and [uniswap-lib](https://github.com/Uniswap/uniswap-lib).
