class MaxHeap {
  constructor() {
    this.heap = new Array();
  }
  buildHeap(array) {
    this.heap = array;
    for (let i = this.getParentIndex(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIdx(index) {
    return 2 * index + 1;
  }
  getRightChildIdx(index) {
    return 2 * index + 2;
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
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
      this.heap[currentIndex] > this.heap[ParentIndex]
    ) {
      this.swap(currentIndex, ParentIndex);
      currentIndex = ParentIndex;
      ParentIndex = this.getParentIndex(currentIndex);
    }
  }
  shiftDown(currentIndex) {
    let leftChildIndex = this.getLeftChildIdx(currentIndex);
    let rightChildIndex = this.getRightChildIdx(currentIndex);
    let endIndex = this.heap.length - 1;
    let shiftIndex = leftChildIndex;
    while (leftChildIndex <= endIndex) {
      if (
        rightChildIndex <= endIndex &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
      ) {
        // console.log('hi',rightChildIndex);
        shiftIndex = rightChildIndex;
      } else {
        shiftIndex = leftChildIndex;
      }
      if (this.heap[shiftIndex] > this.heap[currentIndex]) {
        this.swap(currentIndex, shiftIndex);
        currentIndex = shiftIndex;
        leftChildIndex = this.getLeftChildIdx(currentIndex);
        rightChildIndex = this.getRightChildIdx(currentIndex);
      } else {
        return;
      }
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  remove() {
    // this.heap[0] = this.heap[this.length - 1];
    this.swap(0,this.heap.length-1)
    this.heap.length--;
    this.shiftDown(0);
  }
}
const maxHeap = new MaxHeap();
maxHeap.buildHeap([5, 3, 4, 1, 2, 88]);
maxHeap.display();
console.log("endddddddd");
maxHeap.insert(4);
maxHeap.insert(66);
maxHeap.insert(55);
maxHeap.display();
console.log("remove");
maxHeap.remove();
maxHeap.display();
