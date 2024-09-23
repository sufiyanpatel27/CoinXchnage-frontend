# 💰 CoinXchange (crypto exchange & trading platform)

#### Demo: https://coinxchange.vercel.app/

**A fully functional cryptocurrency trading platform built with MERN stack, where users can trade coins with real-time data updates and price fluctuations. All investments, funds, and coins are fake, but the logic and functionality mirror real-world cryptocurrency trading.** 🚀

---

## 📖 Project Description

This Crypto Trading App is a MERN-based full-stack platform that simulates real-world cryptocurrency trading. Users can sign up, receive a default balance, and start trading various cryptocurrencies with live price updates. Coin prices fluctuate based on user activity: buying pushes prices up, and selling brings them down. The app generates realistic coin data every minute, ensuring an engaging trading experience for users.

Featuring features like live coin price updates, candlestick charts, and secure authentication with JWT tokens, the platform simulates a fully functional cryptocurrency trading environment — perfect for honing your trading strategies without the risk.

---

## Screenshots

- Home Page
![App Screenshot](https://github.com/sufiyanpatel27/CoinXchnage-frontend/blob/prod/src/assets/github/HomePage.png?raw=true)
- Funds Page
![App Screenshot](https://github.com/sufiyanpatel27/CoinXchnage-frontend/blob/prod/src/assets/github/FundsPage.png?raw=true)
- Login/SignUp Page
![App Screenshot](https://github.com/sufiyanpatel27/CoinXchnage-frontend/blob/prod/src/assets/github/LoginPage.png?raw=true)

---

## 🔑 Key Features

- **Login System**: Users can sign up and receive ₹1000 as a default balance to start trading.
- **Real-time Data Generation**: Coin data (high, low, open, close) updates every second to simulate a live trading environment.
![Project Screenshot](https://github.com/sufiyanpatel27/CoinXchnage-frontend/blob/prod/src/assets/github/live_candlesticks.gif?raw=true)
- **Dynamic Price Fluctuation**: Prices rise when users buy coins and fall when they sell, simulating real-world market behavior.
- **Buy/Sell Coins**: Users can buy or sell coins based on their balance with real-time price updates.
- **Candlestick Charts**: Integrated TradingView Lightweight Charts to show live price movement and candlestick patterns.
- **Lazy Loading**: Efficient data loading to enhance performance while navigating through historical data.
- **Responsive UI**: Built with Tailwind CSS, the app looks great across all devices.

---

## 🛠️ Tech Stack

**Frontend**:
- ⚛️ React JS (TypeScript)
- 🎨 Tailwind CSS for responsive UI
- 📊 TradingView Lightweight Charts for live candlestick patterns
- 🔑 JWT Token for user authentication

**Backend**:
- 🟢 Node.js (TypeScript)
- 🚏 Express for backend API
- 🍃 MongoDB for database management (with Mongoose)

---

## 🚧 To-Dos / Future Plans

- **Add More Coins**: Add a personal dashboard where users can create their own Coins.
- **Real-Time Notifications**: Send alerts to users when prices hit significant levels.
- **Enhanced Security**: Add two-factor authentication (2FA) for an extra layer of security.

---

## 🔍 Challenges Faced

- **Real-Time Coin Price Simulation**: Implementing real-time data updates using setInterval to generate realistic coin data was tricky, especially ensuring that the prices reflected market-like behavior based on user transactions.
- **Dynamic Price Fluctuations**: Creating logic to handle price changes based on user actions (buying/selling) required careful consideration to balance game mechanics with realism.
- **Efficient Data Handling**: Lazy loading and efficient data fetching, especially for historical coin data, to ensure the app remains performant with a growing dataset.
- **Authentication and Security**: Implementing secure JWT-based authentication with balance management posed challenges in preventing unauthorized access and tampering.
- **Integrating TradingView Charts**: Customizing and embedding real-time charts with TradingView while ensuring they update smoothly with generated coin data.

---

## 📚 Resources Used

- [React Docs](https://reactjs.org/docs/getting-started.html) – For building components and managing state with hooks.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) – For styling the UI with a utility-first CSS framework.
- [Node.js Docs](https://nodejs.org/en/docs/) – Server-side development for handling APIs and real-time data generation.
- [MongoDB Docs](https://docs.mongodb.com/) – For managing user and coin data in a NoSQL database.
- [TradingView Lightweight Charts](https://tradingview.github.io/lightweight-charts/) – For integrating real-time candlestick charts.
- [JWT Auth in Node.js](https://jwt.io/introduction) – Guide to securely authenticate users with JSON Web Tokens.

---

![Logo](https://github.com/sufiyanpatel27/CoinXchnage-frontend/blob/prod/src/assets/github/Logo.png?raw=true)
