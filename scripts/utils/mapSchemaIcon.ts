import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  BeakerIcon,
  BoltIcon,
  CloudIcon,
  CubeIcon,
  EyeDropperIcon,
  LightBulbIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
  SparklesIcon,
  SpeakerWaveIcon,
} from "@heroicons/vue/24/outline";
import { type ComponentOptionsMixin, type DefineComponent, type FunctionalComponent, type HTMLAttributes, type PublicProps, type VNodeProps } from "vue";
import RecipeIcon from "~/components/icons/RecipeIcon.vue";

export type SchemaIconComponent = DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<globalThis.ExtractPropTypes<{}>>, {}, {}>
  | FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>

// Some default-ish icons that hopefully match to common schema names
const iconMap: {
  [key: string]: SchemaIconComponent;
} = {
  research: AcademicCapIcon,
  learn: AcademicCapIcon,
  shared: CubeIcon,
  object: RectangleGroupIcon,
  storage: ArchiveBoxIcon,
  fluid: BeakerIcon,
  liquid: BeakerIcon,
  electric: BoltIcon,
  magic: SparklesIcon,
  spell: SparklesIcon,
  sound: SpeakerWaveIcon,
  weather: CloudIcon,
  color: EyeDropperIcon,
  light: LightBulbIcon,
  recipe: RecipeIcon,
};

export function mapSchemaIcon(
  title: string
): SchemaIconComponent | undefined {
  const words = title.toLowerCase().split(" ");
  const keys = Object.keys(iconMap);
  for (let w = 0; w < words.length; w++) {
    for (let k = 0; k < keys.length; k++) {
      if (words[w] == keys[k]) {
        return iconMap[keys[k]];
      }
    }
  }
  return undefined;
}
