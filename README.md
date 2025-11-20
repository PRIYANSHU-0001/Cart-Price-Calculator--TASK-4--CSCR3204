Cart Price Calculator API

A simple Express.js API that calculates the total price of a shopping
cart.
This project is built as part of a backend development assignment using
Node.js and Express.

------------------------------------------------------------------------

🚀 Features

-   Accepts cart items with price and quantity
-   Automatically calculates the total price
-   Simple POST API endpoint
-   Fast and easy to test using Thunder Client / Postman

------------------------------------------------------------------------

📁 Project Structure

cart-api/ │── server.js │── package.json

------------------------------------------------------------------------

🛠️ Installation

Install dependencies

npm install

------------------------------------------------------------------------

▶️ Running the Server

Start the backend server using: node server.js

Server will run on: http://localhost:3000

------------------------------------------------------------------------

📌 API Endpoint

POST /cart/total

Request Body Example: { “items”: [ { “name”: “Pen”, “price”: 10, “qty”:
3 }, { “name”: “Notebook”, “price”: 40, “qty”: 2 } ] }

Response Example: { “total”: 110 }

------------------------------------------------------------------------

🧪 Testing (Thunder Client / Postman)

Send a POST request to: http://localhost:3000/cart/total

Body → JSON format.

------------------------------------------------------------------------

📚 Technologies Used

-   Node.js
-   Express.js

------------------------------------------------------------------------

✨ Author

Priyanshu Mangla
