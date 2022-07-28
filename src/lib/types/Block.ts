export interface Block {
    number: number,
    hash: string,
    parentHash: string,
    nonce: number,
    sha3Uncles: string,
    logsBloom: string,
    transactionsRoot: string,
    stateRoot: string,
    miner: string,
    difficulty: string,
    totalDifficulty: string,
    extraData: string,
    size: number,
    gasLimit: number
    gasUsed: number,
    timestamp: number,
    transactions: (Array<Object> | Array<string>),
    uncles: Array<string>
}
