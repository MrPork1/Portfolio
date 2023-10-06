import React from "react";
import ReactPlayer from "react-player";
import Link from "next/link";

const Contacts = () => {
  return <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 lg: gap-8 p-10">
    <div>
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#4E6351]">envko - React Native, Mobile iOS App (Published to the Apple Store)</div>
        <p className="text-gray-700 text-base pl-5">
          <ul className="list-disc">
            <li>Communicated with the team as the product owner, tasked with the overall vision of the project and the completion of the project</li>
            <li>Delegated tasks to team members, clearly communicating what must be accomplished</li>
            <li>Created the profile screen.
              This includes updating data from local storage to show the user as well as added listeners that listen for activity across the application,
              and updates the profile screen to show the latest changes</li>
            <li>Implemented real estate using data from an API,
              showing that data on the screen and  adding charts and graphs using maps and filters to show a specific set of data</li>
            <li>Implemented a caching system that saves API data locally to reduce calls to the server,
              and only calls the server when data has been called to be updated</li>
            <li>Viewing of stock and co2 info. This includes adding live data that is updated using  setInterval and useEffects that continuously get data from the server</li>
            <li>Added the ability for the user to add country codes for their phone numbers when they  make an account</li>
          </ul>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Angular framework</span>
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Azure server</span>
        <span className="inline-block bg-[#4E6351] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Typescript</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 underline text-blue-700">
          <Link href="/contacts/envko">Video demo</Link>
        </span>
      </div>
    </div>
  </div>;
};

export default Contacts;