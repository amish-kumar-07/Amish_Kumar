import { Github, Linkedin, Twitter, Youtube, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/amish-kumar-07', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/amish-kumar-singh-78a454243/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/am732389', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com/@arsen3468', label: 'YouTube' },
    { icon: <BookOpen size={20} />, href: 'https://drive.google.com/file/d/1BCoDF7PNpLJXmuNca7pBz9bAwmgO8g1A', label: 'Resume' },
  ];

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold text-gray-900 mb-6">
            AMISH<span className="text-yellow-500">.</span>
          </a>
          
          <div className="flex space-x-6 mb-8">
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
          </div>
          
          <p className="text-gray-600 text-center">
            &copy; {currentYear} Amish Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;