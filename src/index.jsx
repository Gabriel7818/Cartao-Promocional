import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// React 18.0.0
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)

// React 17.0.2
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

