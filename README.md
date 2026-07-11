# 🎓 School Management System

A modern, responsive School Management System built using React, TypeScript, Tailwind CSS, and Vite. The project provides an interactive interface for students, parents, teachers, and administrators with a clean and user-friendly design.

## 🚀 Live Demo

Coming Soon

## 📸 Screenshots

> Add screenshots of your homepage, dashboard, admission page, and contact page here.

## ✨ Features

- 🏫 Modern and responsive school website
- 👨‍🏫 Faculty information
- 👨‍🎓 Student information pages
- 📝 Online admission form
- 💳 Fee structure section
- 📅 Events and announcements
- 🖼️ Gallery
- 🏢 School facilities
- 📞 Contact page
- 📍 Google Maps integration
- 🔍 Search functionality
- 🌙 Clean and responsive UI
- ⚡ Fast performance using Vite

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- JavaScript
- HTML5
- CSS3

## 📂 Project Structure

```
School-Website/
│── src/
│── public/
│── assets/
│── components/
│── pages/
│── layouts/
│── routes/
│── package.json
│── vite.config.js
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/shivxv/School-Website.git
```

Move into the project directory:

```bash
cd School-Website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 📈 Future Improvements

- Student Login
- Teacher Login
- Parent Portal
- Admin Dashboard
- Attendance Management
- Online Fee Payment
- Results & Report Cards
- Notifications
- Library Management
- Transport Management

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Shiv Narayan Sharma**

GitHub: https://github.com/shivxv

## Backend API

The project includes an Express API with file-backed storage in `server/data.json`.

```bash
# terminal 1 — API at http://localhost:4000
npm run server

# terminal 2 — website at http://localhost:5173
npm run dev
```

Copy `.env.example` to `.env` before deployment and set a strong `ADMIN_API_KEY`. Public data is available under `/api/home`, `/api/faculty`, `/api/classes`, `/api/notices`, and `/api/analytics/revenue`. Admission and payment requests use `POST /api/admissions` and `POST /api/payments`.

Payment records are stored as **Pending** until a real payment-provider integration confirms them. Administrative create, update, and delete endpoints under `/api/admin/faculty`, `/api/admin/classes`, and `/api/admin/notices` require the `x-admin-key` header.

---

⭐ If you like this project, don't forget to star the repository.
