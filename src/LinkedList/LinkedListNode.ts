class LinkedListNode<T> {
  private _value: T;
  private _next?: LinkedListNode<T>;
  private _prev?: LinkedListNode<T>;

  constructor(value: T, next?: LinkedListNode<T>, prev?: LinkedListNode<T>) {
    this._value = value;
    this._next = next;
    this._prev = prev;
  }

  get value(): T {
    return this._value;
  }

  get next(): LinkedListNode<T> | undefined {
    return this._next;
  }

  set next(newNext: LinkedListNode<T> | undefined) {
    this._next = newNext;
  }

  get prev(): LinkedListNode<T> | undefined {
    return this._prev;
  }

  set prev(newPrev: LinkedListNode<T> | undefined) {
    this._prev = newPrev;
  }

  toString(): string {
    let nodeString = `${String(this._prev?._value)} <- ${String(
      this._value,
    )} -> ${String(this._next?._value)}`;

    return nodeString;
  }
}

export default LinkedListNode;
