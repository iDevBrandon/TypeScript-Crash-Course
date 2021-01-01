export {};

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// simple data type
myString = "hello world";
myNum = 22;
myBool = true;
myVar = true;

console.log(myBool);

// arary
// let strArr: string[];
// strArr = ["hello", "world"];
// console.log(strArr);

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

strArr = ["hello", "world"];
numArr = [1, 2, 3];
boolArr = [false, true, false];

let myVoid: void = undefined;
let myNull: null = undefined;
let myUndefined: undefined = undefined;

let strNumTuple: [string, number];
strNumTuple = ["hello", 6];
