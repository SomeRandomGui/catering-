/*
🔹 Bài 1: Điểm danh học sinh
const students = [
  { id: 1, name: "An", present: true },
  { id: 2, name: "Bình", present: false },
  { id: 3, name: "Chi", present: true }
];
👉 Yêu cầu:
1. Lấy danh sách học sinh có mặt.
2. Lấy danh sách học sinh vắng mặt.
3. Viết hàm thay đổi trạng thái điểm danh (present) của một học sinh theo id.

🔹 Bài 2: Quản lý nhân viên
const employees = [
  { id: 1, name: "An", department: "IT", salary: 1000 },
  { id: 2, name: "Bình", department: "HR", salary: 800 },
  { id: 3, name: "Chi", department: "IT", salary: 1200 }
];
👉 Yêu cầu:
1. Gom nhóm nhân viên theo department.
2. Tính tổng lương phải trả cho toàn bộ nhân viên.
3. Tìm nhân viên lương cao nhất trong phòng IT.

🔹 Bài 3: Lịch chiếu phim
const movies = [
  { id: 1, title: "Avengers", time: "18:00" },
  { id: 2, title: "Batman", time: "20:00" },
  { id: 3, title: "Spiderman", time: "22:00" }
];
👉 Yêu cầu:
1. Lấy danh sách tên phim đang chiếu sau 19:00.
2. Viết hàm thêm một lịch chiếu mới.
3. Viết hàm tìm phim theo title.

🔹 Bài 5: Bình chọn online
const votes = [
  { user: "An", choice: "A" },
  { user: "Bình", choice: "B" },
  { user: "Chi", choice: "A" },
  { user: "Dũng", choice: "C" }
];
👉 Yêu cầu:
1. Đếm số phiếu cho từng lựa chọn (A, B, C).
2. Xác định lựa chọn nào được nhiều phiếu nhất.
3. Viết hàm kiểm tra một user đã bình chọn chưa.
*/

const students = [
  { id: 1, name: "An", present: true },
  { id: 2, name: "Bình", present: false },
  { id: 3, name: "Chi", present: true },
];

function getPresentStudents() {
  const studentsPresent = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].present) {
      studentsPresent.push(students[i]);
    }
  }
  return studentsPresent;
}

function getAbsentStudents() {
  const studentsAbsent = [];
  for (let i = 0; i < students.length; i++) {
    if (!students[i].present) {
      studentsAbsent.push(students[i]);
    }
  }
  return studentsAbsent;
}

function changeAttendance(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students[i].present = !students[i].present;
    }
  }
}

const employees = [
  { id: 1, name: "An", department: "IT", salary: 1000 },
  { id: 2, name: "Bình", department: "HR", salary: 800 },
  { id: 3, name: "Chi", department: "IT", salary: 1200 },
];

function sortByDepartment(employees) {
  const result = [];
  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    if (!result[emp.department]) {
      result[emp.department] = [];
    }
    result[emp.department].push(emp);
  }
  return result;
}

function totalSalary() {
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum += employees[i].salary;
  }
  return sum;
}

function highestSalary() {
  let highest = 0;
  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    if (emp.department === "IT") {
      if (emp.salary > highest.salary) {
        highest = emp;
      }
    }
  }
  return highest;
}

const movies = [
  { id: 1, title: "Avengers", time: "18:00" },
  { id: 2, title: "Batman", time: "20:00" },
  { id: 3, title: "Spiderman", time: "22:00" },
];

function moviesAfter1900() {
  const result = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.time > "19:00") {
      result.push(movie.title);
    }
  }
  return result;
}

function addMovie(id, title, time) {
  movies.push({ id: id, title: title, time: time });
}

function findMovie(searchTitle) {
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.title === searchTitle) {
      return movie;
    }
  }
}

const votes = [
  { user: "An", choice: "A" },
  { user: "Bình", choice: "B" },
  { user: "Chi", choice: "A" },
  { user: "Dũng", choice: "C" },
];

// 1, reduce(acc, currentValues)
// {key: value} => {A: 2, B: 1, C: 1}
function countVotes(votes) {
  const result = votes.reduce((acc, currentValue) => {
    // currentValue: { user: "Chi", choice: "A" }
    const choice = currentValue.choice;
    // choice: "A"
    acc[choice] = (acc[choice] || 0) + 1; // acc[choice] || 0: Vote đấy chưa có trong object acc
  }, {});
  return result;
}

// 2.
function getWinner(votes) {
  const counts = countVotes(votes);
  // {A: 3, B: 1, C: 1}
  let maxCount = 0; // Số lượng phiếu lớn nhất
  let maxChoice = null; // Tên phiếu có số phiếu lớn nhất
  for (const key in votes) {
    if (votes[key] > maxCount) {
      maxCount = votes[key];
      maxChoice = key;
    }
  }
  return maxChoice;
}

// 3. filter, some, every, find
// Nếu tại thời điểm của currentValue mà trả ra là true thì item sẽ pass còn không thì ngược lại tức là bị xoá khỏi danh sách
function hasVoted(votes, username) {
  const result = votes.filter((currentValue) => currentValue.user === username);
  return result.length === 0 ? "Không có" : "Có";
}
console.log(hasVoted(votes, "Jack"));
