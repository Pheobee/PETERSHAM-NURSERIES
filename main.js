
// Automatic slideshow

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "flex";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var headerHeight = document.querySelector('header').offsetHeight;
  if (window.scrollY > headerHeight) {
      navbar.classList.add('fixed');
  } else {
      navbar.classList.remove('fixed');
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


document.addEventListener('DOMContentLoaded', (event)=>{

 
  menuBar.addEventListener('click', () => {
    menuNavbar.style.display = 'flex';
    console.log("hi")
});

  goBackKey.addEventListener('click', () => {
    menuNavbar.style.display = 'none';
});
}
)



function showRespMenu(){
  let menuNavbar=document.querySelector('.menuNavbar')
  menuNavbar.style.display='flex';
  document.body.style.overflow = 'hidden';
}

function removeResMenu(){
  let menuNavbar=document.querySelector('.menuNavbar')
  menuNavbar.style.display='none';
  document.body.style.overflow = 'auto';

}