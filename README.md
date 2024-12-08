# **Backend for PlayGear** 🎮⚙️

This is the backend server for **PlayGear**, the sports gear shopping platform. It is built using **Node.js**, **Express**, and **MongoDB** to handle CRUD operations for the equipment available on the platform. The server provides API endpoints for accessing, adding, updating, and deleting equipment details.

🔗 **Live API Endpoint:**  
- [PlayGear Backend (Vercel)](https://assignment-10-server-ab.vercel.app/)  
- [PlayGear Frontend (Firebase)](https://assignment-10-2cdec.web.app/)  

---

### **🚀 Overview**

This backend serves the core functionalities required for the **PlayGear** e-commerce platform. It connects to a **MongoDB** database to manage the list of available sports gear. The server allows users to fetch equipment, filter by categories, add new items, and perform other CRUD operations.

---

### **🔑 Key Features**

- **MongoDB Integration**  
  Stores and manages all equipment data using **MongoDB Atlas**, providing a scalable and reliable database solution.

- **Express RESTful API**  
  Provides RESTful routes to handle **GET**, **POST**, **PUT**, and **DELETE** operations on equipment data.

- **CRUD Operations**  
  - **GET /equipments**: Fetches all equipment from the database.
  - **GET /equipments/featured**: Fetches a list of featured equipment (limited to 6).
  - **GET /equipments/categories**: Fetches equipment based on selected categories.
  - **POST /equipments**: Allows adding new equipment to the database.
  - **PUT /equipments/:id**: Updates equipment details based on ID.
  - **DELETE /equipments/:id**: Deletes equipment from the database based on ID.

- **Category-wise Filtering**  
  Filters equipment by category for more specific results.

- **Secure and Efficient Operations**  
  Uses **MongoDB ObjectId** to uniquely identify and handle equipment data with secure operations.

---

### **🔨 Tech Stack**

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (MongoDB Atlas)  
- **Environment Variables**: `dotenv`  
- **CORS**: For enabling cross-origin resource sharing  

---

### **📜 API Routes**

#### **1. GET /equipments**
Fetches all equipment.

- **Response**: Array of all equipment

#### **2. GET /equipments/featured**
Fetches featured equipment (limit 6).

- **Response**: Array of featured equipment

#### **3. GET /equipments/categories?category={category}**
Fetches equipment based on category.

- **Query Parameters**: `category` (e.g., "basketball", "soccer")
- **Response**: Array of equipment from the specified category

#### **4. GET /equipments/user?email={email}**
Fetches equipment uploaded by a specific user based on their email.

- **Query Parameters**: `email`
- **Response**: Array of equipment uploaded by the user

#### **5. GET /equipments/:id**
Fetches a specific equipment item by its ID.

- **Response**: Object with equipment details

#### **6. PUT /equipments/:id**
Updates the details of an equipment item by its ID.

- **Request Body**: JSON object with the updated equipment details
- **Response**: Update result object

#### **7. POST /equipments**
Adds a new equipment item to the database.

- **Request Body**: JSON object with the equipment details
- **Response**: Insert result object

#### **8. DELETE /equipments/:id**
Deletes an equipment item from the database by its ID.

- **Response**: Delete result object

---

### **💡 Getting Started**

1. Clone the repository:

    ```bash
    git clone https://github.com/Abubokkor98/playgear-backend.git
    ```

2. Install dependencies:

    ```bash
    cd playgear-backend
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:

    ```plaintext
    DB_USER=your_mongo_user
    DB_PASS=your_mongo_password
    PORT=5000
    ```

4. Run the server:

    ```bash
    npm start
    ```

The server will be running on `http://localhost:5000` by default.

---

### **🛠️ Project Structure**

playgear-backend/
│
├── .env                    # Environment variables (e.g., DB credentials)
├── node_modules/           # Dependencies installed via npm
├── public/                 # Public files (if any)
├── src/                    # Backend source code
│   ├── controllers/        # Contains the controllers for the different routes
│   │   └── equipmentController.js  # Controller for equipment-related routes
│   ├── models/             # MongoDB models (optional if using Mongoose)
│   │   └── equipmentModel.js      # Equipment schema if you're using Mongoose
│   ├── routes/             # API route definitions
│   │   └── equipmentRoutes.js    # Equipment-related routes
│   ├── utils/              # Utility files (e.g., error handling, middleware)
│   │   └── errorHandler.js       # Global error handling
│   ├── config/             # Database and server configuration
│   │   └── db.js           # MongoDB connection
│   ├── server.js           # Main server file (entry point)
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Locks the versions of installed packages
├── README.md               # Project documentation
└── .gitignore              # Git ignore file (to exclude node_modules, etc.)

---

### **🔑 Configuration**

Make sure to replace the placeholder values in the `.env` file with your own MongoDB credentials.

---

### **📈 Roadmap and Future Features**

- **Payment Gateway Integration**  
  Integrate a payment system (e.g., Stripe, PayPal) to handle payments directly from the backend.

- **User Management**  
  Add user authentication and management features, including login, registration, and user profiles.

- **Product Recommendations**  
  Implement an AI-based product recommendation system to suggest items based on browsing history.

---

### **👥 Contribution**

Feel free to fork the repository, report bugs, and submit pull requests to improve the project.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and test them.
4. Submit a pull request to the main branch.

---

### **🙋‍♂️ About the Developer**

Built with 💻 and passion by **Abu Bokkor Siddik**.

- **GitHub**: [Abubokkor98](https://github.com/Abubokkor98)  
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/abubokkor)

---

### **🚀 Why PlayGear Backend?**

- **⚡ Fast and Reliable**  
  Built with Node.js and Express for fast, reliable performance.

- **🔒 Secure Operations**  
  Utilizes MongoDB Atlas for secure database management.

- **📈 Scalable**  
  The backend is designed to handle a growing inventory and user base.
