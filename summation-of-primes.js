'use strict';

/*


The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

function summationPrimes(){
  let answer = 2;
  let counter = 3;

  while(counter < 2000000){
    console.log(counter, 'counter');
    let check = true;
    for(let i=2; i<(Math.ceil(counter / 2)); i++){
      if(counter % i === 0){
        check = false;
      }
    }

    if(check){
      answer += counter;
      console.log(answer, 'answer');
    }

    counter += 2;
  }

  console.log(answer);
}

summationPrimes();
