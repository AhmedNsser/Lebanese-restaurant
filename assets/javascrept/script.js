// ==== الوضع الليلي (Dark Mode) ====
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header")?.classList.toggle("dark-mode");
  document.querySelector("footer")?.classList.toggle("dark-mode");
}

document.getElementById("darkModeToggle")?.addEventListener("click", toggleDarkMode);


// ==== تحميل الصفحة (Preloader) ====
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(() => preloader.remove(), 800); // بعد الانتهاء من الأنيميشن
  }
});


// ==== عرض الصورة في نافذة منبثقة ====
document.querySelectorAll('.popup-image').forEach(image => {
  image.addEventListener('click', () => {
    const popup = document.getElementById('image-popup');
    const popupImg = document.getElementById('popup-img');
    if (popup && popupImg) {
      popupImg.src = image.src;
      popup.style.display = 'flex';
    }
  });
});

document.querySelector('.popup .close')?.addEventListener('click', () => {
  const popup = document.getElementById('image-popup');
  if (popup) popup.style.display = 'none';
});


// ==== التنقل بين الأقسام ==== 
const sections = document.querySelectorAll(".section");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function showSection(index) {
  sections.forEach((sec, i) => {
    sec.classList.toggle("active", i === index);
  });
}

nextBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sections.length;
  showSection(currentIndex);
});

prevBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  showSection(currentIndex);
});


// ==== تأثيرات Fade-in عند التمرير ====
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// البحث 
document.querySelector('input[type="search"]').addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const meals = document.querySelectorAll('.meal-card');

  meals.forEach(meal => {
    const text = meal.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      meal.style.display = 'block';
    } else {
      meal.style.display = 'none';
    }
  });
});