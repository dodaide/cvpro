let slideIndex = 0;
let timer = 0;
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  if(slides.length > 0){
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    timer = 2000;
  }
  setTimeout(showSlides, timer);
}

export default showSlides;