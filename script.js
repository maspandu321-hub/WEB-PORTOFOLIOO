const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(newIndex) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev");

    if (i === newIndex) {
      slide.classList.add("active");
    } 
    else if (i === index) {
      slide.classList.add("prev");
    }
  });

  index = newIndex;
}

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  setInterval(nextSlide, 3500);
});



  // Auto slide
  setInterval(nextSlide, 3500);

  // Supaya bisa dipanggil dari HTML
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.openFolder = function (id) {
    document.getElementById(id).style.display = "flex";
  };
  window.closeFolder = function (id) {
    document.getElementById(id).style.display = "none";
  };



