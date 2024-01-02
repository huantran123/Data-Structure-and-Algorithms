// https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

let canVisitAllRooms = function(rooms) {
  const stack = [0]
  const visited = new Set()       // store all visited rooms

  while (stack.length > 0) {
      // pop the room on top of the stack
      const curRoom = stack.pop()

      // if current room hasn't been visited yet
      if (!visited.has(curRoom)) {
          // mark room as visited
          visited.add(curRoom)

          // for each key in the current room
          for (let key of rooms[curRoom]) {
              // if the room for that key hasn't been visited, add room to the stack
              if (!visited.has(key)) {
                  stack.push(key)
              }
          }
      }
  }
  // return if number of visited room is the same as the total of rooms
  return visited.size === rooms.length
};