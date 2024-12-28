import { FaAward } from "react-icons/fa";

import { FaAws } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTricentis } from "react-icons/si";

interface CertificationCardProps {
    title: string;
    issuer: string;
    date: string;
    iconType: string;
}

export default function CertificationCard({title, issuer, date, iconType}: CertificationCardProps) {
    let Icon;
    switch (iconType) {
        case 'aws':
            Icon = FaAws;
            break;
        case 'java':
            Icon = FaJava;
            break;
        case 'mongo':
            Icon = SiMongodb;
            break;
        case 'Tricentis':
            Icon = SiTricentis;
            break;
        default:
            Icon = FaAward; // default icon if no match
            break;
    }
    return (
        <div className="group bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300">
            <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-white"/>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-400">{issuer}</p>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
            </div>
        </div>
    );
}