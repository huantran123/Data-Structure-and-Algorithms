// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function(numCourses, prerequisites) {
  // construct the adjacency list
  // with the index as the course and the value as its prerequisites
  const graph = []
  for (let i = 0; i < numCourses; i++) graph.push([])
  for (let i = 0; i < prerequisites.length; i++) {
      graph[prerequisites[i][0]].push(prerequisites[i][1])
  }

  // visited object
  const visited = {}

  // recursive function
  const canFinishThisCourse = function(course) {
      // base case:
      // if course has been visited, return false
      if (visited[course] === 'cannotFinish') return false
      // if course has been visited and can be finished, return true
      if (visited[course] === 'canFinish') return true

      // if none of above, course has never been visited
      // precourses haven't been checked, so first mark course as cannot finish
      visited[course] = 'cannotFinish'

      // recrusively explore each precourse
      for (let precourse of graph[course]) {
          if (!canFinishThisCourse(precourse)) return false
      }

      // after exploring all precourse and nothing happens,
      // change visted[course] to false to sign that course could be finished
      visited[course] = 'canFinish'
      return true
  }

  // check every course, return false if there exists 1 course that cannot be finished
  for (let i = 0; i < numCourses; i++) {
      if (!canFinishThisCourse(i))
          return false
  }

  return true
};


// ==========================================================
// Topoligical Sort Approach
// ==========================================================

let dfs = function(course, graph, visited) {
    // If course is already visited but not marked as processed, and now visit again,
    // we found a cycle, return false
    if (visited[course] === 1) {
        return false
    }

    // If course is already visited and has already marked as processed (2), now visit again,
    // no need to re-process, return true
    if (visited[course] === 2) {
        return true
    }

    // mark course as visited
    visited[course] = 1

    for (let prereq of graph[course]) {
        // if cycle is detected, return false
        if (!dfs(prereq, graph, visited)) {
            return false
        }
    }
    // If all prereqs are processed smoothly, mark course as processed (2)
    visited[course] = 2
    return true
}

// Topological Sort
let canFinish = function(numCourses, prerequisites) {
    // construct the adjacency list
    // with the index as the course and the value as its prerequisites
    const graph = []
    for (let i = 0; i < numCourses; i++) graph.push([])
    for (let i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1])
    }

    const visited = {}

    for (let course = 0; course < numCourses; course++) {
        // if detect a cycle, return flase
        if (!dfs(course, graph, visited)) {
            return false
        }
    }
    return true
}
