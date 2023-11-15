'use client';

import { useState } from 'react';

const resumeSections = {
  CONTACT: 'contact',
  SUMMARY: 'summary',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  EDUCATION: 'education',
} as const;

type resumeKeys = keyof typeof resumeSections;
type sectionValues = (typeof resumeSections)[resumeKeys];

const Resume = () => {
  const [showHoverSection, setShowHoverSection] = useState('');
  const [showSection, setShowSection] = useState('');

  const handleOnClick = (section: sectionValues) => {
    setShowSection(section);
  };

  const handleOnMouseLeave = () => {
    setShowHoverSection('');
  };

  return (
    <div className='flex flex-col items-center md:flex-row md:justify-center md:items-start'>
      <div className='bg-cover bg-center bg-no-repeat bg-[url("/resume.png")] rounded w-[100vw] md:w-[600px] aspect-[3/4] flex flex-col'>
        <button
          onMouseEnter={() => setShowHoverSection(resumeSections.CONTACT)}
          onMouseLeave={() => handleOnMouseLeave()}
          onClick={() => handleOnClick(resumeSections.CONTACT)}
          className='flex-[0.8]'
        >
          {showHoverSection === resumeSections.CONTACT && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              CONTACT
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setShowHoverSection(resumeSections.SUMMARY)}
          onMouseLeave={() => handleOnMouseLeave()}
          onClick={() => handleOnClick(resumeSections.SUMMARY)}
          className='flex-[0.5]'
        >
          {showHoverSection === resumeSections.SUMMARY && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              SUMMARY
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setShowHoverSection(resumeSections.SKILLS)}
          onMouseLeave={() => handleOnMouseLeave()}
          onClick={() => handleOnClick(resumeSections.SKILLS)}
          className='flex-[0.8]'
        >
          {showHoverSection === resumeSections.SKILLS && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              SKILLS
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setShowHoverSection(resumeSections.EXPERIENCE)}
          onMouseLeave={() => handleOnMouseLeave()}
          onClick={() => handleOnClick(resumeSections.EXPERIENCE)}
          className='flex-[2.9]'
        >
          {showHoverSection === resumeSections.EXPERIENCE && (
            <div className='flex justify-center items-center  text-5xl bg-stone-900/90 h-[100%]'>
              WORK EXPERIENCE
            </div>
          )}
        </button>
        <button
          onMouseEnter={() => setShowHoverSection(resumeSections.EDUCATION)}
          onMouseLeave={() => handleOnMouseLeave()}
          onClick={() => handleOnClick(resumeSections.EDUCATION)}
          className='flex-1'
        >
          {showHoverSection === resumeSections.EDUCATION && (
            <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
              EDUCATION
            </div>
          )}
        </button>
      </div>
      <div className='w-[100%] md:w-[600px]'>
        {showSection === resumeSections.CONTACT && (
          <div className='flex flex-col items-center border'>
            <p className='flex justify-center text-2xl font-extralight border-b w-[100%]'>
              CONTACT
            </p>
            <p className='text-lg font-thin pt-[1%]'>KEVIN GIL</p>
            <p className='text-lg font-thin'>SOFTWARE ENGINEER</p>
            <p className='text-lg font-thin'>
              <a href='tel:+19734543616'>973-454-3616</a>
            </p>
            <p className='text-lg font-thin'>
              <a href='mailto:93kevingil@gmail.com'>93KEVINGIL@GMAIL.COM</a>
            </p>
            <p className='flex justify-between text-lg font-thin px-[5%] w-[100%] max-w-[400px]'>
              <a href='https://github.com/kebinghill' target='_blank'>
                GITHUB
              </a>
              <a href='https://linkedin.com/in/kebinghill' target='_blank'>
                LINKEDIN
              </a>
            </p>
          </div>
        )}
        {showSection === resumeSections.SUMMARY && (
          <div className='border'>
            <p className='flex justify-center text-2xl font-extralight border-b w-[100%]'>
              SUMMARY
            </p>
            <p className='flex items-center text-lg font-thin p-[2%]'>
              Full Stack software developer with extensive knowledge of building
              web applications using a variety of languages and frameworks
              looking for a full-time remote position. Passionate about
              improving user experience by improving on current features and
              building new ones in a fast-paced production environment.
            </p>
          </div>
        )}
        {showSection === resumeSections.SKILLS && (
          <div className='border'>
            <p className='flex justify-center text-2xl font-extralight border-b w-[100%]'>
              SKILLS
            </p>
            <div className='flex flex-col pl-[5%] py-[2%]'>
              <p className='text-xl font-extralight underline decoration-0'>
                LANGUAGES
              </p>
              <p className='text-lg font-thin px-[5%]'>
                Javascript, Typescript
              </p>
              <p className='text-xl font-extralight underline decoration-0'>
                FRONTEND
              </p>
              <p className='text-lg font-thin px-[5%]'>
                HTML, CSS, React, Redux, NextJS, Ant Design, Tailwind CSS,
                Material UI, Axios
              </p>
              <p className='text-xl font-extralight underline decoration-0'>
                BACKEND
              </p>
              <p className='text-lg font-thin px-[5%]'>
                Node, PostgreSQL, TypeORM, NestJS, Sequelize{' '}
              </p>
              <p className='text-xl font-extralight underline decoration-0'>
                OTHER
              </p>
              <p className='text-lg font-thin px-[5%]'>
                Moment-tz, Lodash, Jest, Design and development of APIs, Web
                Architecture, Git, HTTP, REST, Database Storage, Design
                Fundamentals, NPM, AWS, Docker Soft: Complex problem-solving,
                attention to detail, prioritization
              </p>
            </div>
          </div>
        )}
        {showSection === resumeSections.EXPERIENCE && (
          <div className='border'>
            <p className='flex justify-center text-2xl font-extralight border-b w-[100%]'>
              WORK EXPERIENCE
            </p>
            <div className='flex flex-col px-[5%] py-[2%]'>
              <p className='text-xl font-extralight underline decoration-0'>
                Software Engineer
              </p>
              <p className='text-sm font-thin pb-[1%]'>
                MONUMENT | NEW YORK, NY | 2022 - 2023
              </p>
              <p className='text-base italic font-extralight pb-[1%]'>
                Contributed to the development and enhancement of features in
                backend and frontend repositories for a telehealth start-up.
              </p>
              <li className='text-base font-thin pb-[1%]'>
                Created and implemented the “Daily Affirmations” feature,
                allowing users to receive personalized affirmations on their
                dashboards. Integrated with Customer.io to send affirmations via
                text messages to opted-in users.
              </li>
              <li className='text-base font-thin pb-[1%]'>
                Developed relational tables, services methods, and testing to
                facilitate the integration of employers on the app, expanding
                our reach and providing additional support to those in need.
              </li>
              <li className='text-base font-thin pb-[1%]'>
                Resolved various user experience bugs promptly and effectively
                to ensure seamless usage of the application.
              </li>
              <p className='text-xl font-extralight underline decoration-0'>
                Manager of Care Coordination
              </p>
              <p className='text-sm font-thin pb-[1%]'>
                MONUMENT | NEW YORK, NY | 2020 - 2022
              </p>
              <p className='text-base italic font-extralight pb-[1%]'>
                Managed a small team of 5 care coordinators to assist members
                with their user experience on the telehealth platform.
              </p>
              <li className='text-base font-thin pb-[1%]'>
                Documented support processes and escalated bugs to the
                engineering team.
              </li>
              <li className='text-base font-thin pb-[1%]'>
                Maintained above an overall 90% satisfaction rating amongst app
                users.
              </li>
              <p className='text-xl font-extralight underline decoration-0'>
                Technical Support Associate
              </p>
              <p className='text-sm font-thin pb-[1%]'>
                PELOTON | NEW YORK, NY | 2017 - 2019
              </p>
              <p className='text-base italic font-extralight pb-[1%]'>
                Connected directly with Peloton users to troubleshoot hardware
                and software technical complications.
              </p>
              <li className='text-base font-thin pb-[1%]'>
                Provided support for both the Peloton native app and Peloton
                bike.
              </li>
            </div>
          </div>
        )}
        {showSection === resumeSections.EDUCATION && (
          <div className='border'>
            <p className='flex justify-center text-2xl font-extralight border-b w-[100%]'>
              EDUCATION
            </p>
            <div className='flex flex-col items-center px-[4%]'>
              <p className='text-lg font-thin pt-[2%] text-center'>
                Full Stack Software Engineering Immersive Bootcamp - 2021
              </p>
              <p className='text-base font-extralight pb-[4%]'>
                Fullstack Academy [ New York, NY ]
              </p>
              <p className='text-lg font-thin text-center'>
                Bachelor of Science in Nuclear Medicine Technology - 2015
              </p>
              <p className='text-base font-extralight pb-[2%]'>
                Manhattan College [ Bronx, NY ]
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
