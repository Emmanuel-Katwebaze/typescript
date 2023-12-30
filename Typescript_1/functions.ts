function add(a: number, b: number, c? : number): number { // has optional parameter
  return c? a + b + c : a + b;
}

console.log(add(2, 3, 5));

const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3; // has required parameter

console.log(sub(2, 3));
console.log(sub(2, 3, 5));

const mult = function(num1: number, num2: number): number{
    return num1 * num2;
}

function add2(num1 : number, num2: number, ...num3 : number[]): number{ // rest parameters
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers : number[] = [1, 2, 3, 4, 5]; 
console.log(add2(2, 3, ...numbers));
// can also use console.log(add2(2, 3, 5, 6, 7)); where 2 and 3 refer to num1 and num2 and 5,6,7 refer to an array of numbers

// Generic
function getItems<Type>(items: Type[]) : Type[]{
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
// can also use inference let concatResult = getItems([1, 2, 3, 4, 5]);

let concatString = getItems<string>(["a", "b", "c", "d"]);