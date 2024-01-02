// https://leetcode.com/problems/course-schedule-ii/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

let findOrder = function(numCourses, prerequisites) {
  // constructur an adjacency list
  // with index as the course and value as array of its prereqs
  const graph = constructGraph(numCourses, prerequisites)
  console.log(graph)

  const result = []
  const visited = {}

  // for each course, if there's any course that causes a cycle, return []
  for (let course = 0; course < numCourses; course ++) {
      if (!dfs(course, graph, visited, result)) {
          return []
      }
  }

  return result
};

// construct a graph
let constructGraph = function(numCourses, prerequisites) {
  const graph = []
  for (let i = 0; i < numCourses; i++)
      graph.push([])
  for (let i = 0; i < prerequisites.length; i++) {
      graph[prerequisites[i][0]].push(prerequisites[i][1])
  }
  return graph
}

let dfs = function(course, graph, visited, result) {
  // if course is already visited but not processed, that now visit again,
  // that's a cycle, so return false
  if (visited[course] === 1) return false
  // if course is already visited and already process, no need to re-process
  // return true
  if (visited[course] === 2) return true

  // if none of above, mark course as visited
  visited[course] = 1

  // for each prerequisite of the course
  for (let prereq of graph[course]) {
      // if prereq cause a cycle, return false
      if (!dfs(prereq, graph, visited, result))
          return false
  }

  // after exploring all prereqs and no issue, mark course processed
  visited[course] = 2
  // add course to result
  result.push(course)

  return true
}