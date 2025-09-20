Bài tập: Quản lý giỏ hàng trong website thương mại điện tử
Tình huống thực tế:
Bạn đang xây dựng một website bán hàng online. Người dùng có thể thêm sản phẩm vào giỏ hàng, xem tổng giá trị đơn hàng, và kiểm tra xem sản phẩm có còn trong kho hay không.
Yêu cầu:

1. Tạo một mảng cart chứa ít nhất 3 sản phẩm (object). Mỗi sản phẩm có các thuộc tính:

- id (mã sản phẩm, duy nhất)
- name (tên sản phẩm)
- price (giá một sản phẩm)
- quantity (số lượng sản phẩm trong giỏ hàng)
- stock (số lượng tồn kho trong cửa hàng)

2. Viết hàm in ra danh sách sản phẩm trong giỏ hàng theo format:
   Tên sản phẩm - Số lượng - Thành tiền
3. Viết hàm tính tổng giá trị giỏ hàng.
4. Viết hàm thêm sản phẩm mới vào giỏ hàng:

- Nếu sản phẩm đã có trong giỏ, tăng quantity lên.
- Nếu chưa có, thêm sản phẩm mới.
- Nếu vượt quá stock, hiển thị thông báo "Không đủ hàng trong kho".

5. Viết hàm xóa một sản phẩm khỏi giỏ hàng theo id.
6. Viết hàm tìm sản phẩm có giá cao nhất trong giỏ hàng.
