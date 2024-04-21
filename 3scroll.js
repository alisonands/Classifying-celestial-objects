// ------FADE------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

// select all elements hidden
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// CUSTOM CURSOR
const cursorSmall = document.querySelector('.small');

const positionElement = (e)=> {
  const mouseY = e.clientY + window.scrollY;
  const mouseX = e.clientX + window.scrollX;

  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement)