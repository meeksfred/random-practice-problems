'use strict';
/*


The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Answer: 6857.

*/

// This solution will take a long time to process!!!
// Lots of room for improvement here.

let number = 600851475143;

function findPrime(num){
  for(let i=1; i<number; i+2){
    if(number % i === 0){
      check = false;
    }
  }

  return num;
}

function largestPrimeFactor(number){
  let factors = [];
  let primeFactors = [];

  for(let i=2; i<number; i++){
    if(number % i === 0){
      let check = true;
      for(let x=2; x<i; x++){
        if(i % x === 0){
          check = false;
        }
      }

      if(check) primeFactors.push(i);
      console.log(primeFactors);
    }
  }

  console.log(factors);
}

largestPrimeFactor(number);
