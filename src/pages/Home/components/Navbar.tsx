import React from "react";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { NavbarMenuContents } from "./subComponents/NavbarMenuContents";

import menuBars from "../../../assets/SVGs/menu-bars.svg"

export function Navbar() {
    return (
        <div className={`p-2 h-screen mt-10 bg-slate-200`}>
            <div>
                <button onClick={() => { }} className="rounded-full bg-slate-200 p-5 h-2 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-300 focus:shadow-none active:bg-slate-300 hover:bg-slate-300 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    <img src={menuBars} className="max-w-0" alt="Icon" />
                </button>
                {false && <NavbarMenuContents key={"123"} content={"NAVIGATE"} />}
            </div>
        </div>
    );
}