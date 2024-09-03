import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Browse } from "./pages/Browse";
import { NotFound } from "./pages/NotFound";
import { Random } from "./pages/Random";

export default function App() {
	return (
		<Routes>
			<Route path="/*" element={<Home />} />
			<Route path="/browse/*" element={< Browse/>} />
			<Route path="/genres/*" element={< Browse/>} />
			<Route path="/random/*" element={< Random/>} />
			<Route path="/*" element={< NotFound/>} />
		</Routes>
	);
}