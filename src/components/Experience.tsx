import React from 'react';

const experiences = [
  {
    title: 'Test Automation Eng Specialist',
    company: 'ACCENTURE (CLIENT: BWP)',
    period: 'NOV 2021 - new',
    responsibilities: [
      'Developed and maintained a comprehensive test suite for regression testing',
      'Collaborated with stakeholders to understand project needs',
      'Integrated testing into the GitLab pipeline for continuous integration',
      'Created the Grafana Dashboard and implemented query language'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'WIPRO (CLIENT: CAPITALONEUK-UK SWAPS/GATEWAY)',
    period: 'FEB 2017 - OCT 2021',
    responsibilities: [
      'Collaborated with stakeholders to define comprehensive test plans',
      'Designed and maintained automated test scripts',
      'Implemented and maintained robust test frameworks',
      'Mentored junior team members'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600">{exp.title}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}