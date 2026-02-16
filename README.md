
# 💰 Wealth Manager App (JavaScript)

A dynamic web application that manages and manipulates users' wealth using modern JavaScript array methods.

This project demonstrates real-world usage of:
- map()
- filter()
- sort()
- reduce()
- Async/Await
- DOM Manipulation

---

## 🌐 Live Demo

Check out the live version of the app here:

👉 https://kholouddiaa.github.io/wealth-manager-js/

---
## 📸 Screenshots

<img src="docs/Calculate%20wealth.png" width="600">

<img src="docs/ShowOnly%20male.png" width="600">

<img src="docs/Screenshot%202026-02-16%20220043.png" width="600">
---

## 🚀 Features

- ➕ Add Random User (Fetched from API)
- 💸 Double User's Money
- 🏆 Show Only Millionaires
- 📊 Sort by Richest
- 🧮 Calculate Total Wealth
- 👨 Show Only Males
- 👩 Show Only Females
- 🔄 Dynamic UI Update

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Bootstrap 5  
- Fetch API  

---

## 🧠 JavaScript Concepts Applied

### 📌 Fetch API + Async/Await
```javascript
const response = await fetch("https://randomuser.me/api");
````

### 📌 map() – Double Money

```javascript
persons = persons.map(p => ({
  name: p.name,
  wealth: p.wealth * 2
}));
```

### 📌 filter() – Show Millionaires

```javascript
persons = persons.filter(p => p.wealth >= 1_000_000);
```

### 📌 filter() – Show Male / Female

```javascript
persons = persons.filter(p => p.gender === "male");
```

```javascript
persons = persons.filter(p => p.gender === "female");
```

### 📌 sort() – Sort by Wealth

```javascript
persons.sort((a, b) => b.wealth - a.wealth);
```

### 📌 Total Wealth Calculation

```javascript
let total = 0;
persons.forEach(p => total += p.wealth);
```

### 📌 Formatting Money using Intl.NumberFormat

```javascript
const formatMoney = (num) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
};
```

---

## 📂 Project Structure

```
wealth-manager-js/
│
├── index.html
├── style.css
└── script.js
```

---

## 🎯 How It Works

1. Click **Add User** → Random user is fetched from API.
2. Wealth is randomly generated.
3. Use buttons to manipulate data:

   * Double wealth
   * Filter millionaires
   * Show only males / females
   * Sort by richest
   * Calculate total wealth
4. DOM updates dynamically after each action.

---

## 👩‍💻 Author

**Kholoud Diaa**
GitHub: [https://github.com/kholouddiaa](https://github.com/kholouddiaa)

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub!
