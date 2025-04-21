import ThemeProvider from "./ThemeProvider.jsx";
import ThemeComponent from "./ThemeComponent.jsx";
import Navbar from "./NavigationBar.jsx";

export default function App() {

    return (
        <>
            <Navbar></Navbar>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi consequuntur dolorem doloribus eaque exercitationem iure nesciunt porro possimus. Accusamus accusantium consequuntur ea exercitationem facilis iure laboriosam obcaecati odit pariatur.</p>
            <ThemeProvider>
                <ThemeComponent/>
            </ThemeProvider>
        </>
    )
}