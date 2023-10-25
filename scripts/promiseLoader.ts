export class PromiseLoader<T> {
  private promises: Promise<T[]>[];
  private completedCount: number = 0;
  public completedValues: Ref<T[]> = useState<T[]>("projects", () => []) as Ref<
    T[]
  >;

  constructor(
    promises: Promise<T[]>[],
    success: (t: T) => void,
    failure: (e: any) => void
  ) {
    this.promises = promises;
    promises.forEach((e) => {
      e.then((r) => {
        r.forEach((m) => {
          this.completedValues.value.push(m);
          success(m);
        });
      });
      e.catch((r) => {
        failure(r);
      });
      e.finally(() => {
        this.completedCount++;
      });
    });
  }

  total() {
    return this.promises.length;
  }

  remaining() {
    return this.total() - this.completedCount;
  }

  completed() {
    return this.completed;
  }
}
