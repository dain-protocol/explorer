export enum ClusterStatus {
    Connected,
    Connecting,
    Failure,
}

export enum Cluster {
    DAIN,
    Custom,
}

export const CLUSTERS = [Cluster.DAIN, Cluster.Custom];

export function clusterSlug(cluster: Cluster): string {
    switch (cluster) {
        case Cluster.DAIN:
            return 'mainnet-beta';
        case Cluster.Custom:
            return 'custom';
    }
}

export function clusterName(cluster: Cluster): string {
    switch (cluster) {
        case Cluster.DAIN:
            return 'DAIN';
        case Cluster.Custom:
            return 'Custom';
    }
}

export const DAIN_RPC_URL = 'https://dainrpc.ngrok.app';

export function clusterUrl(cluster: Cluster, customUrl: string): string {
    const modifyUrl = (url: string): string => {
        if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
            return url;
        } else {
            return url.replace('api', 'explorer-api');
        }
    };

    switch (cluster) {
        case Cluster.DAIN:
            return process.env.NEXT_PUBLIC_DEVNET_RPC_URL ?? modifyUrl(DAIN_RPC_URL);
        case Cluster.Custom:
            return customUrl;
    }
}

export const DEFAULT_CLUSTER = Cluster.DAIN;
