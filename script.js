document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(
    ".eventNews-container, .rooms, .features-card, .about-logo, .about-text-container"
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
    onStart: () => updateIndicator(4),
  });
  tl.to(".top-image-slide", {
    x: "-500vw",
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

// トグルボタンでクラス付与
const toggle = document.getElementById('dark-mode-toggle');
const containers = document.querySelectorAll(
  'body, .header, .reservation-button, .features-cards, .features-cards h2, .features-textarea, .hamburger-bar, ' +
  '.hamburger, .news-font, .news-list, .news-date, .news-design, .news, .news-text, .top-image-indicator, ' +
  '.top-image-indicator.active, .rooom, .list-button-container, list-button-container:hover, .activity, .activity-button, ' +
  '.activity-button:hover, .activity-card-description, .activity-card-text, .activity-card-title, .access-checkin, ' +
  '.links a, .information-container' 
);

toggle.addEventListener('change', function() {
    containers.forEach(container => {
        if (this.checked) {
            container.classList.add('dark-mode');
        } else {
            container.classList.remove('dark-mode');
        }
    });
});

// ダークモード ライトモード、ロゴ アイコン変更

// アイコンとロゴの取得
const headerlogo = document.getElementById('header-logo');
const footerlogo = document.getElementById('footer-logo');
const mapicon = document.getElementById('map-icon');
const phoneicon = document.getElementById('phone-icon');
const mailicon = document.getElementById('mail-icon');

// アイコンとロゴを変更
function updateIconsAndLogos(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        
        // ダークモード用のロゴとアイコン
        headerlogo.src = './images/logo-dark-mode.svg';
        footerlogo.src = './images/footer-logo-dark-mode.svg';
        mapicon.src = './images/map-marker-outline-dark-mode.svg';
        phoneicon.src = './images/phone-dark-mode.svg';
        mailicon.src = './images/email-outline-dark-mode.svg';
    } else {
        document.body.classList.remove('dark-mode');
        
        // ライトモード用のロゴとアイコン
        headerlogo.src = './images/logo-black.svg';
        footerlogo.src = './images/logo.svg';
        mapicon.src = './images/map-marker-outline.png';
        phoneicon.src = './images/phone.png';
        mailicon.src = './images/email-outline.png';
    }
}

toggle.addEventListener('change', function() {
    updateIconsAndLogos(this.checked); 
});
