import { Github, Linkedin, Twitter, Youtube, BookOpen } from 'lucide-react';

const Sidebar = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/amish-kumar-07', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/amish-kumar-singh-78a454243/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/am732389', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@arsen3468', label: 'YouTube' },
    { icon: <BookOpen size={20} />, href: 'https://drive.google.com/file/d/1BCoDF7PNpLJXmuNca7pBz9bAwmgO8g1A', label: 'Resume' },
  ];

  return (
    <div className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col items-center justify-center w-20">
      <div className="flex flex-col items-center space-y-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-500 transition-colors duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}

        <div className="h-24 w-px bg-gray-300 mt-6"></div>
      </div>
    </div>
  );
};

export default Sidebar;