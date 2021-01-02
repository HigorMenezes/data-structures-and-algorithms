import LinkedList from "./LinkedList";

const list = new LinkedList<number>();

list.pushFront(10);
list.pushFront(20);
list.pushFront(30);
list.insert(2, 15);

console.log("Details", list.getLinkedListDetail());
console.log("Array", list.toArray());
