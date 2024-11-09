document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(
    ".eventNews-container, .rooms, .features-card"
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("on");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targets.forEach((target) => {
    observer.observe(target);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const indicators = document.querySelectorAll(".top-image-indicator");

  function updateIndicator(index) {
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  const tl = gsap.timeline({ repeat: -1 });
  tl.to(".top-image-slide", {
    x: "-100vw",
    duration: 4,
    delay: 1,
    onStart: () => updateIndicator(1),
  });
  tl.to(".top-image-slide", {
    x: "-200vw",
    duration: 4,
    delay: 1,
    onStart: () => updateIndicator(2),
  });
  tl.to(".top-image-slide", {
    x: "-300vw",
    duration: 4,
    delay: 1,
    onStart: () => updateIndicator(3),
  });
  tl.to(".top-image-slide", {
    x: "-400vw",
    duration: 4,
    delay: 1,
    onStart: () => updateIndicator(0),
  });
  tl.to(".top-image-slide", { x: 0, duration: 0 });
});

// カルーセル
const activityCardList = document.querySelector(".activity-card-list");
let activityCard = document.querySelectorAll(".activity-card");
activityCardList.append(
  ...Array.from(activityCard).map((item) => item.cloneNode(true))
);
gsap.fromTo(
  ".activity-card-list",
  {
    xPercent: 25,
  },
  {
    xPercent: -25,
    duration: 30,
    ease: "linear",
    repeat: -1,
  }
);

// header
const menuIcon = document.getElementById("menuIcon");
const header = document.getElementById("header");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  header.classList.toggle("active");
});
