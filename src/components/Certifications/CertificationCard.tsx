import { Award } from 'lucide-react';
import { FaAws } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  iconType: string;
}

export default function CertificationCard({ title, issuer, date,iconType }: CertificationCardProps) {
 
  let Icon;
  switch (iconType) {
    case 'aws':
      Icon = FaAws;
      break;
    case 'java':
      Icon = FaJava;
      break;
    default:
      Icon = Award; // default icon if no match
      break;
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{issuer}</p>
          <p className="text-sm text-gray-500 mt-1">{date}</p>
        </div>
      </div>
    </div>
  );
}