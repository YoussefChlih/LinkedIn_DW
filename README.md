# 🚀 Youssef Chlih - AI & Big Data Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Node.js showcasing expertise in Machine Learning, Deep Learning, and Computer Vision.

![Portfolio Preview](./docs/preview.png)

## ✨ Features

### Frontend
- 🎨 Modern, responsive design with dark/light theme toggle
- 💫 Smooth animations using Framer Motion
- 📱 Mobile-first responsive design (320px to 1440px+)
- 🎯 Interactive skills section with filtering
- 📊 Animated statistics counters
- 📝 Contact form with validation
- 💬 Visitor comments system
- ⚡ Optimized performance (Lighthouse score >90)
- 🔍 SEO-friendly with meta tags

### Backend
- 🔐 JWT-based authentication
- 🛡️ Security features (Helmet, Rate Limiting, CORS)
- 📧 Contact form handling
- 💬 Comments moderation system
- 📊 Visitor analytics tracking
- 🎛️ Admin dashboard API

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Authentication:** JWT (jsonwebtoken)
- **Validation:** express-validator
- **Security:** Helmet, CORS, Rate Limiting

## 📁 Project Structure

```
├── portfolio-frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/             # Reusable UI components
│   │   │   └── sections/       # Page sections
│   │   ├── contexts/           # React contexts (Theme)
│   │   ├── data/               # Portfolio data
│   │   ├── hooks/              # Custom React hooks
│   │   ├── styles/             # Global styles
│   │   ├── types/              # TypeScript types
│   │   └── App.tsx             # Main App component
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
│
├── portfolio-backend/           # Express backend API
│   ├── src/
│   │   ├── config/             # Configuration
│   │   ├── middleware/         # Express middleware
│   │   ├── models/             # Data models
│   │   ├── routes/             # API routes
│   │   └── server.js           # Entry point
│   ├── .env.example
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/youssefchlih/portfolio.git
cd portfolio
```

2. **Setup Backend**
```bash
cd portfolio-backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

3. **Setup Frontend**
```bash
cd portfolio-frontend
npm install
cp .env.example .env
npm run dev
```

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

### Admin Panel Access
- **URL:** /admin (to be implemented in frontend)
- **Email:** admin@portfolio.com
- **Password:** admin123

⚠️ **Important:** Change admin credentials in production!

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Comments (Public)
- `GET /api/comments` - Get approved comments
- `POST /api/comments` - Submit new comment
- `POST /api/comments/:id/like` - Like a comment

### Comments (Admin)
- `GET /api/comments/all` - Get all comments
- `PUT /api/comments/:id/approve` - Approve comment
- `PUT /api/comments/:id/reject` - Reject comment
- `DELETE /api/comments/:id` - Delete comment

### Contact
- `POST /api/contact` - Submit contact form

### Admin
- `GET /api/admin/analytics` - Get analytics
- `GET /api/admin/visitors` - Get visitors list
- `GET /api/admin/messages` - Get contact messages
- `GET /api/admin/dashboard` - Dashboard summary

## 🎨 Customization

### Updating Portfolio Data
Edit `portfolio-frontend/src/data/portfolioData.ts` to update:
- Profile information
- Skills & expertise
- Work experience
- Projects
- Certifications
- Education

### Styling
- Colors: Edit `tailwind.config.js`
- Global styles: Edit `src/styles/globals.css`
- Theme: Modify `ThemeContext.tsx`

## 🚢 Deployment

### Frontend (Vercel/Netlify)
```bash
cd portfolio-frontend
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Render/Fly.io)
```bash
cd portfolio-backend
# Set environment variables in your hosting platform
# Deploy with Node.js runtime
```

### Environment Variables
See `.env.example` files in both directories for required variables.

## 📊 Portfolio Content

### About Youssef Chlih
Big Data & Artificial Intelligence student at EST Salé with expertise in:
- 🤖 Machine Learning & Deep Learning
- 👁️ Computer Vision (YOLOv8, OpenCV)
- 📝 Natural Language Processing
- 🎨 Generative AI (GANs, RAG, LLMs)

### Key Projects
1. **Kwizy** - AI Quiz Platform with RAG Architecture
2. **HireGenius** - AI-Based Recruitment System
3. **GAN Image Generation** - Realistic Face Generation

### Certifications
- Oracle Cloud Infrastructure (Generative AI Professional, Foundations)
- Coursera (MLOps, Data Analysis)
- 365 Data Science (ML Process, Python)

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio!

## 📧 Contact

- **Email:** youssefchlih.ai@gmail.com
- **LinkedIn:** [linkedin.com/in/youssef-chlih](https://linkedin.com/in/youssef-chlih)
- **Location:** Salé, Morocco

---

Made with ❤️ and lots of ☕ by Youssef Chlih
