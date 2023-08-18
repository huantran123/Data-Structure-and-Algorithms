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

  search(data) {
    //Code here
    let current = this.root;
    while (current) {
      if (current.data === data) {
        return current;
      } else if (current.data > data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false;
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


console.log('\n=======================================================\n')

// Similar to building a heap
const buildBinaryTreeFromArray = (array) => {
  let tree = new BinaryTree()

  const convertArrayToTree = (index) => {
    // check if index is still in array range
    if (index < array.length) {
      // check if the node is not null
      // if node is not null, add node to the tree
      // if node is null, skip
      if (array[index] !== null) {
        const currentNode = new Node(array[index])
        // index of left child = 2 * current index + 1
        currentNode.left = convertArrayToTree(2 * index + 1, currentNode.left)
        // index of right child = 2 * current index + 2
        currentNode.right = convertArrayToTree(2 * index + 2, currentNode.right)
        return currentNode
      } else {
        return null
      }
    }
    return null
  }

  // Build tree from array
  tree.root = convertArrayToTree(0)
  return tree
}

console.log('Build binary tree from array: ')
const array = [3, 9, 5, null, 2, 15, 7]
const treeFromArray = buildBinaryTreeFromArray(array)
console.log(JSON.stringify(treeFromArray, null, 4))

console.log('\n=======================================================\n')

const printTreeLayers = (tree) => {
  // Queue to track the visited nodes
  // Each node stored in queue is an object with node and level properties
  const queue = [{node: tree.root, level: 1}]
  // A result string to print out at the end
  let result = ''
  // While loop to traverse through the tree
  while (queue.length) {
    // Extract the node at the head of the queue
    const currentNode = queue.shift()
    // Add node data to the string
    result += currentNode.node.data
    // If current node has left and right children, add them to the queue, increment the level
    currentNode.node.left && queue.push({node: currentNode.node.left, level: currentNode.level + 1})
    currentNode.node.right && queue.push({node: currentNode.node.right, level: currentNode.level + 1})
    // To separate the nodes on the same level and on another level, check the level and add corresponding dividers
    if (queue[0]?.level === currentNode.level) {
      result += ','
    } else if (queue[0]?.level > currentNode.level) {
      result += ' | '
    }
  }
  console.log(result)
}

console.log('Print tree layer by layer: ')
const array2 = [6, 4, 8, 1, 5, null, 10]
const tree2 = buildBinaryTreeFromArray(array2)
printTreeLayers(tree2)    // 6 | 4,8 | 1,5,10

console.log('\n=======================================================\n')

const printAllPaths = (tree) => {
  const stack = [tree.root]
  const path = []
  let allPaths = []
  let result = ''
  let visitedNode = new Set()

  while(stack.length) {
    // Extrack the current node as the top item in the stack
    const currentNode = stack.pop()
    // Add current node to the visited list
    visitedNode.add(currentNode.data)

    // Add left and right children of current node to the stack if exists
    currentNode.left && stack.push(currentNode.left)
    currentNode.right && stack.push(currentNode.right)

    // Add the value of current node to the path array
    path.push(currentNode.data)

    // If current node is a leaf node (no left and right children)
    if (!currentNode.left && !currentNode.right) {
      // Add a copy of the complete path to the allPaths array
      allPaths.push(JSON.parse(JSON.stringify(path)))
      // Remove the last node from the path array (going back to the parent node)
      path.pop()

      // Get the parent node from its value stored in the path array
      let parentNode = tree.search(path[path.length - 1])
      // Repeadedly removed parent nodes if both left and right children are visited
      while (true) {
        // If parent node found exist
        if (parentNode) {
          // Check if both left and right children have been visited
          const leftChildVisited = !(parentNode.left && !visitedNode.has(parentNode.left.data))
          const rightChildVisited = !(parentNode.right && !visitedNode.has(parentNode.right.data))

          // If both children have been visited, remove the node (going back to the parent node)
          if (leftChildVisited && rightChildVisited) {
            path.pop()
            parentNode = tree.search(path[path.length - 1])
            // when node is remove, continue to the next loop to check and remove the prev parent node
            continue
          }
        }
        break
      }
    }
  }
  // Construct the result string from the allPaths array
  for (let i = 0; i < allPaths.length; i++) {
    result += allPaths[i].join(',')
    if (i < allPaths.length) {
      result += ' | '
    }
  }
  console.log(result)
}

console.log('Print all paths from root to leaf: ')
const array3 = [6, 4, 8, 1, 5, null, 10]
const tree3 = buildBinaryTreeFromArray(array3)
printAllPaths(tree3)    // 6,8,10 | 6,4,5 | 6,4,1
const arrayBig = [10,5,15,4,7,12,19,3,null,6,9,11,14,16,21,1,null,null,null,null,null,8,null,null,null,13,null,null,18,20,null,null,2]
const treeBig = buildBinaryTreeFromArray(arrayBig)
printAllPaths(treeBig)     // true

console.log('\n=======================================================\n')

const printInZigZag = (tree) => {
  // Using stack in this case because the node added later to the stack
  // will be extracted first to get child nodes on the next level
  // Create a stack to store all nodes on the current level
  let currentLayer = [{node: tree.root, level: 1}]
  // Create a stack to store all nodes on the next level
  let nextLayer = []
  // Track the direction of traverse
  let leftToRight = true
  let result = ''
  // Continue to traverse when current level has node(s)
  while (currentLayer.length !== 0) {
    // Take out the last node that was added later (Stack)
    const currentNode = currentLayer.pop()
    // Add node data to the result string
    result += currentNode.node.data
    // Check the direction,
    if (leftToRight) {
      // If left to right then add left child first then right child to the next level array
      currentNode.node.left && nextLayer.push({node: currentNode.node.left, level: currentNode.level + 1})
      currentNode.node.right && nextLayer.push({node: currentNode.node.right, level: currentNode.level + 1})
    } else {
      // If right to left then add right child first then left child to the next level array
      currentNode.node.right && nextLayer.push({node: currentNode.node.right, level: currentNode.level + 1})
      currentNode.node.left && nextLayer.push({node: currentNode.node.left, level: currentNode.level + 1})
    }
    // If the current level has no node left
    if (currentLayer.length === 0) {
      // Then change the direct
      leftToRight = !leftToRight
      // And update current layer to next layer, next layer reset to []
      const temp = currentLayer
      currentLayer = nextLayer
      nextLayer = temp
    }
    // To separate the nodes on the same level and on another level, check the level and add corresponding dividers
    if (currentLayer[0]?.level === currentNode.level) {
      result += ','
    } else if (currentLayer[0]?.level > currentNode.level) {
      result += ' | '
    }
  }
  console.log(result)
  return result
}

console.log('Print layer by layer in ZigZag order: ')
const array4 = [6, 4, 8, 1, 5, null, 10, 3, 12]
const tree4 = buildBinaryTreeFromArray(array4)
printInZigZag(tree4)     // 6 | 8,4 | 1,5,10 | 12,3

console.log('\n=======================================================\n')

const checkBST = (tree) => {
  // Defined a variable to track is tree is BST
  // Default value is true, will be change to false when detect a node that break the BST properties
  let isBST = true

  // Recursive function to traverse over the tree to check every node
  // Input: node to inspect, and min and max value to set the range
  const checkTree = (node, min, max) => {
    // To be a BST, every node data should not be less than min and greater than max
    if (node.data <= min || node.data >= max) {
      isBST = false
    }
    // If node has left child, check the left branch
    // Keep min and update max to be current node data because all nodes in the left branch should not be greater than current node
    node.left && checkTree(node.left, min, node.data)
    // If node has right child, check the right branch
    // Keep max and update min to be current node data because all nodes in the right branch should not be less than current node
    node.right && checkTree(node.right, node.data, max)
  }
  // Start at the root node, min is negative infinity, max is positive infinity
  checkTree(tree.root, -Infinity, +Infinity)
  return isBST
}

console.log('Check if tree is BST: ')

const bstArr = [6, 4, 8, 1, 5, null, 10]
const bstTree = buildBinaryTreeFromArray(bstArr)
console.log(checkBST(bstTree))     // true
const nonBstArr = [3, 5, 1, 7, null, 9, 12]
const nonBstTree = buildBinaryTreeFromArray(nonBstArr)
console.log(checkBST(nonBstTree))     // false
const bstArr2 = [10,5,15,4,7,12,19,3,null,6,9,11,14,16,21,1,null,null,null,null,null,8,null,null,null,13,null,null,18,20,null,null,2]
const bstTree2 = buildBinaryTreeFromArray(bstArr2)
console.log(checkBST(bstTree2))     // true

console.log('\n=======================================================\n')

const biggestSumFromRootToLeaf = (tree) => {
  // Create variables to store the max sum and the expression
  let result = 0
  let sumExpression = ''

  // Recursive function to traverse through the tree (DFS)
  const findBiggestSum = (node, sum, sumString) => {
    // When reaching dead end, compare between the sum and current result and update result and expression, then return
    if (!node) {
      if (sum >= result) {
        result = sum
        sumExpression = sumString
      }
      return
    }
    sumString += node.data
    // Explore the left and right child with the sum updated to be current sum + current node value
    // If current node has children, add `+` to the expression
    findBiggestSum(node.left, sum + node.data, node.left ? `${sumString} + ` : sumString)
    findBiggestSum(node.right, sum + node.data, node.right ? `${sumString} + ` : sumString)
  }
  // Start from the root and sum = 0
  findBiggestSum(tree.root, 0, sumExpression)
  return `${sumExpression} = ${result}`
}

console.log('Find biggest sum from root to leaf: ')
const array5 = [6, 4, 8, 1, 5, null, 10]
const tree5 = buildBinaryTreeFromArray(array5)
console.log(biggestSumFromRootToLeaf(tree5))     // 6 + 8 + 10 = 24
const array6 = [10,5,15,4,7,12,19,3,null,6,9,11,14,16,21,1,null,null,null,null,null,8,null,null,null,13,null,null,18,20,null,null,2]
const tree6 = buildBinaryTreeFromArray(array6)
console.log(biggestSumFromRootToLeaf(tree6))    // 10 + 15 + 19 + 21 + 20 = 85

console.log('\n=======================================================\n')