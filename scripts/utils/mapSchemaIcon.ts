import {
  AcademicCapIcon,
  CubeIcon,
  InboxIcon,
  RectangleGroupIcon,
} from "@heroicons/vue/24/outline";
import { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue";

const iconMap: {
  [key: string]: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>;
} = {
  research: AcademicCapIcon,
  learn: AcademicCapIcon,
  shared: CubeIcon,
  object: RectangleGroupIcon,
  storage: InboxIcon,
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
