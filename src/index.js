import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// Styles
import './index.css'

// Components
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(console.log)
reportWebVitals();
