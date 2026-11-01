import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import AboutSection from './sections/AboutSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import ExperienceEducationSection from './sections/ExperienceEducationSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Footer from './components/Footer.jsx';
import IntroLoader from './components/IntroLoader.jsx';
import Navigation from './components/Navigation.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import usePortfolioMotion from './hooks/usePortfolioMotion.js';

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // Use the system preference when storage is unavailable.
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const shellRef = useRef(null);
  const [theme, setTheme] = useState(getInitialTheme);
  const [introComplete, setIntroComplete] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  usePortfolioMotion(shellRef, introComplete);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.documentElement.style.backgroundColor = theme === 'light' ? '#f1f5fa' : '#000';
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme selection still works for the current visit.
    }
  }, [theme]);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 560);
    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return undefined;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(sectionId))?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');
  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <div className="portfolio-shell" data-theme={theme} ref={shellRef}>
      {!introComplete && <IntroLoader onComplete={handleIntroComplete} />}
      <ScrollProgress />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation theme={theme} onThemeToggle={toggleTheme} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceEducationSection />
        <ContactSection />
      </main>
      <Footer />
      <CustomCursor />
      <button className={`back-to-top${showBackToTop ? ' is-visible' : ''}`} type="button" onClick={scrollToTop} aria-label="Back to top" tabIndex={showBackToTop ? 0 : -1}>
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
