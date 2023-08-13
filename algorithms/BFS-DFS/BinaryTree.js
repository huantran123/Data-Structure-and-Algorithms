// structure of a node
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

// Binary Tree
class BinaryTree {
  constructor(data) {
    this.root = data ? new Node(data) : null
  }
}

// create new tree
const tree = new BinaryTree('A')
tree.root.left = new Node('B')
tree.root.right = new Node('C')
tree.root.left.left = new Node('D')
tree.root.left.right = new Node('E')
tree.root.right.left = new Node('F')
tree.root.right.right = new Node('G')
tree.root.left.left.right = new Node('H')
console.log(JSON.stringify(tree, null, 4))

const findTreeHeight = (treeNode) => {
  // Base case
  if (treeNode === null) {
    return -1
  }
  let leftHeight = 1 + findTreeHeight(treeNode.left)
  let rightHeight = 1 + findTreeHeight(treeNode.right)

  return leftHeight >= rightHeight ? leftHeight : rightHeight
}

console.log('Tree height: ', findTreeHeight(tree.root))


console.log('=======================================================')

// Similar to building a heap
const buildBinaryTreeFromArray = (array) => {
  let tree = new BinaryTree()

  const convertArrayToTree = (index, currentNode) => {
    // check if index is still in array range
    if (index < array.length) {
      // check if the node is not null
      // if node is not null, add node to the tree
      // if node is null, skip
      if (array[index] !== null) {
        currentNode = new Node(array[index])
        // index of left child = 2 * current index + 1
        currentNode.left = convertArrayToTree(2 * index + 1, currentNode.left)
        // index of right child = 2 * current index + 2
        currentNode.right = convertArrayToTree(2 * index + 2, currentNode.right)
      }
    }
    return currentNode
  }

  // Build tree from array
  tree.root = convertArrayToTree(0, tree.root)
  return tree
}

const array = [3, 9, 5, null, 2, 15, 7]
const treeFromArray = buildBinaryTreeFromArray(array)
console.log(JSON.stringify(treeFromArray, null, 4))

