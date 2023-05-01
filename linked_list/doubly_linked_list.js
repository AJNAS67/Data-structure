class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList2 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node2(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  // add end

  append(value) {
    const node = new Node2(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  print1() {
    if (this.isEmpty()) {
      console.log("empty node");
    } else {
      let listNode = "";
      let curr = this.head;
      while (curr) {
        listNode += ` ${curr.value}`;
        curr = curr.next;
      }
      console.log(listNode);
    }
  }
  printWhenReverse() {
    if (this.isEmpty()) {
      console.log("empty node");
    } else {
      let listNode = "";
      let curr = this.head;
      console.log(curr, "curr");
      console.log("ajnas");
      while (curr) {
        listNode += ` ${curr.value}`;
        curr = curr.prev;
      }
      console.log(listNode);
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    [this.head, this.tail] = [this.tail, this.head];
    console.log(this.head.value, "head");
    console.log(this.tail.value, "tail");
  }
  printReverse() {
    if (this.isEmpty()) {
      return null;
    } else {
      let listNode = "";
      let tail = this.tail;
      while (tail) {
        listNode += ` ${tail.value}`;
        tail = tail.prev;
      }
      console.log(listNode);
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    let next = this.head.next;
    console.log(next,'next');
    next.prev = null;
    this.head = next;

    return value;
  }
  removeFromBack() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      console.log(prev);
      while (prev.next != this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  inset1(value, index) {
    const node = new Node2(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      node.prev = prev;
      prev.next.prev = node;
      prev.next = node;
    }
    this.size++;
  }
}
module.exports = LinkedList2;

//last *****************8

let list2 = new LinkedList2();
list2.prepend(2);
list2.prepend(3);

list2.prepend(4);
list2.prepend(6);
list2.prepend(99);
list2.prepend(44);
list2.print1();
list2.removeFromFront()
list2.print1()
// list2.reverse();
// list2.printWhenReverse();

// list2.removeFromFront()
// list2.print1();

// list2.removeFromBack()
// list2.print1()

// list2.printReverse();
// list2.inset1(22, 4);
// list2.print1()
// list2.printReverse();
