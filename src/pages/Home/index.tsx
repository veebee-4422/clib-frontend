import React from "react";
import { Route, Routes } from "react-router-dom"
import { HomeComponent } from "./HomeComponent";

export function Home() {
	return (
		<Routes>
			<Route path="/" element={<HomeComponent />} />
		</Routes>
	);
}