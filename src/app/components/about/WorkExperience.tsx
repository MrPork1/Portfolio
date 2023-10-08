import React from "react";

const WorkExperience = () => {
  return <div>
    <div>
      <div className="grid grid-cols-2" id="workexperience">
        <div className="col-span-full text-[38px] h-24 border-b border-t border-black flex items-center justify-center">
          <p className="mr-[370px]">Work Experience</p>
        </div>
        <div className="col-span-full h-10">
        </div>
        <div></div> {/*This div is here so two columns exist. */}
        <div>
          <ol className="border-l border-black dark:border-black">
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[6px] mr-3 h-[11px] w-[11px] rounded-full bg-black dark:bg-neutral-500"></div>
                <div className="relative right-[350px]">
                  <p>envko</p>
                  <p>Software Developer | Product Owner</p>
                  <p>January 2023 - June 2023</p>
                </div>
              </div>
              <div className="mb-6 ml-4 mt-[-47px] w-4/5">
                <h4 className="text-[16px]">
                  <ul className="ml-20 list-disc">
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
                <div className="relative right-[350px]">
                  <p>Regal</p>
                  <p>Team Lead | Floor Staff</p>
                  <p>May 2019 - January 2022</p>
                </div>
              </div>
              <div className="mb-6 ml-4 mt-[-47px] w-4/5">
                <h4 className="text-[16px]">
                  <ul className="ml-20 list-disc">
                    <li>Money handling with the cashiers and food related items.</li>
                    <li>Helped customers with their problems using excellent customer relation skills
                      that allowed me to communicate well and understand the customers' needs and help to fulfill them.</li>
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