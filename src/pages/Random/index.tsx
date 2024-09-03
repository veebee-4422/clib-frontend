import React from "react";
import { Route, Routes } from "react-router-dom"
import { RandomComp } from "./components/randomComp";

export function Random() {
	return (
		<Routes>
			<Route path="/" element={<div>RANDOM HERE</div>} />
			<Route path="/random" element={<RandomComp />} />
		</Routes>
	);
}