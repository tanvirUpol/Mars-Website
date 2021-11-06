// navbar animation with smooth scrolling

let navbar = document.getElementById('navbar');

function showNav() {
  navbar.style.top = '0';
}
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '-79px';
    setTimeout(showNav, 500);
  } else {
    navbar.style.top = '-79px';
    setTimeout(showNav, 500);
  }
  prevScrollpos = currentScrollPos;
};

// intersection observer

const images = document.querySelectorAll('.trig-anim');

observer = new IntersectionObserver((entries) => {
  console.log(entries);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      if (entry.target.classList.contains('left-obj')) {
        entry.target.classList.add('animate-left');
      }
      if (entry.target.classList.contains('right-obj')) {
        entry.target.classList.add('animate-right');
      }
      return;
    }
    entry.target.classList.remove('animate-left');
    entry.target.classList.remove('animate-right');
  });
});
images.forEach((image) => {
  observer.observe(image);
});
