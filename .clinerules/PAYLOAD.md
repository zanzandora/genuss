# Cấu trúc Dữ liệu Đặt phòng (Booking Payload)

Tài liệu này mô tả cấu trúc dữ liệu JSON được sử dụng cho một yêu cầu đặt phòng khách sạn.

---

## 1. Thông tin Người dùng (`user`)

Phần này chứa thông tin cá nhân của người đặt phòng.

| Trường     | Kiểu dữ liệu | Mô tả                                        | Ví dụ                            |
| :--------- | :----------- | :------------------------------------------- | :------------------------------- |
| `fullName` | string       | Họ và tên đầy đủ của người đặt phòng.        | Nguyen Van A                     |
| `email`    | string       | Địa chỉ email liên hệ.                       | nguyenvana@gmail.com             |
| `phone`    | string       | Số điện thoại liên hệ.                       | +84 987654321                    |
| `country`  | string       | Quốc gia của người đặt phòng.                | Vietnam                          |
| `message`  | string       | Yêu cầu đặc biệt hoặc ghi chú từ người dùng. | Tôi muốn phòng view biển nếu có. |

---

## 2. Dữ liệu Đặt phòng Chung (`booking_data`)

Phần này chứa các chi tiết chung về việc đặt phòng.

| Trường       | Kiểu dữ liệu        | Mô tả                                              | Ví dụ                     |
| :----------- | :------------------ | :------------------------------------------------- | :------------------------ |
| `hotelEmail` | string              | Địa chỉ email của khách sạn/đơn vị nhận đặt phòng. | longnphe172632@fpt.edu.vn |
| `checkIn`    | string (YYYY-MM-DD) | Ngày nhận phòng.                                   | 2025-11-20                |
| `checkOut`   | string (YYYY-MM-DD) | Ngày trả phòng.                                    | 2025-11-23                |
| `adultCount` | number              | Số lượng người lớn.                                | 2                         |
| `childCount` | number              | Số lượng trẻ em.                                   | 1                         |
| `currency`   | string              | Đơn vị tiền tệ của tổng giá.                       | USD                       |
| `totalPrice` | number              | Tổng giá trị đặt phòng.                            | 690                       |

---

## 3. Thông tin Phòng đã Đặt (`rooms`)

Đây là một mảng (Array) chứa chi tiết về từng loại phòng được đặt. Mỗi phần tử trong mảng là một đối tượng (Object) mô tả một loại phòng.

### 3.1. Cấu trúc Đối tượng Phòng (trong mảng `rooms`)

| Trường          | Kiểu dữ liệu | Mô tả                                                                            | Ví dụ       |
| :-------------- | :----------- | :------------------------------------------------------------------------------- | :---------- |
| `name`          | string       | Tên loại phòng.                                                                  | Deluxe Room |
| `quantity`      | number       | Số lượng phòng thuộc loại này đã đặt.                                            | 1           |
| `pricePerNight` | number       | Giá của một phòng loại này cho một đêm (chưa nhân với số lượng phòng và số đêm). | 80          |

### 3.2. Ví dụ Dữ liệu Phòng

**Phòng 1:**

```json
{
  "name": "Deluxe Room",
  "quantity": 1,
  "pricePerNight": 80
}
```

**Phòng 2:**

```json
{
  "name": "Sea View Suite",
  "quantity": 1,
  "pricePerNight": 150
}
```

**Example payload**

```json
{
  "user": {
    "fullName": "Nguyen Van A",
    "email": "nguyenvana@gmail.com",
    "phone": "+84 987654321",
    "country": "Vietnam",
    "message": "Tôi muốn phòng view biển nếu có."
  },

  "booking_data": {
    "hotelEmail": "longnphe172632@fpt.edu.vn",
    "checkIn": "2025-11-20",
    "checkOut": "2025-11-23",
    "adultCount": 2,
    "childCount": 1,
    "currency": "USD",
    "totalPrice": 690
  },
  "rooms": [
    {
      "name": "Deluxe Room",
      "quantity": 1,
      "pricePerNight": 80
    },
    {
      "name": "Sea View Suite",
      "quantity": 1,
      "pricePerNight": 150
    }
  ]
}
```
