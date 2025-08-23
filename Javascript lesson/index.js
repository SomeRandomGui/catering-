/*
let radius = 5;
var perimeter = Math.PI * 2 * radius;
var area = Math.PI * radius ** 2;
console.log(`Chu vi: ${perimeter}`);


let input = 7;
if (input % 2 != 0) {
  console.log("Là số lẻ");
} else {
  console.log("Là số chẵn");
}


let num1 = 3;
let num2 = 4;
var sum = num1 + num2;
console.log(`Tổng: ${sum}`);


let C = 25;
var F = C * 1.8 + 32;
console.log(`Fahrenheit: ${F}`);


let a = 9;
let b = 10;
let max = a > b ? `Số lớn hơn: ${a}` : `Số lớn hơn: ${b}`;
console.log(max);


let grades = 9.9;
if (grades >= 9.0) {
  console.log("Xuất sắc");
} else if (grades >= 8.0) {
  console.log("Giỏi");
} else {
  console.log("insert whatever");
}


let salary = 12000000;
var tax = 0;
if (salary > 80000000) {
  tax = salary * 0.35;
  console.log(`Thuế: ${tax}`);
} else if (salary > 52000000 && salary <= 80000000) {
  tax = salary * 0.3;
  console.log(`Thuế: ${tax}`);
} else if (salary > 32000000 && salary <= 52000000) {
  tax = salary * 0.25;
  console.log(`Thuế: ${tax}`);
} else if (salary > 18000000 && salary <= 32000000) {
  tax = salary * 0.2;
  console.log(`Thuế: ${tax}`);
} else if (salary > 10000000 && salary <= 18000000) {
  tax = salary * 0.15;
  console.log(`Thuế: ${tax}`);
} else if (salary > 5000000 && salary <= 10000000) {
  tax = salary * 0.1;
  console.log(`Thuế: ${tax}`);
} else {
  tax = salary * 0.05;
  console.log(`Thuế: ${tax}`);
}


let input = 3;
let timesTable = "";
for (let i = 1; i <= 10; i++) {
  timesTable += `${input} x ${i} = ${input * i}\n`;
}
console.log(timesTable);
*/

let input = 100;
let sum = 0;
for (let i = 1; i <= input; i++) {
  sum += i;
}
console.log(sum);
