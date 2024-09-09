// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { NavBar } from "../../common/Navbar";
import { SideBar } from "../../common/SideBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { fetchHomepageData } from "../../redux/slices/home";

import libraryLight from "../../assets/SVGs/library-filled-white.svg";
import libraryDark from "../../assets/SVGs/library-filled-black.svg";
import profileLight from "../../assets/SVGs/settings-filled-white.svg";
import profileDark from "../../assets/SVGs/settings-filled-black.svg";
import genresLight from "../../assets/SVGs/genres-filled-white.svg";
import genresDark from "../../assets/SVGs/genres-filled-black.svg";
import loginLight from "../../assets/SVGs/login-filled-white.svg";
import loginDark from "../../assets/SVGs/login-filled-black.svg";
import logoutLight from "../../assets/SVGs/logout-filled-white.svg";
import logoutDark from "../../assets/SVGs/logout-filled-black.svg";
import searchLight from "../../assets/SVGs/search-filled-white.svg";
import searchDark from "../../assets/SVGs/search-filled-black.svg";
import browseLight from "../../assets/SVGs/browse-filled-white.svg";
import browseDark from "../../assets/SVGs/browse-filled-black.svg";
import lightModeIcon from "../../assets/SVGs/darkmode-filled-white.svg";
import darkModeIcon from "../../assets/SVGs/lightmode-filled-black.svg";
import { NavBarProps } from "../../common/interfaces";
import { useNavigate } from "react-router-dom";
import { toggleDarkMode } from "../../redux/slices/global";


export function AuthComponent() {
	const darkMode = useAppSelector(state => state.global.darkMode);
	const loggedIn = useAppSelector(state => state.global.loggedIn);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const NavBarIcons: NavBarProps = {
		icons: [
			{
				iconName: "Search",
				iconDark: searchDark,
				iconLight: searchLight,
				clickHandler: () => navigate("/search"),

			},
			{
				iconName: "Browse",
				iconDark: browseDark,
				iconLight: browseLight,
				clickHandler: () => navigate("/browse"),

			},
			{
				iconName: "Genres",
				iconDark: genresDark,
				iconLight: genresLight,
				clickHandler: () => navigate("/browse/genres"),

			},
			{
				iconName: "My Library",
				iconDark: libraryDark,
				iconLight: libraryLight,
				clickHandler: () => navigate("/library"),

			},
			{
				iconName: "Profile",
				iconDark: profileDark,
				iconLight: profileLight,
				clickHandler: () => navigate("/profile"),

			},
			{
				iconName: loggedIn ? "Logout" : "Login",
				iconDark: loggedIn ? logoutDark : loginDark,
				iconLight: loggedIn ? logoutLight : loginLight,
				clickHandler: () => navigate("/auth"),

			},
			{
				iconName: darkMode ? "Light Mode" : "Dark Mode",
				iconDark: darkModeIcon,
				iconLight: lightModeIcon,
				clickHandler: () => dispatch(toggleDarkMode()),

			},
		]
	}

	return (
		<div className={`min-h-screen grid sm:gap-2 md-gap-3 gap-0 grid-cols-12 dark:bg-slate-950 ${darkMode ? "dark" : ""}`}>
			<NavBar icons={NavBarIcons.icons} />
			<div className="grid grid-rows-12 min-h-full lg:col-span-6 sm:col-span-9 col-span-10">
				<div className="col-span-3 flex flex-col p-5 items-center justify-center border-b-[1px] dark:border-slate-600 border-slate-200">
					<h1 className="mb-4 font-bold text-4xl dark:text-white dark:underline dark:underline-offset-8">CloneLib</h1>
					<h3 className="mb-4 font-bold text-xl dark:text-white">Your very own personal library lorem lorem blah blah</h3>
				</div>
			</div>
			<SideBar />
		</div>
	);
}