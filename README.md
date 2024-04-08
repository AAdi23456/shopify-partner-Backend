

# Project Title
shopify-partner-Backend

## Introduction
The Shopify API application serves as an interface between a Shopify store and client applications, allowing seamless integration and communication with Shopify's backend services. The application provides various endpoints to perform operations such as retrieving customer addresses, updating addresses, fetching order details, etc.

## Project Type
 Backend 

## Base URL

The base URL for all endpoints is `https://cyan-splendid-bandicoot.cyclic.app/`.

## Directory Structure

shopify-partner-Backend/
│
├── app.js
├── logger.js
├── app/
│   ├── api/
│   │   ├── addresses/
│   │   │   ├── route.js
│   │   │   └── controller.js
│   │   │
│   │   ├── orders/
│   │   │   ├── route.js
│   │   │   └── controller.js
│   │   │
│   │   ├── order/
│   │   │   ├── route.js
│   │   │   └── controller.js
│   │   │
│   │   └── order/
│   │       └── cancel/
│   │           ├── route.js
│   │           └── controller.js
│   │
│   └── routes/
│       └── index.js


## Installation & Getting started
git clone https://github.com/AAdi23456/shopify-partner-Backend.git  for downloading github repo.

add .env file and add properties.

SHOPIFY_SHOP_NAME
SHOPIFY_API_KEY
SHOPIFY_PASSWORD



```bash
npm install 
cd shopify-partner-Backend
npm start
```

## Usage



## API Endpoints

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

## Technology Stack
List and provide a brief overview of the technologies used in the project.

Node.js: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to execute JavaScript code outside of a browser, making it ideal for building scalable network applications.

Express.js: Express.js is a web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications.

cors: This library provides middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.js applications. CORS is necessary for allowing web applications to make requests to APIs hosted on different domains.

dotenv: dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. It's commonly used to manage environment-specific configurations such as API keys, database URIs, etc.

nodemon: nodemon is a utility that monitors for changes in files and automatically restarts the Node.js application when changes are detected. It's commonly used in development environments to streamline the development process.

shopify-api-node: This library provides a Node.js wrapper for the Shopify API, allowing you to interact with Shopify's services programmatically. It simplifies tasks such as authenticating with Shopify, making API requests, and handling responses.

winston: Winston is a versatile logging library for Node.js, providing support for multiple transports (e.g., console, file, database) and customizable log formatting. It's commonly used to log application events and errors, making it easier to debug and monitor applications in production environments.