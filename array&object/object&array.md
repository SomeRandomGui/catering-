# **Giáo Trình Mảng (Array) và Đối Tượng (Object) trong JavaScript**

## **1. Mảng (Array) trong JavaScript**

### **1.1. Khái niệm và cách tạo mảng**

- Mảng là một cấu trúc dữ liệu dùng để lưu trữ danh sách các giá trị theo chỉ mục.
- Cách tạo mảng:

```js
// Cách 1: Sử dụng dấu ngoặc vuông []
let arr1 = [1, 2, 3, 4, 5];

// Cách 2: Sử dụng constructor Array
let arr2 = new Array(1, 2, 3, 4, 5);
```

### **1.2. Truy cập và sửa đổi phần tử trong mảng**

```js
let numbers = [10, 20, 30, 40];
console.log(numbers[0]); // 10

// Sửa giá trị
numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40]
```

### **1.3. Các phương thức cơ bản của mảng**

- **`push()`**: Thêm phần tử vào cuối mảng.
- **`pop()`**: Xóa phần tử cuối mảng.
- **`shift()`**: Xóa phần tử đầu mảng.
- **`unshift()`**: Thêm phần tử vào đầu mảng.

```js
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
```

### **1.4. Vòng lặp qua mảng và thao tác với mảng**

```js
let numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Sử dụng forEach
numbers.forEach((num) => console.log(num));
```

## **2. Đối tượng (Object) trong JavaScript**

### **2.1. Tạo và sử dụng đối tượng**

```js
let person = {
  name: "John",
  age: 25,
  city: "New York",
};
```

### **2.2. Cách truy cập và xử lý dữ liệu trong Object**

```js
console.log(person.name); // John
console.log(person["age"]); // 25
```

### **2.3. Thêm, sửa, xóa dữ liệu trong Object**

```js
// Thêm thuộc tính
person.gender = "Male";

// Sửa thuộc tính
person.age = 30;

// Xóa thuộc tính
delete person.city;
```

### **2.4. Ứng dụng của Object trong lập trình**

- Lưu trữ dữ liệu dạng key-value.
- Biểu diễn một đối tượng thực tế (người dùng, sản phẩm, v.v.).
- Truyền dữ liệu giữa các phần trong ứng dụng.

#### Bài tập về Mảng (Array)

Bài tập 1: Quản lý danh sách sinh viên
Tình huống thực tế: Bạn là người quản lý danh sách sinh viên trong một lớp học. Mỗi sinh viên được đại diện bởi tên của họ trong một mảng.
Yêu cầu:
Tạo một mảng chứa ít nhất 5 tên sinh viên.
Thêm một sinh viên mới vào cuối danh sách.
Xóa sinh viên ở vị trí đầu tiên.
In danh sách sinh viên còn lại, mỗi sinh viên trên một dòng.

Bài tập 2: Tính tổng điểm của học sinh
Tình huống thực tế: Bạn có một mảng chứa điểm số của học sinh trong một bài kiểm tra. Hãy tính tổng và trung bình điểm.
Yêu cầu:
Tạo một mảng chứa điểm số (ví dụ: [85, 90, 78, 92, 88]).
Sử dụng vòng lặp hoặc phương thức forEach để tính tổng điểm.
Tính điểm trung bình và in kết quả.

#### Bài tập về Đối tượng (Object)

- Bài tập 3: Quản lý thông tin sản phẩm
  Tình huống thực tế: Bạn đang quản lý một cửa hàng trực tuyến và cần lưu thông tin của một sản phẩm.

Yêu cầu:
Tạo một đối tượng product với các thuộc tính: name, price, category.
Thêm một thuộc tính mới là discount (giảm giá, ví dụ: 10%).
Sửa giá (price) của sản phẩm sau khi áp dụng giảm giá.
Xóa thuộc tính category và in đối tượng cuối cùng.

- Bài tập 4: Quản lý thông tin nhân viên
  Tình huống thực tế: Bạn là quản lý nhân sự và cần lưu thông tin của một nhân viên trong một đối tượng.

Yêu cầu:
Tạo một đối tượng employee với các thuộc tính: name, age, department.
In ra thông tin nhân viên theo định dạng: "Tên: [name], Tuổi: [age], Phòng ban: [department]".
Thêm thuộc tính salary và sửa tuổi của nhân viên.
Xóa thuộc tính department và in lại thông tin.

#### Bài tập kết hợp Mảng và Đối tượng

Bài tập 5: Quản lý danh sách sản phẩm trong cửa hàng
Tình huống thực tế: Bạn quản lý một cửa hàng với danh sách các sản phẩm, mỗi sản phẩm là một đối tượng chứa thông tin như tên, giá, và số lượng tồn kho.

Yêu cầu:
Tạo một mảng products chứa ít nhất 3 đối tượng sản phẩm, mỗi sản phẩm có các thuộc tính: name, price, stock.
In ra tên và giá của tất cả sản phẩm có giá lớn hơn 50.
Thêm một sản phẩm mới vào mảng.
Tính tổng số lượng tồn kho (stock) của tất cả sản phẩm.
