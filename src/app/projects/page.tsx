"use client";

import React from "react";
import localFont from 'next/font/local'
import { Carousel } from "flowbite-react";

const myFont = localFont({ src: '../DroidSerif.ttf' });
const helvLightReg = localFont({ src: '../HelveticaLightRegular.otf' });

const ProjectsPage = () => {
  return <div className={helvLightReg.className}>
    <div className="flex items-center justify-center">
      <div className="w-[980px] h-[350px] bg-[#074151] flex items-center justify-center">
        <div className={myFont.className}>
          <p className="text-[56px] bg-white w-96 text-center">Projects</p>
        </div>
      </div>
    </div>
    <div id="androidstudioskotlin">
      <div className="flex items-center justify-center mt-5">
        <div className="w-[45%] text-center">
          <p className={`${myFont.className} text-[20px] font-bold`}>envko - React Native, Mobile iOS App (Published to the Apple Store)</p>
          <div className="grid grid-cols-2 mt-5 text-[17px]">
            <div>
              <ul className="list-disc">
                <li>Communicated with the team as the <b>product owner</b>, tasked with the overall vision of the project and the completion of the project.</li>
                <li><b>Delegated</b> tasks to team members, clearly communicating what must be accomplished.</li>
                <li>Created the <b>profile screen</b>.
                  This includes updating data from local storage to show the user as well as added listeners that listen for activity across the application,
                  and updates the profile screen to show the latest changes.</li>
                <li><b>Implemented real estate using data from an API</b>,
                  showing that data on the screen an adding charts and graphs using maps and filters to show a specific set of data.</li>
              </ul>
            </div>
            <div className="ml-10">
              <ul className="list-disc">
                <li>Implemented a <b>caching system</b> that saves API data locally to reduce calls to the server,
                  and only calls the server when data has been called to be updated.</li>
                <li>Viewing of <b>stock and CO2 info</b>. This includes adding live data that is updated using <b>setInterval</b> and <b>useEffects</b> that continuously get data from the server.</li>
                <li>Added the ability for the user to add country codes for their phone numbers when they  make an account.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <img src="/envkopictures/login.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/spending-dollar.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
            <p className="italic w-[100%] text-center">Bank account, spending screen</p>
          </div>
          <div>
            <img src="/envkopictures/spending-co2.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/investing-dollar.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/investing-search.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/investing-search-manage-stock.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/investing-apple-dollar-graph.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/investing-apple-dollar-news.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/investing-apple-dollar-earnings.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/investing-apple-co2.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/realestate-map.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/realestate-map-search.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/realestate-map-house.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
            <p className="italic w-[100%] text-center">House info using API</p>
          </div>
          <div>
            <img src="/envkopictures/realestate-house-dollar.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/realestate-house-dollar-facts.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/realestate-house-co2.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
          </div>
          <div>
            <img src="/envkopictures/profile-assets.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
            <p className="italic w-[100%] text-center">All asset information</p>
          </div>
          <div>
            <img src="/envkopictures/profile-footprint.jpg" className="w-[220px]" style={{borderRadius: 30}}></img>
            <p className="italic w-[100%] text-center">Footprint information using assets</p>
          </div>
          <div>
            <img src="/envkopictures/envko.webp" className="w-[220px]"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] tracking-[0.2em] mr-5 ">Android Studios</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] ">Kotlin</div>
      </div>
    </div>
    <div id="androidstudioskotlin">
      <div className="flex items-center justify-center mt-5">
        <div className="w-[50%] text-center sm:w-[23.5%] md:w-[23.5%]">
          <a href="https://github.com/MrPork1/Plant_Tracker2" target="_blank" className={`${myFont.className} text-[20px] font-bold underline`}>Android Studios with Kotlin</a>
          <p className="text-center mt-5 text-[18px]">Implemented Google maps API that allows for searching of any location and viewing of location with markers added and zooming enabled.</p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <img src="/androidstudioskotlin/pic5.webp"></img>
          </div>
          <div>
            <img src="/androidstudioskotlin/pic6.webp"></img>
          </div>
          <div>
            <img src="/androidstudioskotlin/pic1.webp"></img>
          </div>
          <div>
            <img src="/androidstudioskotlin/pic3.webp"></img>
          </div>
          <div>
            <img src="/androidstudioskotlin/pic4.webp"></img>
          </div>
          <div>
            <img src="/androidstudioskotlin/pic2.webp"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] tracking-[0.2em] mr-5 ">Android Studios</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] ">Kotlin</div>
      </div>
    </div>
    <div id="angularframeworkwebappwithazureserver">
      <div className="flex items-center justify-center">
        <div className="w-[50%] text-center sm:w-[23.5%] md:w-[23.5%]">
          <a href="https://csport.azurewebsites.net" target="_blank" className={`${myFont.className} text-[20px] font-bold underline`}>Angular Framework Web App with Azure Server</a>
          <ul className="text-left list-disc mt-5">
            <li className="text-[17px]">Added login and signup authentication with firebase.</li>
            <li className="text-[17px]">Added a fully functional calendar that adds events from the database,
              with tooltips for easy viewing of information on a specific day.</li>
            <li className="text-[17px]">Added caching system that saves server data to the local storage,
              and added listeners that will keep the cached data up to date using Angular subscribers.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] tracking-[0.2em] mr-5">Angular framework</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] mr-5">Azure server</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em]">Typescript</div>
      </div>
    </div>
    <div id="reactjswithapi">
      <div className="flex items-center justify-center">
        <div className="w-[50%] text-center sm:w-[23.5%] md:w-[23.5%]">
          <a href="https://mrpork1.github.io/singlepageapp/" target="_blank" className={`${myFont.className} text-[20px] font-bold underline`}>ReactJS with API</a>
          <ul className="text-left list-disc mt-5">
            <li className="text-[17px]">Implemented search feature that queries API for relative information</li>
            <li className="text-[17px]">Added filter that queries the API by certain variables</li>
            <li className="text-[17px]"> Added result list that is easily searchable with an added search bar</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] tracking-[0.2em] mr-5">ReactJS</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] mr-5">API</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em]">Typescript</div>
      </div>
    </div>
    <div id="sqldatabasemanipulation">
      <div className="flex items-center justify-center">
        <div className="w-[50%] text-center sm:w-[23.5%] md:w-[23.5%]">
          <a href="https://github.com/MrPork1/ISIT420-Project" target="_blank" className={`${myFont.className} text-[20px] font-bold underline`}>SQL and database manipulation</a>
          <ul className="text-left list-disc mt-5">
            <li className="text-[17px]">Queried thousands of excel data using Linux and Apache Pig</li>
            <li className="text-[17px]">Made front end UI for viewing queried data and filters to manipulate data using jQuery</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] tracking-[0.2em] mr-5">Linux</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] mr-5">SQL</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em]">jQuery</div>
      </div>
    </div>
    <div id="asp.net">
      <div className="flex items-center justify-center">
        <div className="w-[50%] text-center sm:w-[23.5%] md:w-[23.5%]">
          <a href="https://github.com/MrPork1/ISIT320-EasyEntry" target="_blank" className={`${myFont.className} text-[20px] font-bold underline`}>ASP.NET</a>
          <ul className="text-left list-disc mt-5">
            <li className="text-[17px]">Added JSON enhancements that moved data from the barcode to the backend easier</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] tracking-[0.2em] mr-5">ASP.NET</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] mr-5">C#</div>
      </div>
    </div>
    <div id="webdevelopmentcanvasgame">
      <div className="flex items-center justify-center">
        <div className="w-[50%] text-center sm:w-[23.5%] md:w-[23.5%]">
          <a href="https://mrpork1.github.io/tmawesome---Canvas-Game/y" target="_blank" className={`${myFont.className} text-[20px] font-bold underline`}>Web Development (HTML, CSS, Boostrap, Javascript)</a>
          <ul className="text-left list-disc mt-5">
            <li className="text-[17px]"> Created canvas game with added sounds, box colliders, and health counter</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] tracking-[0.2em] mr-5">HTML</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] mr-5">Bootstrap</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] tracking-[0.2em] mr-5">Javascript</div>
      </div>
    </div>
  </div>;
};

export default ProjectsPage;