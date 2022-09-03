import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// # Example 1: Simple "Hello, World" code
// ReactDOM.render(
//   <h1>Hello React and Drupal - todo - together!</h1>,
//   document.getElementById('react-app')
// );

const root = ReactDOM.createRoot(document.getElementById('react-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
