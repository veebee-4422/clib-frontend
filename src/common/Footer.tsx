import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

import bookLight from "../assets/SVGs/book-filled-white.svg";
import bookDark from "../assets/SVGs/book-filled-black.svg";

export function Footer() {
    const darkMode = useAppSelector(state => state.global.darkMode);
    return (
        <div className={`border-t-[1px] p-4 dark:border-slate-600 border-slate-200 dark:bg-slate-950 ${darkMode ? "dark" : ""}`}>
            <div className="grid grid-cols-12 mb-4 dark:text-white">
                <div className="col-start-2 col-span-2 flex flex-row justify-center items-center">
                    <img className="max-h-8 px-2" src={darkMode ? bookLight : bookDark} alt="Icon" />
                    <span className="mb-3 font-bold text-4xl underline underline-offset-8 dark:text-white ">CloneLib</span>
                </div>
            </div>
            <div className="grid grid-cols-12 dark:text-white border-b-[1px] border-slate-200 p-4">
                <div className="flex flex-col col-start-3 col-span-2">
                    <span className="mb-2 font-bold">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                </div>
                <div className="flex flex-col col-span-2">
                    <span className="mb-2 font-bold">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                </div>
                <div className="flex flex-col col-span-2">
                    <span className="mb-2 font-bold">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                </div>
                <div className="flex flex-col col-span-2">
                    <span className="mb-2 font-bold">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                    <span className="">HEY</span>
                </div>
            </div>
            <div></div>
        </div>
    );
}