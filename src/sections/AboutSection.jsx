import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Layers3 } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading.jsx';

const statIcons = [BriefcaseBusiness, Layers3, GraduationCap];

export default function AboutSection() {
  return (
    <section className="about-section page-section" id="about" aria-labelledby="about-title">
      <div className="content-width">
        <SectionHeading eyebrow="About me" title="Built on curiosity.\nGrounded in engineering." id="about-title" />
        <div className="about-grid">
          <figure className="about-photo reveal-image">
            <img src={portfolio.aboutPortrait} alt="Shivam Khachane by a riverside" width="640" height="960" loading="lazy" />
            <figcaption><span className="photo-marker" /> Based in {portfolio.location}</figcaption>
          </figure>
          <div className="about-copy">
            <p className="about-lead reveal-up">I work where dependable software meets the details that make it useful.</p>
            <p className="body-copy reveal-up">At Newgen Software Technologies, I develop and maintain enterprise BFSI applications, including a retail loan procedure system. My work spans backend development, production support, and collaboration with teams to keep business-critical workflows reliable.</p>
            <p className="body-copy reveal-up">I bring a foundation in Java, relational databases, and web development, with a practical interest in solving problems clearly and carefully.</p>
            <a className="text-action magnetic" href={portfolio.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a>
            <div className="about-stats" aria-label="Career and education highlights">
              {portfolio.stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <div className="stat-item reveal-up" key={stat.label}>
                    <Icon size={17} aria-hidden="true" />
                    <p className="stat-value"><span data-counter data-value={stat.value} data-decimals={stat.decimals}>{stat.value.toFixed(stat.decimals)}</span>{stat.suffix}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
