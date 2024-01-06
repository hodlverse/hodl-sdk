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
  // if uncomment next line, then build fails
  // [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, STAKING_ADDRESS[ChainId.BSC_TESTNET], 18, 'XMONEY', 'XMONEY'),
}
export const MONEY: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, MONEY_ADDRESS[ChainId.MAINNET], 18, 'MONEY', 'MONEY'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, MONEY_ADDRESS[ChainId.ROPSTEN], 18, 'MONEY', 'MONEY'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, MONEY_ADDRESS[ChainId.SEPOLIA], 18, 'MONEY', 'MONEY'),
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
  [ChainId.MAINNET]: new Token(
      ChainId.MAINNET,
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      6,
      "USDC",
      "USD Coin"
  ),
  [ChainId.SEPOLIA]: new Token(
      ChainId.SEPOLIA,
      "0xCA6C31cc71fb8f00dC2C465299f605039e0E1f4b",
      6,
      "USDC",
      "USD Coin"
  ),
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
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, '0xad6d458402f60fd3bd25163575031acdce07538d', 18, 'DAI', 'Dai Stablecoin'),
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
