import React from 'react';
import ReactDOM from 'react-dom/client';  // Corrected import
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(  // Corrected spacing
  <BrowserRouter>
   {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
