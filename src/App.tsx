import "./styles/App.scss";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body from "./components/layout/Body";

function App() {
    return (
        <BrowserRouter basename="/login-form-react-vite">
            <Header />
            <Body>
                <AppRouter />
            </Body>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
