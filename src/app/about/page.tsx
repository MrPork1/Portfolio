import React from "react";

const About = () => {
  return <div>
    <p>I have over a decade of computer and programming experience both in college and in my spare
      time. Business skills mixed together with leadership experiences make for a well-rounded full stack
      developer.
    </p>
    <div className="rounded-xl bg-gray-100 shadow-md m-5">
      <p className="text-lg pt-5 pl-5">Skills and abilities</p>
      <ul className="list-disc pt-5 pl-10 pb-5">
        <li>Have worked on an array of projects in multiple teams ranging from creating android apps
          to using databases to store data</li>
        <li>Languages; C# (expert), Kotlin (extensive), Java (working), JavaScript (expert), and
          TypeScript (extensive), and Python (working)
        </li>
        <li>Frameworks; ReactJS, React Native, and Angular</li>
        <li>Developing games using C#</li>
        <li>Programming the completion of electrical circuits using motherboards and Lua#</li>
        <li> Strong communication skills that allow me to collaborate well in diverse team
          environments</li>

      </ul>
    </div>
    <div className="rounded-xl bg-gray-100 shadow-md m-5">
      <p className="text-lg pt-5 pl-5">Education</p>
      <p className="p-5">Bellevue College</p>
      <p className="p-1">Bachelor of Applied Science in Software Development | 2020 - 2023</p>
      <ul className="list-disc pt-5 pl-10 pb-5">
        <li>Earned a 3.769 GPA with completion of all projects</li>
        <li>Received high marks from all professors</li>
      </ul>
      <p className="p-5">Specific Classes</p>
      <ul className="p-5">
        • Communication in a Diverse Workspace
        • Advanced Communication in Business & Technology
        • Data Structures and Algorithms
        • Advanced Data Access Techniques
        • Application Architecture
        • Information Security Essentials
        • Software Testing
        • Developing Mobile Applications
        • Project Management for IT
        • Enterprise Data Applications
        • Ethical Issues in IT
        • Business of IT: Legal Regulatory Business Environment
      </ul>

    </div>
  </div>;
};

export default About;