# Digital Wedding Invitation Backend (Express + MongoDB Atlas)

This Node.js backend replaces Firebase with MongoDB Atlas for storing guest wishes, likes, admin replies, and configuration settings.

## 🚀 Quick Start (Local)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Add your MongoDB Atlas connection string to `.env`.

4. Start the server:
   ```bash
   npm start
   ```

---

## 🌐 Deploy to Render (Step-by-Step)

1. **Push to GitHub**:
   Push your backend folder / repository to GitHub.

2. **Set Up MongoDB Atlas**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free Cluster.
   - Under **Database Access**, create a database user (username & password).
   - Under **Network Access**, add IP `0.0.0.0/0` (Allow access from anywhere for Render).
   - Click **Connect** -> **Drivers** and copy your connection string (`mongodb+srv://...`).

3. **Deploy on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/) and click **New +** -> **Web Service**.
   - Connect your GitHub repository.
   - **Root Directory**: `backend` (if in subfolder, otherwise leave blank)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment Variables**:
     - `MONGODB_URI`: *Your MongoDB Atlas connection string*
     - `ADMIN_PIN`: `2026SF` (or your custom admin PIN)

4. **Copy Render Live Backend URL**:
   Once deployed, Render gives you a URL like: `https://wedding-backend.onrender.com`.
   Set this URL as `API_BASE_URL` in your frontend `index.html`!
