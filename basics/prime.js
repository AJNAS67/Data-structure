//o(n)
function checkPrime(n) {
  if (n < 2) {
    return false;
  } else {

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(checkPrime(11));

//o(Math.sqrt(n))
function checkPrime1(n) {
  if (n < 2) {
    return false
  }
  else{
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }      
    }
    return true
  }
}
console.log(checkPrime1(5));

