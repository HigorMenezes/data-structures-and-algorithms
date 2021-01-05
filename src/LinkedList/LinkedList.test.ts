import LinkedList, { CompareFunction } from "./LinkedList";

describe("LinkedList tests", () => {
  describe("Given a LikedList with primitive type", () => {
    describe("Given a empty LikedList", () => {
      let list = new LinkedList<number>();
      beforeEach(() => {
        list = new LinkedList<number>();
      });

      it("should return correct size", () => {
        expect(list.size()).toBe(0);
      });

      it("should be empty", () => {
        expect(list.isEmpty()).toBeTruthy();
      });

      it("should pushFront values to the list", () => {
        list.pushFront(10);
        list.pushFront(20);
        list.pushFront(30);

        expect(list.toArray()).toMatchObject([30, 20, 10]);
      });

      it("should stay empty when popFront", () => {
        expect(list.popFront()).toBe(undefined);
        expect(list.popFront()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });

      it("should pushBack values to the list", () => {
        list.pushBack(10);
        list.pushBack(20);
        list.pushBack(30);

        expect(list.toArray()).toMatchObject([10, 20, 30]);
      });

      it("should stay empty when popBack", () => {
        expect(list.popBack()).toBe(undefined);
        expect(list.popBack()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });
    });

    describe("Given a LikedList with values", () => {
      let list = new LinkedList<number>();
      beforeEach(() => {
        list = new LinkedList<number>();
        list.pushBack(10);
        list.pushBack(20);
        list.pushBack(30);
        list.pushBack(40);
        list.pushBack(50);
      });

      it("should return correct size", () => {
        expect(list.size()).toBe(5);
      });

      it("should not be empty", () => {
        expect(list.isEmpty()).toBeFalsy();
      });

      it("should return the front value", () => {
        expect(list.front()).toBe(10);
      });

      it("should return the back value", () => {
        expect(list.back()).toBe(50);
      });

      it("should pushFront values to the list", () => {
        list.pushFront(3);
        list.pushFront(2);
        list.pushFront(1);

        expect(list.toArray()).toMatchObject([1, 2, 3, 10, 20, 30, 40, 50]);
      });

      it("should popFront values to the list", () => {
        expect(list.popFront()).toBe(10);
        expect(list.popFront()).toBe(20);
        expect(list.popFront()).toBe(30);
        expect(list.toArray()).toMatchObject([40, 50]);
      });

      it("should pushBack values to the list", () => {
        list.pushBack(60);
        list.pushBack(70);
        list.pushBack(80);

        expect(list.toArray()).toMatchObject([10, 20, 30, 40, 50, 60, 70, 80]);
      });

      it("should popBack values to the list", () => {
        expect(list.popBack()).toBe(50);
        expect(list.popBack()).toBe(40);
        expect(list.popBack()).toBe(30);
        expect(list.toArray()).toMatchObject([10, 20]);
      });

      it("should insert value on the first position", () => {
        list.insert(0, 0);
        expect(list.toArray()).toMatchObject([0, 10, 20, 30, 40, 50]);
      });

      it("should insert value on the last position", () => {
        list.insert(list.size() - 1, 60);
        expect(list.toArray()).toMatchObject([10, 20, 30, 40, 50, 60]);
      });

      it("should insert value on the middle position", () => {
        list.insert(3, 35);
        expect(list.toArray()).toMatchObject([10, 20, 30, 35, 40, 50]);
      });

      it("should throw error when try to insert on a invalid position", () => {
        expect(() => list.insert(-1, 1)).toThrowError(
          new Error("Index has to be between 0 and 5, but it is -1"),
        );
        expect(() => list.insert(list.size(), 1)).toThrowError(
          new Error(
            `Index has to be between 0 and 5, but it is ${list.size()}`,
          ),
        );
      });

      it("should erase value on the first position", () => {
        list.erase(0);
        expect(list.toArray()).toMatchObject([20, 30, 40, 50]);
      });

      it("should erase value on the last position", () => {
        list.erase(list.size() - 1);
        expect(list.toArray()).toMatchObject([10, 20, 30, 40]);
      });

      it("should erase value on the middle position", () => {
        list.erase(3);
        expect(list.toArray()).toMatchObject([10, 20, 30, 50]);
      });

      it("should throw error when try to erase on a invalid position", () => {
        expect(() => list.erase(-1)).toThrowError(
          new Error("Index has to be between 0 and 5, but it is -1"),
        );
        expect(() => list.erase(list.size())).toThrowError(
          new Error(
            `Index has to be between 0 and 5, but it is ${list.size()}`,
          ),
        );
      });

      it("should return the index of a existent element", () => {
        expect(list.indexOf(30)).toBe(2);
      });

      it("should return -1 when the element does not exist", () => {
        expect(list.indexOf(100)).toBe(-1);
      });

      it("should remove a specific element", () => {
        expect(list.removeValue(30)).toBe(30);
        expect(list.toArray()).toMatchObject([10, 20, 40, 50]);
      });

      it("should return undefined when the element does not exist", () => {
        expect(list.removeValue(0)).toBe(undefined);
        expect(list.toArray()).toMatchObject([10, 20, 30, 40, 50]);
      });
    });
  });

  describe("Given a LikedList with complex type", () => {
    const compareFunction: CompareFunction<{ score: number }> = (
      forCompare,
      compareWith,
    ) => forCompare.score === compareWith.score;

    describe("Given a empty LikedList", () => {
      let list = new LinkedList<{ score: number }>(compareFunction);
      beforeEach(() => {
        list = new LinkedList<{ score: number }>(compareFunction);
      });

      it("should return correct size", () => {
        expect(list.size()).toBe(0);
      });

      it("should be empty", () => {
        expect(list.isEmpty()).toBeTruthy();
      });

      it("should pushFront values to the list", () => {
        list.pushFront({ score: 10 });
        list.pushFront({ score: 20 });
        list.pushFront({ score: 30 });

        expect(list.toArray()).toMatchObject([
          { score: 30 },
          { score: 20 },
          { score: 10 },
        ]);
      });

      it("should stay empty when popFront", () => {
        expect(list.popFront()).toBe(undefined);
        expect(list.popFront()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });

      it("should pushBack values to the list", () => {
        list.pushBack({ score: 10 });
        list.pushBack({ score: 20 });
        list.pushBack({ score: 30 });

        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
        ]);
      });

      it("should stay empty when popBack", () => {
        expect(list.popBack()).toBe(undefined);
        expect(list.popBack()).toBe(undefined);
        expect(list.toArray()).toMatchObject([]);
      });
    });

    describe("Given a LikedList with values", () => {
      let list = new LinkedList<{ score: number }>(compareFunction);
      beforeEach(() => {
        list = new LinkedList<{ score: number }>(compareFunction);
        list.pushBack({ score: 10 });
        list.pushBack({ score: 20 });
        list.pushBack({ score: 30 });
        list.pushBack({ score: 40 });
        list.pushBack({ score: 50 });
      });

      it("should return correct size", () => {
        expect(list.size()).toBe(5);
      });

      it("should not be empty", () => {
        expect(list.isEmpty()).toBeFalsy();
      });

      it("should return the front value", () => {
        expect(list.front()).toMatchObject({ score: 10 });
      });

      it("should return the back value", () => {
        expect(list.back()).toMatchObject({ score: 50 });
      });

      it("should pushFront values to the list", () => {
        list.pushFront({ score: 3 });
        list.pushFront({ score: 2 });
        list.pushFront({ score: 1 });

        expect(list.toArray()).toMatchObject([
          { score: 1 },
          { score: 2 },
          { score: 3 },
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should popFront values to the list", () => {
        expect(list.popFront()).toMatchObject({ score: 10 });
        expect(list.popFront()).toMatchObject({ score: 20 });
        expect(list.popFront()).toMatchObject({ score: 30 });
        expect(list.toArray()).toMatchObject([{ score: 40 }, { score: 50 }]);
      });

      it("should pushBack values to the list", () => {
        list.pushBack({ score: 60 });
        list.pushBack({ score: 70 });
        list.pushBack({ score: 80 });

        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 50 },
          { score: 60 },
          { score: 70 },
          { score: 80 },
        ]);
      });

      it("should popBack values to the list", () => {
        expect(list.popBack()).toMatchObject({ score: 50 });
        expect(list.popBack()).toMatchObject({ score: 40 });
        expect(list.popBack()).toMatchObject({ score: 30 });
        expect(list.toArray()).toMatchObject([{ score: 10 }, { score: 20 }]);
      });

      it("should insert value on the first position", () => {
        list.insert(0, { score: 0 });
        expect(list.toArray()).toMatchObject([
          { score: 0 },
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should insert value on the last position", () => {
        list.insert(list.size() - 1, { score: 60 });
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 50 },
          { score: 60 },
        ]);
      });

      it("should insert value on the middle position", () => {
        list.insert(3, { score: 35 });
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 35 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should throw error when try to insert on a invalid position", () => {
        expect(() => list.insert(-1, { score: 1 })).toThrowError(
          new Error("Index has to be between 0 and 5, but it is -1"),
        );
        expect(() => list.insert(list.size(), { score: 1 })).toThrowError(
          new Error(
            `Index has to be between 0 and 5, but it is ${list.size()}`,
          ),
        );
      });

      it("should erase value on the first position", () => {
        list.erase(0);
        expect(list.toArray()).toMatchObject([
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should erase value on the last position", () => {
        list.erase(list.size() - 1);
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 40 },
        ]);
      });

      it("should erase value on the middle position", () => {
        list.erase(3);
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 50 },
        ]);
      });

      it("should throw error when try to erase on a invalid position", () => {
        expect(() => list.erase(-1)).toThrowError(
          new Error("Index has to be between 0 and 5, but it is -1"),
        );
        expect(() => list.erase(list.size())).toThrowError(
          new Error(
            `Index has to be between 0 and 5, but it is ${list.size()}`,
          ),
        );
      });

      it("should return the index of a existent element", () => {
        expect(list.indexOf({ score: 30 })).toBe(2);
      });

      it("should return -1 when the element does not exist", () => {
        expect(list.indexOf({ score: 100 })).toBe(-1);
      });

      it("should remove a specific element", () => {
        expect(list.removeValue({ score: 30 })).toMatchObject({ score: 30 });
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 40 },
          { score: 50 },
        ]);
      });

      it("should return undefined when the element does not exist", () => {
        expect(list.removeValue({ score: 0 })).toBe(undefined);
        expect(list.toArray()).toMatchObject([
          { score: 10 },
          { score: 20 },
          { score: 30 },
          { score: 40 },
          { score: 50 },
        ]);
      });
    });
  });
});
