import React from 'react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: 'Test Automation Eng Specialist',
    company: 'ACCENTURE (CLIENT: BWP)',
    period: 'NOV 2021 - check',
    responsibilities: [
      'Developed and maintained a comprehensive test suite for regression testing',
      'Collaborated with stakeholders to understand project needs',
      'Integrated testing into the GitLab pipeline for continuous integration',
      'Created the Grafana Dashboard and implemented query language'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'WIPRO (CLIENT: CAPITALONE UK-SWAPS/GATEWAY)',
    period: 'FEB 2017 - OCT 2021',
    responsibilities: [
      'Collaborated with stakeholders to define comprehensive test plans',
      'Designed and maintained automated test scripts',
      'Implemented and maintained robust test frameworks',
      'Mentored junior team members'
    ]
  },
  {
    title: 'Test Engineer',
    company: 'WIPRO (CLIENT: CAPITALONE UK - QUICK CHECK)',
    period: 'SEP 2013 - JAN 2017',
    responsibilities: [
      'Developed and executed test plans and test cases',
      'Automated testing processes using Selenium WebDriver',
      'Implemented continuous integration practices',
      'Collaborated on performance testing initiatives'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
}