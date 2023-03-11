// If you know a solution is not far from the root of the tree:
// => BFS. BFS is good for finding targets that are close to the starting point

// If the tree is very deep and solutions are rare:
// => BFS. If tree is deep and solutions are rare, it's better to search nodes in the shallow levels first instead of dive to deep to just 1 path so we could have higher chance to find the solutions


// If the tree is very wide:
// => DFS. If the tree is wide, it's better to do vertically with DFS to incease more chance finding the solution. Using BFS will need too much memory.

// If solutions are frequent but located deep in the tree
// => DFS. If the solutions appear more frequently at the deep levels of the tree, we better discover the deep levels first instead of searching horizontally with BFS

// Determining whether a path exists between 2 nodes:
// => DFS

// Find the shortest path:
// => BFS