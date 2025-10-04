/*
📝 Đề bài: Bạn có một danh sách đơn hàng của một cửa hàng bán đồ ăn nhanh, được lưu dưới dạng mảng các object:
const orders = [
  { id: 1, customer: "An", items: ["Burger", "Coke"], total: 80 },
  { id: 2, customer: "Bình", items: ["Fries", "Coke"], total: 50 },
  { id: 3, customer: "An", items: ["Pizza"], total: 120 },
  { id: 4, customer: "Chi", items: ["Burger", "Fries", "Coke"], total: 150 },
  { id: 5, customer: "Bình", items: ["Pizza", "Coke"], total: 130 }
];

Yêu cầu: Viết 4 hàm cho mỗi câu dưới đây
1. Tính tổng doanh thu của cửa hàng.
2. Tìm khách hàng nào chi tiêu nhiều nhất.
3. Liệt kê danh sách các món ăn (không trùng lặp) mà cửa hàng đã bán.
4. Đếm số lần mỗi món ăn được bán ra.
*/

const orders = [
  { id: 1, customer: "An", items: ["Burger", "Coke"], total: 80 },
  { id: 2, customer: "Bình", items: ["Fries", "Coke"], total: 50 },
  { id: 3, customer: "An", items: ["Pizza"], total: 120 },
  { id: 4, customer: "Chi", items: ["Burger", "Fries", "Coke"], total: 150 },
  { id: 5, customer: "Bình", items: ["Pizza", "Coke"], total: 130 },
];

function totalRevenue() {
  return orders.reduce((sum, orders) => sum + orders.total, 0);
}
console.log(totalRevenue());

let largestTotal = 0;
function biggestTotal() {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].total > largestTotal) {
      largestTotal = orders[i].total;
    }
  }
  return largestTotal;
}
console.log(biggestTotal());

let menu = [];

for (let i = 0; i < orders.length; i++) {
  let menuItems = orders[i].items;
  for (let j = 0; j < menuItems.length; j++) {
    let duplicate = menu.find((abc) => abc === menuItems[j]);
    if (!duplicate) {
      menu.push(menuItems[j]);
    }
  }
}
console.log(menu);
