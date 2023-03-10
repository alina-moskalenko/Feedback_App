import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab='home' />);
