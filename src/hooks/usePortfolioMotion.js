import { useEffect } from 'react';

export default function usePortfolioMotion(scopeRef, introComplete) {
  useEffect(() => {
    if (!introComplete || !scopeRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let cancelled = false;
    let context;
    let media;
    let idleHandle;
    let fallbackHandle;

    const initialize = async () => {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled || !scopeRef.current) return;

      const gsap = gsapModule.gsap ?? gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;
      gsap.registerPlugin(ScrollTrigger);
      const root = scopeRef.current;

      context = gsap.context(() => {
        media = gsap.matchMedia();
        media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.hero-copy > *',
        { y: 22 },
        { y: 0, duration: 0.72, stagger: 0.09, ease: 'power2.out' },
      );
      gsap.fromTo('.hero-portrait .portrait-frame',
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.05, ease: 'power3.inOut', delay: 0.16 },
      );

      gsap.utils.toArray('.page-section', root).forEach((section) => {
        const elements = gsap.utils.toArray('.reveal-up', section);
        if (elements.length === 0) return;
        gsap.fromTo(elements,
          { y: 26 },
          {
            y: 0,
            duration: 0.7,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 88%', once: true },
          },
        );
      });

      const aboutImage = root.querySelector('.about-photo img');
      if (aboutImage) {
        gsap.fromTo(aboutImage,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.9,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: aboutImage, start: 'top 82%', once: true },
          },
        );
        gsap.to(aboutImage, {
          yPercent: -3,
          ease: 'none',
          scrollTrigger: { trigger: '.about-section', start: 'top bottom', end: 'bottom top', scrub: 0.65 },
        });
      }

      const counters = root.querySelectorAll('[data-counter]');
      if (counters.length > 0) {
        ScrollTrigger.create({
          trigger: root.querySelector('.about-stats'),
          start: 'top 90%',
          once: true,
          onEnter: () => {
            counters.forEach((element) => {
              const counter = { value: 0 };
              const target = Number(element.dataset.value);
              const decimals = Number(element.dataset.decimals || 0);
              gsap.to(counter, {
                value: target,
                duration: 1.25,
                ease: 'power2.out',
                onUpdate: () => { element.textContent = counter.value.toFixed(decimals); },
              });
            });
          },
        });
      }

      const cleanups = [];
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        root.querySelectorAll('.magnetic').forEach((element) => {
          const xTo = gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power3.out' });
          const yTo = gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power3.out' });
          const move = (event) => {
            const bounds = element.getBoundingClientRect();
            xTo((event.clientX - bounds.left - bounds.width / 2) * 0.12);
            yTo((event.clientY - bounds.top - bounds.height / 2) * 0.16);
          };
          const reset = () => { xTo(0); yTo(0); };
          element.addEventListener('pointermove', move);
          element.addEventListener('pointerleave', reset);
          cleanups.push(() => {
            element.removeEventListener('pointermove', move);
            element.removeEventListener('pointerleave', reset);
          });
        });

        root.querySelectorAll('[data-tilt]').forEach((card) => {
          const rotateX = gsap.quickTo(card, 'rotationX', { duration: 0.42, ease: 'power2.out' });
          const rotateY = gsap.quickTo(card, 'rotationY', { duration: 0.42, ease: 'power2.out' });
          const move = (event) => {
            const bounds = card.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            rotateX(y * -4);
            rotateY(x * 5);
          };
          const reset = () => { rotateX(0); rotateY(0); };
          card.addEventListener('pointermove', move);
          card.addEventListener('pointerleave', reset);
          cleanups.push(() => {
            card.removeEventListener('pointermove', move);
            card.removeEventListener('pointerleave', reset);
          });
        });
      }

      const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        window.cancelAnimationFrame(refreshFrame);
        cleanups.forEach((cleanup) => cleanup());
      };
        });
      }, root);
    };

    const schedule = window.requestIdleCallback
      ? () => { idleHandle = window.requestIdleCallback(() => initialize().catch(() => undefined), { timeout: 1500 }); }
      : () => { fallbackHandle = window.setTimeout(() => initialize().catch(() => undefined), 0); };
    schedule();

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle);
      if (fallbackHandle !== undefined) window.clearTimeout(fallbackHandle);
      media?.revert();
      context?.revert();
    };
  }, [scopeRef, introComplete]);
}
