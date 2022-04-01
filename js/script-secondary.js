const container = document.querySelector(".nav");
const sectionOne = document.querySelector(".banner");

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