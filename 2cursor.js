// CUSTOM CURSOR
const cursorSmall = document.querySelector('.small');

const positionElement = (e)=> {
  const mouseY = e.clientY + window.scrollY;
  const mouseX = e.clientX + window.scrollX;

  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement)