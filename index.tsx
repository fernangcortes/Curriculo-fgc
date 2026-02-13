import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.onerror = function (message, source, lineno, colno, error) {
  const errorContainer = document.createElement('div');
  errorContainer.style.color = 'red';
  errorContainer.style.backgroundColor = '#xffcccc';
  errorContainer.style.padding = '20px';
  errorContainer.style.fontFamily = 'monospace';
  errorContainer.innerHTML = '<h3>Application Error</h3><pre>' + message + '\nAt: ' + source + ':' + lineno + ':' + colno + '</pre>';
  if (error && error.stack) {
    errorContainer.innerHTML += '<pre>' + error.stack + '</pre>';
  }
  document.body.prepend(errorContainer);
};

window.onunhandledrejection = function (event) {
  const errorContainer = document.createElement('div');
  errorContainer.style.color = 'red';
  errorContainer.style.backgroundColor = '#ffeeee';
  errorContainer.style.padding = '20px';
  errorContainer.style.fontFamily = 'monospace';
  errorContainer.innerHTML = '<h3>Unhandled Promise Rejection</h3><pre>' + event.reason + '</pre>';
  document.body.prepend(errorContainer);
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);