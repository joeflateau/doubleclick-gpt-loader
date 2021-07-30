export class AsyncLazy<T> implements PromiseLike<T> {
  #promise: Promise<T> | null = null;

  constructor(private executor: () => Promise<T>) {}

  private invoke() {
    return (this.#promise =
      this.#promise ||
      new Promise((resolve, reject) => this.executor().then(resolve, reject)));
  }

  then<TResult1 = T, TResult2 = never>(
    onFulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onRejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null
  ): Promise<TResult1 | TResult2> {
    return this.invoke().then(onFulfilled, onRejected);
  }
}
