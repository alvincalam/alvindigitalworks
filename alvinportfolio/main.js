const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.scroll-dots .dot');

window.addEventListener('scroll', () => {
  let nextSectionId = sections[0].id;  // default to first section

  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;

    // If the top of the section is BELOW the bottom of viewport,
    // that section is the next upcoming section
    if (sectionTop > scrollY + viewportHeight / 2) {
      nextSectionId = sections[i].id;
      break;
    }
  }

  dots.forEach(dot => {
    dot.classList.remove('active');
    if (dot.getAttribute('href').substring(1) === nextSectionId) {
      dot.classList.add('active');
    }
  });
});