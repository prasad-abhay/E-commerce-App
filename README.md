# 🛒 E-Commerce Web Application

A full-stack E-Commerce Web Application that provides a complete online shopping experience for customers and a powerful management dashboard for admins. The platform supports user authentication, product browsing, cart management, secure checkout, and order management.

## 🌐 Live Demo: https://easyshop-j844.onrender.com/

## 🚀 Features

 ### 👤 User (Customer)
	•	User registration and login (JWT-based authentication)
	•	Browse products with search, filter, and sorting
	•	View detailed product information
	•	Add / remove products from cart
	•	Manage delivery addresses
	•	Place orders with secure checkout
	•	View order history and order status

  ### 🛠️ Admin
	•	Admin authentication
	•	Add, update, and delete products
	•	Manage product categories
	•	View and manage customer orders
	•	Update order status (Processing, Shipped, Delivered)

## 🧑‍💻 Tech Stack

 Frontend
 
	•	React.js
	•	Redux Toolkit
	•	Tailwind CSS / Shadcn UI
	•	Axios
  
Backend

	•	Node.js
	•	Express.js
	•	JWT Authentication
	•	bcrypt.js

Database

	•	MongoDB (Mongoose)


### 📂 Project Structure
```
E-COMMERCE/
│── client/                     # Frontend (Vite + React)
│   │── dist/                   # Production build files
│   │── public/                 # Static assets
│   │── src/                    # React source code
│   │── .env                    # Frontend environment variables
│   │── index.html              # Main HTML file
│   │── components.json         # UI components config (shadcn)
│   │── tailwind.config.js      # Tailwind CSS configuration
│   │── postcss.config.js       # PostCSS configuration
│   │── vite.config.js          # Vite configuration
│   │── eslint.config.js        # ESLint configuration
│   │── package.json
│   │── README.md
│
│── server/                     # Backend (Node.js + Express)
│   │── controllers/            # Request handlers
│   │── helpers/                # Utility/helper functions
│   │── models/                 # MongoDB models
│   │── routes/                 # API routes
│   │── dbconfig.js             # Database connection
│   │── server.js               # Entry point
│   │── .env                    # Backend environment variables
│   │── package.json
│
│── .gitignore
│── README.md
```


## ⚙️ Installation & Setup

1️⃣ Clone the Repository
```
git clone https://github.com/prasad-abhay/E-commerce-App.git
cd E-commerce-App

```
2️⃣ Backend Setup
```
cd server
npm install
npm run dev

```
Create a .env file and add:

```
# server port
PORT=3000
# frontend url
VITE_BASEURL=http://localhost:5173

NODE_ENV=development

# mongodb
MONGO_URI=your mongodb connection string

# paypal
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=

# coudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY= 
CLOUDINARY_API_SECRET=

# jwt
JWT_SECRET=CLIENT_SECRET_KEY
JWT_EXPIRES_IN=
BCRYPT_SALT_ROUNDS=
```

3️⃣ Frontend Setup
```
cd client
npm install
npm run dev
```


## 🔐 Authentication Flow

	•	User credentials are securely hashed using bcrypt
	•	JWT tokens are generated on login
	•	Protected routes are secured using authentication middleware



## 📸 Screenshots

<img width="1470" height="805" alt="image" src="https://github.com/user-attachments/assets/fac7f1a8-4d90-42ed-bf02-cda60699e139" />

<img width="1464" height="805" alt="image" src="https://github.com/user-attachments/assets/bbadaf3b-c831-4340-86c6-ecd84390ee2f" />

<img width="1470" height="808" alt="image" src="https://github.com/user-attachments/assets/5ea4fcc9-782e-4ff3-8e86-6623a377ae83" />

<img width="1470" height="814" alt="image" src="https://github.com/user-attachments/assets/8870d6f2-cab6-440a-98cf-9cdcb350f30b" />

## Admin page

<img width="1470" height="811" alt="image" src="https://github.com/user-attachments/assets/8e1b32fe-12a3-40db-ba09-1ce43df6469a" />

<img width="1470" height="806" alt="image" src="https://github.com/user-attachments/assets/414b2760-0f45-4fd8-bde5-e49d7a96186c" />




