import type { FullyLoadedProject } from "~/scripts/project";

export function waitFor<T>(value: Ref<T | undefined>) {
  return new Promise<Ref<T>>((r) => {
    if (value.value) {
      return r(value as Ref<T>);
    } else {
      const stop = watch(value, (v) => {
        if (v) {
          r(value as Ref<T>);
          stop();
        }
      });
    }
  });
}
