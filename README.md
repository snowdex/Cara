# 📄 ResumeForge

> Build beautiful, ATS-friendly resumes with a real-time editor, live preview, and one-click PDF export.

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Prisma-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styled-06B6D4)

---

## ✨ Overview

ResumeForge is a modern resume builder designed to provide an intuitive editing experience similar to professional tools like Resume.io and Canva.

Users can edit resume sections through a structured form interface while simultaneously viewing a real-time resume preview. The application focuses on clean architecture, ATS-friendly templates, PDF export capabilities, and extensibility for future AI-powered features.

---

## 🚀 Features

### Real-Time Resume Editing

* Live preview updates while typing
* No page refreshes
* Instant feedback for every change

### ATS-Friendly Templates

* Professional layouts
* Clean typography
* Recruiter-friendly formatting

### Resume Sections

* Personal Information
* Professional Summary
* Education
* Experience
* Projects
* Skills
* Social & Portfolio Links

### Interactive Links

* GitHub
* LinkedIn
* Portfolio
* LeetCode
* Codeforces

Links are rendered as clickable hyperlinks directly inside the preview.

### PDF Export

* One-click export
* Resume-ready formatting
* Preserved layout and styling

### Multiple Resume Support *(Planned)*

Create multiple versions of your resume:

* Frontend Resume
* Full Stack Resume
* AI/ML Resume
* Internship Resume

---

## 🏗️ Architecture

```text
┌─────────────────────┐
│     Form Panel      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Resume Context    │
│  Global Resume Data │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Resume Preview    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    PDF Exporter     │
└─────────────────────┘
```

### State Flow

```text
User Input
     │
     ▼
Form Components
     │
     ▼
Resume Context
     │
     ▼
Live Preview
     │
     ▼
PDF Export
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Context API
* React Hooks
* Lucide Icons

### Backend *(Upcoming)*

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JWT Authentication

### Export

* html2canvas
* jsPDF

---

## 📂 Project Structure

```text
src
│
├── components
│   ├── forms
│   └── preview
│
├── context
│
├── pages
│
├── data
│
├── hooks
│
└── App.jsx
```

---

## 🧠 Key Concepts Learned

This project explores several important frontend engineering concepts:

* React Context API
* State Management
* Controlled Components
* Dynamic Forms
* Component Composition
* Real-Time Rendering
* PDF Generation
* Resume Template Architecture

---

## 🎯 Why This Project?

Most resume builders focus on generating a document.

ResumeForge focuses on creating a complete editing experience.

The goal is to understand how modern SaaS applications manage:

* Shared state
* Live updates
* Structured data
* Dynamic UI rendering
* Export pipelines

while maintaining a clean and scalable architecture.

---

## 🔮 Roadmap

### Version 1

* [x] Live Resume Preview
* [x] ATS Resume Template
* [x] Form Builder
* [x] Hyperlink Support
* [ ] PDF Export

### Version 2

* [ ] Multiple Templates
* [ ] Authentication
* [ ] Resume Persistence
* [ ] PostgreSQL Integration
* [ ] Cloud Storage

### Version 3

* [ ] AI Resume Enhancement
* [ ] ATS Score Analysis
* [ ] Resume Import
* [ ] Cover Letter Generator
* [ ] LinkedIn Profile Import

---

## 📸 Preview

```text
┌──────────────────────────────────────┐
│ ResumeForge                          │
├──────────────────────────────────────┤
│ Form Editor     │ Resume Preview     │
│                 │                    │
│ Personal Info   │  ATS Resume        │
│ Education       │                    │
│ Experience      │  Live Updating     │
│ Projects        │                    │
│ Skills          │                    │
└──────────────────────────────────────┘
```

---

## 🤝 Contributions

Contributions, ideas, and feature suggestions are always welcome.

If you have an idea that would improve ResumeForge, feel free to open an issue or submit a pull request.

---

## 📜 License

MIT License

Built with ☕, React, and too many resume revisions.
