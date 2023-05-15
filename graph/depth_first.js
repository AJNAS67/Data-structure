const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) stack.push(neighbor);
  }
};
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
depthFirstPrint(graph, "c");
console.log('end');
const depthFirstPrint1=(graph,source)=>{
    console.log(source);
    for(let neighbor of graph[source])
    depthFirstPrint1(graph,neighbor)
}
depthFirstPrint1(graph,"a")