import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.jsx";


function switchTheme(setTheme, theme) {
    return () => {
        setTheme(
            theme === 'light'
                ? 'dark'
                : 'light');
        document.body.style.backgroundColor = theme === 'light' ? '#151618' : '#fff'
        document.body.style.color = theme === 'light' ? '#fff' : '#000000'

    }
}

export default function ThemeComponent() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <>
            <button onClick={switchTheme(setTheme, theme)}
                    style={{
                        background: theme === 'light' ? '#fff' : '#333',
                        color: theme === 'light' ? '#000' : '#fff',
                    }}>
                {theme}
            </button>
        </>
    )
}