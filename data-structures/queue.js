class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue implemented using linked list
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Peek allow to see the first node
  peek() {
    return this.first;
  }

  // Enqueue allow to add a node to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // Dequeue allow to remove the first node of the queue
  dequeue() {
    if (this.length === 0) {
      return null;
    } else {
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
    }
    if (this.length === 0) {
      this.last = null;
    }
    return this;
  }

  printQueue() {
    let currentNode = this.first;
    const array = [];
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue.printQueue())
console.log(myQueue)
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue)