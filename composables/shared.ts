export const useMod = () => useState('mod', () => {
    return {
        index: {
            // General
            name: "",
            description: "",
            version: "",
            type: -1,
            // preview: "",
            developer: "",
            website: "",

            // Not a true schema, but the rendering for the home page is different anyways
            _schema: {
                // General
                name: {
                    type: "short",
                    placeholder: "An Example Mod",
                    description: "A name for your mod. We will generate a 'slug' for you from this.",
                    required: true,
                },
                description: {
                    type: "long",
                    placeholder: "A very excellent description about your mod",
                    description: "A good description for your mod. Additionally, you should mention that your mod requires the DDAPI from Hammerstone.",
                    required: false,
                },
                version: {
                    type: "short",
                    placeholder: "1.0.0",
                    description: "A short tag to identify different feature sets. It's a good idea to follow semantic versioning (major.minor.patch).",
                    required: false
                },
                type: {
                    type: "options",
                    options: [
                        "world",
                        "app"
                    ],
                    description: "Whether your mod will function as a 'world' or an 'app' mod. You can find out the difference over on the Sapiens Modding Wiki.",
                    required: true,
                },
                // preview: {},
                developer: {
                    type: "short",
                    placeholder: "Me",
                    description: "The people who helped create your mod. Typically that's just you, but it can include credits to other people's code you're using.",
                    required: false,
                },
                website: {
                    type: "short",
                    placeholder: "https://example.com/",
                    description: "A personal or support website for you as the author, or support for the mod.",
                    required: false,
                }
            }
        },
        materials: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/material.schema.json",
        },
        recipes: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/recipe.schema.json",
        },
        objects: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/object.schema.json",
        },
        storages: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-framework/feature/data-driven-api/schemas/storage.schema.json",
        },
        researches: {},
    }

});