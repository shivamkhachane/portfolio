import { ArrowUpRight, Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram,
  Facebook,
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home">SK<span>.</span></a>
      <p>Shivam Khachane <span>·</span> Application Engineer</p>
      <div className="footer-socials" aria-label="Social profiles">
        {portfolio.socialLinks.map(({ label, href }) => {
          const Icon = socialIcons[label];
          return (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
              <Icon size={15} aria-hidden="true" />
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          );
        })}
      </div>
      <small>© {new Date().getFullYear()} Shivam Khachane</small>
    </footer>
  );
}
