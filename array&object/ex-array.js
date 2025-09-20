// 1. Cơ bản – Làm quen với Array
// Tạo một mảng chứa tên 5 người bạn và in ra màn hình.
// Tìm độ dài (length) của mảng vừa tạo.
// Thêm một phần tử mới vào cuối mảng và in ra.
// Thêm một phần tử vào đầu mảng và in ra.
// Xóa phần tử cuối cùng và in ra.
// Xóa phần tử đầu tiên và in ra.
/*
let names = ["James", "Jason", "Ciara", "Max", "Alex"];
console.log(names);
console.log(names.length);
names.push("Justin");
names.unshift("Beatrice");
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
*/
/*
1. Cơ bản – Làm quen với Object
Tạo một object student với các thuộc tính: name, age, gender. In ra màn hình.
Thêm thuộc tính email cho object student.
Xóa thuộc tính gender khỏi object student.
Viết hàm in ra tất cả key của một object.
Viết hàm in ra tất cả value của một object.


let student = {
  name: "Max",
  age: 18,
  gender: "Male",
};
console.log(student);
student.email = "Max@gmail.com";
delete student.gender;
console.log(Object.keys(student));
console.log(Object.values(student));


let product = {
  name: "Iphone",
  price: 899.0,
  category: "Technology",
};
product.discount = 10;
product.price = 899.0 * (1 - (product.discount / 100));
delete product.category;
console.log(product);


let employee = {
  name: "Josh",
  age: 24,
  department: "HR",
};
console.log(`Name: ${employee.name}, department: ${employee.department}`);
employee.salary = 10000000;
employee.age = 25;
delete employee.department;
console.log(employee);
*/

let products = [
  { name: "Iphone Pro Max 17", price: 1399, stock: 34 },
  { name: "Macbook Pro M4 14in", price: 1599, stock: 23 },
  { name: "Ipad Pro M4 13in", price: 1499, stock: 32 },
];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 1000) {
    console.log(products[i].name);
  }
}
let totalStock = 0;
products.push({ name: "Airpods Pro Max", price: 899, stock: 19 });
for (let i = 0; i < products.length; i++) {
  totalStock = products[i].stock + totalStock;
}
console.log(totalStock);
