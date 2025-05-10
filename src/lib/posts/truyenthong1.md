---
title: 'Truyền thông'
date: '2025-05-6'
updated: '2025-05-6'
categories:
  - 'Lê Hùng Duy'
coverImage: '/images/pig1.png'
coverWidth: 16
coverHeight: 9
excerpt: Ấn để xem thêm...
---

---

## **BÀI TẬP 1: TÌM HIỂU RABBITMQ**

### **1. Giới thiệu**

RabbitMQ là một hệ thống hàng đợi tin nhắn (message queue) mã nguồn mở, được triển khai theo mô hình **Message Broker**, hỗ trợ nhiều giao thức như AMQP, MQTT, STOMP, v.v.

### **2. Cơ chế hoạt động**

RabbitMQ hoạt động theo mô hình:

- **Producer**: Gửi thông điệp đến một **Exchange**.
- **Exchange**: Định tuyến thông điệp đến **Queue** dựa vào **Routing Key**.
- **Queue**: Nơi lưu trữ các thông điệp.
- **Consumer**: Lấy thông điệp ra khỏi Queue để xử lý.

### **3. Các thành phần chính**

- **Broker**: Máy chủ RabbitMQ.
- **Exchange**: Có 4 loại: direct, topic, fanout, headers.
- **Queue**: Hàng đợi chứa thông điệp.
- **Binding**: Kết nối Exchange và Queue với Routing Key.

### **4. Cài đặt**

**Cách cài đặt RabbitMQ với Docker:**

```bash
docker run -d --hostname rabbitmq-host --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:3-management
```

---

## **BÀI TẬP 2: CODE MINH HỌA VỚI RABBITMQ**

### **Cài thư viện Python**

```bash
pip install pika
```

### **Producer (send.py)**

```python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.queue_declare(queue='hello')

channel.basic_publish(exchange='', routing_key='hello', body='Hello RabbitMQ!')
print(" [x] Sent 'Hello RabbitMQ!'")
connection.close()
```

### **Consumer (receive.py)**

```python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.queue_declare(queue='hello')

def callback(ch, method, properties, body):
    print(f" [x] Received {body.decode()}")

channel.basic_consume(queue='hello', on_message_callback=callback, auto_ack=True)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()
```

---

## **BÀI TẬP 3: RPC VỚI JSON – DÙNG gRPC + JSON**

### **Thư viện gRPC hỗ trợ JSON**

Dù gRPC mặc định dùng Protobuf, nhưng có thể dùng JSON với thư viện **grpc-gateway** (trong Go) hoặc thư viện **grpclib** (Python) kết hợp với JSON serialization. Ở đây, ta dùng Python với thư viện `grpclib` và xử lý JSON thủ công.

### **1. Cài đặt thư viện**

```bash
pip install grpclib
```

### **2. Định nghĩa RPC JSON đơn giản (Python)**

#### **rpc_server.py**

```python
from grpclib.server import Server
from grpclib.utils import graceful_exit
from grpclib.const import Status
import asyncio
import json
from aiohttp import web

async def handle(request):
    data = await request.json()
    name = data.get("name", "world")
    return web.json_response({"message": f"Hello, {name}!"})

async def main():
    app = web.Application()
    app.router.add_post('/hello', handle)
    runner = web.AppRunner(app)
    await runner.setup()
    site = web.TCPSite(runner, 'localhost', 5000)
    await site.start()
    print("JSON RPC server running on http://localhost:5000/hello")
    while True:
        await asyncio.sleep(3600)

if __name__ == '__main__':
    asyncio.run(main())
```

#### **rpc_client.py**

```python
import requests

url = 'http://localhost:5000/hello'
payload = {"name": "Alice"}

response = requests.post(url, json=payload)
print("Response:", response.json())
```

---

## **TỔNG KẾT**

| Bài | Chủ đề            | Công nghệ         | Kết quả               |
| --- | ----------------- | ----------------- | --------------------- |
| 1   | Báo cáo lý thuyết | RabbitMQ          | Đã trình bày chi tiết |
| 2   | Code minh họa     | RabbitMQ (pika)   | Gửi và nhận message   |
| 3   | RPC dùng JSON     | gRPC (REST-style) | Gửi JSON và phản hồi  |

---

---
