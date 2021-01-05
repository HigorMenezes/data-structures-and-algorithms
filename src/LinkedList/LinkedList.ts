import LinkedListNode from "./LinkedListNode";

export type CompareFunction<T> = (forCompare: T, compareWith: T) => boolean;

const defaultCompareFunction: CompareFunction<unknown> = (
  forCompare,
  compareWith,
) => forCompare === compareWith;

class LinkedList<T> {
  private _head?: LinkedListNode<T>;
  private _tail?: LinkedListNode<T>;
  private _size: number = 0;
  private _compareFunction: CompareFunction<T>;

  constructor(compareFunction?: CompareFunction<T>) {
    this._compareFunction = compareFunction ?? defaultCompareFunction;
  }

  private isAValidIndex(index: number): boolean {
    return index >= 0 && index < this._size;
  }

  public size() {
    return this._size;
  }

  public isEmpty() {
    return !(this._head && this._tail);
  }

  public front(): T | undefined {
    return this._head?.value;
  }

  public back(): T | undefined {
    return this._tail?.value;
  }

  public pushFront(value: T): void {
    const newNode = new LinkedListNode(value);

    if (this.isEmpty()) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._head!.prev = newNode;
      newNode.next = this._head;
      this._head = newNode;
    }

    this._size++;
  }

  public popFront(): T | undefined {
    let poppedValue: T | undefined;

    if (!this.isEmpty()) {
      poppedValue = this._head!.value;
      this._head = this._head!.next;

      if (this._head) {
        this._head.prev = undefined;
      } else {
        this._tail = undefined;
      }
    }

    this._size--;

    return poppedValue;
  }

  public pushBack(value: T): void {
    const newNode = new LinkedListNode(value);

    if (this.isEmpty()) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail!.next = newNode;
      newNode.prev = this._tail;
      this._tail = newNode;
    }

    this._size++;
  }

  public popBack(): T | undefined {
    let poppedValue: T | undefined;

    if (!this.isEmpty()) {
      poppedValue = this._tail!.value;
      this._tail = this._tail!.prev;

      if (this._tail) {
        this._tail.next = undefined;
      } else {
        this._head = undefined;
      }
    }

    this._size--;

    return poppedValue;
  }

  public insert(index: number, value: T): void {
    if (this.isAValidIndex(index)) {
      if (index === 0) {
        this.pushFront(value);
      } else {
        let currentNode = this._head!.next;
        let currentIndex = 1;

        while (currentNode && currentIndex <= index) {
          if (index === currentIndex) {
            const newNode = new LinkedListNode(value);
            newNode.next = currentNode;
            newNode.prev = currentNode.prev;

            currentNode.prev!.next = newNode;
            currentNode.prev = newNode;

            break;
          }

          currentNode = currentNode.next;
          currentIndex++;
        }
      }
    } else {
      throw new Error(
        `Index has to be between 0 and ${this._size}, but it is ${index}`,
      );
    }
  }

  public erase(index: number): T | undefined {
    if (this.isAValidIndex(index)) {
      if (index === 0) {
        return this.popFront();
      } else if (index === this._size - 1) {
        return this.popBack();
      } else {
        let currentNode = this._head!.next;
        let currentIndex = 1;

        while (currentNode && currentNode.next && currentIndex <= index) {
          if (index === currentIndex) {
            currentNode.prev!.next = currentNode.next;
            currentNode.next!.prev = currentNode.prev;

            return currentNode.value;
          }

          currentNode = currentNode.next;
          currentIndex++;
        }
      }
    } else {
      throw new Error(
        `Index has to be between 0 and ${this._size}, but it is ${index}`,
      );
    }
  }

  public indexOf(
    value: T,
    compareFunction: CompareFunction<T> = this._compareFunction,
  ): number {
    let currentNode = this._head;
    let currentIndex = 0;

    while (currentNode) {
      if (compareFunction(value, currentNode.value)) {
        return currentIndex;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return -1;
  }

  public removeValue(
    value: T,
    compareFunction: CompareFunction<T> = this._compareFunction,
  ): T | undefined {
    const valueIndex = this.indexOf(value, compareFunction);

    if (valueIndex === -1) {
      return undefined;
    }

    return this.erase(valueIndex);
  }

  public toArray(): T[] {
    let valueArray: T[] = [];

    let currentNode = this._head;
    while (currentNode) {
      valueArray.push(currentNode.value);

      currentNode = currentNode?.next;
    }

    return valueArray;
  }

  public getLinkedListDetail() {
    let details: LinkedListNode<T>[] = [];

    if (this.isEmpty()) {
      return details;
    }

    let currentNode = this._head;
    while (currentNode) {
      details.push(currentNode);

      currentNode = currentNode?.next;
    }

    return details;
  }
}

export default LinkedList;
