import LinkedList from "./LinkedList";

describe("LinkedList test", () => {
  test("just tests", () => {
    const list = new LinkedList<number>();

    list.pushFront(10);
    list.pushFront(20);
    list.pushFront(30);
    list.pushFront(40);

    console.log("list", list.toString());
  });
});
