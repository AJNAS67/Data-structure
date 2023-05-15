const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e", "a"],
  d: [],
  e: [],
  f: ["c"],
};
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};
const hasPathQueue = (graph, src, dst) => {
  const queue = [src];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log(hasPath(graph, "f", "a")); //true
console.log(hasPath(graph, "a", "d")); //true
console.log(hasPath(graph, "b", "e")); //false
console.log('hasPathQueue');
console.log(hasPathQueue(graph,"b","a")); //false  
