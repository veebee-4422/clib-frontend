import { useEffect } from "react";
import { NavBar } from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchHomepageData } from "../../redux/slices/home";
import { SideBar } from "./components/SideBar";

export function HomeComponent() {
    const darkMode = useAppSelector(state => state.global.darkMode);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchHomepageData())
	}, []);


	
	return (
		<div className={`min-h-screen grid gap-3 grid-cols-12 dark:bg-slate-950 ${darkMode ? "dark" : ""}`}>
			<NavBar />
			<div className="min-h-full md:col-span-6 sm:col-span-8 col-span-10 bg-yellow-500">

			</div>
			<SideBar darkMode={true} />
		</div>
	);
}