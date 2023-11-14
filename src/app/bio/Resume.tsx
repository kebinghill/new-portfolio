'use client';

import { useState } from 'react';

const Resume = () => {
  const [isContactShown, setIsContactShown] = useState(false);
  const [isSummaryShown, setIsSummaryShown] = useState(false);
  const [isSkillsShown, setIsSkillsShown] = useState(false);
  const [isExperienceShown, setIsExperienceShown] = useState(false);
  const [isEducationShown, setIsEducationShown] = useState(false);

  return (
    <>
      <div className='bg-contain bg-center bg-no-repeat bg-[url("/resume.png")] rounded min-w-[370px] min-h-[500px] max-h-[1000px] flex flex-col border'>
        <button
          onMouseEnter={() => setIsContactShown(true)}
          onMouseLeave={() => setIsContactShown(false)}
        >
          {isContactShown ? (
            <div className='flex justify-center items-center text-black text-xl h-[65px] bg-slate-400'>
              CONTACT
            </div>
          ) : (
            <div className='h-[65px]'></div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsSummaryShown(true)}
          onMouseLeave={() => setIsSummaryShown(false)}
        >
          {isSummaryShown ? (
            <div className='flex flex-col justify-center items-center text-black text-xl h-[45px]  bg-slate-400'>
              SUMMARY
            </div>
          ) : (
            <div className='h-[45px]'></div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsSkillsShown(true)}
          onMouseLeave={() => setIsSkillsShown(false)}
        >
          {isSkillsShown ? (
            <div className='flex flex-col justify-center items-center text-black text-xl h-[65px]  bg-slate-400'>
              SKILLS
            </div>
          ) : (
            <div className='h-[65px]'></div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsExperienceShown(true)}
          onMouseLeave={() => setIsExperienceShown(false)}
        >
          {isExperienceShown ? (
            <div className='flex flex-col justify-center items-center text-black text-xl h-[250px]  bg-slate-400'>
              WORK EXPERIENCE
            </div>
          ) : (
            <div className='h-[250px]'></div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsEducationShown(true)}
          onMouseLeave={() => setIsEducationShown(false)}
        >
          {isEducationShown ? (
            <div className='flex flex-col justify-center items-center text-black text-xl h-[90px]  bg-slate-400'>
              EDUCATION
            </div>
          ) : (
            <div className='h-[90px]'></div>
          )}
        </button>
      </div>
      <div>
        {isSummaryShown && (
          <div>
            <h2>SUMMARY</h2>
            <p>
              Full Stack software developer with extensive knowledge of building
              web applications using a variety of languages and frameworks
              looking for a full-time remote position. Passionate about
              improving user experience by improving on current features and
              building new ones in a fast-paced production environment.
            </p>
          </div>
        )}
        <h2>SKILLS</h2>
        <h4>LANGUAGES</h4>
        <p>
          Languages: Javascript, Typescript Frontend: HTML, CSS, React, Redux,
          NextJS, Ant Design, Tailwind CSS, Material UI, Axios Backend: Node,
          PostgreSQL, TypeORM, NestJS, Sequelize Other: Moment-tz, Lodash, Jest,
          Design and development of APIs, Web Architecture, Git, HTTP, REST,
          Database Storage, Design Fundamentals, NPM, AWS, Docker Soft: Complex
          problem-solving, attention to detail, prioritization
        </p>
        <p></p>
      </div>
    </>
  );
};

export default Resume;
