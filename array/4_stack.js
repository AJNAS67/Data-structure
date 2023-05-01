class Stack{
    constructor(){
        this.item=[]
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        return this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length===0;
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString());
    }
}

const stack=new Stack()

stack.push(5)
stack.push(52)
stack.push(54)
stack.push(7)

console.log(stack.isEmpty());
stack.pop()
console.log(stack.peek());
stack.print()