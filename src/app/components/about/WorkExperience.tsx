import React from "react";
import localFont from 'next/font/local';

const helvLightReg = localFont({ src: '../../HelveticaLightRegular.otf' });

const WorkExperience = () => {
  return <div>
    <div className={helvLightReg.className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2" id="workexperience">
        <div className="col-span-full text-[38px] h-24 border-b border-t border-black flex items-center justify-center">
          <p className="mr-0 md:mr-[375px] lg:mr[375px]">Work Experience</p>
        </div>
        <div className="col-span-full h-10">
        </div>
        <div></div> {/*This div is here so two columns exist. */}
        <div>
          <ol className="border-l border-black dark:border-black ml-5 md:ml-0 lg:ml-0">
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[6px] mr-3 h-[11px] w-[11px] rounded-full bg-black dark:bg-neutral-500"></div>
                <div className="md:relative md:right-[350px]">
                  <p>Consumer Direct Care Network</p>
                  <p>IT Service Desk Analyst I</p>
                  <p>January 2024 - Present</p>
                </div>
              </div>
              <div className="mb-6 mt-[30px] mr-5 md:mr-0 md:ml-4 md:w-4/5 md:mt-[-49px]">
                <h4 className="text-[16px]">
                  <ul className="ml-10 md:ml-20 list-disc leading-7">
                    <li>Served as first point of contact for internal employees seeking technical assistance</li>
                    <li>Utilized customer service skills along with attention to detail and troubleshooting techniques to solve technical issues</li>
                    <li>Create and ran PowerShell scripts to improve productivity</li>
                    <li>Programmed Typescript and VBA scripts in Excel to create functions that increased productivity and decreased errors</li>
                  </ul>
                </h4>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[6px] mr-3 h-[11px] w-[11px] rounded-full bg-black dark:bg-neutral-500"></div>
                <div className="md:relative md:right-[350px]">
                  <p>envko</p>
                  <p>Software Developer | Product Owner</p>
                  <p>January 2023 - June 2023</p>
                </div>
              </div>
              <div className="mb-6 mt-[30px] mr-5 md:mr-0 md:ml-4 md:w-4/5 md:mt-[-49px]">
                <h4 className="text-[16px]">
                  <ul className="ml-10 md:ml-20 list-disc leading-7">
                    <li>Communicated with the team as the product owner, tasked with the overall vision of the project and the completion of the project.</li>
                    <li>Delegated tasks to team members, clearly communicating what must be accomplished.</li>
                    <li>Created the profile screen.
                      This includes updating data from local storage to show the user as well as added listeners that listen for activity across the application,
                      and updates the profile screen to show the latest changes.</li>
                    <li>Implemented real estate using data from an API,
                      showing that data on the screen an adding charts and graphs using maps and filters to show a specific set of data.</li>
                    <li>Implemented a caching system that saves API data locally to reduce calls to the server,
                      and only calls the server when data has been called to be updated.</li>
                    <li>Viewing of stock and co2 info. This includes adding live data that is updated using  setInterval and useEffects that continuously get data from the server.</li>
                    <li>Added the ability for the user to add country codes for their phone numbers when they  make an account.</li>
                  </ul>
                </h4>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[6px] mr-3 h-[11px] w-[11px] rounded-full bg-black dark:bg-neutral-500"></div>
                <div className="md:relative md:right-[350px]">
                  <p>Regal</p>
                  <p>Team Lead | Floor Staff</p>
                  <p>May 2019 - January 2022</p>
                </div>
              </div>
              <div className="mb-6 mt-[30px] mr-5 md:mr-0 md:ml-4 md:w-4/5 md:mt-[-49px]">
                <h4 className="text-[16px]">
                  <ul className="ml-10 md:ml-20 list-disc leading-7">
                    <li>Money handling with the cashiers and food related items.</li>
                    <li>Helped customers with their problems using excellent customer relation skills
                      that allowed me to communicate well and understand the customers needs and help to fulfill them.</li>
                    <li>Lead the floor staff.</li>
                    <li>Managed end of night money and safe operations.</li>
                    <li>Oversaw projectors and all technical related issues..</li>
                    <li>With excellent customer relation skills, I was able to help customers with ticket issues, give refunds, passes, and helped to keep a clean and efficient running cinema.</li>
                  </ul>
                </h4>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
};

export default WorkExperience;