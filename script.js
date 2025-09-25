// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Greeting message by time of day
(function greet(){
  const hr = new Date().getHours();
  const slot = document.getElementById('greeting');
  if (!slot) return;
  const msg = hr < 12 ? "Good morning!" : hr < 18 ? "Good afternoon!" : "Good evening!";
  slot.textContent = msg;
})();

// Smooth scroll for header nav (for older browsers that ignore CSS smooth scroll)
document.querySelectorAll('.site-nav a[href^="#"]').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const id = link.getAttribute('href');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form message (no backend)
const form = document.querySelector('.contact');
if (form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    msg.textContent = "Thanks! Your message has been recorded locally.";
    form.reset();
  });
}