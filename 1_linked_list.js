class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList1 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  preppend(value) {
    const node = new Node1(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node1(value);
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
    this.head = this.head.next;
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
    const node = new Node1(value);
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

//   prepend1(value) {
//     const node = new Node1(value);
//     if (this.isEmpty()) {
//         console.log('em00000000000000000000000000000000pt');
//       this.head = value;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   print1() {
//     if (this.isEmpty()) {
//       console.log("empty node");
//     } else {
//       let listNode = "";
//       let curr = this.head;
//       while (curr) {
//         listNode += ` ${curr.value}`;
//         curr = curr.next;
//       }
//       console.log(listNode);
//     }
//   }
//   insert1(value, index) {
//     if (index == 0) {
//       this.prepend1(value);
//     } else {
//       const node = new Node1(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         console.log(i,'iiiiiiiiiii');
//         console.log(prev, "prevvvvv");
//         prev = prev.next;
//       }
//       console.log(node,'node');
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }
// }
// const list1 = new LinkedList1();
// list1.prepend1(6);
// list1.prepend1(61);

// list1.prepend1(62);

// list1.prepend1(63);
// list1.prepend1(64);
// list1.prepend1(65);

// list1.prepend1(3);
// list1.insert1(22, 0);
// list1.insert1(22, 0);
// list1.print1();

// list1.insert1(322, 5);

// list1.print1();
let list2 = new LinkedList1();
list2.append(2);
list2.append(3);

list2.append(4);
list2.append(6);
list2.append(99);
list2.append(44);
list2.print1();
list2.printReverse();
list2.inset1(22, 4);
list2.print1()
list2.printReverse();

