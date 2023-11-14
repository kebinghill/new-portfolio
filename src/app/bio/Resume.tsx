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
      <div className='bg-cover bg-center bg-no-repeat bg-[url("/resume.png")] rounded sm:w-[100vw] max-w-[600px] aspect-[3/4] flex flex-col'>
        <button
          onMouseEnter={() => setIsContactShown(true)}
          onMouseLeave={() => setIsContactShown(false)}
          className='flex-[0.8]'
        >
          {isContactShown && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              CONTACT
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsSummaryShown(true)}
          onMouseLeave={() => setIsSummaryShown(false)}
          className='flex-[0.5]'
        >
          {isSummaryShown && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              SUMMARY
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsSkillsShown(true)}
          onMouseLeave={() => setIsSkillsShown(false)}
          className='flex-[0.8]'
        >
          {isSkillsShown && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              SKILLS
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsExperienceShown(true)}
          onMouseLeave={() => setIsExperienceShown(false)}
          className='flex-[2.9]'
        >
          {isExperienceShown && (
            <div className='flex justify-center items-center  text-5xl bg-stone-900/90 h-[100%]'>
              WORK EXPERIENCE
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setIsEducationShown(true)}
          onMouseLeave={() => setIsEducationShown(false)}
          className='flex-1'
        >
          {isEducationShown && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              EDUCATION
            </div>
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
        {isSkillsShown && (
          <div>
            <h2>SKILLS</h2>

            <h4>LANGUAGES</h4>
            <p>
              Languages: Javascript, Typescript Frontend: HTML, CSS, React,
              Redux, NextJS, Ant Design, Tailwind CSS, Material UI, Axios
              Backend: Node, PostgreSQL, TypeORM, NestJS, Sequelize Other:
              Moment-tz, Lodash, Jest, Design and development of APIs, Web
              Architecture, Git, HTTP, REST, Database Storage, Design
              Fundamentals, NPM, AWS, Docker Soft: Complex problem-solving,
              attention to detail, prioritization
            </p>
            <p></p>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
