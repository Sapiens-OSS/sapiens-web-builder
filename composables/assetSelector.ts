import type { Asset } from "~/scripts/project";

export const useAssetSelectorData = () => useState<{ resolve: (value: Asset) => void, reject: () => void, } | undefined>("assetSelector");

export const selectAsset: () => Promise<Asset> = () => {
    return new Promise<Asset>((resolve, reject) => {
        const assetData = useAssetSelectorData();
        assetData.value = {
            resolve: (asset: Asset) => {
                assetData.value = undefined;
                resolve(asset);
            },
            reject: () => {
                assetData.value = undefined;
                reject();
            }
        };
    });
};