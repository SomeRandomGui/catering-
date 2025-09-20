let numbers = [10, 20, 30, 40];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// function() {
// }

// arrow fn: () => {}

numbers.forEach((v, i, a) => {
  console.log("v", v);
  console.log("i", i);
  console.log("a", a);
});
