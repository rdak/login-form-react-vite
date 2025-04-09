import Home from "./pages/Home";
import { Route, Routes } from "react-router";

function AppRouter() {
	return (
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	);
}

export default AppRouter;
