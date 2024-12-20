import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/manojkumar-kasiviswanathan-7a8aa973",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:manojkumar.kasiviswanathan@gmail.com",
    label: "Email"
  },
  {
    icon: Github,
    href: "https://github.com/manojkumar-kasiviswanathan",
    label: "GitHub"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            className="transform hover:scale-110 transition-all duration-200 hover:text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
}