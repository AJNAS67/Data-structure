// if Mobile double the price of array;

let product = [
  {
    id: 1,
    category: "electronics",
    type: "Mobile",
    name: "Iphone",
    price: 5000,
  },
  {
    id: 2,
    category: "electronics",
    type: "Laptop",
    name: "Hp 1",
    price: 25000,
  },
  {
    id: 3,
    category: "electronics",
    type: "Mobile",
    name: "Iphone",
    price: 1000,
  },
  {
    id: 1,
    category: "electronics",
    type: "Mobile",
    name: "Android",
    price: 1000,
  },
  {
    id: 1,
    category: "electronics",
    type: "Mobile",
    name: "Nokia",
    price: 1000,
  },
];
function changePrice(product) {
  return product.map((item) => {
    if (item.type == "Mobile") {
      return {
        ...item,
        price: item.price * 2,
      };
    }
    return item;
  });
}

console.log(changePrice(product));

//calculate total price of mobiles

function sumOfMobile(product) {
  let mobileProduct = product.filter((item) => item.type === "Mobile");

  return mobileProduct.reduce((acc, item) => acc + item.price, 0);
}
console.log(sumOfMobile(product), "sum of mobile product price");

//remove Duplicate form an array
function removeDuplicate(arr) {
  let obj = {};
  let removedDuplicateArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      removedDuplicateArray.push(arr[i]);
    }
  }
  console.log(removedDuplicateArray, "removed Duplicated");
}
removeDuplicate([1, 4, 5, 5, 5, 1, 33, 4, 55, 64]);
function sumOfDigits(number) {
  let sum = 0;
  const digits = number.toString();
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i], 10);
    sum += digit;
  }
  return sum;
}
console.log(sumOfDigits(134), "sum of digits");

function sumDigits(num) {
  let sum = 0;
  let digit;

  while (num > 0) {
    digit = num % 10; // Extract the rightmost digit using modulo
    sum += digit;
    num = Math.floor(num / 10); // Remove the rightmost digit using integer division
  }

  return sum;
}
console.log(sumDigits(1234), "sumDigitssumDigits");

function sumOfDigits1(number) {
  let num = number.toString().split("").map(Number);
  return num.reduce((acc, item) => {
    let sum = acc + item;
    if (sum > 10) {
      return sumOfDigits1(sum);
    }
    return sum;
  });
}
console.log(sumOfDigits1(12334), "sumOfDigits1");

//compute exponent of a number
function exponent(base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1);
}
console.log(exponent(7, 3), "exponent");

// practice-- from an unsorted array ,check whether there are any two numbers that will sum up to a given number

function findSum(array, num) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        return true;
      }
    }
  }
  return false;
}
console.log(findSum([12, 22, 33, 4, 44, 55], 37), "findSum");
function checkSum(arr, num) {
  let obj = {};
  let diff;
  for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i];
    if (obj[diff]) {
      return true;
    }

    obj[arr[i]] = true;
  }
  return false;
}
console.log(checkSum([1,2,2,3,3,44,55,55],15),'checkSum');
