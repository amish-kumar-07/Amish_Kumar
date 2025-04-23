import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:pl-24 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="PROJECTS"
          subtitle="Here you will find some of the personal."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="https://github.com" primary={false} className="font-medium">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;