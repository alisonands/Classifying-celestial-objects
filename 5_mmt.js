const appendElement = element => document.body.appendChild(element);
const removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const dotElement = document.querySelector('.small');

const positionElement = (e) => {
  const mouseY = e.clientY + window.scrollY;
  const mouseX = e.clientX + window.scrollX;

  const starClone = dotElement.cloneNode(true);

  starClone.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  starClone.classList.add('star'); // Add 'star' class to the cloned element

  appendElement(starClone);

  const delay = 1000;
  removeElement(starClone, delay);
};

window.addEventListener('mousemove', positionElement);
// 