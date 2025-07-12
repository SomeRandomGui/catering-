🎓 GIÁO TRÌNH CSS: BACKGROUND
1️⃣ background-color
Dùng để tô màu nền.

```js
  div {
    background-color: lightblue;
  }
```

🔸 Giá trị có thể là: tên màu (red, blue), mã HEX (#ff0000), RGB, RGBA, HSL, HSLA.
🔸 Dùng rgba(0, 0, 0, 0.5) để tạo nền trong suốt.

2️⃣ background-image
Dùng để chèn hình nền.

```js
div {
  background-image: url("images/bg.jpg");
}
```

✅ Có thể dùng url(), linear-gradient(), radial-gradient()

```js
div {
  background-image: linear-gradient(to right, #f00, #00f);
}
```

3️⃣ background-repeat
Điều khiển việc lặp lại hình nền.

```js
div {
background-repeat: no-repeat; /_ hoặc repeat, repeat-x, repeat-y _/
}
```

4️⃣ background-size
Điều chỉnh kích thước ảnh nền.

```js
div {
  background-size: cover; /_ phủ kín toàn bộ phần tử _/
  background-size: contain; /_ hiển thị toàn bộ hình, nhưng không cắt _/
  background-size: 100px 100px; /_ cụ thể chiều rộng và cao _/
}
```

5️⃣ background-position
Xác định vị trí hiển thị hình nền.

```js
div {
  background-position: center center; /_ giữa _/
  background-position: top right;
  background-position: 50% 50%;
}
```

6️⃣ background-attachment
Điều khiển hình nền có cuộn theo trang hay không.

```js
div {
background-attachment: scroll; /_ mặc định, cuộn theo _/
background-attachment: fixed; /_ cố định nền _/
}
```

📌 Dùng fixed để tạo hiệu ứng parallax đơn giản.

7️⃣ background-clip (ít dùng hơn)
Xác định phạm vi nền được vẽ.

```js
div {
  background-clip: border-box; /_ mặc định _/
  background-clip: padding-box;
  background-clip: content-box;
}
```

8️⃣ background-origin
Xác định vị trí gốc của background image.

```js
div {
background-origin: padding-box;
}
```

9️⃣ background (viết gộp)
Gộp nhiều thuộc tính thành 1 dòng.

```js
div {
  background: url("bg.jpg") no-repeat center center / cover;
}
```

💡 Cú pháp đầy đủ:

````js
background: [color] [image] [repeat] [attachment] [position] / [size] [origin] [clip];


🧪 Bài tập thực hành gợi ý
Tạo một khối có hình nền và chữ trắng, dùng background-size: cover.

Làm một gradient nền từ xanh dương sang tím nhạt.

Làm ảnh nền cố định khi cuộn trang (background-attachment: fixed).

Thêm 2 lớp nền (ảnh + gradient overlay):

```js
background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('bg.jpg');
````
