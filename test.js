// return two number get sum is 10
console.log(typeof(test,'pppp'));
const arr = [1, 2, 3, 4, 55, 6];
function check(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 10) {
        console.log(arr[i], arr[j]);
        return [arr[i], arr[j]];
      }
    }
  }
}

let ar = check(arr);
console.log(ar);
const set1 = new set();
function check1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let match = 10 - num;
    if (set1.has(match)) {
      return { match, num };
    } else {
      set1.add(num);
    }
  }
}
let aj=check1(arr)
console.log(aj,'akkakak');
