from fastapi import FastAPI
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def search_countries(query: str):
    db = sqlite3.connect("db.sqlite")
    cursor = db.cursor()
    q = f"%{query.lower()}%"
    cursor.execute("SELECT name FROM countries WHERE LOWER(name) LIKE ?", (q,))
    rows = cursor.fetchall()
    db.close()
    return [row[0] for row in rows]

@app.get("/search")
def search(query: str):
    return {"results": search_countries(query)}
