# 🌿 CSR Data Management API

A Front-end application built with React to help companies track and manage their compliance with Corporate Social Responsibility (CSR) requirements.

The application is available on https://csr-frontend-kappa.vercel.app/

---

## 📘 Context

One of the goals of this system is to help companies become and stay compliant with official CSR requirements.  
A company is considered compliant with a requirement if it has uploaded the relevant, validated, and unexpired documents.

---

## ✅ Features

- **Documents View**: Display documents grouped by categories with the option to view, update, or delete them.
- **Status Management**: Change the status of documents (e.g., "validated", "rejected", "submitted").
- **Upload Documents**: Add new documents to the system via an upload form.
- **Requirements View**: Display requirements with their current status.

---

## 🧠 Technologies

- **React**: Front-end framework for building the user interface.
- **Axios**: HTTP client for making API requests.
- **CSS**: Basic styling using plain CSS.

---

## 🗂️ Project Structure

```
src/
├── api/ # API calls to interact with the backend
├── components/ # Reusable components
├── pages/ # Pages like DocumentsPage
├── App.js # Main App component
├── index.js # Entry point to render the app
```

---

## ⚙️ Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/amel-harrath/csr-frontend.git
   cd csr-frontend
   ```
2. Set up the .env.local file
   ```
   REACT_APP_API_URL=http://localhost:3010
   ```

## 🛠️ Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application
   ```bash
   npm start
   ```
3. Visit the app at http://localhost:3001

**_Optional_** 4. Build for production

```bash
npm run build
```

---
