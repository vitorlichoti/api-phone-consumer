# Backend Documentation - RESTfull API

This document describes the routes and functionalities of the RESTful API for product management.

### Product Management API

#### List Products

- **Method:** GET
- **Route:** `/api/products`
- **Description:** Returns the list of all available products.
- **Authentication:** Requires user authentication.

#### Product Details

- **Method:** GET
- **Route:** `/api/products/:id`
- **Description:** Returns the details of a specific product based on the provided ID.
- **Route Parameters:**
  - `id`: Unique ID of the product.
- **Authentication:** Requires user authentication.

#### Add Product

- **Method:** POST
- **Route:** `/api/products`
- **Description:** Adds a new product to the database.
- **Request Body Parameters:**
  - `name`: Name of the product.
  - `brand`: Brand of the product.
  - `model`: Model of the product.
  - `price`: Price of the product.
  - `color`: Color of the product.
- **Authentication:** Requires user authentication.

#### Update Product

- **Method:** PUT
- **Route:** `/api/products/:id`
- **Description:** Updates the information of an existing product based on the provided ID.
- **Route Parameters:**
  - `id`: Unique ID of the product to be updated.
- **Request Body Parameters (optional):**
  - `name`: Updated name of the product.
  - `brand`: Updated brand of the product.
  - `model`: Updated model of the product.
  - `price`: Updated price of the product.
  - `color`: Updated color of the product.
- **Authentication:** Requires user authentication.

#### Remove Product

- **Method:** DELETE
- **Route:** `/api/products/:id`
- **Description:** Removes a product from the database based on the provided ID.
- **Route Parameters:**
  - `id`: Unique ID of the product to be removed.
- **Authentication:** Requires user authentication.

###This API supports the following data structures:

## Structure 1

````json
{
   "name": "Xiaomi Redmi 9",
   "brand": "Xiaomi",
   "model": "Redmi 9",
   "price": 10000,
   "color": "red"
}

## Structure 2
```json
{
   "name": "Xiaomi Redmi 9",
   "details": {
       "brand": "Xiaomi",
       "model": "Redmi 9",
       "color": "red"
   },
   "price":  10000,
}

## Structure 3
```json
[
   {
        "name": "Xiaomi Redmi 9",
        "brand": "Xiaomi",
        "model": "Redmi 9",
        "data": [
           {
        	  "price":  10000,
        	  "color": "red"
           },
          {
        	  "price":  10000,
        	  "color": "blue"
           }
        ]
   },
   {
        "name": "Iphone 14 Pro",
        "brand": "Iphone",
        "model": "14 Pro",
        "data": [
           {
        	  "price":  30000,
        	  "color": "silver"
           },
          {
        	  "price":  30100,
        	  "color": "gold"
           }
        ]
   }
]

## Notes

- All routes that require authentication must include a valid authentication token in the request header.
- The authentication system can be implemented using JWT (JSON Web Tokens) or another secure method.

This is the documentation for the RESTful API of the product management backend.
````
