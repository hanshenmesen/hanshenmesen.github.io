// Deep links should reveal the full bibliography before scrolling to it.
function revealLinkedSection() {
  if (window.location.hash === '#top') {
    document.querySelectorAll('nav a').forEach(link => link.removeAttribute('aria-current'));
  }
  if (window.location.hash === '#all-publications') {
    const bibliography = document.getElementById('all-publications');
    bibliography.open = true;
    bibliography.scrollIntoView({ block: 'start' });
  }
}
window.addEventListener('hashchange', revealLinkedSection);
revealLinkedSection();

// Keep the compact navigation in sync with the section being read.
const navigationLinks = [...document.querySelectorAll('nav a')];
const sections = navigationLinks.map(link => document.querySelector(link.hash));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

// Keep the visible left scrollbar in sync with native wheel, touch and keyboard scrolling.
const newsWindow = document.querySelector('.news-window');
if (newsWindow) {
  const scrollControl = document.createElement('input');
  scrollControl.type = 'range';
  scrollControl.className = 'news-scroll-control';
  scrollControl.min = '0';
  scrollControl.step = '1';
  scrollControl.value = '0';
  scrollControl.setAttribute('aria-label', 'Scroll news');
  scrollControl.setAttribute('aria-controls', newsWindow.id);
  const syncNewsScroll = () => {
    const maximum = Math.max(0, newsWindow.scrollHeight - newsWindow.clientHeight);
    scrollControl.max = String(maximum);
    scrollControl.value = String(newsWindow.scrollTop);
    scrollControl.hidden = maximum === 0;
    newsWindow.parentElement.classList.toggle('has-scroll-control', maximum > 0);
  };
  newsWindow.before(scrollControl);
  scrollControl.addEventListener('input', () => {
    newsWindow.scrollTop = Number(scrollControl.value);
  });
  newsWindow.addEventListener('scroll', syncNewsScroll, { passive: true });
  new ResizeObserver(syncNewsScroll).observe(newsWindow);
  new ResizeObserver(syncNewsScroll).observe(newsWindow.querySelector('.news-list'));
  syncNewsScroll();
}
