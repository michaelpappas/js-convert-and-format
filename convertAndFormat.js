"use strict";

function convertAndFormat(input) {
  if (typeof input !== 'number') {
    return ("That is not a number.");
  }

  if (input < 1000 && input > -1000) { // if the value doesn't require a comma then just convert toString
    const numString = input.toString();
    return input.toString();
  }
  let negOffset = 0;
  let negative;
  if (input < 0) {
    negative = true;
    // console.log("negative");
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
    console.log("negative integer-", wholeNumArr);
    // console.log("negative state-", negative);
    return (negative ? "-" + addCommas(wholeNumArr) : addCommas(wholeNumArr));
  }

  let decimals = inputArr.slice(decimalIdx, wholeNumArr.lenth);
  // console.log("negative state-", negative);
  return (negative ? "-" + addCommas(wholeNumArr) + decimals.join("", ",") : addCommas(wholeNumArr) + decimals.join("", ","));

}

/** takes an array of number strings and adds commas every 3 numbers starting at the end of the array (lowest value) */
function addCommas(wholeNum) {
  let numCommas = Math.floor(wholeNum.length / 3);
  let wholeNumArr = [];
  let revArr = wholeNum.reverse();

  for (let i = 0; i < revArr.length; i++) {
    wholeNumArr.push(revArr[i]);

    if ((i + 1) % 3 === 0 && numCommas > 0) { //returns funky comma placement.
      wholeNumArr.push(",");
      numCommas--;
    }
  }
  return wholeNumArr.reverse().join("", ",");
}


convertAndFormat(process.argv[2]);
module.exports = convertAndFormat;