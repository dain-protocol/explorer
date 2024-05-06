import { Cluster } from './cluster';

export enum PROGRAM_NAMES {
    // native built-ins
    ADDRESS_LOOKUP_TABLE = 'Address Lookup Table Program',
    COMPUTE_BUDGET = 'Compute Budget Program',
    CONFIG = 'Config Program',
    STAKE = 'Stake Program',
    SYSTEM = 'System Program',
    VOTE = 'Vote Program',

    // native precompiles
    SECP256K1 = 'Secp256k1 SigVerify Precompile',
    ED25519 = 'Ed25519 SigVerify Precompile',

    // spl
    ASSOCIATED_TOKEN = 'Associated Token Program',
    ACCOUNT_COMPRESSION = 'State Compression Program',
    FEATURE_PROPOSAL = 'Feature Proposal Program',
    LENDING = 'Lending Program',
    MEMO_1 = 'Memo Program v1',
    MEMO = 'Memo Program',
    NAME = 'Name Service Program',
    STAKE_POOL = 'Stake Pool Program',
    SWAP = 'Swap Program',
    TOKEN = 'Token Program',
    TOKEN_2022 = 'Token-2022 Program',
    TOKEN_METADATA = 'Token Metadata Program',
    TOKEN_VAULT = 'Token Vault Program',

    // other
    ACUMEN = 'Acumen Program',
    BREAK_SOLANA = 'Break Solana Program',
    CHAINLINK_ORACLE = 'Chainlink OCR2 Oracle Program',
    CHAINLINK_STORE = 'Chainlink Store Program',
    CLOCKWORK_1 = 'Clockwork Thread Program v1',
    CLOCKWORK_2 = 'Clockwork Thread Program v2',
    MANGO_GOVERNANCE = 'Mango Governance Program',
    MANGO_ICO = 'Mango ICO Program',
    MANGO_1 = 'Mango Program v1',
    MANGO_2 = 'Mango Program v2',
    MANGO_3 = 'Mango Program v3',
    MARINADE = 'Marinade Staking Program',
    MERCURIAL = 'Mercurial Stable Swap Program',
    METAPLEX = 'Metaplex Program',
    NFT_AUCTION = 'NFT Auction Program',
    NFT_CANDY_MACHINE = 'NFT Candy Machine Program',
    NFT_CANDY_MACHINE_V2 = 'NFT Candy Machine Program V2',
    ORCA_SWAP_1 = 'Orca Swap Program v1',
    ORCA_SWAP_2 = 'Orca Swap Program v2',
    ORCA_AQUAFARM = 'Orca Aquafarm Program',
    PORT = 'Port Finance Program',
    PYTH_DEVNET = 'Pyth Oracle Program',
    PYTH_TESTNET = 'Pyth Oracle Program',
    PYTH_MAINNET = 'Pyth Oracle Program',
    QUARRY_MERGE_MINE = 'Quarry Merge Mine',
    QUARRY_MINE = 'Quarry Mine',
    QUARRY_MINT_WRAPPER = 'Quarry Mint Wrapper',
    QUARRY_REDEEMER = 'Quarry Redeemer',
    QUARRY_REGISTRY = 'Quarry Registry',
    RAYDIUM_AMM = 'Raydium AMM Program',
    RAYDIUM_IDO = 'Raydium IDO Program',
    RAYDIUM_LP_1 = 'Raydium Liquidity Pool Program v1',
    RAYDIUM_LP_2 = 'Raydium Liquidity Pool Program v2',
    RAYDIUM_STAKING = 'Raydium Staking Program',
    SABER_ROUTER = 'Saber Router Program',
    SABER_SWAP = 'Saber Stable Swap Program',
    SERUM_1 = 'Serum Dex Program v1',
    SERUM_2 = 'Serum Dex Program v2',
    SERUM_3 = 'Serum Dex Program v3',
    SERUM_SWAP = 'Serum Swap Program',
    SERUM_POOL = 'Serum Pool',
    SOLEND = 'Solend Program',
    SOLIDO = 'Lido for Solana Program',
    STEP_SWAP = 'Step Finance Swap Program',
    SWIM_SWAP = 'Swim Swap Program',
    SWITCHBOARD = 'Switchboard Oracle Program',
    WORMHOLE = 'Wormhole',
    WORMHOLE_CORE = 'Wormhole Core Bridge',
    WORMHOLE_TOKEN = 'Wormhole Token Bridge',
    WORMHOLE_NFT = 'Wormhole NFT Bridge',
    SOLANART = 'Solanart',
    SOLANART_GO = 'Solanart - Global offers',
    STEPN_DEX = 'STEPN Dex',
    OPENBOOK_DEX = 'OpenBook Dex',
}

const ALL_CLUSTERS = [Cluster.Custom, Cluster.DAIN];

const LIVE_CLUSTERS = [Cluster.DAIN];

export const LOADER_IDS: { [key: string]: string } = {
    BPFLoader1111111111111111111111111111111111: 'BPF Loader',
    BPFLoader2111111111111111111111111111111111: 'BPF Loader 2',
    BPFLoaderUpgradeab1e11111111111111111111111: 'BPF Upgradeable Loader',
    MoveLdr111111111111111111111111111111111111: 'Move Loader',
    NativeLoader1111111111111111111111111111111: 'Native Loader',
} as const;

export type LoaderName = (typeof LOADER_IDS)[keyof typeof LOADER_IDS];

export type ProgramInfo = {
    name: string;
    deployments: Cluster[];
};

export const PROGRAM_INFO_BY_ID: { [address: string]: ProgramInfo } = {
    '11111111111111111111111111111111': {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.SYSTEM,
    },
    // spl
    ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.ASSOCIATED_TOKEN,
    },
    // native built-ins
    AddressLookupTab1e1111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.ADDRESS_LOOKUP_TABLE,
    },
    BrEAK7zGZ6dM71zUDACDqJnekihmwF15noTddWTsknjC: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.BREAK_SOLANA,
    },
    // other
    ComputeBudget111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.COMPUTE_BUDGET,
    },
    Config1111111111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.CONFIG,
    },
    Ed25519SigVerify111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.ED25519,
    },
    Feat1YXHhH6t1juaWF74WLcfv4XoNocjXA6sPWHNgAse: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.FEATURE_PROPOSAL,
    },
    KeccakSecp256k11111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.SECP256K1,
    },
    LendZqTs7gn5CTSJU1jWKhKuVpjJGom45nnwPb2AMTi: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.LENDING,
    },
    Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.MEMO_1,
    },
    MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.MEMO,
    },
    SPoo1Ku8WFXoNDMHPsrGSTSG1Y47rzgn41SLUNakuHy: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.STAKE_POOL,
    },
    Stake11111111111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.STAKE,
    },
    SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.SWAP,
    },
    TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.TOKEN,
    },
    TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.TOKEN_2022,
    },
    Vote111111111111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.VOTE,
    },
    auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.NFT_AUCTION,
    },
    metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.TOKEN_METADATA,
    },
    namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.NAME,
    },
    p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.METAPLEX,
    },
    vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.TOKEN_VAULT,
    },
};

export const SPECIAL_IDS: { [key: string]: string } = {
    '1nc1nerator11111111111111111111111111111111': 'Incinerator',
    Sysvar1111111111111111111111111111111111111: 'SYSVAR',
};

export const SYSVAR_IDS: { [key: string]: string } = {
    Sysvar1nstructions1111111111111111111111111: 'Sysvar: Instructions',
    SysvarC1ock11111111111111111111111111111111: 'Sysvar: Clock',
    SysvarEpochSchedu1e111111111111111111111111: 'Sysvar: Epoch Schedule',
    SysvarFees111111111111111111111111111111111: 'Sysvar: Fees',
    SysvarRecentB1ockHashes11111111111111111111: 'Sysvar: Recent Blockhashes',
    SysvarRent111111111111111111111111111111111: 'Sysvar: Rent',
    SysvarRewards111111111111111111111111111111: 'Sysvar: Rewards',
    SysvarS1otHashes111111111111111111111111111: 'Sysvar: Slot Hashes',
    SysvarS1otHistory11111111111111111111111111: 'Sysvar: Slot History',
    SysvarStakeHistory1111111111111111111111111: 'Sysvar: Stake History',
};

export const TOKEN_IDS: { [key: string]: string } = {
  TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: 'Token Program',
  TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb: 'Token-2022 Program',
} as const;

export type TokenProgram = 'spl-token' | 'spl-token-2022';
export function assertIsTokenProgram(program: string): asserts program is TokenProgram {
    if (program !== 'spl-token' && program !== 'spl-token-2022') throw new Error("Expected token program name of `spl-token` or `spl-token-2022`");
}
export function isTokenProgram(program: string): program is TokenProgram {
    try {
        assertIsTokenProgram(program);
        return true;
    } catch(e) {
        return false;
    }
}
