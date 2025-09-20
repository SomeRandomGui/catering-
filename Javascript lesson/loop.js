/*
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
*/

let char = "*";
let n = 5;
for (let i = n; i >= 1; i--) {
  console.log(char.repeat(i));
}

for (let i = 1; i <= n; i++) {
  console.log(char.repeat(i));
}

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + char.repeat(2 * i - 1));
}

function hollow_rectangle() {
  let rows = 8;
  let columns = 4;
  for (i = 1; i <= columns; i++) {
    if (i == 1 || i == columns) {
      console.log("*".repeat(rows));
    } else {
      console.log("*" + " ".repeat(rows - 2) + "*");
    }
  }
}
