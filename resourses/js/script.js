"use strict;"

const imageSlides = document.querySelectorAll(".site-wrap .slide-in");

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function(...args) {
      const callNow = immediate && !timeout;
      clearTimeout(timeout);

      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(this, args);
        }
      };

      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(this, args);
      }
    }
  }

function isInViewport(element){
    const rect = element.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    //console.count(element);
    //console.log("Top:",rect.top," Left:",rect.left," Bottom:",rect.bottom," Right:",rect.right)

    if(rect.top <= (screenHeight / 2) && rect.left >= 0 && rect.right <= screenWidth && rect.bottom >= -100){
        element.classList.add("active");
    }else{
        element.classList.remove("active");
    }

}

function slideInImage(){
    for(const imageSlide of imageSlides){
        isInViewport(imageSlide);
    }
}

document.addEventListener('scroll',debounce(slideInImage));



