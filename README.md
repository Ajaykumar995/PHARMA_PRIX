# 💊 PHARMA-PRIX

A modern full-stack pharmacy management and e-commerce platform built using the MERN Stack. PHARMA-PRIX helps medical stores manage products, categories, orders, branding, and customer interactions through a powerful admin dashboard and responsive customer-facing website.

---

## 🚀 Features

### Customer Website

* Browse healthcare and medical products
* Product search and category filtering
* Detailed product information page
* WhatsApp product ordering
* Responsive mobile-first design
* Dynamic store branding
* Contact and social media integration
* Related products recommendations

### Admin Dashboard

* Secure Admin Login
* Dashboard Analytics
* Product Management

  * Add Product
  * Edit Product
  * Delete Product
* Category Management

  * Add Category
  * Edit Category
  * Delete Category
* Order Management

  * Create Orders
  * Update Status
  * Pending Orders
  * Delivered Orders
  * Cancelled Orders
* Store Settings

  * Store Name
  * Logo Management
  * Contact Information
  * WhatsApp Integration
  * Social Media Links
  * Delivery Charges

### Dynamic Settings System

Changes made in Admin Settings automatically update:

* Navbar
* Footer
* Sidebar
* Contact Information
* WhatsApp Buttons
* Branding Elements

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* React Hot Toast
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Cloud Services

* Cloudinary
* Multer
* Multer Storage Cloudinary

---

## 📂 Project Structure

```text
PHARMA-PRIX
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Ajaykumar995/PHARMA-PRIX.git
```

### Navigate to Project

```bash
cd PHARMA-PRIX
```

---

## Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
```

Run Backend

```bash
npm run server
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🌐 Environment Variables

### Server

```env
PORT=
MONGO_URI=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Laptop
* Tablet
* Mobile Devices

---

## 🔒 Security Features

* Secure Admin Authentication
* Password Hashing using bcrypt
* Environment Variable Protection
* MongoDB Validation
* Protected API Operations

---

## 📈 Future Enhancements

* Online Payments
* Invoice Generation
* Order Tracking
* Inventory Alerts
* Customer Accounts
* Sales Analytics
* Email Notifications
* Multi-Store Support

---

## 👨‍💻 Developer

**Ajay Kumar**

B.Tech Computer Science Engineering

Passionate about Full Stack Development, MERN Stack, and building scalable web applications.

GitHub:
https://github.com/Ajaykumar995

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

---

**PHARMA-PRIX — Smart Healthcare, Simplified.**
