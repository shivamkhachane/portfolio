import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { portfolio } from '../data/portfolio.js';

export default function ProjectsSection() {
  return (
    <section className="projects-section page-section" id="projects" aria-labelledby="projects-title">
      <div className="content-width">
        <SectionHeading eyebrow="Selected projects" title="Ideas, made tangible." description="A personal build and a collaborative computer-vision project." id="projects-title" />
        <div className="projects-grid">
          {portfolio.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
