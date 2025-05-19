# KindHeart Charity

A community‑driven web application connecting **Admins**, **Volunteers**, and **Donors** to support beneficiaries. Donors contribute via Stripe, Volunteers submit and manage beneficiary requests, and Admins oversee the entire system.


<img src="https://github.com/Hanan-Nawaz/KindHeartCharity/blob/main/frontend/src/imgs/logo.png" height="100px"/>

**Live Demo:** [https://khcharity.netlify.app](https://khcharity.netlify.app)

---

## 📄 Project Report

Download the full project report (PDF): [KindHeartCharity\_Report.pdf](https://github.com/Hanan-Nawaz/KindHeartCharity/blob/main/report/kh_charity_report.pdf)

---

## 🚀 Features

* **Role-Based Access Control**

  * **Donor**: Browse active requests, donate via Stripe, view history, edit profile
  * **Volunteer**: All Donor capabilities + manage own beneficiary requests
  * **Admin**: Full control: activate/deactivate accounts, approve requests, manage settings

* **Authentication & Authorization**: JWT‑based login 

* **Stripe Integration**: Secure payments

* **Responsive UI**: React, Bootstrap & custom CSS

* **RESTful API**: Node.js, Express, Mongoose & MongoDB Atlas

---

## 🗂 Project Structure

```bash
kindheart-charity/
├── frontend/                   # React SPA
│   ├── public/
│   ├── src/
│   └── .env  # REACT_APP_API_URL
├── backend/                    # Node.js API
│   ├── middleware/
│   ├── models/
│   └── .env  # MONGO_URI, JWT_SECRET, STRIPE_KEY
└── README.md                   # This file
```

---

## 💻 Getting Started

### Prerequisites

* Node.js v16+ & npm
* MongoDB Atlas (or local)
* Stripe account

### 1. Clone Repo

```bash
git clone https://github.com/Hanan-Nawaz/KindHeartCharity.git
cd KindHeartCharity
```

### 2. Backend Setup

```bash
cd backend
npm install
```

.env (backend):

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

.env (frontend):

```
REACT_APP_API_URL=http://localhost:3000
```

```bash
npm start
```

---

## 🌐 Deployment

* **API**: Render (set env vars)
* **SPA**: Netlify (build `npm run build`, publish `build/`, set REACT\_APP\_API\_URL)
* **Database**: MongoDB Atlas

---

## 🛠 Tech Stack

* **Frontend**: React, Bootstrap, Axios
* **Backend**: Node.js, Express, Mongoose, JWT, Stripe SDK
* **DB**: MongoDB Atlas

---

## 🤝 Contributing to This Project

We welcome contributions from developers, volunteers, and donors to improve and extend KindHeart Charity. To get started:

1. **Fork the Repo & Clone**

   ```bash
   git clone https://github.com/your-username/KindHeartCharity.git
   cd KindHeartCharity
   ```

2. **Create a Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Install Dependencies & Run Locally**

   ```bash
   # Backend
   cd backend && npm install && npm run dev
   # Frontend
   cd ../frontend && npm install && npm start
   ```

4. **Make Changes & Commit**

   * Follow existing code style
   * Ensure all tests pass (if applicable)

5. **Implement Contribution Verification**

   * If adding or modifying donation workflows, include or update functionality for proof-of-delivery.
   * Volunteers should upload images confirming delivery to beneficiaries, ensuring transparency and preventing misuse.
   * Include any necessary backend routes or UI components to handle image uploads and display them in the Admin dashboard.

6. **Push & Open Pull Request**

   ```bash
   git push origin feature/YourFeatureName
   ```

   * Describe your changes clearly in the PR description
   * Reference any related issues

7. **Project Governance**

   * Contributors should adhere to the [Code of Conduct](./CODE_OF_CONDUCT.md)
   * Major changes require issue discussion before PR
  
---

## 📜 License

MIT License © Abdul Hanan Nawaz

---

## 🙋‍♂️ Author

**Abdul Hanan Nawaz**
Master’s in High Integrity Systems, FRA UAS
Bachelor’s Project, Fall 2023, National University of Modern Languages, Islamabad
