
// adjacency list
// directed, weighted
// from index -> array element
const airportRoutesGraph = [
  [[1, 1850], [2, 965]],      // SFO, index 0
  [[0, 1850], [3, 740]],      // ORD, index 1
  [[1, 888]],                 // DEN, index 2
  [[2, 1620], [4, 1400]],     // JFK, index 3
  [[2, 860]]                  // IAH, index 4
]

const airports = {0: 'SFO', 1: 'ORD', 2: 'DEN', 3: 'JFK', 4: 'IAH'}

// use for weighted graph
const findPossibleRoutes = (from, to) => {
  // convert from and to airports to their corresponding index
  let fromIndex, toIndex

  // get the corresponding indices of from and to airports
  for (let index in airports) {
    if (airports[index] === from)
      fromIndex = Number(index)
    if (airports[index] === to)
      toIndex = Number(index)
  }

  // an array to store all possible paths from airport 1 to airport 2
  const result = []
  // a queue to track airports to visit
  // initial element is the from airport, store the aiport index, the current path, and the visited arports
  const queue = [{index: fromIndex, curPath: [airports[fromIndex]], visited: new Set([fromIndex])}]

  // traversing as long as the queue has items in it
  while (queue.length) {
    // extract the first airport from the queue
    const curAirport = queue.shift()
    // looping a long the array of airports connecting to the current airport
    for (let i = 0; i < airportRoutesGraph[curAirport.index].length; i++) {
      // extracting the current airport in the array
      const nextAirportIndex = airportRoutesGraph[curAirport.index][i][0]
      // if the current airport match with the 'to' airport, add the path to the result array
      if (nextAirportIndex === toIndex) {
        result.push([...curAirport.curPath, airports[nextAirportIndex]])
      // otherwise, check if the current airport is not in the already visted airport set
      } else if (!curAirport.visited.has(nextAirportIndex)) {
        // if so then add the current airport to the queue to wait to be explored later
        // object include index of current airport, current path is the path from the 'from' airport
        // to the current airport, and add the current airport to the already visited airport set
        queue.push({
          index: nextAirportIndex,
          curPath: [...curAirport.curPath, airports[nextAirportIndex]],
          visited: new Set([...curAirport.visited, nextAirportIndex])
        })
      }
    }
  }

  return result
}

const fromAirport = 'SFO'
const toAirport = 'JFK'
const paths = findPossibleRoutes(fromAirport, toAirport).map(path => path.join(' -> '))
const pathsString = paths.join('\n- ')
console.log(`Paths from ${fromAirport} to ${toAirport}:\n- ${pathsString}`)

// =======================================================================================

// use for weighted graph
const findShortestFlight = (from, to) => {
  // convert from and to airports to their corresponding index
  let fromIndex, toIndex

  // get the corresponding indices of from and to airports
  for (let index in airports) {
    if (airports[index] === from)
      fromIndex = Number(index)
    if (airports[index] === to)
      toIndex = Number(index)
  }

  // an array to store all paths from airport 1 to airport 2
  const paths = []
  // a queue to track airports to visit
  // initial element is the from airport, store the aiport index, the current path, the total distance, and the visited arports
  let queue = [{index: fromIndex, curPath: airports[fromIndex], distance: 0, visited: new Set([fromIndex])}]

  // traversing as long as the queue has items in it
  while (queue.length) {
    // extract the first airport from the queue
    const curAirport = queue.shift()
    // looping a long the array of airports connecting to the current airport
    for (let i = 0; i < airportRoutesGraph[curAirport.index].length; i++) {
      // extracting the i-th airport in the array: index and distance
      const [nextAirportIndex, nextAirportDistance] = airportRoutesGraph[curAirport.index][i]
      // if the current airport match with the 'to' airport, add the path and accumulated distance to the paths array
      if (nextAirportIndex === toIndex) {
        paths.push([`${curAirport.curPath} -> ${airports[nextAirportIndex]}`, curAirport.distance + nextAirportDistance])
      // otherwise, check if the current airport is not in the already visted airport set
      } else if (!curAirport.visited.has(nextAirportIndex)) {
        // if so then add the current airport to the queue to wait to be explored later
        // object include index of current airport, current path is the path from the 'from' airport
        // to the current airport, accumulate the distance, and add the current airport to the already visited airport set
        queue.push({
          index: nextAirportIndex,
          curPath: `${curAirport.curPath} -> ${airports[nextAirportIndex]}`,
          distance: curAirport.distance + nextAirportDistance,
          visited: new Set([...curAirport.visited, nextAirportIndex])
        })
      }
    }
  }
  // if there exists path in the paths array, sort the paths array and return the path with smallest distance, otherwise return null
  return (paths.length > 0) ? paths.sort((a, b) => a[1] - b[1])[0] : null
}

const fromAirport2 = 'SFO'
const toAirport2 = 'JFK'
const flight = findShortestFlight(fromAirport2, toAirport2)
console.log(`Shortest route from ${fromAirport2} to ${toAirport2} is ${flight[0]}: ${flight[1]} miles`)

