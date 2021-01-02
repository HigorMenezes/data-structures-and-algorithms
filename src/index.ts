import LinkedList from "./LinkedList";

const list = new LinkedList<number>();

list.pushFront(10);
list.pushFront(20);
list.pushFront(30);
list.pushFront(40);
list.pushFront(50);
list.erase(2);

console.log("Details", list.getLinkedListDetail());
console.log("Array", list.toArray());
