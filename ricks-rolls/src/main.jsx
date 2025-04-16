import App from './App.jsx'
import {createRoot} from "react-dom/client.js";
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)