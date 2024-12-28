interface Skill {
    name: string;
    level: number;
}

interface SkillCardProps {
    title: string;
    skills: Skill[];
}

export default function SkillCard({title, skills}: SkillCardProps) {
    return (
        <div
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-800/50">
            <h3 className="text-xl font-bold text-white  mb-4 text-center">{title}</h3>
            <div className="space-y-4">
                {skills.map((skill, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800/50 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-blue-900 to-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{width: `${skill.level}%`}}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}