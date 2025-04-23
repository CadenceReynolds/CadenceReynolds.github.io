import ThemeProvider from "./ThemeProvider.jsx";
import ThemeComponent from "./NavigationBar.jsx";
import Navbar from "./NavigationBar.jsx";

export default function App() {

    return (
        <>
            <ThemeProvider>
                <Navbar></Navbar>
            </ThemeProvider>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consequuntur dolorem doloribus eaque exercitationem iure nesciunt porro possimus. Accusamus accusantium consequuntur ea exercitationem facilis iure laboriosam obcaecati odit pariatur.</p>

        </>
    )
}