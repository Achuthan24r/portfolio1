# 🚀 Achuthan Portfolio - Full Stack Web Application

A modern fullstack portfolio website built using React.js, Node.js, Express, and MongoDB.

This project includes:
- Responsive React frontend
- Express backend API
- MongoDB database integration
- Contact form with message storage

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure


portfolio/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── backend/
│ ├── models/
│ │ └── Contact.js
│ ├── server.js
│ ├── .env
│ └── package.json


---

## ⚙️ Installation Guide

### 1️⃣ Clone Repository


git clone https://github.com/your-username/portfolio.git

cd portfolio


---

### 2️⃣ Setup Backend


cd backend
npm install


Create a `.env` file:


MONGO_URI=your_mongodb_connection_string
PORT=5000


Run backend:


npm start


Backend runs on:

http://localhost:5000


---

### 3️⃣ Setup Frontend


cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


---

## 📬 API Endpoints

### POST /api/contact

Stores contact messages in MongoDB.

Request Body:

{
"name": "John",
"email": "john@email.com
",
"message": "Hello!"
}


Response:

{
"message": "Message Saved Successfully"
}


---

## 🌟 Features

- Modern UI design
- Responsive layout
- Contact form integration
- MongoDB database storage
- Clean folder structure
- Easy deployment ready

---

## 🚀 Deployment

Frontend:
- Vercel
- Netlify

Backend:
- Render
- Railway

Database:
- MongoDB Atlas

---

## 📈 Future Improvements

- Add authentication (Admin panel)
- Email notifications using Nodemailer
- Add animations (Framer Motion)
- Add project filtering
- Add blog section

---

## 👨‍💻 Author

Achuthan Rameshkumar  
Full Stack Developer  
React | Next.js | MongoDB | Node.js  

---

## 📜 License

This project is open-source and free to use.
