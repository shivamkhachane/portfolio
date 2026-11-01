import { ArrowUpRight, BookOpen, Hand } from 'lucide-react';

const projectIcons = {
  book: BookOpen,
  hand: Hand,
};

export default function ProjectCard({ project, index }) {
  const Icon = projectIcons[project.icon] ?? BookOpen;

  return (
    <article className="project-card reveal-up" data-tilt>
      <div className={`project-visual project-visual--${project.icon}`} aria-hidden="true">
        <span className="project-index">0{index + 1}</span>
        <Icon className="project-visual-icon" strokeWidth={1.1} />
        <span className="project-visual-label">{project.kind}</span>
      </div>
      <div className="project-content">
        <p className="project-kind">{project.kind}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-details">{project.details}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {(project.github || project.demo) && (
          <div className="project-links">
            {project.github && <a className="text-action" href={project.github} target="_blank" rel="noreferrer">Source <ArrowUpRight size={15} /></a>}
            {project.demo && <a className="text-action" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}
          </div>
        )}
      </div>
    </article>
  );
}
