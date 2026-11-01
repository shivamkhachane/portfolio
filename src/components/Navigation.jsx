import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience & Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ theme, onThemeToggle }) {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0, 0.1, 0.35, 0.65] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="floating-nav" aria-label="Main navigation">
      <a className="brand-mark" href="#home" aria-label="Shivam Khachane, Home">SK<span>.</span></a>
      <div className="desktop-nav-links">
        {links.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : ''} aria-current={activeSection === id ? 'location' : undefined}>
            {label}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <a className="nav-resume magnetic" href={portfolio.resume} download="Shivam_Khachane_Resume.pdf" aria-label="Download resume">
          <Download size={15} aria-hidden="true" /><span>Resume</span>
        </a>
        <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className="mobile-nav-panel" id="mobile-navigation" hidden={!menuOpen}>
        {links.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : ''} aria-current={activeSection === id ? 'location' : undefined} onClick={closeMenu}>
            <span>{label}</span><span className="mobile-nav-index" aria-hidden="true">{String(links.findIndex((link) => link.id === id) + 1).padStart(2, '0')}</span>
          </a>
        ))}
        <a className="mobile-resume-link" href={portfolio.resume} download="Shivam_Khachane_Resume.pdf" onClick={closeMenu}><Download size={16} /> Download resume</a>
      </div>
    </nav>
  );
}
