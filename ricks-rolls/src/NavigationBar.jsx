import React, {useContext} from 'react';
import './Navbar.css';
import {ThemeContext} from './ThemeContext.jsx';
import {Link} from 'react-router-dom';

function switchTheme(setTheme, theme) {
    return () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.body.style.backgroundColor = theme === 'light' ? '#000' : '#87CEFAFF';
        document.body.style.color = theme === 'light' ? '#00ffff' : '#000000';
    };
}

export default function Navbar() {
    const {theme, setTheme} = useContext(ThemeContext);

    const linkStyle = {
        color: theme === 'light' ? '#000' : '#00ffff',
    };

    return (
        <>
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/ricksHome" style={linkStyle} className="logo">
                    Ricks Rolls
                </Link>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/rolls" style={linkStyle}>
                            Rolls
                        </Link>
                    </li>
                    <li>
                        <Link to="/pastries" style={linkStyle}>
                            Pastries
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutUs" style={linkStyle}>
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <Link to="/cart" style={linkStyle} className="cart-icon">
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/shopping-circle-blue-512.png"
                        alt="Shopping Cart"
                        width="30"
                        height="30"
                    />
                </Link>

            </div>

        </div>
            <div className={"theme-button-wrapper"}>
            <button
            onClick={switchTheme(setTheme, theme)}
            style={{
                background: theme === 'light' ? '#87CEFAFF' : '#000',
                color: theme === 'light' ? '#000' : '#00ffff',
                borderWidth: '5px',
                borderColor: theme === 'light' ? '#000' : '#00ffff',
                borderStyle: 'solid',
            }}
        >
            {theme}
        </button>
            </div>
        </>
    );
}
