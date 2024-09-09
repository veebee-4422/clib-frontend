import "./App.css";
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Browse } from "./pages/Browse";
import { NotFound } from "./pages/NotFound";
import { Random } from "./pages/Random";
import { Auth } from "./pages/Auth";

export default function App() {
	return (
		<Routes>
			<Route path="/*" element={<Home />} />
			<Route path="/search/*" element={< Browse/>} />
			<Route path="/browse/*" element={< Browse/>} />
			<Route path="/library/*" element={< Browse/>} />
			<Route path="/profile/*" element={< Random/>} />
			<Route path="/auth/*" element={< Auth/>} />
			<Route path="/*" element={< NotFound/>} />
		</Routes>
	);
}