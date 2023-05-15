class MinHeap {
  constructor() {
    this.heap = new Array();
  }

  buildHeap(array) {
    this.heap = array;
    for (let i = this.getParentIndex(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }
  shiftDown(currentIndex) {
    let leftChildIndex = this.getLeftChild(currentIndex);
    let rightChildIndex = this.getRightChild(currentIndex);
    let endIndex = this.heap.length - 1;
    let idxToShift = leftChildIndex;
    while (leftChildIndex <= endIndex) {
      if (
        rightChildIndex <= endIndex &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        idxToShift = rightChildIndex;
      } else {
        idxToShift = leftChildIndex;
      }
      if (this.heap[currentIndex] > this.heap[idxToShift]) {
        this.swap(currentIndex, idxToShift);
        currentIndex = idxToShift;
        leftChildIndex = this.getLeftChild(currentIndex);
        rightChildIndex = this.getRightChild(currentIndex);
      } else {
        return;
      }
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.heap.length - 1);
    // this.heap.remove(this.heap.length - 1);
    this.heap.length--;

    this.shiftDown(0);
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
  shiftUp(currentIndex) {
    let ParentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[ParentIndex] > this.heap[currentIndex]
    ) {
      this.swap(currentIndex, ParentIndex);
      currentIndex = ParentIndex;
      ParentIndex = this.getParentIndex(currentIndex);
    }
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChild(i) {
    return i * 2 + 1;
  }
  getRightChild(i) {
    return i * 2 + 2;
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  push(key) {
    this.heap[this.heap.length] = key;
    this.heapifyUp();
  }
  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (
      this.heap[currentIndex] > this.heap[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
    }
  }
  poll() {
    const maxValue = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.length--;
    this.heapifyDown();
  }
  heapifyDown() {
    let currentIndex = 0;

    while (this.heap[this.getLeftChild(currentIndex)] != undefined) {
      let biggestChildIndex = this.getLeftChild(currentIndex);
      if (
        this.heap[this.getRightChild(currentIndex)] !== undefined &&
        this.heap[this.getRightChild(currentIndex)] >
          this.heap[this.getLeftChild(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChild(currentIndex);
      }
      if (this.heap[currentIndex] < this.heap[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }
}
// const array=[2,5,7,8,9,4,3,2,33]
const heap = new MinHeap();
console.log(heap, "log");
heap.buildHeap([6, 2, 8]);
heap.display();
console.log("11111111111111");
heap.insert(1);
heap.insert(5);
heap.insert(15);
heap.display();
console.log("ssss");
heap.remove();
heap.display();

// heap.push(4);
// heap.push(5);
// heap.push(3);
// heap.push(88);
// heap.push(1);
// heap.push(44);
// heap.push(77);
// heap.push(6);
// console.log(heap.heap, "sss");
// heap.poll();

// console.log(heap.heap, "sssssssssssssss");
