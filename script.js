gsap.registerPlugin(ScrollTrigger);

gsap.from("nav .item", {
  opacity: 0,
  y: -15,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out"
});

gsap.from("header .text-side", {
  opacity: 0,
  x: 40,
  duration: 1,
  delay: 0.2,
  ease: "power2.out"
});

gsap.from("header .image-side img", {
  opacity: 0,
  scale: 0.92,
  duration: 1.2,
  delay: 0.3,
  ease: "power2.out"
});


gsap.utils.toArray(".heading").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  });
});


gsap.utils.toArray(".item img").forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  });
});


gsap.from(".button", {
  opacity: 0,
  scale: 0.85,
  duration: 1.5,
  delay: 0.5,
  ease: "back.out(1.8)"
});


gsap.utils.toArray("p").forEach((p) => {
  gsap.from(p, {
    scrollTrigger: {
      trigger: p,
      start: "top 90%"
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power1.out"
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); 

const isMobile = window.innerWidth <= 820;

function splitText(selector) {
  const element = document.querySelector(selector);
  const text = element.textContent.trim();
  element.textContent = "";
  text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    element.appendChild(span);
  });
}


splitText(".site-title");


gsap.from(".site-title span", {
  opacity: 0,
  y: isMobile ? 0 : 30,
  duration: isMobile ? 0.3 : 0.6,
  stagger: isMobile ? 0.1 : 0.15,
  ease: "power2.out"
});


gsap.from(".site-title2", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.2,
  ease: "power2.out"
});
