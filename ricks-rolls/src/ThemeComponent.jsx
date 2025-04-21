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

export default function ThemeComponent() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <>
            <button onClick={switchTheme(setTheme, theme)}
                    style={{
                        background: theme === 'light' ? '#87CEFAFF' : '#000',
                        color: theme === 'light' ? '#000' : '#00ffff',
                        borderWidth : "5px",
                        borderColor: theme === 'light' ? '#000' : '#00ffff',
                        borderStyle: "solid"
                    }}>
                {theme}
            </button>
        </>
    )
}