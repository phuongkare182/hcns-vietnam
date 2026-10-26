# Hyundai CNS Vietnam: bộ file website (2 trang + menu chung)

## Cấu trúc
```
index.html               Trang chủ (data-page="home"): sản phẩm nổi bật, cam kết, dịch vụ
ho-so-nang-luc.html      Trang hồ sơ năng lực (data-page="profile")
san-pham.html            Trang danh mục sản phẩm (data-page="catalog", data-cta="quote")
assets/css/site.css      Design tokens + header, footer, nút (dùng chung)
assets/css/trang-chu.css, ho-so-nang-luc.css, san-pham.css   CSS riêng từng trang
assets/js/layout.js      Header + footer + menu chung (sửa menu ở mảng NAV)
assets/js/catalog.js     Tìm kiếm, lọc, danh sách báo giá, hộp thoại thông số
data/products.json       783 sản phẩm (nguồn dữ liệu của trang danh mục)
data/products.csv        Cùng dữ liệu, để biên tập bằng Excel
tailwind.config.js       Token màu, font, cỡ chữ cho dự án dùng Tailwind
```

## Chạy thử
Giải nén zip rồi bấm đúp `index.html` là xem được cả hai trang (dữ liệu nạp từ `data/products.js`).
Khi làm thật, sửa dữ liệu trong `data/products.json` rồi xóa dòng `<script src="data/products.js">` trong `san-pham.html`, trang sẽ nạp JSON bằng fetch (cần chạy qua máy chủ web: `npx serve .` hoặc `python3 -m http.server 8080`).

## Menu chung
`layout.js` thay `<div data-site-header>` và `<div data-site-footer>` bằng header/footer. Mục menu đang trỏ tới `ho-so-nang-luc.html` và `san-pham.html`. Khi ghép vào framework (Next.js, Laravel…), đổi sang đường dẫn thật (ví dụ `/ho-so-nang-luc`, `/san-pham`) hoặc chuyển thành component.

## Trang chủ
Khối "Sản phẩm nổi bật" tự lấy 4 sản phẩm mẫu từ `products.js` (script cuối `index.html`). Thay bằng sản phẩm bạn muốn đẩy. Số hotline, link Zalo và danh mục xổ xuống sửa ở đầu `assets/js/layout.js` (HOTLINE, ZALO, GROUPS). Ô tìm kiếm và menu danh mục chuyển sang `san-pham.html?q=...` và `?g=...`.

## Dữ liệu sản phẩm
Mỗi sản phẩm: `name, model, group, brand` và các trường chưa có dữ liệu: `price` (VND hoặc null = "Liên hệ báo giá"), `moq`, `certs` (CE, EN, ANSI…), `image`, `datasheet`. Trang hiện chỉ đọc 4 trường đầu. Muốn hiển thị ảnh, giá, chứng nhận, sửa hàm render trong `assets/js/catalog.js` (thẻ `.card` và bảng `#ds`).

## Lưu ý
- Tên sản phẩm, mã model, thương hiệu lấy từ danh sách của một website khác (baoholaodonglasa.com). Nhóm sản phẩm do tự động phân loại theo tên. Cần kiểm tra lại sản phẩm nào Hyundai CNS thực sự cung cấp. Không dùng ảnh, mô tả, giá của website đó.
- Nút "Gửi email yêu cầu báo giá" chỉ mở `mailto:kypark@h-cns.com`. Cần nối form hoặc CRM trước khi chạy thật.
- Font Inter và JetBrains Mono nạp từ Google Fonts (đã gồm subset tiếng Việt).
