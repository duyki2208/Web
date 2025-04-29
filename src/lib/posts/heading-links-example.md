---
title: 'Tổng quan về ứng dụng phân tán'
date: '2023-10-26'
updated: '2023-10-26'
categories:
  - 'sveltekit'
  - 'markdown'
coverImage: '/static/images/123.jpeg'
coverWidth: 16
coverHeight: 9
excerpt: Ấn vào để xem thêm
---

## 1.Hệ thống phân tán là gì?

Hệ thống phân tán (Distributed System) là tập hợp các máy tính độc lập, được kết nối qua mạng, phối hợp để thực hiện một nhiệm vụ chung. Mặc dù các thành phần có thể nằm ở các vị trí địa lý khác nhau, người dùng tương tác với hệ thống như một thể thống nhất.

### 2.Ứng dụng của hệ thống phân tán

Hệ thống phân tán được ứng dụng rộng rãi trong nhiều lĩnh vực:

-Dịch vụ web: Google, Facebook, Amazon sử dụng hệ thống phân tán để xử lý hàng triệu yêu cầu mỗi giây.​

-Điện toán đám mây: AWS, Azure, Google Cloud cung cấp tài nguyên tính toán phân tán theo nhu cầu.​

-Blockchain: Bitcoin, Ethereum là các hệ thống phân tán không tập trung, đảm bảo tính toàn vẹn dữ liệu.​

-Ứng dụng doanh nghiệp: Hệ thống ERP, CRM phân tán giúp các tổ chức quản lý dữ liệu và quy trình kinh doanh hiệu quả.​

#### 3.Các khái niệm chính trong hệ thống phân tán

-Scalability (Khả năng mở rộng): Khả năng hệ thống xử lý hiệu quả khi khối lượng công việc tăng lên.​
Medium

-Fault Tolerance (Khả năng chịu lỗi): Hệ thống tiếp tục hoạt động bình thường ngay cả khi một số thành phần gặp sự cố.​

-Availability (Tính sẵn sàng): Khả năng hệ thống luôn sẵn sàng phục vụ người dùng.​

-Transparency (Tính trong suốt): Người dùng không nhận thấy sự phức tạp bên trong hệ thống.​

-Concurrency (Tính đồng thời): Hệ thống xử lý nhiều tác vụ cùng lúc mà không gây xung đột.​

-Parallelism (Tính song song): Thực hiện nhiều tác vụ cùng lúc để tăng hiệu suất.​

-Openness (Tính mở): Hệ thống dễ dàng tích hợp với các hệ thống khác và hỗ trợ mở rộng.​

-Vertical Scaling (Mở rộng theo chiều dọc): Tăng cường tài nguyên (CPU, RAM) cho một máy chủ.​
Medium

-Horizontal Scaling (Mở rộng theo chiều ngang): Thêm nhiều máy chủ để chia sẻ tải công việc.​

-Load Balancer (Bộ cân bằng tải): Phân phối lưu lượng truy cập đều giữa các máy chủ.​

-Replication (Sao chép dữ liệu): Tạo bản sao dữ liệu để tăng tính sẵn sàng và độ tin cậy.​

##### 4.Ví dụ minh họa: Hệ thống thương mại điện tử

Xem xét một trang web thương mại điện tử như Amazon:

-Scalability: Hệ thống tự động mở rộng khi có nhiều người dùng truy cập.​

-Fault Tolerance: Nếu một máy chủ gặp sự cố, hệ thống vẫn hoạt động nhờ các máy chủ khác.​

-Availability: Trang web luôn sẵn sàng 24/7.​

-Transparency: Người dùng không nhận thấy sự phân tán của hệ thống.​

-Concurrency: Nhiều người dùng có thể mua hàng cùng lúc.​

-Parallelism: Xử lý nhiều đơn hàng đồng thời để tăng tốc độ.​

-Openness: Hệ thống tích hợp với các dịch vụ thanh toán và vận chuyển khác.​

-Vertical Scaling: Tăng cường tài nguyên cho máy chủ cơ sở dữ liệu khi cần.​

-Horizontal Scaling: Thêm nhiều máy chủ web để xử lý lưu lượng lớn.​

-Load Balancer: Phân phối yêu cầu người dùng đến các máy chủ khác nhau.​

-Replication: Dữ liệu người dùng được sao chép để đảm bảo không mất mát.

###### 5.Kiến trúc của hệ thống phân tán

Các mô hình kiến trúc phổ biến:

-Client-Server: Máy khách gửi yêu cầu, máy chủ xử lý và phản hồi.​
Amazon Web Services, Inc.

-Peer-to-Peer (P2P): Các nút mạng hoạt động ngang hàng, chia sẻ tài nguyên trực tiếp.​
Viblo

-Three-Tier: Gồm tầng trình bày, tầng logic nghiệp vụ và tầng dữ liệu.​

-Microservices: Ứng dụng được chia thành các dịch vụ nhỏ, độc lập.​

-Service-Oriented Architecture (SOA): Các dịch vụ giao tiếp qua giao thức mạng để thực hiện chức năng.​

-Event-Driven Architecture: Hệ thống phản ứng với các sự kiện, phù hợp với ứng dụng thời gian thực.​

-Serverless: Chạy mã mà không cần quản lý máy chủ, tự động mở rộng theo nhu cầu.​
