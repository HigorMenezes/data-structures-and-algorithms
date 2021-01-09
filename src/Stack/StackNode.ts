class StackNode<T> {
  private _value: T;
  private _next?: StackNode<T>;

  constructor(value: T, next?: StackNode<T>) {
    this._value = value;
    this._next = next;
  }

  get value(): T {
    return this._value;
  }

  get next(): StackNode<T> | undefined {
    return this._next;
  }

  set next(newNext: StackNode<T> | undefined) {
    this._next = newNext;
  }

  toString(): string {
    let nodeString = `\t|\t${String(this._value)}\t|`;

    return nodeString;
  }
}

export default StackNode;
