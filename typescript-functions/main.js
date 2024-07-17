'use strict';
const square = (x) => x * x;
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
/*
function callOtherFunctionEasy(otherFunction: Function, params: any): any {
  return otherFunction(params);
}
*/
console.log(callOtherFunction(square, 11));
