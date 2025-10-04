📘 Buổi 1: Làm quen với DOM

1. DOM là gì?
   DOM (Document Object Model) là mô hình cây thể hiện toàn bộ nội dung HTML trên trang web.
   JavaScript có thể truy cập, đọc, sửa, xóa, thêm các phần tử trong trang web thông qua DOM.
   Mỗi phần tử HTML như div, p, input,... đều là một đối tượng (object) trong DOM.

2. Truy cập phần tử trong DOM
   Phương thức Mô tả
   getElementById(id) Trả về phần tử có id cụ thể
   getElementsByClassName(class) Trả về HTMLCollection các phần tử có class
   getElementsByTagName(tag) Trả về HTMLCollection các phần tử theo tên thẻ
   querySelector(selector) Trả về phần tử đầu tiên khớp với CSS selector
   querySelectorAll(selector) Trả về tất cả phần tử khớp với selector dưới dạng NodeList

3. Truy cập nội dung và giá trị
   .textContent: Lấy hoặc gán nội dung thuần văn bản

.innerHTML: Lấy hoặc gán nội dung bao gồm cả thẻ HTML

.value: Dùng cho các thẻ input, textarea, select

📘 Buổi 2: Sự kiện và thao tác DOM cơ bản

1. Sự kiện là gì?
   Sự kiện là tương tác của người dùng với trang web như: click chuột, gõ phím, di chuột,...

Mỗi phần tử có thể lắng nghe và phản ứng với sự kiện.

2. Lắng nghe sự kiện
   Sử dụng .addEventListener(eventName, callbackFunction)
   Sự kiện thường gặp
   Ý nghĩa

   - click Khi người dùng nhấn chuột vào phần tử
   - change Khi giá trị của input/select thay đổi
   - keyup Khi người dùng nhả phím
   - keydown Khi người dùng ấn phím
   - submit Khi form được gửi đi

3. Các thao tác DOM cơ bản
   Câu lệnh
   Ý nghĩa
   document.createElement(tag) Tạo phần tử HTML mới
   element.appendChild(child) Thêm phần tử con vào một phần tử cha
   element.remove() Xóa phần tử khỏi DOM
   element.classList.add('class') Thêm class CSS cho phần tử
   element.classList.remove('class') Xóa class CSS khỏi phần tử
   element.classList.toggle('class') Bật/tắt class

📘 Buổi 3: Thuộc tính, class, và xử lý form

1. Thuộc tính .value, .checked, .selectedIndex
   .value: Giá trị của input, select, textarea

.checked: Trạng thái của checkbox/radio (true/false)

.selectedIndex: Vị trí đang được chọn trong select

2. Thuộc tính và class trong DOM
   .className: Lấy tên class dạng chuỗi

.classList: Một danh sách class có sẵn

Phương thức Ý nghĩa
element.classList.add('ten-class') Thêm class
element.classList.remove('ten-class') Xóa class
element.classList.toggle('ten-class') Bật/tắt class nếu có

3. Thuộc tính tùy chỉnh (Custom Attributes)
   HTML5 cho phép dùng data-\* để lưu thông tin phụ:

<button data-type="important">Lưu</button>
Truy cập bằng:

js

element.dataset.type // "important"
📘 Buổi 4: Xử lý sự kiện nâng cao và tương tác với danh sách

1. event.target
   event.target là phần tử mà người dùng đã tương tác vào.

Rất hữu ích khi làm việc với danh sách phần tử lặp lại.
