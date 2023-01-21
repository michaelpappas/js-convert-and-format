"use strict";

function convertAndFormat(input) {
  if (typeof input !== 'number') {
    return ("That is not a number.");
  }

  if (input < 1000 && input > -1000) {
    const numString = input.toString();
    console.log(numString);
    return input.toString();
  }

  if (input > 0) {
    const wholeNum = Math.floor(input);
    const decimal = input - wholeNum;
    const wholeNumStr = wholeNum.toString();
    let decimalStr;

    let wholeNumArr = wholeNumStr.split("");
    console.log("wholeNumArr-", wholeNumArr);
    let numCommas = Math.floor(wholeNumArr.length / 3);
    console.log("numCommas-", numCommas);
    let revWholeNumArr = [];
    for (let i = 0; i < wholeNumArr.length; i++) {
      console.log("num-", wholeNumArr[i]);
      revWholeNumArr.push(wholeNumArr[i]);
      if (i % 3 === 0 && numCommas > 0) {
        console.log("i-", i);
        revWholeNumArr.push(",");
        numCommas--;
      }
    }
    console.log("finDecimalStr-", decimalStr);


    if (Math.abs(input - wholeNum) > 0) {
      decimalStr = (input - wholeNum).toString().substring(2);
      return revWholeNumArr.join("") + "." + decimalStr; //need to move this logic above line 14 and handle when a negative integer is provided.
    } else { return revWholeNumArr.join(""); }

  }
}


convertAndFormat(process.argv[2]);
module.exports = convertAndFormat;