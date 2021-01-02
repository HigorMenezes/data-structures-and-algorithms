import LinkedList from "./LinkedList";

const list = new LinkedList<number>();

list.pushBack(10);
list.pushBack(20);
list.pushBack(30);
list.pushBack(40);
list.pushBack(50);
console.log(list.indexOf(10));
