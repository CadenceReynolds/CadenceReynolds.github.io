import React from 'react';
import Navbar from "./NavigationBar.jsx";
import { Outlet } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <Outlet />
            </div>
        </>
    );
}
