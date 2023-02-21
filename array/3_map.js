const map=new Map([['a',1],['b',2]])
map.set('c',88)
console.log(map);
for (let [key,value] of map){
    console.log(`the key is ${key} and value is ${value}`);
}
const map1=new Map([[1,06],[2,99]])
for(let [key,val] of map1){
    console.log(`key is ${key} and value is ${val}`);
}