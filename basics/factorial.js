function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(6)); // Output: 120
  function factorial1(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial1(num - 1);
    }
  }
  
  console.log(factorial1(5)); // Output: 120
  console.log(Math.sqrt(35));