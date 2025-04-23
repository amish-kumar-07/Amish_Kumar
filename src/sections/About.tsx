import SectionHeading from '../components/SectionHeading';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript','C++','Python'] },
    { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:pl-24 bg-white">
      <div className="container mx-auto">
        <SectionHeading
          title="ABOUT ME"
          subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get to know me!</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a <strong>Full Stack Web Developer</strong> crafting both the Front-end and Back-end of Websites and Web Applications to deliver seamless, scalable, and impactful digital experiences. Check out some of my work in the <a href="#projects" className="text-yellow-500 hover:underline">Projects</a> section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">LinkedIn</a> where I post useful content related to Web Development and Programming.
              </p>
              <p>
                I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="#contact" className="text-yellow-500 hover:underline">contact me</a>.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-medium text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;