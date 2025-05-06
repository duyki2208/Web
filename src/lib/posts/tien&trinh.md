---
title: 'Tiến trình & Luồng'
date: '2025-5-5'
updated: '2025-5-5'
categories:
  - 'Lê Hùng Duy'
coverImage: '/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: Ấn vào để xem thêm...
---

## CPU, GPU, RAM, Hiệu năng sử dụng của máy

Thiết bị Dell Vostro 5415

Thông số kỹ thuật

CPU: AMD Ryzen 5 5500U (6 lõi, 12 luồng, xung nhịp cơ bản 2.1 GHz, tối đa 4.0 GHz)

GPU: Tích hợp AMD Radeon RX Vega 6

RAM: 8GB DDR4 3200 MHz

Lưu trữ: 256GB SSD NVMe M.2

Màn hình: 14 inch, Full HD (1920 x 1080), tấm nền IPS.

Pin:54 Wh

Giải thích hiệu năng:

CPU:
Phiên bản Ryzen 5 5500U (6 lõi, 12 luồng), nó có khả năng xử lý tốt các tác vụ đa nhiệm như duyệt web, lập trình cơ bản, và chạy nhiều ứng dụng văn phòng cùng lúc nhờ công nghệ đa luồng (multithreading).

### Bài tập 2: 12 bài toán phổ biến sử dụng đa luồng, đa tiếng trình

**Web Servers :**
Ứng dụng đa luồng: Xử lý đồng thời nhiều yêu cầu HTTP từ người dùng. Ví dụ: Apache dùng thread để phục vụ nhiều client cùng lúc.

**Database Servers :**
Ứng dụng đa luồng/đa tiến trình: Xử lý nhiều truy vấn SQL song song. Ví dụ: MySQL dùng thread hoặc process để xử lý truy vấn từ nhiều ứng dụng.

**Video Games :**
Ứng dụng đa luồng: Một thread cho render đồ họa, một thread cho tính toán vật lý, một thread cho xử lý đầu vào người chơi.

**Scientific Simulations :**
Ứng dụng đa tiến trình: Chạy mô phỏng phức tạp (như mô phỏng khí hậu) trên nhiều CPU. Ví dụ: Dùng OpenMPI (trang 1 tài liệu) để phân chia công việc

**Machine Learning :**
Ứng dụng đa tiến trình/đa luồng: Huấn luyện mô hình trên dữ liệu lớn. Ví dụ: TensorFlow dùng đa GPU/process để tính toán gradient.

**File Compression :**
Ứng dụng đa luồng: Nén/giải nén file nhanh hơn. Ví dụ: WinRAR chia file lớn thành nhiều phần và xử lý song song bằng thread.

**Image Processing :**
Ứng dụng đa luồng: Áp dụng bộ lọc hoặc chỉnh sửa ảnh. Ví dụ: Photoshop dùng thread để xử lý từng vùng ảnh.

**Web Browsers :**
Ứng dụng đa tiến trình: Mỗi tab chạy trong một process riêng để tránh crash toàn bộ. Ví dụ: Chrome dùng thread trong process cho giao diện và tải dữ liệu.

**Operating Systems :**
Ứng dụng đa tiến trình/đa luồng: Quản lý ứng dụng bằng process, xử lý tác vụ hệ thống bằng thread. Ví dụ: Windows chạy File Explorer và Task Manager trong các process riêng.

**Compilers:**
Ứng dụng đa luồng: Biên dịch mã nguồn song song. Ví dụ: GCC dùng thread để tăng tốc biên dịch.

**Network Applications :**
Ứng dụng đa luồng: Xử lý nhiều kết nối mạng cùng lúc. Ví dụ: Ứng dụng chat dùng thread cho mỗi kết nối người dùng.

**Real-time Systems :**
Ứng dụng đa luồng: Xử lý dữ liệu từ cảm biến với độ trễ thấp. Ví dụ: Hệ thống xe tự hành dùng thread cho camera và tín hiệu.

#### Bài tập 3: Viết ra giấy rồi chụp ảnh, liệt kê các trường hợp nào thì nên dùng thread, trường hợp nào nên dùng process, khi nào thì nên dùng cả hai

![alt text](../../../images/cheptay.jpg)

##### Bài tập 4: Report, tìm hiểu ChatGPT training trên dữ liệu lớn bằng distributed system như thế nào

ChatGPT được huấn luyện bởi OpenAI trên **siêu máy tính** do Microsoft Azure cung cấp.

Mô hình dùng **distributed training** với hàng ngàn GPU nối mạng.

Dữ liệu huấn luyện được chia nhỏ, mỗi GPU xử lý một phần => đồng bộ hoá qua **NCCL + AllReduce**.

Dùng kỹ thuật như **pipeline parallelism**, **tensor parallelism** để tối ưu hiệu năng.
