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

## 🚀 Features

- ➕ Add Random User (Fetched from API)
- 💸 Double User's Money
- 🏆 Show Only Millionaires
- 📊 Sort by Richest
- 🧮 Calculate Total Wealth
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
const response = await fetch("https://jsonplaceholder.typicode.com/users");
```

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

### 📌 sort() – Sort by Wealth
```javascript
persons.sort((a, b) => b.wealth - a.wealth);
```

### 📌 reduce() logic (Manual accumulation)
```javascript
let total = 0;
persons.forEach(p => total += p.wealth);
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
   - Double wealth
   - Filter millionaires
   - Sort by richest
   - Calculate total wealth
4. DOM updates dynamically.

---

## 📸 UI Overview

Simple dashboard layout:
- Left sidebar → Actions
- Right section → Dynamic wealth list

---

## 📈 Learning Purpose

This project focuses on:
- Data transformation
- Functional programming concepts
- DOM updates after state changes
- Clean UI structure

---

## 👩‍💻 Author

Kholoud Diaa  
GitHub: https://github.com/kholouddiaa  

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub!
