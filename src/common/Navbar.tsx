
import { useAppSelector } from "../redux/hooks";
import { NavBarProps } from "./interfaces";

import bookLight from "../assets/SVGs/book-filled-white.svg";
import bookDark from "../assets/SVGs/book-filled-black.svg";
import { useNavigate } from "react-router-dom";

export function NavBar({ icons }: NavBarProps) {
    const darkMode = useAppSelector(state => state.global.darkMode);

    const navigate = useNavigate();

    return (
        <div className="min-h-full p-2 md:col-span-3 sm:col-span-3 col-span-2 border-x-[1px] dark:border-slate-600 border-slate-200">
            <div className="min-h-full grid grid-cols-6">
                <div className="py-5 mx-1 lg:mx-2 flex items-center flex-col col-start-1 col-end-7 md:col-start-1 md:col-end-3 lg:col-start-2 lg-col-end-4">
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={() => navigate("/")}>
                        <img className="max-h-full" src={darkMode ? bookDark : bookLight} alt="Icon" />
                        <span className="absolute left-full m-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Home
                        </span>
                    </div>
                    {
                        icons.map((icon, index) => {
                            return (
                                <div key={`icon_${index}_icon`} className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-200 dark:hover:bg-slate-100 rounded-full" onClick={icon.clickHandler}>
                                    <img className="max-h-full" src={darkMode ? icon.iconDark : icon.iconLight} alt="Icon" />
                                    <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                                        {icon.iconName}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="py-5 mx-1 lg:mx-2 sm:col-start-3 sm:col-end-7 md:col-start-3 md:col-end-7 md:block hidden">
                    <div className="h-10 text-xl font-bold flex items-center mb-5 lg:pl-5 md:pl-3 pl-5 rounded-full"></div>
                    {
                        icons.map((icon, index) => {
                            return (
                                <div key={`icon_${index}_name`} className="h-10 text-xl font-bold flex items-center mb-5 lg:pl-5 md:pl-3 pl-5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white truncate" onClick={icon.clickHandler}>{icon.iconName}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}