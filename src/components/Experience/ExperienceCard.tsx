import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export default function ExperienceCard({ title, company, period, responsibilities }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center gap-4 mb-4 text-gray-600">
        <div className="flex items-center gap-1">
          <Building2 size={18} />
          <span>{company}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={18} />
          <span>{period}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((resp, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
            <span className="text-gray-700">{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}