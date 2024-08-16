import type { FullyLoadedProject } from "~/scripts/project";

export const useProject = (hook: (project: Ref<FullyLoadedProject>) => void) =>
  waitFor(useState("project"), hook);

export function waitFor<T>(
  value: Ref<T | undefined>,
  hook: (value: Ref<T>) => void
) {
  if (value.value) {
    hook(value as Ref<T>);
  } else {
    const stop = watch(value, (v) => {
      if (v) {
        hook(value as Ref<T>);
        stop();
      }
    });
  }
}
