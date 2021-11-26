import { Token } from "../entities/Token";
export declare const computePairAddress: ({ factoryAddress, tokenA, tokenB }: {
    factoryAddress: string;
    tokenA: Token;
    tokenB: Token;
}) => string;
export declare enum FeeAmount {
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}
export declare const computeConstantProductPoolAddress: ({ factoryAddress, tokenA, tokenB, fee }: {
    factoryAddress: string;
    tokenA: Token;
    tokenB: Token;
    fee: FeeAmount;
}) => string;
