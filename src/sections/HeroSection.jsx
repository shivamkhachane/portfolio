import { ArrowDown, ArrowDownRight, Download, MapPin } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

export default function HeroSection() {
  return (
    <section className="hero-section page-section" id="home" aria-labelledby="home-title">
      <div className="hero-grid content-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-mark" aria-hidden="true" />{portfolio.role}</p>
          <h1 id="home-title">
            <span className="hero-heading-top">I build reliable</span>
            <span>software for</span>
            <span className="hero-heading-accent">real-world workflows.</span>
          </h1>
          <p className="hero-summary">{portfolio.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary magnetic" href="#projects">View projects <ArrowDownRight size={17} /></a>
            <a className="button button-outline magnetic" href="#contact">Contact me <ArrowDown size={16} /></a>
          </div>
          <a className="hero-resume-link magnetic" href={portfolio.resume} download="Shivam_Khachane_Resume.pdf"><Download size={15} /> Download resume</a>
          <p className="hero-location"><MapPin size={15} aria-hidden="true" />{portfolio.location}</p>
        </div>

        <figure className="hero-portrait reveal-image">
          <div className="portrait-frame">
            <img src={portfolio.portrait} alt="Shivam Khachane outdoors" width="640" height="960" fetchPriority="high" />
            <span className="portrait-index" aria-hidden="true">01 / 06</span>
            <figcaption><span>Java</span><span className="caption-divider" /><span>Enterprise software</span></figcaption>
          </div>
        </figure>
      </div>
      <a className="hero-scroll-hint" href="#about" aria-label="Scroll to About Me"><span>Scroll to explore</span><ArrowDown size={16} /></a>
    </section>
  );
}
