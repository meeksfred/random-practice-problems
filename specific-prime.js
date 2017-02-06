'use strict';

/*


By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

Answer: 104743

*/

function findPrime(){
  let counter = 1;
  let current = 3;
  let tempHighPrime;

  while(current){
    let check = true;
    for(let i=2; i<current; i++){
      if(current % i === 0){
        check = false;
      }
    }

    if(check){
      ++counter;
      tempHighPrime = current;
    }

    if (counter === 10001) {
      console.log(tempHighPrime);
      return;
    }

    ++current;
  }
}

findPrime();
