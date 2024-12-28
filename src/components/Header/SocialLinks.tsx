import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/manojkumar-kasiviswanathan-7a8aa973/",
    label: "LinkedIn"
  },
  {
    icon: MdOutlineEmail,
    href: "mailto:manojkumar.kasiviswanathan@gmail.com",
    label: "Email"
  },
  {
    icon: FaGithub,
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
            className="group relative"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-200" />
            <Icon className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors relative" />
          </a>
        );
      })}
    </div>
  );
}