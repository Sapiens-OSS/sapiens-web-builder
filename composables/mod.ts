import { RectangleStackIcon } from "@heroicons/vue/20/solid";
import {
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
  CubeIcon,
  CubeTransparentIcon,
  QueueListIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/outline";
import {
  FunctionalComponent,
  HTMLAttributes,
  VNodeProps,
} from "nuxt/dist/app/compat/capi";
import GitHubIcon from "assets/github";

export const useMod = () =>
  useState("mod", () => {
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
              examples: ["An Example Mod"],
            },
            description: {
              type: "string",
              description: "A good description for your mod.",
            },
            version: {
              type: "string",
              description:
                "A short tag to identify different feature sets. It's a good idea to follow semantic versioning (major.minor.patch).",
              examples: ["v1.0.0"],
            },
            developer: {
              type: "string",
              description:
                "The people who helped create your mod. Typically that's just you, but it can include credits to other people's code you're using.",
              examples: ["Me"],
            },
            website: {
              type: "string",
              description:
                "A personal or support website for you as the author, or support for the mod.",
              examples: ["https://example.com/"],
            },
          },
        },
      },
    };
  });

export const tabs: {
  _schema: string;
  schema?: string;
  filled?: boolean;
  icon?: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
  name?: string;
  id?: string;
}[] = [
  {
    _schema:
      "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/material.schema.json",
  },
  {
    _schema:
      "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/recipe.recipe.json",
  },
  {
    _schema:
      "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/updating-schemas/schemas/object.schema.json",
  },
  {
    _schema:
      "https://raw.githubusercontent.com/Sapiens-OSS/hammerstone-schemas/main/schemas/storage.schema.json",
  },
];

export const locales: {
  [key: string]: {
    icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
    name: string;
  };
} = {
  "hammerstone.material.schema": {
    icon: Squares2X2Icon,
    name: "Materials",
  },
  "hammerstone.recipe.schema": {
    icon: QueueListIcon,
    name: "Recipes",
  },
  "hammerstone.storage.schema": {
    icon: RectangleStackIcon,
    name: "Storages",
  },
  "hammerstone.object.schema": {
    icon: CubeIcon,
    name: "Objects",
  },
};

export const constantNavigation: {
  name: string;
  href: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
}[] = [
  {
    name: "Mod Info",
    href: "/modinfo",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "GitHub",
    href: "/github",
    icon: GitHubIcon,
  },
  {
    name: "Export",
    href: "/export",
    icon: ArrowDownTrayIcon,
  },
];

export const navigation: Ref<{
  name: string;
  href: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
}[]> = ref(constantNavigation);

export async function fillOutTabs() {
  await Promise.allSettled(
    tabs.map((e, i) =>
      (async () => {
        if (e.filled) {
          return;
        }

        const schema: string = await $fetch(e._schema);
        const schemaObj = JSON.parse(schema);

        const locale = locales[schemaObj["$id"]];

        tabs[i] = {
          _schema: e._schema,
          schema: schemaObj,
          filled: true,
          icon: locale.icon || CubeTransparentIcon,
          name: locale.name || schemaObj.title,
          id: schemaObj["$id"],
        };
      })()
    )
  );

  navigation.value = constantNavigation;

  tabs.reverse().forEach((e) => {
    if(!e) return;
    if (!(e.filled && e.name && e.icon)) {
      return;
    }
    navigation.value.splice(1, 0, {
      name: e.name,
      href: `/schema/${e.id}`,
      icon: e.icon,
    });
  });
}
