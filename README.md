# 🩸 LifeDrop – Blood Donation Management System (Frontend)

![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8)
![JWT](https://img.shields.io/badge/Auth-JWT-green)
![Stripe](https://img.shields.io/badge/Payment-Stripe-635BFF)
![Status](https://img.shields.io/badge/Status-Production--Ready-success)

A modern, responsive, and role-based **Blood Donation Management System** built with **React** and **Tailwind CSS v4**.  
LifeDrop connects **donors**, **volunteers**, and **administrators** to streamline blood donation requests and save lives efficiently.

---

## 🌐 Live Website

🔗 **Live URL:** https://life-drop-five.vercel.app/

---

## 🎯 Project Purpose

The goal of this application is to provide a **centralized platform** for:

- Finding blood donors quickly
- Managing blood donation requests
- Ensuring role-based access control
- Creating a smooth and reliable donation experience

This frontend is designed to be **clean, accessible, scalable, and recruiter-friendly**, following modern UI/UX standards.

---

## 🧑‍🤝‍🧑 User Roles

| Role             | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| **Donor 🩸**     | Can create donation requests, manage own requests, and donate blood |
| **Volunteer 🤝** | Can view all requests and update donation status                    |
| **Admin 🌐**     | Full access to users, requests, roles, and funding data             |

---

## ✨ Key Features

### 🔐 Authentication

- Email & Password authentication
- Role-based protected routes
- Persistent login (no redirect on reload)
- JWT-based authorization

---

### 🏠 Public Pages

- Home Page with banner, featured sections, and contact form
- Search Donors by blood group & location
- View pending blood donation requests
- Responsive Navbar & Footer

---

### 📊 Dashboard (Private)

- Fully responsive **sidebar layout**
- Separate dashboards for Donor, Volunteer & Admin
- Profile management with editable form
- Role-based access control

---

### 🩸 Donation Management

- Create, update, delete donation requests
- Donation status lifecycle:
  - `pending → inprogress → done / canceled`
- Donor confirmation modal
- Pagination & filtering support

---

### 👥 Admin Features

- View all users
- Block / unblock users
- Change user roles (Donor → Volunteer → Admin)
- View all donation requests
- Dashboard statistics & charts

---

### 💰 Funding System

- Secure Stripe payment integration
- View funding history
- Total funds visible in Admin & Volunteer dashboard

---

### 🌗 Light & Dark Theme

- CSS-first theming using **Tailwind CSS v4**
- Smooth light/dark mode toggle
- Accessible color contrast

---

## 🎨 UI & UX Highlights

- Clean medical-grade design
- Consistent typography & spacing
- Status badges with semantic colors
- Reusable UI components
- Mobile, tablet & desktop responsive

---

## 🛠️ Technologies Used

### Main

- **React 19.2.0**
- **React Router DOM**
- **Tailwind CSS v4**
- **Axios**
- **React Hook Form**
- **Firebase**
- **JWT Authentication**
- **Shadcn**

### Others

- **ImageBB** (Avatar Upload)
- **Stripe** (Funding Payment)
- **Chart Library** (Admin dashboard analytics)
