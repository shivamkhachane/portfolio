import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio.js';

export default function IntroLoader({ onComplete }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let finished = false;
    let exitTimer;
    const maxTimer = window.setTimeout(finish, 1500);
    const image = new Image();
    image.src = portfolio.portrait;
    const imageReady = image.decode ? image.decode().catch(() => undefined) : new Promise((resolve) => {
      image.onload = resolve;
      image.onerror = resolve;
    });
    const fontReady = document.fonts?.ready ?? Promise.resolve();

    function finish() {
      if (finished) return;
      finished = true;
      window.clearTimeout(maxTimer);
      setLeaving(true);
      exitTimer = window.setTimeout(onComplete, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 320);
    }

    Promise.all([imageReady, fontReady]).then(finish);
    return () => {
      finished = true;
      window.clearTimeout(maxTimer);
      window.clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-loader${leaving ? ' is-leaving' : ''}`} role="status" aria-label="Loading portfolio">
      <div className="loader-content">
        <span className="loader-initials">SK<span>.</span></span>
        <p>Shivam Khachane</p>
        <span className="loader-role">{portfolio.role}</span>
        <span className="loader-track" aria-hidden="true"><span /></span>
      </div>
    </div>
  );
}
