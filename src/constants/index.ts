import JSBI from "jsbi";
import {ChainId} from '../enums/index'

export * from "./addresses";
export * from "./natives";
export * from "./tokens";
export * from "./numbers";

export const INIT_CODE_HASH: string =
  "0x7edb55532c9a5d7bdedb5a640ae4ff9929cdaa8d48365bed84375c624a3726ca";



export const CHAIN_INIT_CODE_HASH: {[chainId in number]: string} = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.ROPSTEN]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0xbc92fd4a82da617eff9239cf9a6484c08bd5fb38daa1ac6d2f0ae03fd949a36c'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);

export enum SolidityType {
  uint8 = "uint8",
  uint256 = "uint256"
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt("0xff"),
  [SolidityType.uint256]: JSBI.BigInt(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  )
};

export const LAMBDA_URL =
  "https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev";

export const SOCKET_URL =
  "wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev";
