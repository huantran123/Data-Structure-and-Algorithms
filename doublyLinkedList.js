class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const indexNode = this.traverseToIndex(index);
    newNode.prev = indexNode.prev;
    indexNode.prev.next = newNode;
    newNode.next = indexNode;
    indexNode.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      index = this.length - 1;
    }
    const indexNode = this.traverseToIndex(index);
    indexNode.prev.next = indexNode.next;
    if (index !== this.length - 1) {
      indexNode.next.prev = indexNode.prev;
    } else {
      this.tail = indexNode.prev
    }
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// 1 --> 10 --> 99 --> 5 --> 15
const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99)
myLinkedList.remove(4)
console.log(myLinkedList.printList())
console.log(myLinkedList.tail)