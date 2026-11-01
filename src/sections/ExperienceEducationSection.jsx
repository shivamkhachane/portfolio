import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading.jsx';

function TimelineEntry({ icon: Icon, period, title, organization, children, current }) {
  return (
    <li className="timeline-entry reveal-up">
      <span className={`timeline-node${current ? ' is-current' : ''}`} aria-hidden="true"><Icon size={15} /></span>
      <article className="timeline-card">
        <div className="timeline-meta"><span>{period}</span>{current && <span className="current-label">Current</span>}</div>
        <h4>{title}</h4>
        <p className="timeline-organization">{organization}</p>
        {children}
      </article>
    </li>
  );
}

export default function ExperienceEducationSection() {
  return (
    <section className="journey-section page-section" id="experience" aria-labelledby="journey-title">
      <div className="content-width">
        <SectionHeading eyebrow="Experience & education" title="Learning, then building." description="Professional experience and education, grounded in the timeline from my resume." id="journey-title" />
        <div className="journey-grid">
          <div className="timeline-column">
            <h3 className="subsection-title"><BriefcaseBusiness size={18} aria-hidden="true" /> Experience</h3>
            <ol className="timeline-list">
              {portfolio.experience.map((entry) => (
                <TimelineEntry key={entry.organization} icon={BriefcaseBusiness} period={entry.period} title={entry.role} organization={entry.organization} current={entry.current}>
                  <ul className="experience-points">
                    {entry.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </TimelineEntry>
              ))}
            </ol>
          </div>
          <div className="timeline-column education-column">
            <h3 className="subsection-title"><GraduationCap size={19} aria-hidden="true" /> Education</h3>
            <ol className="timeline-list">
              {portfolio.education.map((entry) => (
                <TimelineEntry key={entry.qualification} icon={GraduationCap} period={entry.period} title={entry.qualification} organization={entry.institution}>
                  <p className="education-result">{entry.result}</p>
                </TimelineEntry>
              ))}
            </ol>
          </div>
        </div>
        <div className="certifications-block reveal-up">
          <h3 className="subsection-title"><Award size={18} aria-hidden="true" /> Certifications</h3>
          <ul className="certification-list">
            {portfolio.certifications.map((certification) => (
              <li key={certification.name}>
                <span>{certification.name}</span>
                <span>{certification.provider} <i>·</i> {certification.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
