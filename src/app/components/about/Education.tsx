import React from "react";
import localFont from 'next/font/local';

const helvLightReg = localFont({ src: '../../HelveticaLightRegular.otf' });

const Education = () => {
  return <div>
    <div className={`${helvLightReg.className} m-10 bg-[#E8E6E6] p-10 scroll-smooth`} id="education">
      <div className="flex items-center justify-center">
        <div className="text-left">
          <p className="text-[38px] mb-5">Education</p>
          <div className="flex">
            <div className="flex flex-col">
              <p><b>Bachelor of Applied Science in Software Development</b></p>
              <p className="my-2">Bellevue College</p>
              <p>3.769 GPA</p>
            </div>
            <div className="ml-10 text-[18px]">
              <p>Classes</p>
              <div className="flex flex-col">
                <ul className="ml-7 list-disc">
                  <li>Communication in a Diverse Workspace</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Advanced Data Access Techniques</li>
                  <li>Application Architecture</li>
                  <li>Information Security Essentials</li>
                  <li>Software Testing</li>
                  <li>Developing Mobile Applications</li>
                  <li>Project Management for IT</li>
                  <li>Enterprise Data Applications</li>
                  <li>Ethical Issues in IT</li>
                  <li>Advanced Communication in Business & Technology</li>
                  <li>Business of IT: Legal Regulatory Business Environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Education;