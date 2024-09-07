import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { PageContainer } from "./components/MainPage";
import { SideBar } from "./components/SideBar";

import tagLightImage from "../../assets/SVGs/tag-filled.svg"
import tagDarkImage from "../../assets/SVGs/tag.svg"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchHomepageData } from "../../redux/slices/home";

export function HomeComponent() {
	const dispatch = useAppDispatch();
	useEffect(()=>{
		dispatch(fetchHomepageData())
	}, [])

	const homeLodaing = useAppSelector(state => state.home.homepageLoading)
	if(homeLodaing){
		return <h1>LOADING.....</h1>
	}
	return (
		<div className="min-h-screen grid gap-3 grid-cols-12">
			<SideBar darkMode={false}/>
			<div className="min-h-full md:col-span-6 sm:col-span-8 col-span-10 bg-yellow-500">

			</div>
			<div className="md:flex md:flex-col hidden min-h-full p-5 sm:col-span-3">
				<div className="max-h-32 w-full p-5 mb-5 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
					<h5 className="text-xl font-bold">
						Today's Recommendations:
					</h5>
				</div>
				<div className="w-fit flex flex-col items-start">
					<div className="mb-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
						<img className="object-cover w-full h-32 rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

							<ul className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 text-gray-900 dark:text-white">
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Horror</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Drama</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Romance</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Cosmic Horror</p>
								</li>
							</ul>

						</div>
					</div>
					<div className="mb-4  bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
						<img className="object-cover w-full h-32 rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

							<ul className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 text-gray-900 dark:text-white">
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Horror</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Drama</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Romance</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Cosmic Horror</p>
								</li>
							</ul>

						</div>
					</div>
					<div className="mb-4  bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
						<img className="object-cover w-full h-32 rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

							<ul className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 text-gray-900 dark:text-white">
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Horror</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Drama</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Romance</p>
								</li>
								<li className="flex flex-row items-center">
									<img className="h-4 mx-1" src={tagLightImage}/>
									<p className="hover:underline md:me-6 ">Cosmic Horror</p>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}