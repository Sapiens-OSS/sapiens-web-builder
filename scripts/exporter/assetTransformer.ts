import { AssetType, type Asset, type FullyLoadedProject } from "../project";
import type { Schema, UniversalSchemaType } from "../schemas";
import type { ExportTransformer } from "./transformers";
import JSZip from "jszip";

const assets: Ref<Asset[]> = useState("assets");
const project: Ref<FullyLoadedProject> = useState("project");

export function createAssetURL(asset: Asset): string {
    return `asset://${asset.id}`;
}

export function fetchAssetFromURL(url: string) {
    const id = url.substring(`asset://`.length);
    return assets.value.find((e) => e.id == id);
}

export class AssetTransformer implements ExportTransformer {
    toTranspile: Asset[] = [];

    async preHook(zip: JSZip) {
        this.toTranspile = [];
    }

    transform<T>(rootSchema: Schema, schema: UniversalSchemaType, data?: T | undefined): T | undefined {
        if (!(schema.type === 'string' && data)) {
            return data;
        }
        const typedData = data as string;
        const asset = fetchAssetFromURL(typedData);
        if (!asset) {
            return data;
        }

        if (!this.toTranspile.includes(asset)) {
            this.toTranspile.push(asset);
        }

        if (asset.type === AssetType.Image || asset.type === AssetType.Other) {
            // In this case, we give a full path
            return `assets/${asset.id}` as T;
        }


        // Otherwise a relative path (with no file extension)
        return asset.id as T;
    }

    async postHook(zip: JSZip) {
        console.log('asset post hook')
        // Copy resources into final zip
        console.log(this.toTranspile);
        await Promise.all(this.toTranspile.map(async (asset) => {
            const data = (await project.value.projectSource.loadAsset(asset.id)).data;
            switch (asset.type) {
                case AssetType.Image:
                case AssetType.Other:
                    zip.file(`assets/${asset.id}`, data);
                    break;
                case AssetType.Model:
                    zip.file(`models/${asset.id}.glb`, data);
                    break;
                case AssetType.VertexShader:
                    zip.file(`spv/${asset.id}.vert.spv`, data);
                    break;
                case AssetType.FragmentShader:
                    zip.file(`spv/${asset.id}.frag.spv`, data);
                    break;
                case AssetType.Texture:
                    zip.file(`img/${asset.id}`, data);
                    break;
            }
        }));
    }

}