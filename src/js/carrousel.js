//This code is for adding functionality to the carrousel

const carrousel = document.querySelector(".projects-carrousel");
const carrouselPoints = document.querySelectorAll(".carrousel-point");

carrouselPoints.forEach((eachPoint, i) => {
  carrouselPoints[i].addEventListener("click", () => {
    let position = i;
    let operation = position * -20;
    carrousel.style.transform = `translateX(${operation}%)`;

    carrouselPoints.forEach((eachPoint, i) => {
      carrouselPoints[i].classList.remove("active");
    });

    carrouselPoints[i].classList.add("active");
  });
});





function handleScreenChange(mq) {
  if (mq.matches) {
    carrousel.style.transform = `translateX(${0}%)`;
  }
}

const mediaQuery = window.matchMedia('(min-width: 561px)');

handleScreenChange(mediaQuery);

mediaQuery.addEventListener('change', handleScreenChange);

