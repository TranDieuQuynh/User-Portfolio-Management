# 🎯 Ứng dụng Quản lý Hồ sơ Cá Nhân (User Portfolio Management App)

Ứng dụng giúp người dùng tạo và quản lý thông tin cá nhân cùng các dự án nổi bật, đồng thời cho phép hiển thị trang portfolio công khai và gửi email liên hệ.

## 🚀 Tính năng

- Đăng ký và đăng nhập bằng email và mật khẩu  
- Quên mật khẩu: gửi liên kết đặt lại qua email  
- Đặt lại mật khẩu bằng liên kết (magic link)  
- Cập nhật ảnh đại diện, tên, chức danh và tiểu sử  
- Thêm và chỉnh sửa các dự án (tên, mô tả, repo URL, demo URL)  
- Trang portfolio công khai với thông tin và dự án  
- Nút liên hệ gửi email trực tiếp đến người dùng

---

## 🛠 Công nghệ sử dụng

### Frontend

- **React** – Framework xây dựng giao diện
- **Tailwind CSS** – Thiết kế giao diện nhanh, chuẩn UI
- **Zustand** – Quản lý trạng thái ứng dụng (nhẹ và đơn giản)

### Backend

- **Node.js** – Viết backend thuần mà không dùng Express  
- **PostgreSQL** – Cơ sở dữ liệu chính  
- **pg (node-postgres)** – Kết nối đến PostgreSQL  
- **nodemailer** – Gửi email đặt lại mật khẩu hoặc xác minh  
- **jsonwebtoken** – Xác thực người dùng bằng JWT

---

## 📡 API chính

| Phương thức | Endpoint | Mô tả |
|------------|----------|-------|
| `POST` | `/api/user/signup` | Đăng ký người dùng mới |
| `POST` | `/api/user/login` | Đăng nhập |
| `POST` | `/api/user/forgot-password` | Gửi email đặt lại mật khẩu |
| `POST` | `/api/user/reset-password` | Đặt lại mật khẩu qua magic link |
| `PUT`  | `/api/user/profile` | Cập nhật thông tin người dùng |
| `PUT`  | `/api/user/projects` | Thêm hoặc sửa dự án |
| `GET`  | `/api/user/profile` | Lấy hồ sơ người dùng |
| `GET`  | `/api/user/projects` | Lấy danh sách dự án |

---


