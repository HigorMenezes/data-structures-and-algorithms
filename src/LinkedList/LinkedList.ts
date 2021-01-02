import LinkedListNode from "./LinkedListNode";

type CompareFunction<T> = (forCompare: T, compareWith: T) => boolean;

const defaultCompareFunction: CompareFunction<unknown> = (
  forCompare,
  compareWith,
) => forCompare === compareWith;

class LinkedList<T> {
  private _head?: LinkedListNode<T>;
  private _tail?: LinkedListNode<T>;
  private _size: number = 0;

  constructor() {}

  public size() {
    return this._size;
  }

  public isEmpty() {
    return this._size === 0;
  }

  public pushFront(value: T): void {
    const newNode = new LinkedListNode(value);

    if (this._head) {
      this._head.prev = newNode;
      newNode.next = this._head;
      this._head = newNode;
    } else {
      this._head = newNode;
      this._tail = newNode;
    }

    this._size += 1;
  }

  public popFront(): T | undefined {
    if (this._size === 0) {
      return undefined;
    } else if (this._size === 1) {
      const popValue = this._head?.value;

      this._head = undefined;
      this._tail = undefined;

      return popValue;
    } else {
      const popValue = this._head?.value;

      this._head = this._head?.next;

      if (this._head?.prev) {
        this._head.prev = undefined;
      }

      return popValue;
    }
  }

  public pushBack(value: T): void {
    const newNode = new LinkedListNode(value);

    if (this._tail) {
      newNode.prev = this._tail;
      this._tail.next = newNode;
      this._tail = newNode;
    } else {
      this._head = newNode;
      this._tail = newNode;
    }

    this._size += 1;
  }

  public popBack(): T | undefined {
    if (this._size === 0) {
      return undefined;
    } else if (this._size === 1) {
      const popValue = this._tail?.value;

      this._head = undefined;
      this._tail = undefined;

      return popValue;
    } else {
      const popValue = this._tail?.value;

      this._tail = this._head?.prev;

      if (this._tail?.next) {
        this._tail.next = undefined;
      }

      return popValue;
    }
  }

  public front(): T | undefined {
    return this._head?.value;
  }

  public back(): T | undefined {
    return this._tail?.value;
  }

  public insert(index: number, value: T): void {
    if (index < 0 || index > this._size) {
      throw new Error(
        `Index needs to have value between 0 and the list size, but got ${index}`,
      );
    }

    if (index === 0) {
      this.pushFront(value);
    } else if (index === this._size) {
      this.pushBack(value);
    } else {
      let currentNode = this._head;
      let currentIndex = 0;

      while (currentNode && currentIndex <= index) {
        if (index === currentIndex) {
          const newNode = new LinkedListNode(value);
          newNode.next = currentNode;
          newNode.prev = currentNode.prev;

          if (currentNode.prev) {
            currentNode.prev.next = newNode;
          }

          currentNode.prev = newNode;

          break;
        }

        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }

  public erase(index: number): T | undefined {
    if (index < 0 || index > this._size) {
      throw new Error(
        `Index needs to have value between 0 and the list size, but got ${index}`,
      );
    }

    if (index === 0) {
      return this.popFront();
    } else if (index === this._size) {
      return this.popBack();
    } else {
      let currentNode = this._head;
      let currentIndex = 0;

      while (currentNode && currentIndex <= index) {
        if (index === currentIndex) {
          if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
          }

          if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
          }

          const valueToReturn = currentNode.value;
          currentNode = undefined;
          return valueToReturn;
        }

        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }

  public indexOf(
    value: T,
    compareFunction: CompareFunction<T> = defaultCompareFunction,
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
    compareFunction: CompareFunction<T> = defaultCompareFunction,
  ): T | undefined {
    return this.erase(this.indexOf(value, compareFunction));
  }

  public toArray(): T[] {
    let valueArray: T[] = [];

    if (this._size === 0) {
      return valueArray;
    }

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
