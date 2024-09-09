import { useAppSelector } from "../redux/hooks";
import { SideBarRec } from "../common/subComponents/SideBarRec";


export function SideBar() {
    const apiData = useAppSelector(state => state.home.homepageData);
    return (
        <div className="lg:flex lg:flex-col hidden min-h-full p-5 lg:col-span-3 items-center border-x-[1px] dark:border-slate-600 border-slate-200">
            <div className="max-h-32 w-full p-5 mb-5 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-none">
                <h5 className="text-xl font-bold text-center dark:text-white truncate">
                    Today's Recommendations:
                </h5>
            </div>
            <div className="w-full flex flex-col">
                {
                    apiData.length ? apiData.map(({ image, title, synopsis, tags }, index) => {
                        return (
                            <SideBarRec image={image} title={title} synopsis={synopsis} tags={tags} key={`rec_${index}`} loading={false} />
                        )
                    }) : Array.from({ length: 2 }, (_, index) => {
                        return (
                            <SideBarRec image={""} title={""} synopsis={""} tags={[""]} key={`rec_${index}`} loading={true} />
                        )
                    })
                }
            </div>
        </div>
    )
}
