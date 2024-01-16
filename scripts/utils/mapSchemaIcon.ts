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
  SparklesIcon,
  SpeakerWaveIcon,
} from "@heroicons/vue/24/outline";
import { type FunctionalComponent, type HTMLAttributes, type VNodeProps } from "vue";

// Some default-ish icons that hopefully match to common schema names
const iconMap: {
  [key: string]: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
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
};

export function mapSchemaIcon(
  title: string
): FunctionalComponent<HTMLAttributes & VNodeProps, {}, any> | undefined {
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
