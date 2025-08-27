document.getElementById('year').textContent = new Date().getFullYear();

(function typeIt(){
  const el = document.getElementById('type');
  const text = 'Miguel Angelo';
  el.textContent = '';
  let i = 0;
  const tick = () => {
    el.textContent = text.slice(0, i++);
    if (i <= text.length) {
      setTimeout(tick, 120);
    }
  };
  tick();
})();

const reveal = () => {
  const elems = document.querySelectorAll('.reveal');
  const vh = window.innerHeight || document.documentElement.clientHeight;
  elems.forEach(e => {
    const rect = e.getBoundingClientRect();
    if(rect.top < vh - 80) e.classList.add('visible');
  })
};
document.addEventListener('scroll', reveal, {passive:true});
window.addEventListener('load', reveal);

document.querySelectorAll('a, button').forEach(el=>{
  el.addEventListener('focus',()=>{ el.style.boxShadow = 'var(--ring)'; });
  el.addEventListener('blur',()=>{ el.style.boxShadow = 'none'; });
});