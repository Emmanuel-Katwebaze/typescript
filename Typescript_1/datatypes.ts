let lname : string;

lname = "Kats";

let newname = lname.toUpperCase();

console.log(newname);

let age: number;

age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid : boolean = true;

console.log(isValid);

let emplist : string[];

emplist = ["Emma", "Emma1", "Emma2", "Emma3"]; 

let emp = emplist.find((emp) => emp === "Emma");

let numList : Array<number>;

numList = [1, 2, 3, 4, 5];

let results = numList.filter((num) => num > 20);

console.log(results);

let num = numList.find((num) => num === 2);

console.log(num);

let sum = numList.reduce((acc, num) => acc + num); // useful when making additions in a shopping cart
console.log(sum);

// Enums 

const enum Color {
    Red, 
    Green,
    Blue
}

let c: Color = Color.Blue;

// tuples

let swapNumbs : [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number) : [number, number]{
    return [num1, num2];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];

// Any datatype

let department: any;

department = "IT";
department = 10;


