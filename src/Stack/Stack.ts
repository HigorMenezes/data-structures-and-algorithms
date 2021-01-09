import StackNode from "./StackNode";

class Stack<T> {
  private _head?: StackNode<T>;
  private _size: number = 0;

  constructor() {}

  private increaseSize(): void {
    this._size++;
  }

  private decreaseSize(): void {
    this._size--;
  }

  public size() {
    return this._size;
  }

  public isEmpty() {
    return !this._head;
  }

  public top(): T | undefined {
    return this._head?.value;
  }

  public push(value: T): void {
    const newNode = new StackNode(value);

    if (this.isEmpty()) {
      this._head = newNode;
    } else {
      newNode.next = this._head;
      this._head = newNode;
    }

    this.increaseSize();
  }

  public pop(): T | undefined {
    let poppedValue: T | undefined;

    if (!this.isEmpty()) {
      poppedValue = this._head!.value;
      this._head = this._head!.next;

      this.decreaseSize();
    }

    return poppedValue;
  }

  public toArray(): T[] {
    let stackArray: T[] = [];

    let currentNode = this._head;
    while (currentNode) {
      stackArray.push(currentNode.value);

      currentNode = currentNode.next;
    }

    return stackArray;
  }

  public toString(): string {
    let StackArrayString: string[] = [];

    if (this.isEmpty()) {
      return "";
    }

    let currentNode = this._head;
    while (currentNode) {
      StackArrayString.push(currentNode.toString());

      currentNode = currentNode.next;
    }

    return StackArrayString.join("\n");
  }
}

export default Stack;
