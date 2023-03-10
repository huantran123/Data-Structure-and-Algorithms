# Algorithm Time-Complexity Analysis

**Goal:** Understand how the runtime of an algorithm is affected by an increasing number of elements.

## 5 Rules
1. Analyze the worst case performance of the algorithm, i.e. Big O
2. Add steps in order (+); multiply nested steps (*)
3. Different inputs should have different variables, e.g. O(a+b)
4. Remove constants
5. Drop non-dominants

## 3 Types
### 1. Big O – Worst Case

#### Ideal
O(1) – Constant
O(log n) – Logarithmic
O(n) – Linear

#### Acceptable
O(n * log n) – Log Linear

#### Avoid
O(n^2) – Quadratic
O(2^n) – Exponential
O(n!) – Factorial

### 2. Big Θ – Average/Tight Case
### 3. Big Ω – Best Case

## Recursion
### When to use recursion
#### Tree
Every time you are using a tree or converting something into a tree, consider recursion
1. Divided into a number of subproblems that are smaller instances of the same problem
2. Each instance of the subproblem is identical in nature
3. The solutions of each subproblem can be combined to solve the problem at hand

#### Devide and Conquer

## Resources

- [Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell](https://www.bigocheatsheet.com/ "Big O Cheat Sheet")
- [Practical Java Examples of the Big O Notation](https://www.baeldung.com/java-algorithm-complexity "Big O Examples")
