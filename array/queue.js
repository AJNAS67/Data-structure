class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(element) {
    this.item.push(element);
  }
  dequeue() {
    return this.item.shift();
  }
  size() {
    return this.item.size();
  }
  isEmpty() {
    return this.item.length === 0;
  }
  peek() {
    return this.item[0];
  }
  print() {
    console.log(this.item.toString());
  }
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(33);

queue.enqueue(6);
queue.enqueue(52);
queue.enqueue(3);
queue.enqueue(88);
queue.print()
let del=queue.dequeue()
console.log(del,'del');
