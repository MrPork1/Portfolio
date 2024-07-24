"use client";


import React from "react";
import localFont from 'next/font/local'
import Education from "../components/about/Education";
import WorkExperience from "../components/about/WorkExperience";
import Button from "../components/Button";
import Link from "next/link";

const myFont = localFont({ src: '../DroidSerif.ttf' });
const helvLightReg = localFont({ src: '../HelveticaLightRegular.otf' });

const About = () => {
  return <div className={helvLightReg.className}>
    <div id="headerSection" className={myFont.className}>
      <p className="text-[34px] text-center mt-10">Hello, my name is Sean. I am a Software Developer living in Seattle, WA.</p>
    </div>
    <div className="grid grid-cols-1 p-0 mx-2 lg:grid-cols-6 lg:p-10 lg:mx-20 md:grid-cols-6 md:p-5 md:mx-10">
      <div className="col-span-2">
        <img src='/seanwebpicture.webp' alt="Picture of Sean Kelly"></img>
      </div>
      <div></div>
      <div className="col-span-3">
        <div id="headerSectionAbout" className={myFont.className}>
          <p className="text-[56px] mt-10">About</p>
        </div>
        <p className={`${helvLightReg.className} mt-5 text-[18px] leading-10 w-[100%] md:w-[75%] lg:w-[75%]`}>I am a <b>Software Developer</b> with
          many years of computer and programming experience both in college and in my spare time.
          Business skills mixed together with leadership experiences make for a well-rounded full-stack developer.</p>
        <div className="flex flex-wrap">
          <a href="tel:+4255234037" className={`${helvLightReg.className} text-blue-600 hover:underline my-5`}>+1 (425)-523-4037</a>
          <a href="mailto:seankel@comcast.net" className={`${helvLightReg.className} text-blue-600 hover:underline m-5`}>seankel@comcast.net</a>
          <a href="https://www.linkedin.com/in/sean-kelly-382886221" target="_blank" className={`${helvLightReg.className} text-blue-600 hover:underline m-5`}>Linkedin</a>
          <a href="https://github.com/MrPork1" target="_blank" className={`${helvLightReg.className} text-blue-600 hover:underline m-5`}>Github</a>
          <a href="./SeanKelly_Resume_Bachelors.pdf" download className={`${helvLightReg.className} text-blue-600 hover:underline m-5`}>Resume</a>
        </div>
        <div className="flex flex-wrap">
          <Button title="Education" onPress={"#education"} />
          <div className="mx-0.5"></div>
          <Button title="Work Experience" onPress={'#workexperience'} />
          <div className="mx-0.5"></div>
          <Button title="Projects" onPress={'/projects'} />
        </div>
      </div>
    </div>
    <Education />
    <WorkExperience />
  </div>
};

export default About;