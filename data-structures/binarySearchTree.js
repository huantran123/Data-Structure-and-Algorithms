class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value) {
    //Code here
    const newNode = new Node(value);
    let current = this.root;
    if (!current) {
      this.root = newNode;
      return this;
    }
    while (current) {
      if (current.value > value) {
        if (current.left) {
          current = current.left
        } else {
          current.left = newNode;
          return this;
        }
      } else if (current.value < value) {
        if (current.right) {
          current = current.right
        } else {
          current.right = newNode;
          return this;
        }
      } else {
        return this;
      }
    }
  }

  lookup(value) {
    //Code here
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return current;
      } else if (current.value > value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    // Finding removed node and its parent
    let current = this.root;
    let removedParent = null;
    let removedNode =  null;
    while (current) {
      if (current.value === value) {
        removedNode = current;
        break;
      } else if (current.value > value) {
        if (current.left.value === value) {
          removedParent = current;
        }
        current = current.left
      } else {
        if (current.right.value === value) {
          removedParent = current;
        }
        current = current.right
      }
    }
    if (!removedNode) {
      return false;
    }

    // Option 1: Removed node is a leap node
    // If the removed node is a leap node, simply remove it from its parent
    if (this.isLeapNode(removedNode)) {
      if (removedParent.value > removedNode.value) {
        removedParent.left = null;
      } else {
        removedParent.right = null;
      }
      return this;
    }

    // Finding the successor and its parent
    let successor = null;
    let successorParent = null;

    // Option 2: Removed node has a right child
    // If the removed node has the right child, then we should find the left-most node of the right side
    if (removedNode.right) {
      current = removedNode.right;
      // Successor is the left-most node
      while (current) {
        if (current.left) {
          successorParent = current;
          current = current.left;
        } else {
          successor = current;
          break;
        }
      }
      // If the successor is the right child of the removed node, which means successorParent is null
      if (!successorParent) {
        // Then let the left child of the removed node be the left child of the successor
        successor.left = removedNode.left;
      } else {
        // If the successor is not a child of the removed node then
        // Let make the successor's right child become it's parent left child
        successorParent.left = successor.right;
        // Let the successor inherit both children of the removed node
        successor.right = removedNode.right;
        successor.left = removedNode.left;
      }

    // Option 3: Removed node only has left child
    } else {
      // If the removed node doesn't have a right child, then let the left child be the successor
      successor = removedNode.left;
    }
    // If removed node's parent is null, it means that removed node is root
    if (!removedParent) {
      this.root = successor;
    } else {
      // Determine if the removed node is the left or right child of its parent
      if (removedParent.value > removedNode.value) {
        // If the removed node is the left child of its parent, let the successor be the left child of the removed node's parent
        removedParent.left = successor;
      } else {
        // If the removed node is the right child of its parent, let the successor be the right child of the removed node's parent
        removedParent.right = successor;
      }
    }
    return this;
  }

  isLeapNode(node) {
    if (!node.left && !node.right) {
      return true;
    } else {
      return false;
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(32)
tree.insert(17)
tree.insert(77)
tree.insert(12)
tree.insert(24)
tree.insert(28)
tree.insert(38)
tree.insert(37)
tree.insert(67)
tree.insert(35)
// JSON.stringify(traverse(tree.root))
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.lookup(20))
// console.log(tree.lookup(3))
tree.remove(77)
tree.remove(32)
tree.remove(24)
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}