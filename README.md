<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
=======
# 💼 Job Portal Frontend

A modern and responsive Job Portal frontend built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This application consumes the Job Portal ASP.NET Core Web API and provides an intuitive interface for Employers and Job Seekers.

---

## 🚀 Features

### 🌐 Public

* Home page with Hero section
* Job search interface
* Browse available jobs
* Responsive navigation
* Modern and clean UI

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Role-Based Navigation

### 👨‍💼 Employer

* Employer Dashboard
* Create Job Posts
* Manage Job Listings
* Edit & Delete Jobs

### 👨‍💻 Job Seeker

* Browse Jobs
* View Job Details
* Apply for Jobs
* View Applied Jobs

---

## 🛠️ Technologies Used

* React 19
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hook Form
* Zod
* React Toastify
* React Icons
* JWT Decode

---

## 📁 Project Structure

```text
src/
│
├── api/                # Axios configuration
├── assets/             # Images and static files
├── components/
│   ├── home/           # Hero, SearchBar, Categories, Stats
│   └── jobs/           # JobCard and job components
│
├── context/            # Authentication Context
├── hooks/              # Custom React Hooks
├── layouts/            # Main Layout
├── pages/
│   ├── auth/
│   ├── employer/
│   ├── jobseeker/
│   └── shared/
│
├── routes/             # Application Routing
├── services/           # API Services
├── types/              # TypeScript Interfaces
├── utils/              # Helper Functions
│
├── App.tsx
└── main.tsx
```

---

## 🎨 Current UI

* Responsive Navigation Bar
* Hero Section
* Search Bar
* Job Cards
* Responsive Layout

---

## 🔐 Authentication Flow

1. User registers as an Employer or Job Seeker.
2. User logs in using email and password.
3. Backend validates credentials.
4. JWT token is returned.
5. Token is stored in the browser.
6. Protected API requests include the JWT.
7. Role-based navigation and authorization are applied.

---

## 📡 Backend API

This frontend is designed to work with the Job Portal ASP.NET Core Web API.

Example endpoints:

| Method | Endpoint             | Description                      |
| ------ | -------------------- | -------------------------------- |
| POST   | `/api/auth/register` | Register a new user              |
| POST   | `/api/auth/login`    | User login                       |
| GET    | `/api/jobs`          | Get all jobs                     |
| POST   | `/api/jobs`          | Create a new job (Employer only) |

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-portal-frontend.git
```

### 2. Navigate to the project

```bash
cd job-portal-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API URL

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://localhost:5001/api
```

> Update the URL to match your backend.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📸 Screenshots

You can add screenshots here as the project evolves.

* Home Page
* Login Page
* Register Page
* Employer Dashboard
* Job Listings
* Job Details

---

## 📌 Roadmap

* [ ] Connect frontend to backend API
* [ ] Display live job listings
* [ ] Job search and filtering
* [ ] Job application system
* [ ] Employer dashboard
* [ ] Job Seeker dashboard
* [ ] User profile management
* [ ] Pagination
* [ ] Resume upload
* [ ] Email notifications
* [ ] Dark mode
* [ ] Deployment

---

## 🎯 Learning Objectives

This project demonstrates:

* React with TypeScript
* Component-Based Architecture
* Responsive UI Design
* Tailwind CSS
* REST API Integration
* JWT Authentication
* Role-Based Access Control
* Clean Project Structure
* Reusable Components
* Modern Frontend Development Practices

---

## 👨‍💻 Author

**Imalsha Ridmani**

---

## ⭐ If you like this project

If you found this project helpful, consider giving it a ⭐ on GitHub.
>>>>>>> 46faed5ab34122f85eceec227da89a6b3aec7968
