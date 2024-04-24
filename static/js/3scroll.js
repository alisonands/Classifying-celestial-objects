const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


// random url generator
document.getElementById('generateButton').addEventListener('click', function(event) {
    // event.preventDefault(); 
    generateURL();
});

function generateURL() {
    fetch('/random_planet_url')
        .then(response => response.text())
        .then(url => {
            // Navigate to the generated URL
            window.location.href = url;
        });
}