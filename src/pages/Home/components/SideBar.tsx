import { useAppSelector } from "../../../redux/hooks";
import { SideBaRec } from "./subComponents/SideBarRec";

interface darkMode {
    darkMode: boolean
}

export function SideBar({darkMode}: darkMode) {
    const apiData = useAppSelector(state => state.home.homepageData);
    return (
        <div className="md:flex md:flex-col hidden min-h-full p-5 sm:col-span-3">
            <div className="max-h-32 w-full p-5 mb-5 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <h5 className="text-xl font-bold dark:text-white">
                    Today's Recommendations:
                </h5>
            </div>
            <div className="w-fit flex flex-col items-start">
                {apiData.length && apiData.map(({ image, title, synopsis, tags }) => {
                    return (
                        <SideBaRec image={image} title={title} synopsis={synopsis} tags={tags} />
                    )
                })}
            </div>
        </div>
    )
}
