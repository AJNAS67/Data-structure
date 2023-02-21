// in array we can use any datatypes

const arr = [1, 2, 3, "neymar",8,9,9,55,44,7];

arr.push(4); // [ 1, 2, 3, 'neymar', 4 ]   push methord is used to push value in to the last of array

arr.unshift(10);  // [ 10, 1, 2, 3, 'neymar', 4 ] add begning of an array
arr.pop()   //[ 10, 1, 2, 3, 'neymar' ]  remove last element of an array

arr.shift()  //[ 1, 2, 3, 'neymar' ]  remove elemet from an bigning of an array
for (let item of arr){ 
    console.log(item);
}
console.log(arr.slice(1,9));
console.log(arr);  
