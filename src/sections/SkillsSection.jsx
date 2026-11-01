import { Database, LayoutDashboard, Server, Wrench } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading.jsx';

const groupIcons = {
  server: Server,
  database: Database,
  layout: LayoutDashboard,
  wrench: Wrench,
};

export default function SkillsSection() {
  return (
    <section className="skills-section page-section" id="skills" aria-labelledby="skills-title">
      <div className="content-width">
        <SectionHeading eyebrow="Skills & technologies" title="The tools behind the work." description="A practical toolkit built across enterprise applications, databases, and the web." id="skills-title" />
        <div className="skills-grid">
          {portfolio.skillGroups.map((group, index) => {
            const Icon = groupIcons[group.icon];
            return (
              <article className="skill-group reveal-up" key={group.title} style={{ '--stagger-index': index }}>
                <div className="skill-group-heading">
                  <span className="skill-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                  <h3>{group.title}</h3>
                  <span className="skill-count">0{index + 1}</span>
                </div>
                <ul className="skill-list">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
