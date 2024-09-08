import React from "react";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import tagLight from "../../../../assets/SVGs/tag-filled-black.svg"
import tagDark from "../../../../assets/SVGs/tag-filled-white.svg"
import { useAppSelector } from "../../../../redux/hooks";

interface SideBarRecProps {
    image: string;
    title: string;
    synopsis: string;
    tags: string[];
}

export function SideBaRec({ image, title, synopsis, tags }: SideBarRecProps) {
    const darkMode = useAppSelector(state => state.global.darkMode);
    return (
        <div className="w-full mb-4 bg-white border dark:border-none border-gray-200 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-32 rounded-t-lg" src={image} alt={title} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{synopsis}</p>
                {tags.length && <ul className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 text-gray-900 dark:text-white">
                    {tags.map((tag) => {
                        return (
                            <li className="flex flex-row justify-center items-center">
                                <img className="h-4 mx-1" src={darkMode ? tagDark : tagLight} alt="tag" />
                                <p className="hover:underline text-center">{tag}</p>
                            </li>
                        )

                    })}
                </ul>}
            </div>
        </div>
    )
}