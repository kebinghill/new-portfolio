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
    <>
      <div className='bg-cover bg-center bg-no-repeat bg-[url("/resume.png")] rounded sm:w-[100vw] max-w-[600px] aspect-[3/4] flex flex-col'>
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
      <div>
        {showSection === resumeSections.CONTACT && (
          <div>
            <h1>CONTACT</h1>
            <h2>KEVIN GIL</h2>
            <h3>SOFTWARE ENGINEER</h3>
            <p>PHONE: 973-454-3616</p>
            <p>EMAIL: 93kevingil@gmail.com</p>
            <p>GITHUB: https://github.com/kebinghill</p>
            <p>LINKEDIN: https://linkedin.com/in/kebinghill</p>
          </div>
        )}
        {showSection === resumeSections.SUMMARY && (
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
        {showSection === resumeSections.SKILLS && (
          <div>
            <h2>SKILLS</h2>

            <h4>LANGUAGES</h4>
            <p>Javascript, Typescript</p>
            <h4>FRONTEND</h4>
            <p>
              HTML, CSS, React, Redux, NextJS, Ant Design, Tailwind CSS,
              Material UI, Axios
            </p>
            <h4>BACKEND</h4>
            <p>Node, PostgreSQL, TypeORM, NestJS, Sequelize </p>
            <h4>OTHER</h4>
            <p>
              Moment-tz, Lodash, Jest, Design and development of APIs, Web
              Architecture, Git, HTTP, REST, Database Storage, Design
              Fundamentals, NPM, AWS, Docker Soft: Complex problem-solving,
              attention to detail, prioritization
            </p>
          </div>
        )}
        {showSection === resumeSections.EXPERIENCE && (
          <div>
            <h1>WORK EXPERIENCE</h1>
            <p>Software Engineer</p>
            <p>MONUMENT | NEW YORK, NY | 2022 - 2023</p>{' '}
            <p>
              Contributed to the development and enhancement of features in
              backend and frontend repositories for a telehealth start-up.
            </p>
            <ul>
              <li>
                ▪ Created and implemented the “Daily Affirmations” feature,
                allowing users to receive personalized affirmations on their
                dashboards. Integrated with Customer.io to send affirmations via
                text messages to opted-in users.
              </li>
              <li>
                ▪ Developed relational tables, services methods, and testing to
                facilitate the integration of employers on the app, expanding
                our reach and providing additional support to those in need.
              </li>
              <li>
                ▪ Resolved various user experience bugs promptly and effectively
                to ensure seamless usage of the application.
              </li>
            </ul>
            <p>Manager of Care Coordination</p>
            <p>MONUMENT | NEW YORK, NY | 2020 - 2022</p>
            <p>
              Managed a small team of 5 care coordinators to assist members with
              their user experience on the telehealth platform.
            </p>
            <ul>
              <li>
                ▪ Documented support processes and escalated bugs to the
                engineering team.
              </li>
              <li>
                ▪ Maintained above an overall 90% satisfaction rating amongst
                app users.
              </li>
            </ul>
            <p>Technical Support Associate</p>
            <p>PELOTON | NEW YORK, NY | 2017 - 2019</p>
            <p>
              Connected directly with Peloton users to troubleshoot hardware and
              software technical complications.
            </p>
            <ul>
              <li>
                ▪ Provided support for both the Peloton native app and Peloton
                bike.
              </li>
            </ul>
          </div>
        )}
        {showSection === resumeSections.EDUCATION && (
          <div>
            <h1>EDUCATION</h1>
            <p>Fullstack Software Engineering Immersive Bootcamp - 2021</p>
            <p>Full-Stack Academy (New York, NY)</p>
            <p>Bachelor of Science in Nuclear Medicine Technology - 2015</p>
            <p>Manhattan College (Bronx, NY)</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
