const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling){
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }
    else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for previous slide
    if (current.previousElementSibling){
        // Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    }
    else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};
// Button Events
next.addEventListener('click', e =>{
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e =>{
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto){
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}


// navigation observer

const container = document.querySelector(".nav");
const sectionOne = document.querySelector(".main__content");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      container.classList.add("nav__scrolled");
    } else {
      container.classList.remove("nav__scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);