

import {CiCalendar} from "react-icons/ci";
import {LuBuilding2} from "react-icons/lu";
import {IoChevronDownCircleOutline} from "react-icons/io5";

import TimelinePoint from './TimelinePoint';
import {useState} from "react";

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description?: string;
    responsibilities: string[];
}

export default function ExperienceCard({
                                           title,
                                           company,
                                           period,
                                           description,
                                           responsibilities
                                       }: ExperienceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative pl-8 pb-12">
            <TimelinePoint isActive={isExpanded}/>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-left group bg-gray-900/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                                <LuBuilding2 size={16}/>
                                <span>{company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CiCalendar size={16}/>
                                <span>{period}</span>
                            </div>
                        </div>
                        {description && (
                            <p className="text-gray-400 text-sm">{description}</p>
                        )}
                    </div>
                    <IoChevronDownCircleOutline
                        className={`w-5 h-5 text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                        }`}
                    />
                </div>
            </button>

            <div
                className={`mt-4 space-y-3 overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                {responsibilities.map((resp, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 pl-4 bg-gray-900/30 p-3 rounded-lg"
                    >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                        <p className="leading-relaxed">{resp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}