# Searching + BFS + DFS

## BFS vs DFS
### Similar
- Time complexity: O(n)
### Different
#### BFS
- Very good for find the shortest path between a starting point and any other reachable nodes.
- BFS is better thatn DFS if you have additional information on the location of the target node and you know that the node is likely in the upper levels of the tree
1. Pros:
  - Shortest Path
  - Closer Nodes

2. Cons:
  - More memory

#### DFS
- Very good when answering the question "Does this path exist?"
- DFS is better thatn BFS if you know that the node is likely in the lower levels of the tree
1. Pros:
  - Less memory
  - Does path exist?

2. Cons:
  - Can get slow

## DFS
### InOrder
- left -> root -> right
- It is used to give nodes in non-decreasing order
### PreOrder
- root -> left -> right
- It is uses to recreate the tree
### PostOrder
- left -> right -> root
- It is used to delete the tree.