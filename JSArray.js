/**
 * In danh sách sản phẩm trong giỏ hàng
 * Format: "Tên sản phẩm - Số lượng - Thành tiền"
 *
 * Input: cart (array) - mảng các sản phẩm trong giỏ hàng
 * Mỗi sản phẩm có cấu trúc: { id, name, price, quantity, stock }
 *
 * Output: void - in ra console danh sách sản phẩm
 *
 * Ví dụ:
 * Input: [{ id: 1, name: "Áo thun", price: 100000, quantity: 2, stock: 10 }]
 * Output: "Áo thun - 2 - 200000"
 */
// function printCart(cart) {
//   cart.forEach((product) => {
//     const total = product.price * product.quantity;
//     console.log(`${product.name} - ${product.quantity} - ${total}`);
//   });
// }

// Ví dụ chạy thử
// const cart = [
//   { id: 1, name: "Áo thun", price: 100000, quantity: 2, stock: 10 },
//   { id: 2, name: "Quần jeans", price: 250000, quantity: 1, stock: 5 },
// ];

// printCart(cart);

/**
 * Tính tổng giá trị giỏ hàng
 *
 * Input: cart (array) - mảng các sản phẩm trong giỏ hàng
 * Mỗi sản phẩm có cấu trúc: { id, name, price, quantity, stock }
 *
 * Output: number - tổng giá trị của tất cả sản phẩm trong giỏ hàng
 *
 * Ví dụ:
 * Input: [
 *   { id: 1, name: "Áo thun", price: 100000, quantity: 2, stock: 10 },
 *   { id: 2, name: "Quần jean", price: 200000, quantity: 1, stock: 5 }
 * ]
 * Output: 400000 (100000*2 + 200000*1)
 */
// function calculateTotal(cart1) {
//   return cart1.reduce((total, product) => {
//     return total + product.price * product.quantity;
//   }, 0);
// }

// const cart1 = [
//   { id: 1, name: "Áo thun", price: 100000, quantity: 2, stock: 10 },
//   { id: 2, name: "Quần jean", price: 200000, quantity: 1, stock: 5 },
// ];

// const totalValue = calculateTotal(cart1);
// console.log(totalValue);

/**
 * Thêm sản phẩm mới vào giỏ hàng
 * - Nếu sản phẩm đã có thì tăng quantity
 * - Nếu vượt quá stock => in "Không đủ hàng trong kho"
 *
 * Input:
 * - cart (array) - mảng các sản phẩm trong giỏ hàng
 * - product (object) - sản phẩm cần thêm có cấu trúc: { id, name, price, quantity, stock }
 *
 * Output: void - thêm sản phẩm vào giỏ hàng hoặc in thông báo lỗi
 *
 * Ví dụ:
 * Input:
 * cart = [{ id: 1, name: "Áo thun", price: 100000, quantity: 2, stock: 10 }]
 * product = { id: 1, name: "Áo thun", price: 100000, quantity: 3, stock: 10 }
 * Output: cart = [{ id: 1, name: "Áo thun", price: 100000, quantity: 5, stock: 10 }]
 *
 * Input:
 * Output: "Không đủ hàng trong kho"
 */
const store = [
  {
    id: 1,
    name: "Áo thun",
    price: 100000,
    stock: 10,
  },
  {
    id: 2,
    name: "Quần jeans",
    price: 90000,
    stock: 1,
  },
];

let myCart = [
  {
    idProduct: 1,
    quantity: 3,
  },
  {
    idProduct: 2,
    quantity: 1,
  },
];

const itemProduct = { idProduct: 2, quantity: 1 };

function updateQuantitiesOfStock(idProduct, quantity) {
  const productById = store.find((product) => product.id == idProduct);
  if (productById.stock < quantity) {
    console.log("Hiện tại cửa hàng không đủ số lượng sản phẩm");
    return false;
  }
  productById.stock -= quantity;
  console.log("Cập nhật số lượng trong kho thành công.");
  return true;
}

function addProduct(cart, product) {
  // TODO: viết code ở đây
  // Phương thức sử dụng để tìm kiếm trong array.
  // find()
  const existProductInMyCart = cart.find(
    (item) => product.idProduct == item.idProduct
  );
  if (existProductInMyCart) {
    // Tăng số lượng sản phẩm trong giỏ hàng
    existProductInMyCart.quantity += product.quantity;

    // Cập nhật lại số lượng trong kho.
    const idProduct = existProductInMyCart.idProduct;
    updateQuantitiesOfStock(idProduct, product.quantity);

    console.log("Thêm sản phẩm vào giỏ hàng thành công ✅");
  } else {
    // Cập nhật lại số lượng trong kho
    const result = updateQuantitiesOfStock(product.idProduct, product.quantity);
    if (!result) {
      return;
    }
    // Thêm vào giỏ hàng myCart
    myCart.push({
      idProduct: product.idProduct,
      quantity: product.quantity,
    });
    console.log("Sản phẩm thêm thành công ✅");
  }
}
// addProduct(myCart, itemProduct);

/**
 * Xóa sản phẩm theo id
 *
 * Input:
 * - cart (array) - mảng các sản phẩm trong giỏ hàng
 * - id (number) - id của sản phẩm cần xóa
 *
 * Output: void - xóa sản phẩm khỏi giỏ hàng
 *
 * Ví dụ:
 * Input:
 * cart = [
 *   { id: 1, name: "Áo thun", price: 100000, quantity: 2, stock: 10 },
 *   { id: 2, name: "Quần jean", price: 200000, quantity: 1, stock: 5 }
 * ]
 * id = 1
 * Output: cart = [{ id: 2, name: "Quần jean", price: 200000, quantity: 1, stock: 5 }]
 */

console.log("Hiện tại trong giỏ hàng: ", myCart);
removeProduct(myCart, 2);

function removeProduct(cart, id) {
  // TODO: viết code ở đây
  // Làm cách nào để xoá 1 phần tử khỏi array ?
  // C1: filter.
  const newCart = cart.filter(
    (currentElement) => currentElement.idProduct != id
  );

  myCart = newCart;
  // C2:
  // splice(start);
  // splice(start, deleteCount);
  // splice(start, deleteCount, item1);
  console.log(
    "Giỏ hàng của bạn sau khi đã xoá sản phẩm có cùng id",
    newCart,
    myCart
  );
}

/**
 * Tìm sản phẩm có giá cao nhất trong giỏ hàng
 *
 * Input: cart (array) - mảng các sản phẩm trong giỏ hàng
 * Mỗi sản phẩm có cấu trúc: { id, name, price, quantity, stock }
 *
 * Output: object - sản phẩm có giá cao nhất, hoặc null nếu giỏ hàng trống
 *
 * Ví dụ:
 * Input: [
 *   { id: 1, name: "Áo thun", price: 100000, quantity: 2, stock: 10 },
 *   { id: 2, name: "Quần jean", price: 200000, quantity: 1, stock: 5 },
 *   { id: 3, name: "Giày thể thao", price: 500000, quantity: 1, stock: 3 }
 * ]
 * Output: { id: 3, name: "Giày thể thao", price: 500000, quantity: 1, stock: 3 }
 *
 * Input: []
 * Output: null
 */
function findMostExpensive(cart) {
  // TODO: viết code ở đây
}
