import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        
        if (targetElement) {
          const navHeight = document.querySelector('.navbar-custom')?.clientHeight || 80;
          const targetPosition = targetElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
      const navHeight = document.querySelector('.navbar-custom')?.clientHeight || 80;
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        const linkElement = link as HTMLAnchorElement;
        linkElement.classList.remove('active');
        if (linkElement.getAttribute('href') === '#' + current) {
          linkElement.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
