import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function ContactSection() {
  return (
    <section className="contact-section page-section" id="contact" aria-labelledby="contact-title">
      <div className="content-width contact-inner">
        <SectionHeading eyebrow="Contact" title={<>LET'S WORK<br /><span>TOGETHER.</span></>} description="Have a role, a thoughtful question, or a software problem to solve? Get in touch." id="contact-title" />
        <a className="contact-cta magnetic" href={`mailto:${portfolio.email}`}>
          <span>Start a conversation</span><Mail size={21} aria-hidden="true" />
        </a>
        <div className="contact-details">
          <a href={`mailto:${portfolio.email}`}><Mail size={16} aria-hidden="true" />{portfolio.email}<ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={`tel:${portfolio.phoneHref}`}><Phone size={16} aria-hidden="true" />{portfolio.phone}<ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" />LinkedIn<ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" />GitHub<ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
