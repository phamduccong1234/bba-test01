# Câu lệnh Git:

Trước khi làm việc với Git, cần cấu hình mặc định:

- Config username
  -> git config --global user.name "name"
- Config email
  -> git config --global user.email "email"
- Config branch
  -> git config --global init.defaultBranch main

# Generate key:

ssh-keygen -t rsa -b 4096 -C “your_email@example.com”

# Lấy nội dung ssh key:

cat ~/.ssh/id_rsa.pub
Truy cập: https://github.com/settings/ssh/new để thêm ssh key

# Cài đặt Playwright:

npm init playwright@latest

# Khởi tạo

Khởi tạo repo local: git init
Liên kết repository vừa tạo với Git: git remote add origin <ssh_link>
Thêm code: git add .
Thêm commit: git commit -m”init project”
Push code: git push origin main
