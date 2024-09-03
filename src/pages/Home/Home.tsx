import React from "react";
import { Route, Routes } from "react-router-dom"
import { Random } from "./components/randomComp";
import HomeComp from "./components/HomeComp";

export function Home() {
	return (
		<Routes>
			<Route path="/" element={<HomeComp />} />
			<Route path="/random" element={<Random />} />
		</Routes>
	);
}