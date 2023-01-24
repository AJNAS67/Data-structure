// const list = new LinkedList();
// console.log(list.isEmpty());
// list.print();
// list.append(4);
// console.log(list.isEmpty());
// list.append(3);
// console.log(list.isEmpty());
// list.append(55);
// list.append(8);
// list.print();
// list.remove(1);
// list.print();
// // list.removeValue(55);
// list.reverse();
// list.print();
// console.log(list.isEmpty());
// console.log(list.getSize());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.header = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    const node = new Node(value);
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.getSize()) {
      this.append(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      console.log(prev, "akak");
    }
    this.size++;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  removeIndex(index) {
    let removableNode;
    if (index < 0 || index >= this.getSize()) {
      return null;
    }
    if (index === 0) {
      removableNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removableNode = prev.next;
      prev.next = removableNode.next;
    }
    this.size--;
    return removableNode.value;
  }
  removeValue(value) {
    if (this.isEmpty() === 0) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value != value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removableNode = prev.next;
        prev.next = removableNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let cur = this.head;
      let i = 0;
      while (cur) {
        if (cur.value === value) {
          return i;
        }
        cur = cur.next;
        i++;
      }
      return -1;
    }
  }
  print() {
    let linkedValues = "";
    let arr = [];
    let curr = this.head;
    while (curr) {
      linkedValues += ` ${curr.value}`;
      arr.push(curr.value);
      curr = curr.next;
    }
    console.log(linkedValues);
    console.log(arr, "array");
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
list.print();
list.prepend(3);
list.prepend(5);
list.prepend(555);

list.print();
list.append(77);
list.insert(8, 5);
list.prepend(5);
list.prepend(5);

list.prepend(5);

// list.print();
// list.removeIndex(2);
// list.print();
list.removeValue(77);
// list.print();
list.removeDuplicate();
// list.print();
console.log(list.getSize());

console.log(list.search(5555));
let ajn = [1, 2, 3, 41, 1, 2];
let st = new Set(ajn);
console.log(st);
console.log(st.has(1));
let array = [1, 2, 3, 4, 56, 33];
array.forEach((num) => {
  list.prepend(num);
});
list.print();

// let linkedList=list.print()
