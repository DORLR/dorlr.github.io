(() => {
  const carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach((root) => {
    const slides = Array.from(root.querySelectorAll('[data-slide]'));
    const dots = Array.from(root.querySelectorAll('[data-dot]'));
    const caption = root.querySelector('[data-caption]');
    const prevBtn = root.querySelector('[data-prev]');
    const nextBtn = root.querySelector('[data-next]');
    if (slides.length <= 1) return;

    let index = Math.max(0, slides.findIndex((s) => s.classList.contains('is-active')));

    const show = (nextIndex) => {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      dots.forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
        if (active && caption && dot.dataset.label) {
          caption.textContent = dot.dataset.label;
        }
      });
    };

    prevBtn?.addEventListener('click', () => show(index - 1));
    nextBtn?.addEventListener('click', () => show(index + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));

    root.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(index - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(index + 1);
      }
    });

    let touchStartX = null;
    root.addEventListener('touchstart', (event) => {
      if (event.touches.length === 1) touchStartX = event.touches[0].clientX;
    }, { passive: true });
    root.addEventListener('touchend', (event) => {
      if (touchStartX === null || event.changedTouches.length !== 1) return;
      const dx = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(dx) > 40) show(dx > 0 ? index - 1 : index + 1);
    }, { passive: true });
  });
})();
