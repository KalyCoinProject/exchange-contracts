# KalySwap Smart Contracts
This repo contains all of the smart contracts used to run [KalySwap](https://kalyswap.io).

## Deployed Testnet Contracts
Factory address: `0x775329A510c0b45D66F2358d44B929d41A253064`

Router address: `0x6318EcDbae6B469D39C38949eDC671f4bA8A6172`


## Running
These contracts are compiled and deployed using [Hardhat](https://hardhat.org/). They can also be run using the Remix IDE.

To prepare the dev environment, run `yarn install`. To compile the contracts, run `yarn compile`. Yarn is available to install [here](https://classic.yarnpkg.com/en/docs/install/#debian-stable) if you need it.

## Accessing the ABI
If you need to use any of the contract ABIs, you can install this repo as an npm package with `npm install --dev @kalycoinproject/exchange-contracts`. Then import the ABI like so: `import { abi as IKalyswapPairABI } from '@kalycoinproject/exchange-contracts/artifacts/contracts/kalyswap-core/interfaces/IKalyswapPair.sol/IKalyswapPair.json'`.

## Attribution
These contracts were adapted from these Uniswap repos: [uniswap-v2-core](https://github.com/Uniswap/uniswap-v2-core), [uniswap-v2-periphery](https://github.com/Uniswap/uniswap-v2-core), and [uniswap-lib](https://github.com/Uniswap/uniswap-lib).
