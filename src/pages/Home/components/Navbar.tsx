import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleDarkMode } from "../../../redux/slices/global";

import bookLight from "../../../assets/SVGs/book-filled-white.svg";
import bookDark from "../../../assets/SVGs/book-filled-black.svg";
import menuBurgerLight from "../../../assets/SVGs/menu-burger-white.svg";
import menuBurgerDark from "../../../assets/SVGs/menu-burger-black.svg";
import lightModeIcon from "../../../assets/SVGs/darkmode-filled-white.svg";
import darkModeIcon from "../../../assets/SVGs/lightmode-filled-black.svg";

export function NavBar() {
    const darkMode = useAppSelector(state => state.global.darkMode);
    const dispatch = useAppDispatch();
    function handleDarkModeToggle() {
        dispatch(toggleDarkMode())
    }
    return (
        <div className="min-h-full p-2 rounded-2xl md:col-span-3 sm:col-span-4 col-span-2">
            <div className="min-h-full grid grid-cols-6">
                <div className="py-5 pr-2 flex sm:items-end items-center flex-col col-start-1 col-end-7 sm:col-start-2 sm:col-end-4">
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? bookDark : bookLight} alt="Icon" />
                        <span className="absolute left-full m-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Home
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? menuBurgerDark : menuBurgerLight} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Menu
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? menuBurgerDark : menuBurgerLight} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Browse
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? menuBurgerDark : menuBurgerLight} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Genres
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? menuBurgerDark : menuBurgerLight} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            My Library
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? menuBurgerDark : menuBurgerLight} alt="Icon" />

                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Profile
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? menuBurgerDark : menuBurgerLight} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Logout
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={darkMode ? darkModeIcon : lightModeIcon} alt="Icon" onClick={handleDarkModeToggle} />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </span>
                    </div>
                </div>
                <div className="py-5 sm:col-start-4 sm:col-end-7 sm:block hidden">
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full"></div>
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white"><span className="">Menu</span></div>
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white">Browse</div>
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white">Genres</div>
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white">My Library</div>
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white">Profile</div>
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white">Logout</div>
                    <div className="h-10 text-xl font-bold flex px-3 items-center mb-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white" onClick={handleDarkModeToggle}>{darkMode ? "Light Mode" : "Dark Mode"}</div>
                </div>
            </div>
        </div>
    );
}