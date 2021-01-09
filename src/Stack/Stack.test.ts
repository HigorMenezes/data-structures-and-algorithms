import Stack from "./Stack";

describe("LinkedList tests", () => {
  describe("push()", () => {
    describe("Primitive values <number>", () => {
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
      });

      it("should push values on stack", () => {
        stack.push(10);
        stack.push(20);
        stack.push(30);
        expect(stack.toArray()).toMatchObject([30, 20, 10]);
      });
    });

    describe("Object values <{score: number}>", () => {
      let stack: Stack<{ score: number }>;

      beforeEach(() => {
        stack = new Stack<{ score: number }>();
      });

      it("should push values on stack", () => {
        stack.push({ score: 10 });
        stack.push({ score: 20 });
        stack.push({ score: 30 });
        expect(stack.toArray()).toMatchObject([
          { score: 30 },
          { score: 20 },
          { score: 10 },
        ]);
      });
    });
  });

  describe("pop()", () => {
    describe("Primitive values <number>", () => {
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
      });

      it("should pop values from stack", () => {
        expect(stack.pop()).toBe(30);
        expect(stack.pop()).toBe(20);
        expect(stack.toArray()).toMatchObject([10]);
        expect(stack.pop()).toBe(10);
        expect(stack.pop()).toBe(undefined);
        expect(stack.toArray()).toMatchObject([]);
      });
    });

    describe("Object values <{score: number}>", () => {
      let stack: Stack<{ score: number }>;

      beforeEach(() => {
        stack = new Stack<{ score: number }>();
        stack.push({ score: 10 });
        stack.push({ score: 20 });
        stack.push({ score: 30 });
      });

      it("should pop values from stack", () => {
        expect(stack.pop()).toMatchObject({ score: 30 });
        expect(stack.pop()).toMatchObject({ score: 20 });
        expect(stack.toArray()).toMatchObject([{ score: 10 }]);
        expect(stack.pop()).toMatchObject({ score: 10 });
        expect(stack.pop()).toBe(undefined);
        expect(stack.toArray()).toMatchObject([]);
      });
    });
  });

  describe("top()", () => {
    describe("Primitive values <number>", () => {
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
      });

      it("should return top value from stack", () => {
        expect(stack.top()).toBe(undefined);
        stack.push(10);
        expect(stack.top()).toBe(10);
        stack.push(20);
        expect(stack.top()).toBe(20);
        stack.push(30);
        expect(stack.top()).toBe(30);
        stack.pop();
        expect(stack.top()).toBe(20);
        stack.pop();
        expect(stack.top()).toBe(10);
        stack.pop();
        expect(stack.top()).toBe(undefined);
      });
    });

    describe("Object values <{score: number}>", () => {
      let stack: Stack<{ score: number }>;

      beforeEach(() => {
        stack = new Stack<{ score: number }>();
      });

      it("should return top value from stack", () => {
        expect(stack.top()).toBe(undefined);
        stack.push({ score: 10 });
        expect(stack.top()).toMatchObject({ score: 10 });
        stack.push({ score: 20 });
        expect(stack.top()).toMatchObject({ score: 20 });
        stack.push({ score: 30 });
        expect(stack.top()).toMatchObject({ score: 30 });
        stack.pop();
        expect(stack.top()).toMatchObject({ score: 20 });
        stack.pop();
        expect(stack.top()).toMatchObject({ score: 10 });
        stack.pop();
        expect(stack.top()).toBe(undefined);
        stack.pop();
        expect(stack.top()).toBe(undefined);
      });
    });
  });

  describe("isEmpty()", () => {
    describe("Primitive values <number>", () => {
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
      });

      it("should check if the stack is empty", () => {
        expect(stack.isEmpty()).toBeTruthy();
        stack.push(10);
        expect(stack.isEmpty()).toBeFalsy();
        stack.push(20);
        expect(stack.isEmpty()).toBeFalsy();
        stack.pop();
        expect(stack.isEmpty()).toBeFalsy();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
      });
    });

    describe("Object values <{score: number}>", () => {
      let stack: Stack<{ score: number }>;

      beforeEach(() => {
        stack = new Stack<{ score: number }>();
      });

      it("should check if the stack is empty", () => {
        expect(stack.isEmpty()).toBeTruthy();
        stack.push({ score: 10 });
        expect(stack.isEmpty()).toBeFalsy();
        stack.push({ score: 20 });
        expect(stack.isEmpty()).toBeFalsy();
        stack.pop();
        expect(stack.isEmpty()).toBeFalsy();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
      });
    });
  });

  describe("size()", () => {
    describe("Primitive values <number>", () => {
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
      });

      it("should return the size of the stack", () => {
        expect(stack.size()).toBe(0);
        stack.push(10);
        expect(stack.size()).toBe(1);
        stack.push(20);
        expect(stack.size()).toBe(2);
        stack.pop();
        expect(stack.size()).toBe(1);
        stack.pop();
        expect(stack.size()).toBe(0);
        stack.pop();
        expect(stack.size()).toBe(0);
      });
    });

    describe("Object values <{score: number}>", () => {
      let stack: Stack<{ score: number }>;

      beforeEach(() => {
        stack = new Stack<{ score: number }>();
      });

      it("should return the size of the stack", () => {
        expect(stack.size()).toBe(0);
        stack.push({ score: 10 });
        expect(stack.size()).toBe(1);
        stack.push({ score: 20 });
        expect(stack.size()).toBe(2);
        stack.pop();
        expect(stack.size()).toBe(1);
        stack.pop();
        expect(stack.size()).toBe(0);
        stack.pop();
        expect(stack.size()).toBe(0);
      });
    });
  });

  describe("toArray()", () => {
    describe("Primitive values <number>", () => {
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
      });

      it("should return the size of the stack", () => {
        expect(stack.toArray()).toMatchObject([]);
        stack.push(10);
        expect(stack.toArray()).toMatchObject([10]);
        stack.push(20);
        expect(stack.toArray()).toMatchObject([20, 10]);
        stack.pop();
        expect(stack.toArray()).toMatchObject([10]);
        stack.pop();
        expect(stack.toArray()).toMatchObject([]);
        stack.pop();
        expect(stack.toArray()).toMatchObject([]);
      });
    });

    describe("Object values <{score: number}>", () => {
      let stack: Stack<{ score: number }>;

      beforeEach(() => {
        stack = new Stack<{ score: number }>();
      });

      it("should return the size of the stack", () => {
        expect(stack.toArray()).toMatchObject([]);
        stack.push({ score: 10 });
        expect(stack.toArray()).toMatchObject([{ score: 10 }]);
        stack.push({ score: 20 });
        expect(stack.toArray()).toMatchObject([{ score: 20 }, { score: 10 }]);
        stack.pop();
        expect(stack.toArray()).toMatchObject([{ score: 10 }]);
        stack.pop();
        expect(stack.toArray()).toMatchObject([]);
        stack.pop();
        expect(stack.toArray()).toMatchObject([]);
      });
    });
  });

  describe("toString()", () => {
    describe("Primitive values <number>", () => {
      let stack: Stack<number>;

      beforeEach(() => {
        stack = new Stack<number>();
      });

      it("should return the string that represents the stack", () => {
        expect(stack.toString()).toBe("");
        stack.push(10);
        expect(stack.toString()).toBe("\t|\t10\t|");
        stack.push(20);
        expect(stack.toString()).toBe("\t|\t20\t|\n\t|\t10\t|");
        stack.pop();
        expect(stack.toString()).toBe("\t|\t10\t|");
        stack.pop();
        expect(stack.toString()).toBe("");
        stack.pop();
        expect(stack.toString()).toBe("");
      });
    });
  });
});
