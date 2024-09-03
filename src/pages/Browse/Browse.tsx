import React from "react";
import { Route, Routes } from "react-router-dom"
import { Random } from "./components/randomComp";

export function Browse() {
	return (
		<Routes>
			<Route path="/" element={<div>BROWSE HERE</div>} />
			<Route path="/random" element={<Random />} />
		</Routes>
	);
}