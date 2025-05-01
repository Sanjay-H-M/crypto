# 💸 CryptoWorld

A sleek, modern cryptocurrency tracking app built with React and real-time coin data. Search, explore, and track top crypto assets with dynamic UI and market stats.

## 🚀 Features

- 🔍 Live search for cryptocurrencies
- 📊 Real-time pricing with 24h change & market cap
- 🧠 Global context for coin data and currency handling
- 🌐 Routing with React Router (Home, Coin Details, Login, Signup)
- 💾 LocalStorage-based auth (no backend!)
- 🎨 Dark mode UI with TailwindCSS

## 📦 Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Context API
- CoinGecko API (or your own)

## 🛠️ Getting Started

Clone the repo:

```bash
git clone https://github.com/your-username/cryptoworld.git
cd cryptoworld
npm install
npm run dev
Make sure to create a .env file with your API base URL if needed:

ini
Copy
Edit
VITE_API_URL=https://api.coingecko.com/api/v3
📁 Folder Structure
graphql
Copy
Edit
src/
│
├── components/     # UI components
├── context/        # CoinContext for global state
├── pages/          # Page components (Home, Coin, Login, Signup)
├── assets/         # Images and static assets
├── App.jsx         # Routes + layout
└── main.jsx        # App entry point
🧪 Local Auth Flow
Signup and login handled using localStorage

No backend — just frontend logic for quick demos

🌍 Deployment
Deployed via Vercel or Netlify — optimized for fast static hosting.

👤 Author
Made with ❤️ by Sanjay
