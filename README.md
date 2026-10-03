<div align="center">

# 💼 Job Portal

### Connecting Job Seekers with Employers

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=Full-Stack+Job+Portal+Application;Built+with+Django+%2B+React;JWT+Authentication+%7C+Role-Based+Access;Recruiter+%26+Job+Seeker+Dashboards)](https://git.io/typing-svg)

![Django](https://img.shields.io/badge/Django-6.1.1-092E20?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DRF](https://img.shields.io/badge/DRF-REST_API-A30000?style=for-the-badge&logo=django&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

![GitHub last commit](https://img.shields.io/github/last-commit/dipu-ray/job-portal?style=flat-square&color=6366F1)
![GitHub repo size](https://img.shields.io/github/repo-size/dipu-ray/job-portal?style=flat-square&color=6366F1)
![GitHub stars](https://img.shields.io/github/stars/dipu-ray/job-portal?style=flat-square&color=6366F1)

</div>

---

## 📋 Project Timeline

| Status              | Date               |
| ------------------- | ------------------ |
| 🚀 **Started**      | September 26, 2026 |
| 🔄 **Last Updated** | October 3, 2026    |

---

## ✨ Overview

A full-stack job portal web application that connects **job seekers** with **employers**, featuring job applications, resume uploads, and recruitment management — built with a Django REST API backend and a modern React + Tailwind frontend.

---

## 🛠️ Tech Stack

<div align="center">

|        Backend        |     Frontend     |     Tools      |
| :-------------------: | :--------------: | :------------: |
|      Django 6.1       |   React (Vite)   |  Git & GitHub  |
| Django REST Framework |   Tailwind CSS   | Thunder Client |
|       SimpleJWT       | React Router DOM |    VS Code     |
|        SQLite         |      Axios       |       —        |

</div>

---

## 🚀 Features

- 🔐 **JWT Authentication** — Secure register/login with access & refresh tokens
- 👥 **Role-Based Access** — Separate permissions for Job Seekers and Recruiters
- 📄 **Job Management** — Recruiters can create, update, and delete job postings
- 🔍 **Search & Filter** — Public job listing with search, location, and type filters
- 📎 **Resume Upload** — Seekers apply with PDF resume (validated format & size)
- 📊 **Dashboards** — Role-specific dashboards for Seekers and Recruiters
- 🛡️ **Protected Routes** — Frontend route guarding based on authentication & role
- ✅ **Application Tracking** — Recruiters can view applicants and update status

---

## 📁 Project Structure

```text
job-portal/
├── env/
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── job_portal/
│   ├── accounts/
│   ├── job_portal/
│   ├── jobs/
│   ├── media/
│   ├── db.sqlite3
│   ├── manage.py
│   └── requirements.txt
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd job_portal
python -m venv env
source env/Scripts/activate      # Windows (Git Bash)
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

> Backend runs at: **http://127.0.0.1:8000**

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs at: **http://localhost:5173**

---

## 🔑 API Endpoints

<div align="center">

|      Method      | Endpoint                         |      Access      |
| :--------------: | -------------------------------- | :--------------: |
|      `POST`      | `/api/auth/register/`            |    🌐 Public     |
|      `POST`      | `/api/auth/login/`               |    🌐 Public     |
|      `GET`       | `/api/auth/me/`                  | 🔒 Authenticated |
|      `GET`       | `/api/jobs/`                     |    🌐 Public     |
|      `POST`      | `/api/jobs/`                     |   👔 Recruiter   |
| `PATCH` `DELETE` | `/api/jobs/<id>/`                |   👔 Job Owner   |
|      `GET`       | `/api/jobs/my-jobs/`             |   👔 Recruiter   |
|      `POST`      | `/api/jobs/<id>/apply/`          |    🧑‍💻 Seeker     |
|      `GET`       | `/api/jobs/<id>/applicants/`     |   👔 Job Owner   |
|      `GET`       | `/api/applications/my/`          |    🧑‍💻 Seeker     |
|     `PATCH`      | `/api/applications/<id>/status/` |   👔 Job Owner   |

</div>

---

## 📸 Screenshots

> _Add your project screenshots here once UI is finalized_

---

## 🧭 Roadmap

- [x] Phase 1: Backend & Database Setup
- [x] Phase 2: Authentication & Core API
- [x] Phase 3: Frontend Setup & Design
- [x] Phase 4: Frontend-Backend Integration
- [x] Phase 5: Testing, Bug Fixing & Final Touches
- [ ] Deployment (Render / Vercel)

---

## 👤 Author

<div align="center">

**Dipu Ray**

[![GitHub](https://img.shields.io/badge/GitHub-dipu--ray-181717?style=for-the-badge&logo=github)](https://github.com/dipu-ray)

</div>

---

<div align="center">

⭐ **If you like this project, give it a star!** ⭐

</div>
