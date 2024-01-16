export class PromiseLoader<T> {
  private promises: () => Promise<T[]>[];
  private success: (t: T) => void;
  private failure: (e: any) => void;

  private completedCount: number = 0;
  public completedValues: Ref<T[]> = useState<T[]>("projects", () => []) as Ref<
    T[]
  >;

  constructor(
    promises: () => Promise<T[]>[],
    success: (t: T) => void,
    failure: (e: any) => void
  ) {
    this.promises = promises;
    this.success = success;
    this.failure = failure;
    let proms = this.promises();
    proms.forEach((e) => {
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

  refresh() {
    let proms = this.promises();
    this.completedValues.value = [];
    this.completedCount = 0;
    proms.forEach((e) => {
      e.then((r) => {
        r.forEach((m) => {
          this.completedValues.value.push(m);
          this.success(m);
        });
      });
      e.catch((r) => {
        this.failure(r);
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
