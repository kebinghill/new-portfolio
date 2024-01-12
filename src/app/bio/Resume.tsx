'use client';

import { useState, useRef, useEffect } from 'react';

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

  const scrollRef = useRef<HTMLInputElement>(null);

  const handleOnClick = (section: sectionValues) => {
    setShowSection(section);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [showSection]);

  const handleOnMouseLeave = () => {
    setShowHoverSection('');
  };

  return (
    <div className='flex flex-col items-center md:flex-row md:justify-center md:items-start'>
      <div>
        <div className='flex justify-center text-lg font-extralight'>
          CLICK ON A SECTION BELOW
        </div>
        <div className='bg-cover bg-center bg-no-repeat bg-[url("/resume-2.png")] rounded w-[100vw] md:w-[600px] aspect-[3/4] flex flex-col'>
          <button
            onMouseEnter={() => setShowHoverSection(resumeSections.CONTACT)}
            onMouseLeave={() => handleOnMouseLeave()}
            onClick={() => handleOnClick(resumeSections.CONTACT)}
            className='flex-[0.85]'
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
            className='flex-[0.72]'
          >
            {showHoverSection === resumeSections.SUMMARY && (
              <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
                SUMMARY
              </div>
            )}
          </button>
          <button
            onMouseEnter={() => setShowHoverSection(resumeSections.EXPERIENCE)}
            onMouseLeave={() => handleOnMouseLeave()}
            onClick={() => handleOnClick(resumeSections.EXPERIENCE)}
            className='flex-[4]'
          >
            {showHoverSection === resumeSections.EXPERIENCE && (
              <div className='flex justify-center items-center  text-5xl bg-stone-900/90 h-[100%]'>
                WORK EXPERIENCE
              </div>
            )}
          </button>
          <button
            onMouseEnter={() => setShowHoverSection(resumeSections.SKILLS)}
            onMouseLeave={() => handleOnMouseLeave()}
            onClick={() => handleOnClick(resumeSections.SKILLS)}
            className='flex-[0.7]'
          >
            {showHoverSection === resumeSections.SKILLS && (
              <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
                SKILLS
              </div>
            )}
          </button>
          <button
            onMouseEnter={() => setShowHoverSection(resumeSections.EDUCATION)}
            onMouseLeave={() => handleOnMouseLeave()}
            onClick={() => handleOnClick(resumeSections.EDUCATION)}
            className='flex-[1.05]'
          >
            {showHoverSection === resumeSections.EDUCATION && (
              <div className='flex justify-center items-center text-5xl bg-stone-900/90 h-[100%]'>
                EDUCATION
              </div>
            )}
          </button>
        </div>
      </div>
      <div className='w-[100%] md:w-[600px]'>
        <div ref={scrollRef}></div>
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
            <p className='flex items-center text-lg font-thin px-[4%] py-[2%]'>
              Skilled Full Stack software developer adept at crafting robust web
              applications, seeking a full-time role to leverage expertise in
              driving impactful technological advancements.Dedicated to
              elevating user experience through iterative enhancements of
              existing features and the efficient development of innovative
              features.
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
                Made significant contributions to the backend and frontend of a
                pioneering telehealth startup, using NestJS and React,
                Javascript and Typescript.
              </p>
              <li className='text-base font-thin pb-[1%]'>
                Innovated and implemented the widely requested &quot;Daily
                Affirmations&quot; feature, empowering users with personalized
                affirmations directly on their dashboards. Seamlessly integrated
                with Customer.io to deliver affirmations via text messages. This
                allowed Monument&apos;s features to come into parity with an
                acquired service (Tempest), so that Tempest&apos;s users would
                be more familiar with the platform when migrated over to
                Monument.
              </li>
              <li className='text-base font-thin pb-[1%]'>
                Engineered relational tables, service methods, and rigorous
                testing procedures, utilizing SQL and RESTful APIs within
                NestJS, to enable seamless integration of employers onto the
                platform extending crucial support to a larger demographic
                within our user community. Employer analytics has aided in
                communicating anonymized data with partners about the
                effectiveness of the Monument program.
              </li>
              <li className='text-base font-thin pb-[1%]'>
                Proactively identified and resolved complex user experience bugs
                using Agile methodologies and Asana, resulting in enhanced user
                satisfaction and uninterrupted application usage.
              </li>
              <p className='text-xl font-extralight underline decoration-0'>
                Manager of Care Coordination
              </p>
              <p className='text-sm font-thin pb-[1%]'>
                MONUMENT | NEW YORK, NY | 2020 - 2022
              </p>
              <p className='text-base italic font-extralight pb-[1%]'>
                Led the successful implementation of Zendesk, streamlining
                support operations and enhancing the efficiency of issue
                resolution for a rapidly growing user base. Success in this role
                allowed a career pivot into development where praise from senior
                management and peers was earned, as shown in LinkedIn
                testimonials.
              </p>
              <li className='text-base font-thin pb-[1%]'>
                Built and nurtured a high-performing care coordination team,
                fostering a culture of innovation and collaboration that
                contributed significantly to scaling Monument&apos;s support
                capabilities to meet escalating user demands.
              </li>
              <li className='text-base font-thin pb-[1%]'>
                Played a pivotal role in solidifying Monument&apos;s position as
                a leading health tech organization, implementing strategic
                initiatives that optimized user experience and ensured
                industry-leading support standards, contributing to elevated
                user satisfaction and brand loyalty.
              </li>
              <li className='text-base font-thin pb-[1%]'>
                Partnered with engineering and product teams to push for an
                in-house scheduling system which contributed to improved
                clinician and user experience based on feedback.
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
                Provided support for both the Peloton native application and
                Peloton bike.
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
