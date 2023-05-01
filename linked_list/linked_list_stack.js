//LIFO

const LinkedList1 = require("./1_linked_list");
class LinkedListStack {
  constructor() {
    this.list = new LinkedList1();
  }
  push(value) {
   return this.list.prepend(value);
  }
  pop() {
   return this.list.removeFromBack();
  }
  isEmpty() {
   return this.list.isEmpty();
  }
  getSize() {
   return this.list.getSize();
  }
  print() {
  return  this.list.print1();
  }
}
const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(4);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(1);
stack.push(2);
stack.print()
stack.pop()
stack.print()


