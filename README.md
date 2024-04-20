

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
     "id": 8619146543262,
     "customer_id": 7509855502494,
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
     "country_name": "India",
     "default": true
 },
 {
     "id": 8654462189726,
     "customer_id": 7509855502494,
     "first_name": "Aditya",
     "last_name": "Jha",
     "company": null,
     "address1": "Hospital road",
     "address2": "Budh nagar coloney",
     "city": "Madhubani",
     "province": "Bihar",
     "country": "India",
     "zip": "847211",
     "phone": null,
     "name": "Aditya Jha",
     "province_code": "BR",
     "country_code": "IN",
     "country_name": "India",
     "default": false
 }
]
  ```


### 2. Update Customer Address

- **Endpoint**: `https://cyan-splendid-bandicoot.cyclic.app/app/api/address/update?addressId=8619146543262`
- **Method**: `PUT`
- **Description**: Updates a customer's address.
- **Required Parameters**:
 #### Request Parameters
- `addressId`: ID of the address to be updated (required) in body.
- `addressData`: New address data in JSON format (required) in body.
- **Sample Request**:

  Content-Type: application/json

  {
  
  "addressData": {
"address1": "madhubani",
"address2": "Budh nagar coloney",
"city": "Madhubani",
"province": "Bihar",
"country": "India",
"zip": "847211",
  }
}

  ```
- **Sample Response**:
  ```json
  {
    "customer_id": 7509855502494,
    "address1": "madhubani",
    "address2": "Budh nagar coloney",
    "city": "Madhubani",
    "company": null,
    "country": "India",
    "first_name": "Aditya",
    "last_name": "Jha",
    "phone": null,
    "province": "Bihar",
    "zip": "847211",
    "id": 8619146543262,
    "name": "Aditya Jha",
    "province_code": "BR",
    "country_code": "IN",
    "country_name": "India",
    "default": true
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
        "id": 5629450289310,
        "currency": "INR",
        "total_price": "1486.68",
        "customer": {
            "first_name": "Aditya",
            "last_name": "Jha",
            "phone": "+918210523156",
            "default_address": {
                "address1": "Hospital road",
                "address2": "Budh nagar coloney",
                "city": "Madhubani",
                "province": "Bihar",
                "country": "India",
                "zip": "847211"
            }
        },
        "line_items": [
            {
                "name": "The Multi-managed Snowboard",
                "quantity": 2,
                "price": "1259.90"
            }
        ],
        "tax_lines": [
            {
                "title": "IGST",
                "price": "226.78"
            }
        ]
    },
    {
        "id": 5629440852126,
        "currency": "INR",
        "total_price": "884.94",
        "customer": {
            "first_name": "Aditya",
            "last_name": "Jha",
            "phone": "+918210523156",
            "default_address": {
                "address1": "Hospital road",
                "address2": "Budh nagar coloney",
                "city": "Madhubani",
                "province": "Bihar",
                "country": "India",
                "zip": "847211"
            }
        },
        "line_items": [
            {
                "name": "The Collection Snowboard: Liquid",
                "quantity": 1,
                "price": "749.95"
            }
        ],
        "tax_lines": [
            {
                "title": "IGST",
                "price": "134.99"
            }
        ]
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
  GET  https://cyan-splendid-bandicoot.cyclic.app/app/api/order?orderNumber=1010
  ```
- **Sample Response**:
  ```json
  {
  "customer_name": "Aditya Jha",
  "location": {
    "city": "Madhubani",
    "province": "Bihar",
    "country": "India"
  },
  "product_ordered": "The Collection Snowboard: Liquid",
  "vendor": "Hydrogen Vendor",
  "total_paid": {
    "amount": 884.94,
    "currency": "INR"
  },
  "taxes": {
    "IGST": 134.99,
    "currency": "INR"
  },
  "payment_gateway": "bogus",
  "shipping_method": "Standard",
  "shipping_cost": {
    "amount": 0.00,
    "currency": "INR"
  }
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
    "orderNumber": "1010"
  }
  ```
- **Sample Response**:
  ```json
  {
  "msg": "Order 1009 has been cancelled",
  "cancelledOrder": {
    "id": 5629440852126,
    "cancelled_at": "2024-04-20T06:57:47-04:00",
    "total_price": "884.94",
    "currency": "INR",
    "taxes": {
      "IGST": 134.99,
      "currency": "INR"
    },
    "line_items": [
      {
        "name": "The Collection Snowboard: Liquid",
        "price": "749.95",
        "vendor": "Hydrogen Vendor"
      }
    ],
    "shipping_method": "Standard",
    "shipping_cost": {
      "amount": 0.00,
      "currency": "INR"
    }
  }
}

## NOTE - If you cancel the order using the  order number the the endpoint number 4  is not going to work in that case increase  the order number by 1 for example if the order number 1009 cancelled then increase the order number to 1010 to check  the endpoint 4


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
