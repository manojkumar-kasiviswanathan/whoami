import SkillCard from './SkillCard';
import {FaToolbox} from "react-icons/fa";

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
            { name: 'Java', level: 80 },
            { name: 'Python', level: 65 },
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
            { name: 'Prometheus', level: 80 },
            { name: 'WireMock', level: 100 },

        ]
    }
];

export default function Skills() {
    return (
        <section className="py-20" id="skills">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 rounded-xl bg-blue-500/10">
                        <FaToolbox className="w-6 h-6 text-blue-400"/>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Technical Expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent blur-3xl -z-10"/>
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