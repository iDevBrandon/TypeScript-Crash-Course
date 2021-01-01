function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 2));
var mySum = function (num1, num2) {
    if (num1 == "string") {
        num1 = parseInt(num1);
    }
    if (num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum("2", 5));
