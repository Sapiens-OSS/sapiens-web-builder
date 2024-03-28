import type { Asset } from "./project";

export const assetPromises: Ref<
  { resolve: (a: Asset) => void; reject: () => void } | undefined
> = ref();

export default function selectAsset(): Promise<Asset | null> {
  return new Promise<Asset | null>((resolve) => {
    assetPromises.value = {
      resolve: (a: Asset) => {
        assetPromises.value = undefined;
        resolve(a);
      },
      reject: () => {
        assetPromises.value = undefined;
        resolve(null);
      },
    };
  });
}
