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

import googleIcon from "../../assets/SVGs/google-icon.svg";
import { Footer } from "../../common/Footer";

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
		<div className="min-h-screen flex flex-col">
			<div className={`flex-grow grid sm:gap-2 md-gap-3 gap-0 grid-cols-12 dark:bg-slate-950 ${darkMode ? "dark" : ""}`}>
				<NavBar icons={NavBarIcons.icons} />
				<div className="lg:col-span-6 sm:col-span-9 col-span-10">
					<div className="flex flex-col p-2 items-center justify-center border-b-[1px] dark:border-slate-600 border-slate-200">
						<h1 className="mb-3 font-bold text-4xl dark:text-white dark:underline dark:underline-offset-8">CloneLib</h1>
						<h3 className="mb-3 font-bold text-xl dark:text-white">Your very own personal library lorem lorem blah blah</h3>
					</div>
					<div className="row-span-6 min-w-full flex justify-center p-5 dark:bg-slate-950">
						<div className="max-w-full p-6 space-y-4 md:space-y-6 sm:p-8 bg-white shadow dark:border md:mt-0 dark:bg-slate-800 dark:border-slate-700">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-slate-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<div className="min-w-full flex justify-center items-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 p-3 rounded-xl">
								<img className="mr-2 max-h-8 p-2 rounded-full" src={googleIcon} />
								<p className="ml-2 font-bold dark:text-white">Continue with google</p>
							</div>
							<div className="min-w-full flex items-center">
								<span className="flex-grow border-b-2 border-slate-300"></span>
								<span className="px-4 text-center font-bold dark:text-white">or</span>
								<span className="flex-grow border-b-2 border-slate-300"></span>
							</div>
							<form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your email</label>
									<input type="email" name="email" id="email" className="bg-slate-50 border border-slate-300 text-slate-900 rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
								</div>
								<div>
									<label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Password</label>
									<input type="password" name="password" id="password" placeholder="••••••••" className="bg-slate-50 border border-slate-300 text-slate-900 rounded-lg focus:ring-slate-600 focus:border-slate-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-slate-600 dark:ring-offset-slate-800" required />
										</div>
										<div className="ml-3 text-sm">
											<label htmlFor="remember" className="text-slate-500 dark:text-slate-300">Remember me</label>
										</div>
									</div>
									<a href="#" className="text-sm font-medium text-slate-600 hover:underline dark:text-slate-500">Forgot password?</a>
								</div>
								<button type="submit" className="w-full bg-slate-100 hover:bg-slate-200 border border-slate-300 dark:border-slate-500 text-slate-900 dark:text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-slate-700 dark:hover:bg-slate-600">Sign in</button>
								<p className="text-sm font-light text-slate-500 dark:text-slate-400">
									Don’t have an account yet? <a href="#" className="font-medium text-slate-600 hover:underline dark:text-slate-500">Sign up</a>
								</p>
							</form>
						</div>
					</div>
				</div>
				<SideBar />
			</div>
			<Footer />
		</div >
	);
}