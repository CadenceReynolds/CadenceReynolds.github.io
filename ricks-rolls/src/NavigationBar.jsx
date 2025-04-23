import React from 'react';
import './Navbar.css';
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.jsx";

function switchTheme(setTheme, theme) {
    return () => {
        setTheme(
            theme === 'light'
                ? 'dark'
                : 'light');
        document.body.style.backgroundColor = theme === 'light' ? '#000' : '#87CEFAFF'
        document.body.style.color = theme === 'light' ? '#00ffff' : '#000000'

    }
}

export default function Navbar() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (

        <div className="navbar">
            <div className="navbar-left">
                <a
                    style={{
                    color: theme === 'light' ? '#000' : '#00ffff',
                }}
                    href="/" className="logo">
                    ShopNow
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links" style={{
                }}>
                    <li>
                        <a
                            style={{
                                color: theme === 'light' ? '#000' : '#00ffff',
                            }}
                            href="/products">Products</a>
                    </li>
                    <li>
                        <a
                            style={{
                                color: theme === 'light' ? '#000' : '#00ffff',
                            }}
                            href="/about">About Us</a>
                    </li>
                    <li>
                        <a
                            style={{
                                color: theme === 'light' ? '#000' : '#00ffff',
                            }}
                            href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <button onClick={switchTheme(setTheme, theme)}
                    style={{
                        background: theme === 'light' ? '#87CEFAFF' : '#000',
                        color: theme === 'light' ? '#000' : '#00ffff',                        borderWidth : "5px",
                        borderColor: theme === 'light' ? '#000' : '#00ffff',
                        borderStyle: "solid"
                    }}>
                {theme}
            </button>
            <div className="navbar-right">
                <a
                    style={{
                        color: theme === 'light' ? '#000' : '#00ffff',
                    }}
                    href="/cart" className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">0</span>
                </a>
                <a
                    style={{
                        color: theme === 'light' ? '#000' : '#00ffff',
                    }}
                    href="/account" className="user-icon">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </div>
    );
};