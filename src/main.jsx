import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap your app with BrowserRouter and set basename */}
    <BrowserRouter basename="/Website"> {/* Replace 'Website' with your repo name */}
      <App />
    </BrowserRouter>
  </StrictMode>
);