const square: (x: number) => number = (x: number) => x * x;

function callOtherFunction(otherFunction: (p: any) => any, params: any): any {
  return otherFunction(params);
}

/*
function callOtherFunctionEasy(otherFunction: Function, params: any): any {
  return otherFunction(params);
}
*/

console.log(callOtherFunction(square, 11));
