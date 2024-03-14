// Given your `main.tsx` file, you can integrate the `loadSourceMapSupport` function as follows:

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './services/Context.jsx';
import 'bootstrap/dist/css/bootstrap.css';



    ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <ContextProvider>
                <App />
            </ContextProvider>
        </BrowserRouter>
    );

