import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Manojkumar Kasiviswanathan</h1>
            <h2 className="text-xl md:text-2xl mb-6">Senior Test Automation Eng & DevOps Specialist</h2>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/manojkumar-kasiviswanathan-7684873" 
                 className="hover:text-blue-200 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:manojkumar.kasiviswanathan@gmail.com" 
                 className="hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/yourgithub" 
                 className="hover:text-blue-200 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&h=300" 
              alt="Professional headshot"
              className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}