"use strict";
/*
Task 3
Convert the code using try...catch.
*/
function reverseString(s) {
  try {
    if (typeof s !== "string") {
      throw "s.split is not a function";
    }
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e);
  }
}
//reverseString("5755");
