import React from 'react';
import CertificationCard from './CertificationCard';
import { certifications } from './Certifications';

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-50" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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