'use strict';

/*


A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

Answer: 906609

*/

function largePalindrome(){
  let largeNum = 999;
  let nums = [];
  let pals = [];

  for(let i=100; i<=largeNum; i++){
    nums.push(i);
  }

  for(let i=100; i<=largeNum; i++){
    for(let x=0; x<nums.length; x++){
      let product = i * nums[x];
      if(product === Number(product.toString().split('').reverse().join(''))){
        pals.push(product);
      }
    }
  }
  let big = pals.filter(function(value){
    return value > 800000;
  })
  console.log(big.sort());
}

largePalindrome();
