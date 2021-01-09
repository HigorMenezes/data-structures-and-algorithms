import LinkedList, { CompareFunction } from "./LinkedList";

describe("LinkedList tests", () => {
  describe("pushFront()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
      });

      it("should push values to front of liked list", () => {
        list.pushFront(10);
        list.pushFront(20);
        list.pushFront(30);
        expect(list.toArray()).toMatchObject([30, 20, 10]);
      });
    });

    describe("Object values <{score: number}>", () => {
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>();
      });

      it("should push values to front of liked list", () => {
        list.pushFront({ score: 10 });
        list.pushFront({ score: 20 });
        list.pushFront({ score: 30 });
        expect(list.toArray()).toMatchObject([
          { score: 30 },
          { score: 20 },
          { score: 10 },
        ]);
      });
    });
  });

  describe("popFront()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
        list.pushFront(10);
        list.pushFront(20);
        list.pushFront(30);
      });

      it("should pop values from front of liked list", () => {
        expect(list.popFront()).toBe(30);
        expect(list.popFront()).toBe(20);
        expect(list.toArray()).toMatchObject([10]);
      });

      it("should pop values from front of liked list even when it empty", () => {
        expect(list.popFront()).toBe(30);
        expect(list.popFront()).toBe(20);
        expect(list.popFront()).toBe(10);
        expect(list.popFront()).toBe(undefined);
        expect(list.popFront()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });
    });

    describe("Object values <{score: number}>", () => {
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>();
        list.pushFront({ score: 10 });
        list.pushFront({ score: 20 });
        list.pushFront({ score: 30 });
      });

      it("should pop values from front of liked list", () => {
        expect(list.popFront()).toMatchObject({ score: 30 });
        expect(list.popFront()).toMatchObject({ score: 20 });
        expect(list.toArray()).toMatchObject([{ score: 10 }]);
      });

      it("should pop values from front of liked list even when it empty", () => {
        expect(list.popFront()).toMatchObject({ score: 30 });
        expect(list.popFront()).toMatchObject({ score: 20 });
        expect(list.popFront()).toMatchObject({ score: 10 });
        expect(list.popFront()).toBe(undefined);
        expect(list.popFront()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });
    });
  });

  describe("pushBack()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
      });

      it("should push values to back of liked list", () => {
        list.pushBack(10);
        list.pushBack(20);
        list.pushBack(30);
        expect(list.toArray()).toMatchObject([10, 20, 30]);
      });
    });

    describe("Object values <{score: number}>", () => {
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>();
      });

      it("should push values to back of liked list", () => {
        list.pushBack({ score: 10 });
        list.pushBack({ score: 20 });
        list.pushBack({ score: 30 });
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
        ]);
      });
    });
  });

  describe("popBack()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
        list.pushBack(10);
        list.pushBack(20);
        list.pushBack(30);
      });

      it("should pop values from back of liked list", () => {
        expect(list.popBack()).toBe(30);
        expect(list.popBack()).toBe(20);
        expect(list.toArray()).toMatchObject([10]);
      });

      it("should pop values from back of liked list even when it empty", () => {
        expect(list.popBack()).toBe(30);
        expect(list.popBack()).toBe(20);
        expect(list.popBack()).toBe(10);
        expect(list.popBack()).toBe(undefined);
        expect(list.popBack()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });
    });

    describe("Object values <{score: number}>", () => {
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>();
        list.pushBack({ score: 10 });
        list.pushBack({ score: 20 });
        list.pushBack({ score: 30 });
      });

      it("should pop values from back of liked list", () => {
        expect(list.popBack()).toMatchObject({ score: 30 });
        expect(list.popBack()).toMatchObject({ score: 20 });
        expect(list.toArray()).toMatchObject([{ score: 10 }]);
      });

      it("should pop values from back of liked list even when it empty", () => {
        expect(list.popBack()).toMatchObject({ score: 30 });
        expect(list.popBack()).toMatchObject({ score: 20 });
        expect(list.popBack()).toMatchObject({ score: 10 });
        expect(list.popBack()).toBe(undefined);
        expect(list.popBack()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });
    });
  });

  describe("insert()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
        list.pushBack(20);
        list.pushBack(30);
        list.pushBack(40);
        list.pushBack(50);
      });

      it("should insert value on front of liked list", () => {
        list.insert(0, 10);
        expect(list.toArray()).toMatchObject([10, 20, 30, 40, 50]);
      });

      it("should insert value on the last position of liked list", () => {
        list.insert(list.size() - 1, 45);
        expect(list.toArray()).toMatchObject([20, 30, 40, 45, 50]);
      });

      it("should insert value on middle of liked list", () => {
        list.insert(2, 35);
        expect(list.toArray()).toMatchObject([20, 30, 35, 40, 50]);
      });

      it("should try to insert value on incorrect position of liked list", () => {
        expect(() => list.insert(-1, 35)).toThrowError(
          new Error("-1 is a invalid index"),
        );
        expect(() => list.insert(list.size(), 35)).toThrowError(
          new Error("4 is a invalid index"),
        );
      });
    });

    describe("Object values <{score: number}>", () => {
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>();
        list.pushBack({ score: 20 });
        list.pushBack({ score: 30 });
        list.pushBack({ score: 40 });
        list.pushBack({ score: 50 });
      });

      it("should insert value on front of liked list", () => {
        list.insert(0, { score: 10 });
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should insert value on the last position of liked list", () => {
        list.insert(list.size() - 1, { score: 45 });
        expect(list.toArray()).toMatchObject([
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 45 },
          { score: 50 },
        ]);
      });

      it("should insert value on middle of liked list", () => {
        list.insert(2, { score: 35 });
        expect(list.toArray()).toMatchObject([
          { score: 20 },
          { score: 30 },
          { score: 35 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should try to insert value on incorrect position of liked list", () => {
        expect(() => list.insert(-1, { score: 35 })).toThrowError(
          new Error("-1 is a invalid index"),
        );
        expect(() => list.insert(list.size(), { score: 35 })).toThrowError(
          new Error("4 is a invalid index"),
        );
      });
    });
  });

  describe("erase()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
        list.pushBack(20);
        list.pushBack(30);
        list.pushBack(40);
        list.pushBack(50);
      });

      it("should erase value on front of liked list", () => {
        expect(list.erase(0)).toBe(20);
        expect(list.toArray()).toMatchObject([30, 40, 50]);
      });

      it("should erase value on the last position of liked list", () => {
        expect(list.erase(list.size() - 1)).toBe(50);
        expect(list.toArray()).toMatchObject([20, 30, 40]);
      });

      it("should erase value on middle of liked list", () => {
        expect(list.erase(2)).toBe(40);
        expect(list.toArray()).toMatchObject([20, 30, 50]);
      });

      it("should try to erase value on incorrect position of liked list", () => {
        expect(() => list.erase(-1)).toThrowError(
          new Error("-1 is a invalid index"),
        );
        expect(() => list.erase(list.size())).toThrowError(
          new Error("4 is a invalid index"),
        );
      });
    });

    describe("Object values <{score: number}>", () => {
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>();
        list.pushBack({ score: 20 });
        list.pushBack({ score: 30 });
        list.pushBack({ score: 40 });
        list.pushBack({ score: 50 });
      });

      it("should erase value on front of liked list", () => {
        expect(list.erase(0)).toMatchObject({ score: 20 });
        expect(list.toArray()).toMatchObject([
          { score: 30 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should erase value on the last position of liked list", () => {
        expect(list.erase(list.size() - 1)).toMatchObject({ score: 50 });
        expect(list.toArray()).toMatchObject([
          { score: 20 },
          { score: 30 },
          { score: 40 },
        ]);
      });

      it("should erase value on middle of liked list", () => {
        expect(list.erase(2)).toMatchObject({ score: 40 });
        expect(list.toArray()).toMatchObject([
          { score: 20 },
          { score: 30 },
          { score: 50 },
        ]);
      });

      it("should try to erase value on incorrect position of liked list", () => {
        expect(() => list.erase(-1)).toThrowError(
          new Error("-1 is a invalid index"),
        );
        expect(() => list.erase(list.size())).toThrowError(
          new Error("4 is a invalid index"),
        );
      });
    });
  });

  describe("indexOf()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
        list.pushBack(20);
        list.pushBack(30);
        list.pushBack(40);
        list.pushBack(50);
      });

      it("should return the index of the first element on liked list", () => {
        expect(list.indexOf(20)).toBe(0);
      });

      it("should return the index of the last element on liked list", () => {
        expect(list.indexOf(50)).toBe(list.size() - 1);
      });

      it("should return the index of the specific element on liked list", () => {
        expect(list.indexOf(40)).toBe(2);
      });
    });

    describe("Object values <{score: number}>", () => {
      const compareFunction: CompareFunction<{ score: number }> = (
        forCompare,
        compareWith,
      ) => forCompare.score === compareWith.score;

      describe("Using compare function on constructor", () => {
        let list: LinkedList<{ score: number }>;

        beforeEach(() => {
          list = new LinkedList<{ score: number }>(compareFunction);
          list.pushBack({ score: 20 });
          list.pushBack({ score: 30 });
          list.pushBack({ score: 40 });
          list.pushBack({ score: 50 });
        });

        it("should return the index of the first element on liked list", () => {
          expect(list.indexOf({ score: 20 })).toBe(0);
        });

        it("should return the index of the last element on liked list", () => {
          expect(list.indexOf({ score: 50 })).toBe(list.size() - 1);
        });

        it("should return the index of the specific element on liked list", () => {
          expect(list.indexOf({ score: 40 })).toBe(2);
        });
      });

      describe("Using compare function on indexOf function", () => {
        let list: LinkedList<{ score: number }>;

        beforeEach(() => {
          list = new LinkedList<{ score: number }>();
          list.pushBack({ score: 20 });
          list.pushBack({ score: 30 });
          list.pushBack({ score: 40 });
          list.pushBack({ score: 50 });
        });

        it("should return the index of the first element on liked list", () => {
          expect(list.indexOf({ score: 20 }, compareFunction)).toBe(0);
        });

        it("should return the index of the last element on liked list", () => {
          expect(list.indexOf({ score: 50 }, compareFunction)).toBe(
            list.size() - 1,
          );
        });

        it("should return the index of the specific element on liked list", () => {
          expect(list.indexOf({ score: 40 }, compareFunction)).toBe(2);
        });
      });
    });
  });

  describe("removeValue()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
        list.pushBack(20);
        list.pushBack(30);
        list.pushBack(40);
        list.pushBack(50);
      });

      it("should remove value and return it on liked list", () => {
        expect(list.removeValue(20)).toBe(20);
      });

      it("should return undefined when the value is not on liked list", () => {
        expect(list.removeValue(10)).toBe(undefined);
      });
    });

    describe("Object values <{score: number}>", () => {
      const compareFunction: CompareFunction<{ score: number }> = (
        forCompare,
        compareWith,
      ) => forCompare.score === compareWith.score;

      describe("Using compare function on constructor", () => {
        let list: LinkedList<{ score: number }>;

        beforeEach(() => {
          list = new LinkedList<{ score: number }>(compareFunction);
          list.pushBack({ score: 20 });
          list.pushBack({ score: 30 });
          list.pushBack({ score: 40 });
          list.pushBack({ score: 50 });
        });

        it("should remove value and return it on liked list", () => {
          expect(list.removeValue({ score: 20 })).toMatchObject({ score: 20 });
        });

        it("should return undefined when the value is not on liked list", () => {
          expect(list.removeValue({ score: 10 })).toBe(undefined);
        });
      });

      describe("Using compare function on indexOf function", () => {
        let list: LinkedList<{ score: number }>;

        beforeEach(() => {
          list = new LinkedList<{ score: number }>();
          list.pushBack({ score: 20 });
          list.pushBack({ score: 30 });
          list.pushBack({ score: 40 });
          list.pushBack({ score: 50 });
        });

        it("should remove value and return it on liked list", () => {
          expect(
            list.removeValue({ score: 20 }, compareFunction),
          ).toMatchObject({
            score: 20,
          });
        });

        it("should return undefined when the value is not on liked list", () => {
          expect(list.removeValue({ score: 10 }, compareFunction)).toBe(
            undefined,
          );
        });
      });
    });
  });

  describe("size()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
      });

      it("should return the size of linked list", () => {
        expect(list.size()).toBe(0);
        list.popBack();
        expect(list.size()).toBe(0);
        list.popFront();
        expect(list.size()).toBe(0);
        list.pushFront(0);
        expect(list.size()).toBe(1);
        list.pushFront(10);
        expect(list.size()).toBe(2);
        list.pushBack(50);
        expect(list.size()).toBe(3);
        list.popBack();
        expect(list.size()).toBe(2);
        list.popFront();
        expect(list.size()).toBe(1);
        list.insert(0, 10);
        expect(list.size()).toBe(2);
        list.insert(1, 50);
        expect(list.size()).toBe(3);
        list.insert(list.size() - 1, 10);
        expect(list.size()).toBe(4);
        list.erase(0);
        expect(list.size()).toBe(3);
        list.erase(1);
        expect(list.size()).toBe(2);
        list.erase(list.size() - 1);
        expect(list.size()).toBe(1);
        list.removeValue(50);
        expect(list.size()).toBe(0);
      });
    });

    describe("Object values <{score: number}>", () => {
      const compareFunction: CompareFunction<{ score: number }> = (
        forCompare,
        compareWith,
      ) => forCompare.score === compareWith.score;
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>(compareFunction);
      });

      it("should return the size of linked list", () => {
        expect(list.size()).toBe(0);
        list.popBack();
        expect(list.size()).toBe(0);
        list.popFront();
        expect(list.size()).toBe(0);
        list.pushFront({ score: 0 });
        expect(list.size()).toBe(1);
        list.pushFront({ score: 10 });
        expect(list.size()).toBe(2);
        list.pushBack({ score: 50 });
        expect(list.size()).toBe(3);
        list.popBack();
        expect(list.size()).toBe(2);
        list.popFront();
        expect(list.size()).toBe(1);
        list.insert(0, { score: 10 });
        expect(list.size()).toBe(2);
        list.insert(1, { score: 50 });
        expect(list.size()).toBe(3);
        list.insert(list.size() - 1, { score: 10 });
        expect(list.size()).toBe(4);
        list.erase(0);
        expect(list.size()).toBe(3);
        list.erase(1);
        expect(list.size()).toBe(2);
        list.erase(list.size() - 1);
        expect(list.size()).toBe(1);
        list.removeValue({ score: 50 });
        expect(list.size()).toBe(0);
      });
    });
  });

  describe("front()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
      });

      it("should return the front element of linked list", () => {
        list.pushFront(0);
        expect(list.front()).toBe(0);
        list.pushFront(10);
        expect(list.front()).toBe(10);
        list.pushBack(50);
        expect(list.front()).toBe(10);
        list.popBack();
        expect(list.front()).toBe(10);
        list.popFront();
        expect(list.front()).toBe(0);
        list.insert(0, 10);
        expect(list.front()).toBe(10);
        list.insert(1, 50);
        expect(list.front()).toBe(10);
        list.insert(list.size() - 1, 10);
        expect(list.front()).toBe(10);
        list.erase(0);
        expect(list.front()).toBe(50);
        list.erase(1);
        expect(list.front()).toBe(50);
        list.erase(list.size() - 1);
        expect(list.front()).toBe(50);
        list.removeValue(50);
        expect(list.front()).toBe(undefined);
      });
    });

    describe("Object values <{score: number}>", () => {
      const compareFunction: CompareFunction<{ score: number }> = (
        forCompare,
        compareWith,
      ) => forCompare.score === compareWith.score;
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>(compareFunction);
      });

      it("should return the front element of linked list", () => {
        list.pushFront({ score: 0 });
        expect(list.front()).toMatchObject({ score: 0 });
        list.pushFront({ score: 10 });
        expect(list.front()).toMatchObject({ score: 10 });
        list.pushBack({ score: 50 });
        expect(list.front()).toMatchObject({ score: 10 });
        list.popBack();
        expect(list.front()).toMatchObject({ score: 10 });
        list.popFront();
        expect(list.front()).toMatchObject({ score: 0 });
        list.insert(0, { score: 10 });
        expect(list.front()).toMatchObject({ score: 10 });
        list.insert(1, { score: 50 });
        expect(list.front()).toMatchObject({ score: 10 });
        list.insert(list.size() - 1, { score: 10 });
        expect(list.front()).toMatchObject({ score: 10 });
        list.erase(0);
        expect(list.front()).toMatchObject({ score: 50 });
        list.erase(1);
        expect(list.front()).toMatchObject({ score: 50 });
        list.erase(list.size() - 1);
        expect(list.front()).toMatchObject({ score: 50 });
        list.removeValue({ score: 50 });
        expect(list.front()).toBe(undefined);
      });
    });
  });

  describe("back()", () => {
    describe("Primitive values <number>", () => {
      let list: LinkedList<number>;

      beforeEach(() => {
        list = new LinkedList<number>();
      });

      it("should return the back element of linked list", () => {
        list.pushFront(0);
        expect(list.back()).toBe(0);
        list.pushFront(10);
        expect(list.back()).toBe(0);
        list.pushBack(50);
        expect(list.back()).toBe(50);
        list.popBack();
        expect(list.back()).toBe(0);
        list.popFront();
        expect(list.back()).toBe(0);
        list.insert(0, 10);
        expect(list.back()).toBe(0);
        list.insert(1, 50);
        expect(list.back()).toBe(0);
        list.insert(list.size() - 1, 10);
        expect(list.back()).toBe(0);
        list.erase(0);
        expect(list.back()).toBe(0);
        list.erase(1);
        expect(list.back()).toBe(0);
        list.erase(list.size() - 1);
        expect(list.back()).toBe(50);
        list.removeValue(50);
        expect(list.back()).toBe(undefined);
      });
    });

    describe("Object values <{score: number}>", () => {
      const compareFunction: CompareFunction<{ score: number }> = (
        forCompare,
        compareWith,
      ) => forCompare.score === compareWith.score;
      let list: LinkedList<{ score: number }>;

      beforeEach(() => {
        list = new LinkedList<{ score: number }>(compareFunction);
      });

      it("should return the back element of linked list", () => {
        list.pushFront({ score: 0 });
        expect(list.back()).toMatchObject({ score: 0 });
        list.pushFront({ score: 10 });
        expect(list.back()).toMatchObject({ score: 0 });
        list.pushBack({ score: 50 });
        expect(list.back()).toMatchObject({ score: 50 });
        list.popBack();
        expect(list.back()).toMatchObject({ score: 0 });
        list.popFront();
        expect(list.back()).toMatchObject({ score: 0 });
        list.insert(0, { score: 10 });
        expect(list.back()).toMatchObject({ score: 0 });
        list.insert(1, { score: 50 });
        expect(list.back()).toMatchObject({ score: 0 });
        list.insert(list.size() - 1, { score: 10 });
        expect(list.back()).toMatchObject({ score: 0 });
        list.erase(0);
        expect(list.back()).toMatchObject({ score: 0 });
        list.erase(1);
        expect(list.back()).toMatchObject({ score: 0 });
        list.erase(list.size() - 1);
        expect(list.back()).toMatchObject({ score: 50 });
        list.removeValue({ score: 50 });
        expect(list.back()).toBe(undefined);
      });
    });
  });

  describe("toString()", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList<number>();
      list.pushBack(20);
      list.pushBack(30);
      list.pushBack(40);
    });

    it("should return a string that represent the linked list", () => {
      expect(list.toString()).toBe(
        "undefined <- 20 -> 30 | 20 <- 30 -> 40 | 30 <- 40 -> undefined",
      );
      list.pushFront(10);
      expect(list.toString()).toBe(
        "undefined <- 10 -> 20 | 10 <- 20 -> 30 | 20 <- 30 -> 40 | 30 <- 40 -> undefined",
      );
      list.pushBack(50);
      expect(list.toString()).toBe(
        "undefined <- 10 -> 20 | 10 <- 20 -> 30 | 20 <- 30 -> 40 | 30 <- 40 -> 50 | 40 <- 50 -> undefined",
      );
      list.popBack();
      expect(list.toString()).toBe(
        "undefined <- 10 -> 20 | 10 <- 20 -> 30 | 20 <- 30 -> 40 | 30 <- 40 -> undefined",
      );
      list.popFront();
      expect(list.toString()).toBe(
        "undefined <- 20 -> 30 | 20 <- 30 -> 40 | 30 <- 40 -> undefined",
      );
      list.insert(0, 10);
      expect(list.toString()).toBe(
        "undefined <- 10 -> 20 | 10 <- 20 -> 30 | 20 <- 30 -> 40 | 30 <- 40 -> undefined",
      );
      list.insert(1, 50);
      expect(list.toString()).toBe(
        "undefined <- 10 -> 50 | 10 <- 50 -> 20 | 50 <- 20 -> 30 | 20 <- 30 -> 40 | 30 <- 40 -> undefined",
      );
      list.insert(list.size() - 1, 10);
      expect(list.toString()).toBe(
        "undefined <- 10 -> 50 | 10 <- 50 -> 20 | 50 <- 20 -> 30 | 20 <- 30 -> 10 | 30 <- 10 -> 40 | 10 <- 40 -> undefined",
      );
      list.erase(0);
      expect(list.toString()).toBe(
        "undefined <- 50 -> 20 | 50 <- 20 -> 30 | 20 <- 30 -> 10 | 30 <- 10 -> 40 | 10 <- 40 -> undefined",
      );
      list.erase(1);
      expect(list.toString()).toBe(
        "undefined <- 50 -> 30 | 50 <- 30 -> 10 | 30 <- 10 -> 40 | 10 <- 40 -> undefined",
      );
      list.erase(list.size() - 1);
      expect(list.toString()).toBe(
        "undefined <- 50 -> 30 | 50 <- 30 -> 10 | 30 <- 10 -> undefined",
      );
      list.removeValue(50);
      expect(list.toString()).toBe(
        "undefined <- 30 -> 10 | 30 <- 10 -> undefined",
      );
      list.popFront();
      expect(list.toString()).toBe("undefined <- 10 -> undefined");
      list.popBack();
      expect(list.toString()).toBe("");
    });
  });
});
