import "./App.css";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body from "./components/layout/Body";

function App() {
	return (
		<>
			<Header />
			<Body>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</Body>
			<Footer />
		</>
	);
}

export default App;
