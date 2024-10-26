// pages/resume.js
import React from "react";

const ProjectResume = () => {
  const data = {
    name: "Aravinth Ponnusamy",
    contact: {
      email: "aravinth.cs@gmail.com",
      phone: "+44 7404359067",
      linkedin: "https://www.linkedin.com/in/aravinthponnusamy/",
      youtube: "https://www.youtube.com/@17thsep87",
    },
    summary: [
      "15 years as an SDET in the banking sector, working with major banks in the US and UK.",
      "Has a strong history of delivering Quality products in migration, transformation, and new development projects.",
      "Excels at creating effective automation frameworks and implementing robust test strategy for web, API, and mobile applications.",
    ],
    highlights: [
      "Adopted novel mechanisms in object identification to reduce failures in Automation.",
      "Developed prototype of the application to test viability using Excel Macros in weeks to ensure transformation happened.",
      "Devised robust test strategy for various types of applications adopting strategies like Shift Left and Fail fast.",
      "Specializes in delivering quality products following best practices.",
    ],
    skills: {
      programming_languages: ["Javascript", "Python", "VBA", "SQL", "Java", "Bash"],
      tools_known: {
        UI_Automation: ["Playwright", "Cypress", "Selenium", "WebdriverIO", "Cucumber", "Mocha", "TestNG"],
        API_Testing: ["Supertest", "RestAssured", "Mocha", "Postman", "Bruno", "Swagger"],
        Mobile: ["Appium"],
        CICD: ["Docker", "Jenkins", "Git"],
        Sysops: ["Prometheus", "Grafana", "Nginx"],
        UI_Dev: ["React (Basics)"],
        Backend_Dev: ["Python (Flask)"],
        DB: ["SQL", "Mongo", "SQLite", "Postgres"],
        Mocking: ["Wiremock", "Cypress"],
        Data_comparison: ["Beyond Compare"],
      },
    },
    experience: [
      {
        title: "Senior SDET (TCS - Lloyds Banking Group)",
        location: "London, UK",
        dates: "Oct 2018 – Present",
        bullets: [
          "Developed an automation framework and CI/CD pipeline for both UI using WebdriverIO, Playwright, Jenkins, and Docker.",
          "Developed API testing framework using Supertest.",
          "Instilled a culture of quality within the team by promoting best practices in Agile methodologies.",
          "Designed comprehensive test strategies tailored to diverse application types.",
          "Mentored junior quality engineers and developed tools with Excel to evaluate business logic for faster feedback.",
        ],
      },
      {
        title: "Automation Architect (TCS - Citi Bank)",
        location: "Chennai, India",
        dates: "Sep 2017 – Oct 2018",
        bullets: [
          "Developed automation framework for Flexcube and core banking application using Selenium and Java.",
          "Mentored and managed a team of automation engineers.",
        ],
      },
      {
        title: "Test Manager (TCS - BofA Merrill Lynch)",
        location: "NJ, USA",
        dates: "Mar 2013 – Aug 2017",
        bullets: [
          "Led quality certification of Merrill Lynch’s iPad application with a team of 20 people.",
          "Devised Release plans, test strategies, and effort estimation.",
          "Performed Conformance testing and all release readiness activities for the App store.",
          "Mentored and led a team of functional/automation engineers.",
        ],
      },
    ],
    education: {
      degree: "B.E. Computer Science and Engineering",
      institution: "Anna University",
      location: "Coimbatore, Tamil Nadu, India",
      years: "2005-2009",
    },
  };

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p>Email: <a className="text-blue-600" href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
        <p>Phone: {data.contact.phone}</p>
        <p>LinkedIn: <a className="text-blue-600" href={data.contact.linkedin}>{data.contact.linkedin}</a></p>
        <p>YouTube: <a className="text-blue-600" href={data.contact.youtube}>{data.contact.youtube}</a></p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <ul className="list-disc ml-5">
          {data.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Highlights</h2>
        <ul className="list-disc ml-5">
          {data.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <h3 className="text-xl">Programming Languages</h3>
        <ul className="list-disc ml-5">
          {data.skills.programming_languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>

        <h3 className="text-xl mt-4">Tools Known</h3>
        {Object.keys(data.skills.tools_known).map((category, index) => (
          <div key={index}>
            <h4 className="font-semibold mt-2">{category.replace(/_/g, ' ')}</h4>
            <ul className="list-disc ml-5">
              {data.skills.tools_known[category].map((tool, toolIndex) => (
                <li key={toolIndex}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="italic">{job.location} | {job.dates}</p>
            <ul className="list-disc ml-5">
              {job.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>{data.education.degree}</p>
        <p>{data.education.institution}, {data.education.location}</p>
        <p>{data.education.years}</p>
      </section>
    </div>
  );
};

export default ProjectResume;