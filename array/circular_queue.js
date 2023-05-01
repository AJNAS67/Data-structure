class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  isFull() {
    return this.capacity - this.currentLength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = this.rear + (1 % this.capacity);
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return item;
  }
  peek(){
    return this.items[this.front]
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let str = "";
      for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' '
      }
      console.log(str, "str");
    }
  }
}
const circularQueue = new CircularQueue(6);
console.log(circularQueue.isEmpty());
console.log(circularQueue.isFull());
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.dequeue();
console.log(circularQueue.peek());
circularQueue.print();
