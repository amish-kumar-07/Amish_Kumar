import { ChevronDown } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-16 px-6 lg:pl-24 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(#f1f1f1 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-yellow-500 font-medium mb-4 tracking-wide">
            FULL STACK DEVELOPER
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            HEY, I'M AMISH KUMAR
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
             A Full Stack focused Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#projects" primary>
              PROJECTS
            </Button>
            <Button href="#contact" primary={false}>
              CONTACT ME
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-yellow-500 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;