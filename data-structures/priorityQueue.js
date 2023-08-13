class PriorityQueue {
  constructor() {
    this.queue = []
  }

  // element = {order, priority, extraPriority}
  enqueue(element) {
    this.queue.push(element)
    this.heapifyUp(this.queue.length - 1)
    return element
  }

  dequeue() {
    if (this.queue.length === 0) {
      return undefined
    }

    const removedElement = this.queue[0]
    const lastElement = this.queue.pop()

    if (this.queue.length > 0) {
      this.queue[0] = lastElement
      this.heapifyDown(0)
    }

    return removedElement
  }

  peek() {
    return this.queue[0]
  }

  size() {
    return this.queue.length
  }

  print() {
    console.log(this.queue)
  }

  heapifyUp(index) {
    const currentElement = this.queue[index]
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      const parentElement = this.queue[parentIndex]
      if (currentElement.priority >= parentElement.priority) {
        break
      }
      this.queue[index] = parentElement
      index = parentIndex
    }
    this.queue[index] = currentElement
  }

  heapifyDown(index) {
    const currentElement = this.queue[index]
    const length = this.size()

    while(true) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)
      let swapIndex = null

      if (leftChildIndex < length) {
        const leftChild = this.queue[leftChildIndex]
        if (leftChild.priority < currentElement.priority) {
          swapIndex = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.queue[rightChildIndex]
        if (
          (swapIndex === null && rightChild.priority < currentElement.priority) ||
          (swapIndex !== null && rightChild.priority < this.queue[swapIndex].priority)
        ) {
          swapIndex = rightChildIndex
        }
      }

      if (swapIndex === null) {
        break
      }

      this.queue[index] = this.queue[swapIndex]
      index = swapIndex
    }

    this.queue[index] = currentElement
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  getLeftChildIndex(index) {
    return 2 * index + 1
  }

  getRightChildIndex(index) {
    return 2 * index + 2
  }
}