Sure, here is the complete README file:

```markdown
# API Documentation

This document provides details about the endpoints available in the API.

## Base URL

The base URL for all endpoints is `https://cyan-splendid-bandicoot.cyclic.app/`.

## Endpoints

### 1. Retrieve Customer Addresses by Phone Number

- **Endpoint**: `: https://cyan-splendid-bandicoot.cyclic.app/app/api/addresses?phoneNumber=`
- **Method**: `GET`
- **Description**: Retrieves addresses for a customer based on their phone number.
- **Required Parameters**:
  - `phoneNumber`: Phone number of the customer.
- **Sample Request**:
  ```http
  GET  https://cyan-splendid-bandicoot.cyclic.app/app/api/addresses?phoneNumber=8210523156
  ```
- **Sample Response**:
  ```json
  [
    {
      "address": "123 Main St",
      "city": "New York",
      "zipcode": "10001"
    },
    {
      "address": "456 Elm St",
      "city": "Los Angeles",
      "zipcode": "90001"
    }
  ]
  ```


### 2. Update Customer Address

- **Endpoint**: `https://cyan-splendid-bandicoot.cyclic.app/app/api/address/update/`
- **Method**: `PUT`
- **Description**: Updates a customer's address.
- **Required Parameters**:
  - `addressId`: ID of the address to be updated.
  - `addressData`: New address data.
- **Sample Request**:
  Content-Type: application/json

  {
  "addressId": 8619146543262,
  "addressData": {
    "first_name": "Aditya",
"last_name": "Jha",
"company": null,
"address1": "madhubani",
"address2": "Budh nagar coloney",
"city": "Madhubani",
"province": "Bihar",
"country": "India",
"zip": "847211",
"phone": null,
"name": "Aditya Jha",
"province_code": "BR",
"country_code": "IN",
"country_name": "India"

  }
}

  ```
- **Sample Response**:
  ```json
  {
    "address": "789 Oak St",
    "city": "Chicago",
    "zipcode": "60601"
  }
  ```


### 3. Retrieve Orders by Customer Phone Number

- **Endpoint**: `https://cyan-splendid-bandicoot.cyclic.app/app/api/orders?phoneNumber=`
- **Method**: `GET`
- **Description**: Retrieves orders associated with a customer's phone number.
- **Required Parameters**:
  - `phoneNumber`: Phone number of the customer.
- **Sample Request**:
  ```http
  GET https://cyan-splendid-bandicoot.cyclic.app/app/api/orders?phoneNumber=8210523156
  ```
- **Sample Response**:
  ```json
  [
    {
      "orderId": "9876543210",
      "customerName": "Jane Smith",
      "totalPrice": 75.00,
      "status": "pending"
    },
    {
      "orderId": "5678901234",
      "customerName": "Alice Johnson",
      "totalPrice": 120.00,
      "status": "shipped"
    }
  ]
  ```

### 4. Retrieve Order Details by Order Number

- **Endpoint**: `https://cyan-splendid-bandicoot.cyclic.app/app/api/order`
- **Method**: `GET`
- **Description**: Retrieves details of an order based on its order number.
- **Required Parameters**:
  - `orderNumber`: Order number of the order to retrieve details.
- **Sample Request**:
  ```http
  GET /orders?orderNumber=1234567890
  ```
- **Sample Response**:
  ```json
  {
    "orderId": "1234567890",
    "customerName": "John Doe",
    "totalPrice": 100.50,
    "status": "shipped"
  }
  ```


### 5. Cancel an Order

- **Endpoint**: `https://cyan-splendid-bandicoot.cyclic.app/app/api/order/cancel/`
- **Method**: `POST`
- **Description**: Cancels an order based on its order number.
- **Required Parameters**:
  - `orderNumber`: Order number of the order to be cancelled.
- **Sample Request**:
  ```http
  POST /orders
  Content-Type: application/json

  {
    "orderNumber": "1006"
  }
  ```
- **Sample Response**:
  ```json
  {
    "message": "Order 987654321 has been cancelled",
    "cancelledOrder": {
      "orderId": "987654321",
      "status": "cancelled"
    }
  }
  ```

## Error Handling

- **400 Bad Request**: Missing or invalid parameters.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Server encountered an unexpected condition.
```

