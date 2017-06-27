'use strict';

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

let exampleArray = [4, 2, 34, 22, 12];

function minMax(arr) {

  let sorted = arr.sort(function(a, b) {
    return a - b;
  });

  let min = sorted.slice(0, 4).reduce(function(x, y) {
    return Number(x) + Number(y);
  }, 0);

  let max = sorted.slice(1, 5).reduce(function(x, y) {
    return Number(x) + Number(y);
  }, 0);

  console.log(min, max);
}

minMax(exampleArray);
