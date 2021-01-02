function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(getSum(1, 2));

let mySum = function (num1: any, num2: any): number {
  if (num1 == "string") {
    num1 = parseInt(num1);
  }

  if (num2 == "string") {
    num2 = parseInt(num2);
  }

  return num1 + num2;
};

console.log(mySum("2", 5));
