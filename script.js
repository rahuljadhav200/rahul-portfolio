const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const words = ['Data Analyst', 'Dashboard Builder', 'Data Enthusiast'];
const typingText = document.getElementById('typingText');
let wordIndex = 0, charIndex = words[0].length, deleting = true;
function typeLoop() {
  const word = words[wordIndex];
  if (deleting) {
    charIndex--;
    typingText.textContent = word.slice(0, Math.max(charIndex, 0));
    if (charIndex <= 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; }
    setTimeout(typeLoop, 55);
  } else {
    const nextWord = words[wordIndex];
    charIndex++;
    typingText.textContent = nextWord.slice(0, charIndex);
    if (charIndex >= nextWord.length) { deleting = true; setTimeout(typeLoop, 1500); }
    else setTimeout(typeLoop, 90);
  }
}
setTimeout(typeLoop, 1800);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500));
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('year').textContent = new Date().getFullYear();
