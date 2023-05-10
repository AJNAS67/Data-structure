//reverse string using stack

class Stack {
  constructor() {
    this.item = [];
    this.item1 = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    return this.item.pop();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  size() {
    return this.item.length;
  }
  print() {
    console.log(this.item.toString());
  }
  reversingString(string) {
    let reverseString=''
    for (let i = 0; i < string.length; i++) {
      this.item1.push(string[i]);
    }
    while (this.item1.length > 0) {
      reverseString += this.item1.pop();
    }
    return reverseString;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(52);
stack.push(54);
stack.push(7);

console.log(stack.isEmpty());
stack.pop();
console.log(stack.peek());
stack.print();
console.log(stack.size());
console.log(stack.reversingString("ajnas"));
