"use client";

import React from "react";
import localFont from 'next/font/local'
import { Carousel } from "flowbite-react";

const myFont = localFont({ src: '../DroidSerif.ttf' });

const ProjectsPage = () => {
  return <div>
    <div className="flex items-center justify-center">
      <div className="w-[980px] h-[350px] bg-green-200 flex items-center justify-center">
        <div className={myFont.className}>
          <p className="text-[56px] bg-white w-96 text-center">Projects</p>
        </div>
      </div>
    </div>
    <div id="androidstudioskotlin">
      <div className="flex items-center justify-center mt-5">
        <div className="w-[50%] text-center sm:w-[23.5%] md:w-[23.5%]">
          <a href="https://github.com/MrPork1/Plant_Tracker2" target="_blank" className={`${myFont.className} text-[20px] font-bold underline`}>Android Studios with Kotlin</a>
          <p className="text-left mt-5 text-[18px]">Implemented Google maps API that allows for searching of any location and viewing of location with markers added and zooming enabled.</p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="h-96 w-[20%]">
          <Carousel slideInterval={3000}>
            <img
              className="object-scale-down"
              alt="..."
              src="/androidstudioskotlin/pic5.webp"
            />
            <img
              className="object-scale-down"
              alt="..."
              src="/androidstudioskotlin/pic6.webp"
            />
            <img
              className="object-scale-down"
              alt="..."
              src="/androidstudioskotlin/pic1.webp"
            />
            <img
              className="object-scale-down"
              alt="..."
              src="/androidstudioskotlin/pic3.webp"
            />
            <img
              className="object-scale-down"
              alt="..."
              src="/androidstudioskotlin/pic4.webp"
            />
            <img
              className="object-scale-down"
              alt="..."
              src="/androidstudioskotlin/pic2.webp"
            />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] mr-5 ">Android Studios</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] ">Kotlin</div>
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
        <div className="bg-[#074151] text-white px-4 py-2 text-[14px] mr-5">Angular framework</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px] mr-5">Azure server</div>
        <div className="bg-[#074151] text-white px-8 py-2 text-[14px]">Typescript</div>
      </div>
    </div>


    {/* <div className="flex justify-center mt-5">
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
    </div> */}
  </div>;
};

export default ProjectsPage;