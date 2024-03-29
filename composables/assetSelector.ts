import type { Asset, AssetType } from "~/scripts/project";

export const useAssetSelectorData = () => useState<{ resolve: (value: Asset) => void, reject: () => void, assetType: AssetType } | undefined>("assetSelector");

export const selectAsset: (assetType: AssetType) => Promise<Asset | null> = (assetType: AssetType) => {
    return new Promise<Asset | null>((resolve) => {
        const assetData = useAssetSelectorData();
        assetData.value = {
            resolve: (asset: Asset) => {
                assetData.value = undefined;
                resolve(asset);
            },
            reject: () => {
                assetData.value = undefined;
                resolve(null);
            },
            assetType,
        };
    });
};