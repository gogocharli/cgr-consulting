import { initMainMenu } from './menu';
import { initFormModal } from './forms';
import anime from 'animejs';
import Splitting from 'splitting';

// Initialize Components
initMainMenu();
initFormModal();

Splitting();

const navItems = document.querySelectorAll(
  '.site-head__brand svg, .nav__list li',
);

const animateUpEls = document.querySelectorAll('[data-animate="fade-up"]');
const splitWordEls = document.querySelectorAll('[data-splitting="words"] > *');

const EASE_IN_OUT_SINE = 'cubicBezier(0.45, 0.05, 0.55, 0.95)';
anime.set(
  [
    ...animateUpEls,
    '.hero img',
    '#menu-toggle',
    '[data-animate="in-view"] > *',
  ],
  {
    opacity: 0,
    translateY: 20,
  },
);
anime.set(splitWordEls, { opacity: 0, translateY: 10, skewY: 1 });

const tl = anime.timeline({
  easing: EASE_IN_OUT_SINE,
});

tl.add({
  targets: [...navItems],
  opacity: 1,
  translateY: 0,
  duration: 500,
  delay: anime.stagger(150),
})
  .add(
    {
      targets: '#menu-toggle',
      opacity: 1,
      translateY: 0,
    },
    150,
  )
  .add(
    {
      targets: '.hero h1 > *',
      opacity: 1,
      translateY: 0,
      duration: 400,
      skewY: 0,
      delay: anime.stagger(10),
    },
    '-=300',
  )
  .add({ targets: '.hero img', opacity: 1, translateY: 0 }, '-=400')
  .add(
    {
      targets: '.hero__text > *',
      opacity: 1,
      translateY: 0,
      duration: 300,
      delay: anime.stagger(100),
    },
    '-=200',
  );

const inViewEls = document.querySelectorAll('[data-animate="in-view"]');
const inViewObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        // Make appear in view
        anime({
          targets: entry.target.children,
          opacity: 1,
          translateY: 0,
          duration: 350,
          easing: EASE_IN_OUT_SINE,
          delay: anime.stagger(50),
        });

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
  },
);

inViewEls.forEach((element) => inViewObserver.observe(element));
