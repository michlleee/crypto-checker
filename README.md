# CryptoChecker

CryptoChecker is a Node.js web application that displays the latest market data of cryptocurrencies using the CoinMarketCap (CMC) API.  
The app allows users to select from the top 50 cryptocurrencies and view their price, market cap, and other key metrics.

<img width="3184" height="1643" alt="image" src="https://github.com/user-attachments/assets/fd4d56f4-d476-487b-8541-8ed96ec322f1" />
<img width="3186" height="1641" alt="image" src="https://github.com/user-attachments/assets/28e858ad-fa57-4460-8f1e-12e77015c243" />

---

## Features
- Fetches real-time cryptocurrency data using the **CoinMarketCap API**.
- Dropdown selector for the **top 50 active cryptocurrencies** (paginated list).
- Displays market data such as:
  - Current price
  - 24-hour and 7-day price changes
  - Market cap
  - Trading volume
  - Market dominance
- Responsive design with a clean UI.
- Environment variables for **API key security** (via `.env`).

---

## Tech Stack
- **Node.js** with **Express.js**
- **EJS** for templating
- **Axios** for API requests
- **CSS (custom styles)** for UI design
- **dotenv** for environment variables

---

## Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/michlleee/CryptoChecker.git
cd CryptoChecker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
API_KEY=your_coinmarketcap_api_key
```

### 4. Run the application
```bash
npm start
```

---

### Project Structure
```
CryptoCounter/
│-- public/
│   └── styles/
│       └── index.css
│-- views/
│   └── index.ejs
│-- index.js
│-- .env
│-- package.json
│-- README.md
```

---

### API Source
All data is fetched from the CoinMarketCap API, limited to 50 cryptocurrencies due to free plan usage for optimal loading performance.

---
