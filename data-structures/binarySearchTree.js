// class Node {
//   constructor(value){
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor(){
//     this.root = null;
//   }

//   insert(value) {
//     //Code here
//     const newNode = new Node(value);
//     let current = this.root;
//     if (!current) {
//       this.root = newNode;
//       return this;
//     }
//     while (current) {
//       if (current.value > value) {
//         if (current.left) {
//           current = current.left
//         } else {
//           current.left = newNode;
//           return this;
//         }
//       } else if (current.value < value) {
//         if (current.right) {
//           current = current.right
//         } else {
//           current.right = newNode;
//           return this;
//         }
//       } else {
//         return this;
//       }
//     }
//   }

//   lookup(value) {
//     //Code here
//     let current = this.root;
//     while (current) {
//       if (current.value === value) {
//         return current;
//       } else if (current.value > value) {
//         current = current.left
//       } else {
//         current = current.right
//       }
//     }
//     return false;
//   }

//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     // Finding removed node and its parent
//     let current = this.root;
//     let removedParent = null;
//     let removedNode =  null;
//     while (current) {
//       if (current.value === value) {
//         removedNode = current;
//         break;
//       } else if (current.value > value) {
//         if (current.left.value === value) {
//           removedParent = current;
//         }
//         current = current.left
//       } else {
//         if (current.right.value === value) {
//           removedParent = current;
//         }
//         current = current.right
//       }
//     }
//     if (!removedNode) {
//       return false;
//     }

//     // Option 1: Removed node is a leap node
//     // If the removed node is a leap node, simply remove it from its parent
//     if (this.isLeapNode(removedNode)) {
//       if (removedParent.value > removedNode.value) {
//         removedParent.left = null;
//       } else {
//         removedParent.right = null;
//       }
//       return this;
//     }

//     // Finding the successor and its parent
//     let successor = null;
//     let successorParent = null;

//     // Option 2: Removed node has a right child
//     // If the removed node has the right child, then we should find the left-most node of the right side
//     if (removedNode.right) {
//       current = removedNode.right;
//       // Successor is the left-most node
//       while (current) {
//         if (current.left) {
//           successorParent = current;
//           current = current.left;
//         } else {
//           successor = current;
//           break;
//         }
//       }
//       // If the successor is the right child of the removed node, which means successorParent is null
//       if (!successorParent) {
//         // Then let the left child of the removed node be the left child of the successor
//         successor.left = removedNode.left;
//       } else {
//         // If the successor is not a child of the removed node then
//         // Let make the successor's right child become it's parent left child
//         successorParent.left = successor.right;
//         // Let the successor inherit both children of the removed node
//         successor.right = removedNode.right;
//         successor.left = removedNode.left;
//       }

//     // Option 3: Removed node only has left child
//     } else {
//       // If the removed node doesn't have a right child, then let the left child be the successor
//       successor = removedNode.left;
//     }
//     // If removed node's parent is null, it means that removed node is root
//     if (!removedParent) {
//       this.root = successor;
//     } else {
//       // Determine if the removed node is the left or right child of its parent
//       if (removedParent.value > removedNode.value) {
//         // If the removed node is the left child of its parent, let the successor be the left child of the removed node's parent
//         removedParent.left = successor;
//       } else {
//         // If the removed node is the right child of its parent, let the successor be the right child of the removed node's parent
//         removedParent.right = successor;
//       }
//     }
//     return this;
//   }

//   isLeapNode(node) {
//     if (!node.left && !node.right) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(32)
// tree.insert(17)
// tree.insert(77)
// tree.insert(12)
// tree.insert(24)
// tree.insert(28)
// tree.insert(38)
// tree.insert(37)
// tree.insert(67)
// tree.insert(35)
// // JSON.stringify(traverse(tree.root))
// // console.log(JSON.stringify(traverse(tree.root)))
// // console.log(tree.lookup(20))
// // console.log(tree.lookup(3))
// tree.remove(77)
// tree.remove(32)
// tree.remove(24)
// console.log(JSON.stringify(traverse(tree.root)))

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }


// ===================================================================


class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // insert a data to the tree
  insert(data) {
    // creare a node for the given data
    const newNode = new Node(data)
    // if the tree is empty (no root), then root = new node
    if (!this.root) {
      return this.root = newNode
    }
    // Recursive function to traverse over non-empty tree and add the new node to leaf
    const insertNode = (node) => {
      // if data is less than the current node
      if (data < node.data) {
        // if current node doesn't have left child, newNode becomes the left child
        if (!node.left) {
          return node.left = newNode
        } else {
          // otherwise continue to traverse to the left child
          insertNode(node.left)
        }
      // otherwise if data is greater than the current node
      } else if (data > node.data) {
        // if current node doesn't have right child, newNode becomes the right child
        if (!node.right) {
          return node.right = newNode
          // otherwise continue to traverse to the right child
        } else {
          insertNode(node.right)
        }
      // otherwise return null
      } else return null
    }
    // start traverse through the tree to add newNode, start from root
    insertNode(this.root)
  }

  // check if the node exists in the tree
  exist(data, node = this.root) {
    // if tree is empty or node reach leaf node and nothing matches, return false
    if (!node) return false
    // if node is found, return true
    if (data === node.data) {
      return true
    }
    // if data is less than current node
    if (data < node.data) {
      // continue to search left child
      return this.exist(data, node.left)
      // otherwise if data is greater than current node, continue to search right child
    } else {
      return this.exist(data, node.right)
    }
  }

  // remove a node with given data
  remove(data, node = this.root) {
    // if there's no node, return null
    if (!node) return null
    // if data is less than current node data, search left branch
    if (data < node.data) {
      // left child of current node will be the result of the left search
      node.left = this.remove(data, node.left)
    // if data is greater than current node data, search right branch
    } else if (data > node.data) {
    // right child of current node will be the result of the right search
      node.right = this.remove(data, node.right)
    // if found the matching node
    } else {
      // if node doesn't have either left or right child
      if (!node.left && !node.right) {
        // then return null so the result of the prev recursion will be null
        return null
      // if node has right child and no left child, return the right child
      } else if (!node.left) {
        return node.right
      // if node has left child and no right child, return the left child
      } else if (!node.right) {
        return node.left
      }
      // if node has both left and right children
      // to remove the node, replace it with the farthest left of the right child
      // first, start from the right child of the removed node
      let farthestLeftOfRightNode = node.right
      // then traverse all the way to the left to find the farthest left
      while (farthestLeftOfRightNode.left) {
        farthestLeftOfRightNode = farthestLeftOfRightNode.left
      }
      // replace the data of the removed node with the farthest left node
      node.data = farthestLeftOfRightNode.data
      // then remove the farthest left node, start from the right child of the removed node
      this.remove(farthestLeftOfRightNode.data, node.right)
    }
    return node
  }

  // find the minimum value of the tree
  findMin(node = this.root) {
    // if tree is empty, return null
    if (!node) return null
    // if no has no left child, return node data
    if (!node.left) {
      return node.data
    }
    // if node has left child, continue to search the left
    return this.findMin(node.left)
  }

  // find the maximum value of the tree
  findMax(node = this.root) {
    // if tree is empty, return null
    if (!node) return null
    // if no has no right child, return node data
    if (!node.right) {
      return node.data
    }
    // if node has right child, continue to search the right
    return this.findMax(node.right)
  }

  // print all data of tree in order from max to min
  printMaxToMin() {
    // create an array to store values from max to min
    const result = []
    // recursive function to traverse inorder reversely
    const getMaxToMin = (node) => {
      // explore the right child first
      node.right && getMaxToMin(node.right)
      // then add current node data to the result
      result.push(node.data)
      // then explore the left child
      node.left && getMaxToMin(node.left)
    }
    // start generate max to min array, start from the root
    getMaxToMin(this.root)
    // join all data in array together, separated by ', ' and print out
    console.log(result.join(', '))
  }

  // print all data of tree in order from min to max
  printMinToMax() {
    // create an array to store values from min to max
    const result = []
    // recursive function to traverse inorder
    const getMinToMax = (node) => {
      // explore the left child first
      node.left && getMinToMax(node.left)
      // then add current node data to the result
      result.push(node.data)
      // then explore the right child
      node.right && getMinToMax(node.right)
    }
    // generate min to max array, start from the root
    getMinToMax(this.root)
    // join all data in array together, separated by ', ' and print out
    console.log(result.join(', '))
  }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(4)
bst.insert(7)
bst.insert(6)
bst.insert(9)
bst.insert(3)
bst.insert(1)
bst.insert(19)
bst.insert(12)
bst.insert(2)
bst.insert(8)
bst.insert(11)
bst.insert(21)
bst.insert(14)
bst.insert(20)
bst.insert(13)
bst.insert(16)
bst.insert(18)
console.log('Tree before after constructing: ', JSON.stringify(bst, null, 4))
console.log(bst.exist(22))
bst.remove(15)
console.log('Tree after after remove 15: ', JSON.stringify(bst, null, 4))
console.log('Min: ', bst.findMin())
console.log('Max: ', bst.findMax())
bst.printMaxToMin()
bst.printMinToMax()


