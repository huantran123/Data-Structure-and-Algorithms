class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack implemented using linked list
class Stack1 {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Peek allow to see the top node
  peek() {
    return this.top;
  }

  // Push allow to add a node to the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  // Pop allow to remove the top node of the stack
  pop() {
    if (!this.length) {
      return null;
    } else {
      this.top = this.top.next;
      this.length--;
    }
    // If all the items in the stack are remove, set the bottom to null
    if (this.length === 0) {
      this.bottom = null;
    }
    return this;
  }

  printStack() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.value + '\n');
      currentNode = currentNode.next;
    }
  }
}

// const myStack = new Stack1();
// myStack.push('Google');
// myStack.push('Amazon');
// myStack.push('Netflix');
// myStack.printStack();
// console.log(myStack.peek())
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack)


// Stack implemented using array
class Stack2 {
  constructor() {
    this.stack = [];
  }

  // Peek allow to see the top node
  peek() {
    return this.stack[this.stack.length - 1]
  }

  // Push allow to add a node to the top of the stack
  push(value) {
    this.stack.push(value);
    return this.stack;
  }

  // Pop allow to remove the top node of the stack
  pop() {
    return this.stack.pop();
  }

  printStack() {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i] + '\n')
    }
  }
}


const myStack = new Stack2();
myStack.push('Google');
myStack.push('Amazon');
myStack.push('Netflix');
myStack.printStack();
console.log(myStack.peek())
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack)