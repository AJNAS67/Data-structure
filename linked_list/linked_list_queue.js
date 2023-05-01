const LinkedList1 = require("./1_linked_list");

class LinkedLinstQueue {
  constructor() {
    this.list = new LinkedList1();
  }
  enqueue(value) {
    return this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print1();
  }
}
const queue=new LinkedLinstQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.print()
console.log(queue.peek());
