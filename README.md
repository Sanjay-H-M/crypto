# 💸 CryptoWorld

A sleek, modern cryptocurrency tracking app built with React and real-time coin data. Search, explore, and track top crypto assets with dynamic UI and market stats.

---

## 🚀 Features

- 🔍 **Live Search for Cryptocurrencies**  
  Search through a list of top cryptocurrencies in real-time.

- 📊 **Real-time Pricing**  
  View up-to-the-minute data, including price, market cap, and 24-hour changes.

- 🧠 **Global Context for Coin Data**  
  Use the Context API to manage coin data across the app.

- 🌐 **Routing with React Router**  
  Navigate seamlessly through Home, Coin Details, Login, and Signup pages.

- 💾 **LocalStorage-Based Authentication**  
  Save user data and session locally without a backend.

- 🎨 **Dark Mode UI**  
  Built with TailwindCSS for a smooth and modern dark-themed interface.

- 📈 **Market Insights**  
  Access top cryptocurrencies, check their market cap, 24-hour changes, and more.

---

## 📦 Tech Stack

This project uses a combination of modern web development technologies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast next-gen build tool for React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router**: Declarative routing for React applications.
- **CoinGecko API**: A free API that provides real-time cryptocurrency data.
- **Context API**: For global state management.

---

## 🛠️ Getting Started

To get started with this project on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/cryptoworld.git
2. **Navigate to the project directory**:

 ```bash
cd cryptoworld
 ```
3. **Install dependencies**:

 ```bash
npm install
 ```
4. **Create a .env file for your API URL (or use CoinGecko's default URL)**:

 ```bash
VITE_API_URL=https://api.coingecko.com/api/v3
 ```
5. **Run the development server**:

```bash
npm run dev
```
Your app should now be live at http://localhost:3000!

📁 Folder Structure

Here's a breakdown of the folder structure for this project:

```
src/
│
├── components/     # UI components
├── context/        # CoinContext for global state
├── pages/          # Page components (Home, Coin, Login, Signup)
├── assets/         # Images and static assets
├── App.jsx         # Routes + layout
└── main.jsx        # App entry point
```

🌍 Deployment
You can deploy this app with minimal setup using platforms like Vercel or Netlify.

Vercel Deployment
Connect your GitHub repository to Vercel.

Vercel will automatically detect your project settings and build the app.

After deployment, Vercel will provide a live URL.

Note: Ensure your .env variables are set in your Vercel project settings (like the CoinGecko API URL).

👤 Author
Made with ❤️ by Sanjay
Feel free to fork and contribute to this project. Reach out for any questions!
