import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'Shell Scripting']
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'GitLab']
  },
  {
    title: 'Testing',
    skills: ['Selenium', 'Cucumber', 'JUnit', 'TestNG', 'API Testing', 'Performance Testing']
  },
  {
    title: 'Tools & Frameworks',
    skills: ['Maven', 'Gradle', 'Postman', 'Grafana', 'Prometheus']
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}