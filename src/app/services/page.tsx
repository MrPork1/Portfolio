import React from "react";
import Link from "next/link";

const Services = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg: gap-8 p-10">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#4E6351]">Angular Framework Web App with Azure Server</div>
        <p className="text-gray-700 text-base pl-5">
          <ul className="list-disc">
            <li>Added login and signup authentication with firebase</li>
            <li>Added a fully functional calendar that adds events from the database, with tooltips for easy
              viewing of information on a specific day</li>
            <li>Added caching system that saves server data to the local storage, and added listeners that
              will keep the cached data up to date using Angular subscribers</li>
          </ul>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Angular framework</span>
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Azure server</span>
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Typescript</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 underline text-blue-700">
          <Link href="https://csport.azurewebsites.net/" target="_blank">https://csport.azurewebsites.net/</Link>
        </span>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#4E6351]">ReactJS with API</div>
        <p className="text-gray-700 text-base pl-5">
          <ul className="list-disc">
            <li> Implemented search feature that queries API for relative information
            </li>
            <li> Added filter that queries the API by certain variables
            </li>
            <li>Added result list that is easily searchable with an added search bar</li>
          </ul>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ReactJS</span>
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">API</span>
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Typescript</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 underline text-blue-700">
          <Link href="https://mrpork1.github.io/singlepageapp/" target="_blank">https://mrpork1.github.io/singlepageapp/</Link>
        </span>
      </div>
    </div>
  </div>;
};

export default Services;