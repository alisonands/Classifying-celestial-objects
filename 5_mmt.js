const appendElement = element => document.body.appendChild(element);
const removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const dotElement = document.querySelector('.star');

const positionElement = (e) => {
  const mouseY = e.clientY + window.scrollY;
  const mouseX = e.clientX + window.scrollX;

  const starClone = document.createElement('i');
  starClone.classList.add('fa', 'fa-solid', 'fa-star'); // Add Font Awesome classes to the cloned element

  starClone.style.position = 'absolute';
  starClone.style.top = `${mouseY}px`;
  starClone.style.left = `${mouseX}px`;
  starClone.style.zIndex = '9999';

  document.body.appendChild(starClone);

  const delay = 1000;
  setTimeout(() => document.body.removeChild(starClone), delay);
};

window.addEventListener('mousemove', positionElement);
// 