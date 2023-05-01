const array = [1, 2, 3, 4, 6];
array.push(5); //array = [1, 2, 3, 4, 6, 5];
array.unshift(19); //array = [19, 1, 2, 3, 4, 6, 5];
array.shift(); //array = [1, 2, 3, 4, 6, 5];
array.pop(); //array = [1, 2, 3, 4, 6];
console.log(array);  

const arr=array.slice(1,4) //[3,4]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi"); //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]