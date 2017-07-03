'use strict';

// Colleen is turning 'n' years old! Therefore, she has 'n' candles of various heights on her cake, and candle 'i' has height 'heighti'. Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles. Given the 'heighti' for each individual candle, find and print the number of candles she can successfully blow out.

let numCandles = 8;
let candleHeights = [3, 1, 2, 8, 8, 5, 4, 4];

function birthdayCakeCandles(n, heights) {

  function reverseSort(a, b) {
    return b - a;
  }

  let tallCandles = 1;
  let reverseSorted = heights.sort(reverseSort);

  for(let i = 0; i < n; i++) {
    if (reverseSorted[i] === reverseSorted[i + 1]) {
      tallCandles += 1;
      continue;
    }

    break;
  }

  // return tallCandles;
  console.log(tallCandles);

}

birthdayCakeCandles(numCandles, candleHeights);
