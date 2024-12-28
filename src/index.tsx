import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Create root element

root.render(  // Use render on the root instance
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
