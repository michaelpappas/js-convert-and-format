"use strict";

function convertAndFormat(input) {
  if (typeof input !== 'number') { return ("That is not a number."); }

  if (input < 1000 && input > -1000) {
    const numString = input.toString();
    return input.toString();
  }

  let negOffset = 0;
  let negative;

  if (input < 0) {
    negative = true;
    negOffset = 1;
  }

  let wholeNumArr = [];
  let inputStr = input.toString();
  let inputArr = inputStr.split("");
  let decimalIdx = inputArr.indexOf(".");

  if (decimalIdx >= 0) {
    wholeNumArr = inputArr.slice(0 + negOffset, inputArr.indexOf("."));
  }
  else {
    wholeNumArr = inputArr.slice(0 + negOffset, inputArr.length + negOffset);

    return (negative ? "-" + addCommas(wholeNumArr) : addCommas(wholeNumArr));
  }

  let decimals = inputArr.slice(decimalIdx);

  return (negative ? "-" + addCommas(wholeNumArr) + decimals.join("", ",") : addCommas(wholeNumArr) + decimals.join("", ","));
}

/** takes an array of integer strings and adds commas every 3 numbers starting at the end of the array (lowest value) */
function addCommas(wholeNum) {
  let numCommas = Math.floor(wholeNum.length / 3);
  let wholeNumArr = [];
  let revArr = wholeNum.reverse();

  for (let i = 0; i < revArr.length; i++) {
    wholeNumArr.push(revArr[i]);

    if ((i + 1) % 3 === 0 && numCommas > 0) {
      wholeNumArr.push(",");
      numCommas--;
    }
  }
  return wholeNumArr.reverse().join("", ",");
}

module.exports = convertAndFormat;