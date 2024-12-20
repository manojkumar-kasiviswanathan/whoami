import SkillCard from './SkillCard';

const skillCategories = [
  {
    title: 'Testing',
    skills: [
      { name: 'API Testing', level: 100 },
      { name: 'REST Assured', level: 100 },
      { name: 'Cucumber', level: 100 },
      { name: 'Playwright', level: 95 },   
      { name: 'Cypress', level: 95 },
      { name: 'Selenium', level: 95 },
      { name: 'Performance Testing', level: 80 },
     
    ]
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Shell Scripting', level: 100 }
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 85 },
      { name: 'AWS', level: 95 },
      { name: 'Jenkins', level: 95 }
    ]
  },{
    title: 'Tools & Frameworks',
    skills: [
      { name: 'Maven', level: 95 },
      { name: 'Gradle', level: 85 },
      { name: 'Postman', level: 95 },
      { name: 'Grafana', level: 90 },
      { name: 'Prometheus', level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}