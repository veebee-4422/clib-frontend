import React from "react";
import { Route, Routes } from "react-router-dom"
import { AuthComponent } from "./AuthComponent";

export function Auth() {
	return (
		<Routes>
			<Route path="/" element={<AuthComponent />} />
		</Routes>
	);
}