import { ChainId } from "../enums";
import { Token } from "../entities/Token";
declare type ChainTokenMap = {
    readonly [chainId in ChainId]?: Token;
};
export declare const XMONEY: ChainTokenMap;
export declare const MONEY: ChainTokenMap;
export declare const WETH9: {
    [chainId: number]: Token;
};
export declare const USDC: {
    [chainId: number]: Token;
};
export declare const USDT: {
    [chainId: number]: Token;
};
export declare const WNATIVE: {
    [chainId: number]: Token;
};
export declare const DAI: ChainTokenMap;
export {};
