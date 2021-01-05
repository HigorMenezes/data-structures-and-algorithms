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
});
