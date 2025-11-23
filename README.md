# Country Search App

A small full-stack web application built for an internship technical challenge.  
The app allows users to search through a list of countries using a case-insensitive filter.  
Includes a simple React + TypeScript frontend and a Python FastAPI backend.

---

## 🚀 Tech Stack

**Frontend**
- React (TypeScript)
- Vite
- Bootstrap 5

**Backend**
- Python
- FastAPI
- SQLite (for persistent country storage)

---

## ▶️ How to Run

### 1. Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

You can view API docs at:
http://localhost:8000/docs

### 2. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```

App will run at:
http://localhost:5173