'use strict';

// This solution will take a long time to process!!! Answer is 6857.
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
