import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Pastries from './Pastries.jsx';
import AboutUs from "./AboutUs.jsx";
import { ThemeProvider } from './ThemeContext';
import './index.css';
import Cart from "./Cart.jsx";
import Rolls from "./Rolls.jsx";
import RicksHome from "./RicksHome.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="ricksHome" element={<RicksHome />} />
                        <Route path="pastries" element={<Pastries />} />
                        <Route path="rolls" element={<Rolls />} />
                        <Route path="aboutUs" element={<AboutUs />} />
                        <Route path="cart" element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
