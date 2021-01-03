let character = "mario";
let age: number = 30;
let isBlackBelt = false;

character = "luigi";

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(2));

// #4 - Objects & Arrays
// arrary
let names = ["roger", "oden", "layigh"];

names[0] = "2";

let mixed = [2, 3, "gold", "luffy"];
names[0] = "hi";
mixed.push(5);

// object
let ninja = { name: "kiado", belt: "black", age: 60 };

// ninja.age = '40';

// can add another value by creating the exact same match
ninja = { name: "bigmom", belt: "white", age: 50 };
