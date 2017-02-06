/*


2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Answer: 232792560

*/
'use strict';

function findNum(){
  let num = 20;
  while(num){
    let check = true;

    for(let i=1; i<=20; i++){
      if(num % i !== 0){
        check = false;
      }
    }

    if(check){
      console.log(num);
      return;
    }
    num = ++num;
  }
}

findNum();
