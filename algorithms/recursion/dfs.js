// DFS traversal using Recursion

const dfsRecursion = (root, path = []) => {
  path.push(root.data)
  // Base case: current node is leaf node
  if (!root.left && !root.right) {
    return path
  }
  // Traverse right
  root.right && dfsRecursion(root.right, [...path])
  // Traverse left
  root.left && dfsRecursion(root.left, [...path])
}