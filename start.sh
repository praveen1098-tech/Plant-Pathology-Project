#!/bin/bash
# PlantPath AI — Startup Script
echo "=============================================="
echo " Starting PlantPath AI (FastAPI + Vite React)"
echo "=============================================="

# 1. Kill any existing instances on ports 8000 & 5173
lsof -ti:8000 -ti:5173 | xargs kill -9 2>/dev/null || true

# 2. Start FastAPI Backend in background
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
    ./venv/bin/pip install -r requirements.txt
fi
./venv/bin/uvicorn main:app --host 127.0.0.1 --port 8000 &
BACKEND_PID=$!
cd ..

echo "Backend starting at http://127.0.0.1:8000 (PID: $BACKEND_PID)"

# 3. Start Vite Frontend
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "Frontend starting at http://127.0.0.1:5173 (PID: $FRONTEND_PID)"
echo "Press Ctrl+C to stop both servers."

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" SIGINT SIGTERM
wait
