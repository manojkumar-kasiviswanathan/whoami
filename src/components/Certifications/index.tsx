import CertificationCard from './CertificationCard';
import {certifications} from './Certifications';
import {FaAward} from "react-icons/fa";

export default function Certifications() {
    return (
        <section className="py-20" id="certifications">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 rounded-xl bg-blue-500/10">
                        <FaAward className="w-6 h-6 className=w-6 h-6 text-blue-400"/>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Certifications
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent blur-3xl -z-10"/>
                    {certifications.map((cert, index) => (
                        <CertificationCard
                            key={index}
                            title={cert.title}
                            issuer={cert.issuer}
                            date={cert.date}
                            iconType={cert.iconType}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}