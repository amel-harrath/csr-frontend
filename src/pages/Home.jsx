// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Document Management System</h1>
      <p>Click the links below to navigate:</p>
      <ul>
        <li>
          <a href="/requirements">Go to Requirements</a>
        </li>
        <li>
          <a href="/documents">Go to Documents</a>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
