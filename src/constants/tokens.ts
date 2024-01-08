import {MONEY_ADDRESS, STAKING_ADDRESS, WETH9_ADDRESS, WNATIVE_ADDRESS} from "./addresses";

import { ChainId } from "../enums";
import { Token } from "../entities/Token";


type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}
export const XMONEY: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, STAKING_ADDRESS[ChainId.MAINNET], 18, 'XMONEY', 'XMONEY'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, STAKING_ADDRESS[ChainId.ROPSTEN], 18, 'XMONEY', 'XMONEY'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, STAKING_ADDRESS[ChainId.SEPOLIA], 18, 'XMONEY', 'XMONEY'),
  [ChainId.MATIC_TESTNET]: new Token(ChainId.MATIC_TESTNET, STAKING_ADDRESS[ChainId.MATIC_TESTNET], 18, 'XMONEY', 'XMONEY'),
  // if uncomment next line, then build fails
  // [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, STAKING_ADDRESS[ChainId.BSC_TESTNET], 18, 'XMONEY', 'XMONEY'),
}
export const MONEY: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, MONEY_ADDRESS[ChainId.MAINNET], 18, 'MONEY', 'MONEY'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, MONEY_ADDRESS[ChainId.ROPSTEN], 18, 'MONEY', 'MONEY'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, MONEY_ADDRESS[ChainId.SEPOLIA], 18, 'MONEY', 'MONEY'),
  [ChainId.MATIC_TESTNET]: new Token(ChainId.MATIC_TESTNET, MONEY_ADDRESS[ChainId.MATIC_TESTNET], 18, 'MONEY', 'MONEY'),
  // if uncomment next line, then build fails
  // [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, MONEY_ADDRESS[ChainId.BSC_TESTNET], 18, 'MONEY', 'MONEY'),
}
export const WETH9: { [chainId: number]: Token } = {
  [ChainId.SEPOLIA]: new Token(
      ChainId.SEPOLIA,
      WETH9_ADDRESS[ChainId.SEPOLIA],
      18,
      "WETH9",
      "Wrapped Ether"
  ),
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    WETH9_ADDRESS[ChainId.MAINNET],
    18,
    "WETH9",
    "Wrapped Ether"
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    WETH9_ADDRESS[ChainId.ROPSTEN],
    18,
    "WETH9",
    "Wrapped Ether"
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    WETH9_ADDRESS[ChainId.RINKEBY],
    18,
    "WETH9",
    "Wrapped Ether"
  ),
  [ChainId.GÖRLI]: new Token(
    ChainId.GÖRLI,
    WETH9_ADDRESS[ChainId.GÖRLI],
    18,
    "WETH9",
    "Wrapped Ether"
  ),
  [ChainId.KOVAN]: new Token(
    ChainId.KOVAN,
    WETH9_ADDRESS[ChainId.KOVAN],
    18,
    "WETH9",
    "Wrapped Ether"
  ),
  [ChainId.ARBITRUM]: new Token(
    ChainId.ARBITRUM,
    WETH9_ADDRESS[ChainId.ARBITRUM],
    18,
    "WETH9",
    "Wrapped Ether"
  ),
  [ChainId.ARBITRUM_TESTNET]: new Token(
    ChainId.ARBITRUM_TESTNET,
    WETH9_ADDRESS[ChainId.ARBITRUM_TESTNET],
    18,
    "WETH",
    "Wrapped Ether"
  ),

  [ChainId.BSC]: new Token(
    ChainId.BSC,
    WETH9_ADDRESS[ChainId.BSC],
    18,
    "WETH",
    "Wrapped Ether"
  ),

  [ChainId.FANTOM]: new Token(
    ChainId.FANTOM,
    WETH9_ADDRESS[ChainId.FANTOM],
    18,
    "WETH",
    "Wrapped Ether"
  ),

  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    WETH9_ADDRESS[ChainId.MATIC],
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.MATIC_TESTNET]: new Token(
      ChainId.MATIC_TESTNET,
      WETH9_ADDRESS[ChainId.MATIC_TESTNET],
      18,
      "WETH",
      "Wrapped Ether"
  ),

  [ChainId.OKEX]: new Token(
    ChainId.OKEX,
    WETH9_ADDRESS[ChainId.OKEX],
    18,
    "WETH",
    "Wrapped Ether"
  ),

  [ChainId.HECO]: new Token(
    ChainId.HECO,
    WETH9_ADDRESS[ChainId.HECO],
    18,
    "WETH",
    "Wrapped Ether"
  ),

  [ChainId.HARMONY]: new Token(
    ChainId.HARMONY,
    WETH9_ADDRESS[ChainId.HARMONY],
    18,
    "WETH",
    "Wrapped Ether"
  ),

  [ChainId.XDAI]: new Token(
    ChainId.XDAI,
    WETH9_ADDRESS[ChainId.XDAI],
    18,
    "WETH",
    "Wrapped Ether"
  ),

  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    WETH9_ADDRESS[ChainId.AVALANCHE],
    18,
    "WETH",
    "Wrapped Ether"
  )
};

export const USDC: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, '0xCA6C31cc71fb8f00dC2C465299f605039e0E1f4b', 6, 'USDC', 'USD Coin'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, '0x0D9C8723B343A8368BebE0B5E89273fF8D712e3C', 6, 'USDC', 'USD Coin'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xb7a4F3E9097C08dA09517b5aB877F7a917224ede', 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 6, 'USDC', 'USD Coin'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6, 'USDC', 'USD Coin'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USD Coin'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, '0x5A679055d1a1ac067F34b2e5109B4198DA0Ebf43', 18, 'USDC', 'USD Coin'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x985458E523dB3d53125813eD68c274899e9DfAb4', 6, 'USDC', 'USD Coin'),
  [ChainId.HECO]: new Token(ChainId.HECO, '0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B', 6, 'USDC', 'USD Coin'),
  [ChainId.OKEX]: new Token(ChainId.OKEX, '0xc946DAf81b08146B1C7A8Da2A851Ddf2B3EAaf85', 18, 'USDC', 'USD Coin'),
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC_TESTNET]: new Token(ChainId.MATIC_TESTNET, '0x14a3DD807E5bC85Ba683F1fc15f632cf3472e777', 18, 'USDC', 'USD Coin'),
};
export const USDT: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
      ChainId.MAINNET,
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      6,
      "USDT",
      "Tether USD"
  ),
  [ChainId.SEPOLIA]: new Token(
      ChainId.SEPOLIA,
      "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06",
      6,
      "USDT",
      "Tether USD"
  ),
  [ChainId.MATIC_TESTNET]: new Token(
      ChainId.MATIC_TESTNET,
      "0x03E9587Af8465Aab57Efc5267264c62725479bFc",
      18,
      "USDT",
      "Tether USD"
  ),
};

export const WNATIVE: { [chainId: number]: Token } = {
  [ChainId.SEPOLIA]: WETH9[ChainId.SEPOLIA],
  [ChainId.MAINNET]: WETH9[ChainId.MAINNET],
  [ChainId.ROPSTEN]: WETH9[ChainId.ROPSTEN],
  [ChainId.RINKEBY]: WETH9[ChainId.RINKEBY],
  [ChainId.GÖRLI]: WETH9[ChainId.GÖRLI],
  [ChainId.KOVAN]: WETH9[ChainId.KOVAN],
  [ChainId.FANTOM]: new Token(
    ChainId.FANTOM,
    WNATIVE_ADDRESS[ChainId.FANTOM],
    18,
    "WFTM",
    "Wrapped FTM"
  ),
  [ChainId.FANTOM_TESTNET]: new Token(
    ChainId.FANTOM_TESTNET,
    WNATIVE_ADDRESS[ChainId.FANTOM_TESTNET],
    18,
    "FTM",
    "Wrapped FTM"
  ),
  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    WNATIVE_ADDRESS[ChainId.MATIC],
    18,
    "WMATIC",
    "Wrapped Matic"
  ),
  [ChainId.MATIC_TESTNET]: new Token(
    ChainId.MATIC_TESTNET,
    WNATIVE_ADDRESS[ChainId.MATIC_TESTNET],
    18,
    "WMATIC",
    "Wrapped Matic"
  ),
  [ChainId.XDAI]: new Token(
    ChainId.XDAI,
    WNATIVE_ADDRESS[ChainId.XDAI],
    18,
    "WXDAI",
    "Wrapped xDai"
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    WNATIVE_ADDRESS[ChainId.BSC],
    18,
    "WBNB",
    "Wrapped BNB"
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    WNATIVE_ADDRESS[ChainId.BSC_TESTNET],
    18,
    "WBNB",
    "Wrapped BNB"
  ),
  [ChainId.ARBITRUM]: WETH9[ChainId.ARBITRUM],
  [ChainId.ARBITRUM_TESTNET]: WETH9[ChainId.ARBITRUM_TESTNET],
  [ChainId.MOONBEAM_TESTNET]: new Token(
    ChainId.MOONBEAM_TESTNET,
    WNATIVE_ADDRESS[ChainId.MOONBEAM_TESTNET],
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    WNATIVE_ADDRESS[ChainId.AVALANCHE],
    18,
    "WAVAX",
    "Wrapped AVAX"
  ),
  [ChainId.AVALANCHE_TESTNET]: new Token(
    ChainId.AVALANCHE_TESTNET,
    WNATIVE_ADDRESS[ChainId.AVALANCHE_TESTNET],
    18,
    "WAVAX",
    "Wrapped AVAX"
  ),
  [ChainId.HECO]: new Token(
    ChainId.HECO,
    WNATIVE_ADDRESS[ChainId.HECO],
    18,
    "WHT",
    "Wrapped HT"
  ),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    WNATIVE_ADDRESS[ChainId.HECO_TESTNET],
    18,
    "WHT",
    "Wrapped HT"
  ),
  [ChainId.HARMONY]: new Token(
    ChainId.HARMONY,
    WNATIVE_ADDRESS[ChainId.HARMONY],
    18,
    "WONE",
    "Wrapped ONE"
  ),
  [ChainId.HARMONY_TESTNET]: new Token(
    ChainId.HARMONY_TESTNET,
    WNATIVE_ADDRESS[ChainId.HARMONY_TESTNET],
    18,
    "WONE",
    "Wrapped ONE"
  ),
  [ChainId.OKEX]: new Token(
    ChainId.OKEX,
    WNATIVE_ADDRESS[ChainId.OKEX],
    18,
    "WOKT",
    "Wrapped OKExChain"
  ),
  [ChainId.OKEX_TESTNET]: new Token(
    ChainId.OKEX_TESTNET,
    WNATIVE_ADDRESS[ChainId.OKEX_TESTNET],
    18,
    "WOKT",
    "Wrapped OKExChain"
  ),
  [ChainId.CELO]: new Token(
    ChainId.CELO,
    WNATIVE_ADDRESS[ChainId.CELO],
    18,
    "CELO",
    "Celo"
  ),
  [ChainId.PALM]: new Token(
    ChainId.PALM,
    WNATIVE_ADDRESS[ChainId.PALM],
    18,
    "WPALM",
    "Wrapped Palm"
  ),
};
export const DAI: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, '0x14A27F9C915D9AF984b7F319103FAA05C2457a3C', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.MATIC_TESTNET]: new Token(ChainId.MATIC_TESTNET, '0x725C2FDf6f643D7FC04eF92E5d355F9EbE483D98', 18, 'DAI', 'Dai Stablecoin'),
}

// function hardcodedSymbol(address: Address): string|null {
//   if (address.toHex() === '0x0d840469d56c0c1725d1a64da6a7e9e0143f4a10') {
//     return 'WETH'
//   }
//   if (address.toHex() === '0x2b4ebd749c6ac2cd8d80fd8e2198e2360248ecc1') {
//     return 'DAI'
//   }
//   if (address.toHex() === '0x7bbba710c55e48e460bf72e1cc2e1a3a1ca9290b') {
//     return 'USDT'
//   }
//   if (address.toHex() === '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee') {
//     return 'BUSD'
//   }
//   return null
// }
//
// function hardcodedName(address: Address): string|null {
//   if (address.toHex() === '0x0d840469d56c0c1725d1a64da6a7e9e0143f4a10') {
//     return 'Wrapped Ether'
//   }
//   if (address.toHex() === '0x2b4ebd749c6ac2cd8d80fd8e2198e2360248ecc1') {
//     return 'Binance-Peg Dai Token'
//   }
//   if (address.toHex() === '0x7bbba710c55e48e460bf72e1cc2e1a3a1ca9290b') {
//     return 'Binance-Peg USDT Token'
//   }
//   if (address.toHex() === '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee') {
//     return 'Binance USD'
//   }
//   return null
// }
//
// function hardcodedDecimals(address: Address) : BigInt | null{
//   if (address.toHex() === '0x0d840469d56c0c1725d1a64da6a7e9e0143f4a10') {
//     return BigInt.fromI32(18)
//   }
//   if (address.toHex() === '0x2b4ebd749c6ac2cd8d80fd8e2198e2360248ecc1') {
//     return BigInt.fromI32(18)
//   }
//   if (address.toHex() === '0x7bbba710c55e48e460bf72e1cc2e1a3a1ca9290b') {
//     return BigInt.fromI32(18)
//   }
//   if (address.toHex() === '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee') {
//     return BigInt.fromI32(18)
//   }
//   return null
// }
//
// function hardcodedTotalSupply(address: Address): BigInt | null {
//   if (address.toHex() === '0x0d840469d56c0c1725d1a64da6a7e9e0143f4a10') {
//     return BigInt.fromI32(1)
//   }
//   if (address.toHex() === '0x2b4ebd749c6ac2cd8d80fd8e2198e2360248ecc1') {
//     return BigInt.fromI32(1)
//   }
//   if (address.toHex() === '0x7bbba710c55e48e460bf72e1cc2e1a3a1ca9290b') {
//     return BigInt.fromI32(1)
//   }
//   if (address.toHex() === '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee') {
//     return BigInt.fromI32(1)
//   }
//   return null
// }
