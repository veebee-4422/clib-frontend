import React from "react";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { NavbarMenuContents } from "./subComponents/NavbarMenuContents";

import menuBurgerImage from "../../../assets/SVGs/menu-burger-white.svg";
import bookFilledImage from "../../../assets/SVGs/book-filled.svg";

interface SideBarProps {
    darkMode: boolean;
}

export function SideBar({ darkMode }: SideBarProps) {
    return (
        <div className="min-h-full p-2 rounded-2xl md:col-span-3 sm:col-span-4 col-span-2">
            <div className="min-h-full grid grid-cols-6">
                <div className="py-5 pr-2 flex sm:items-end items-center flex-col col-start-1 col-end-7 sm:col-start-2 sm:col-end-4">
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={bookFilledImage} alt="Icon" />
                        <span className="absolute left-full m-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Tooltip
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={menuBurgerImage} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Tooltip
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={menuBurgerImage} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Tooltip
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={menuBurgerImage} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Tooltip
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={menuBurgerImage} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Tooltip
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={menuBurgerImage} alt="Icon" />

                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Tooltip
                        </span>
                    </div>
                    <div className="group relative p-2 h-10 w-10 flex justify-center items-center mb-5 bg-slate-500 hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-700 rounded-full" onClick={() => console.log('CLICKED')}>
                        <img className="max-h-full" src={menuBurgerImage} alt="Icon" />
                        <span className="absolute top-full m-1 z-50 opacity-0 sm:group-hover:opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-sm text-gray-100 rounded-md whitespace-nowrap">
                            Tooltip
                        </span>
                    </div>
                </div>
                <div className="py-5 sm:col-start-4 sm:col-end-7 sm:block hidden">
                    <div className="h-10 flex px-3 items-center mb-5"></div>
                    <div className="h-10 flex px-3 items-center mb-5">HEY</div>
                    <div className="h-10 flex px-3 items-center mb-5">HELLO</div>
                    <div className="h-10 flex px-3 items-center mb-5">HOWSATT</div>
                    <div className="h-10 flex px-3 items-center mb-5">GAYBOI</div>
                    <div className="h-10 flex px-3 items-center mb-5">GAYBOI</div>
                    <div className="h-10 flex px-3 items-center mb-5">GAYBOI</div>
                </div>
            </div>
        </div>
    );
}