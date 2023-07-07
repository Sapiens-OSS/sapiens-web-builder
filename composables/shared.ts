export const useMod = () => useState('mod', () => {
    return {
        index: {
            // General
            name: "",
            description: "",
            version: "",
            // preview: "",
            developer: "",
            website: "",

            _schemaCache: {
                title: "Mod Info",
                properties: {
                    name: {
                        type: "string",
                        description: "A name for your mod.",
                        examples: [
                            "An Example Mod"
                        ]
                    },
                    description: {
                        type: "string",
                        description: "A good description for your mod."
                    },
                    version: {
                        type: "string",
                        description: "A short tag to identify different feature sets. It's a good idea to follow semantic versioning (major.minor.patch).",
                        examples: [
                            "v1.0.0",
                        ]
                    },
                    developer: {
                        type: "string",
                        description: "The people who helped create your mod. Typically that's just you, but it can include credits to other people's code you're using.",
                        examples: [
                            "Me",
                        ]
                    },
                    website: {
                        type: "string",
                        description: "A personal or support website for you as the author, or support for the mod.",
                        examples: [
                            "https://example.com/",
                        ]
                    }
                }
            }
        },
        materials: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/material.schema.json",
        },
        recipes: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/recipe.recipe.json",
        },
        objects: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/object.schema.json",
        },
        storages: {
            _schema: "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/storage.schema.json",
        },
        researches: {},
    }

});