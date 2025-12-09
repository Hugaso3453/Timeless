<h1 align="center">Timeless Motors</h1>

<p align="center">
  <strong>Full-Stack Luxury Dealership Platform — TFG Project</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white">
</p>

---

## 📖 Overview

**Timeless Motors** is a full-stack web application that simulates a luxury automotive dealership ecosystem.  
It includes dynamic vehicle catalogs, dealership management, user roles, PDF generation, interactive maps, and an admin dashboard with real-time metrics.

This project was developed as the **Final Degree Project (TFG)** for the **Multiplatform App Development (DAM)** program, following a realistic production workflow over approximately **two weeks**.

The platform combines modern web technologies to deliver a professional, polished experience.

---

## 🚀 Features

### 🖥️ Frontend
- Built with **Next.js 14 (App Router)** and **React**
- Responsive UI with a luxury-brand aesthetic
- Fullscreen video hero section with overlay text
- Vehicle detail pages with:
  - High-quality galleries  
  - Descriptions & pricing  
  - Embedded video  
  - PDF spec sheet export  
- Interactive map of dealerships built using **Leaflet**
- Client account management
- Admin dashboard featuring:
  - Stock distribution  
  - Sales insights  
  - User management  
  - **Recharts** visualizations  

---

### 🗄️ Backend
- API routes built with **Next.js server functions**
- **Prisma ORM** with relational PostgreSQL schema
- Database hosted on **Neon**
- Authentication system:
  - **Google OAuth**
  - Credentials login
- Email delivery via **Resend**
- Dynamic PDF generation using **pdf-lib**
- Automated vehicle delisting when status is:
  - *Reserved*
  - *Sold*
- Role-based access security (Admin, Employee, Customer)

> Twilio was evaluated during development but removed due to trial limitations requiring verified numbers.

---

## 🧱 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Next.js 14, React, TypeScript, TailwindCSS |
| **Backend** | API Routes, Prisma ORM |
| **Database** | PostgreSQL (Neon) |
| **Auth** | NextAuth (Google OAuth + Credentials) |
| **Email** | Resend |
| **Maps** | Leaflet |
| **Charts** | Recharts |
| **Deployment** | Vercel |
| **Other** | GitHub LFS used early in development (later removed) |

---

## 📄 PDF Export Module

Each vehicle offers a downloadable PDF containing:
- Vehicle specifications  
- Pricing  
- Dealership contact info  
- High-quality images  
- Descriptive text  

Generated dynamically using **pdf-lib** with custom text-wrapping and layout logic.

---

## 🗺️ Architecture Overview

- Full-stack monorepo using Next.js App Router  
- Server components for sensitive operations  
- Client components for:
  - Dashboard  
  - Map  
  - Forms  
  - Animations  
- Relational database connecting:
  - Users  
  - Vehicles  
  - Dealerships  
  - Media  
- SSR flows secured with NextAuth session validation  
- Prisma migrations synced with Neon

---

## ⚙️ Setup & Installation

Follow these steps to run **Timeless Motors** locally or on your own environment.

---


### 📁 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/timeless.git
cd timeless
```

---

### 📦 2. Install Dependencies
```bash
npm install
```
---

### 🗄️ 3. Configure Environment Variables

Create a .env file:

```bash
touch .env
Add the following:
```

```env
DATABASE_URL="Your Neon/PostgreSQL connection string"
GOOGLE_CLIENT_ID="Your Google OAuth Client ID"
GOOGLE_CLIENT_SECRET="Your Google OAuth Secret"
NEXTAUTH_SECRET="A long random secret for sessions"
RESEND_API_KEY="Your Resend API key"
These values must not be committed to Git.
```
---

### 🗃️ 4. Set Up the Database

Deploy migrations:

```bash
npx prisma migrate deploy
For development mode:
```

```bash
npx prisma generate
npx prisma migrate dev
Open Prisma Studio:
```

Then, open Prisma Studio to check everything is okay

```bash
npx prisma studio
```

---

### 🚗 5. Seed Optional Demo Data

```bash
npm run seed
Seeds dealerships, vehicles, and images.
```

---

### 🔐 6. Configure Google OAuth

Open the Google Cloud Console

Create an OAuth 2.0 Client

Add redirect URLs:

```bash
http://localhost:3000/api/auth/callback/google
https://your-vercel-app.vercel.app/api/auth/callback/google
```

Paste the credentials into .env


---

### ✉️ 7. Configure Resend

1. **Create an account at https://resend.com/**

2. **Get your API key**

3. **Add it to .env**

4. **Verify a domain or sender email**

---

### ▶️ 8. Run the Development Server

```bash
npm run dev
Visit:
```

```bash
http://localhost:3000
```

---

### 🚀 9. Deploying on Vercel


1. **Push your repo to GitHub**

2. **Import it in Vercel**

3. **Add your environment variables**

4. **Deploy**

5. **Vercel will automatically: Build the app, optimize, set up SSR and connect to your Neon DB**

---

## 🧩 Troubleshooting
### Images broken?
Media folder was likely ignored to avoid LFS bandwidth costs. Check your paths.

### OAuth redirect mismatch?
Ensure URLs match exactly in Google Console.

### PDF fails to render?
Ensure pdf-lib routes remain dynamic and font assets exist.

## 🔮 Future Enhancements
- Improved mobile UI

- Enhanced animations

- Expanded PDF templates

- Multilingual support

- Optional SMS notifications

# 📚 License
**This repository is an educational, non-commercial project created for the TFG presentation.**
