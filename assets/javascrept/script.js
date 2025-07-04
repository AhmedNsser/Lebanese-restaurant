window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // أضف كلاس fade-out لتفعيل الـ transition
  preloader.classList.add("fade-out");

  // بعد الانتهاء من الأنيميشن، احذفه من الصفحة
  setTimeout(() => {
    preloader.remove();
  }, 800); // لازم أكبر من transition في CSS (700ms)
});
// إخفاء الـ preloader بعد تحميل الصفحة
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
// عرض الصورة في نافذة منبثقة عند النقر
// لما تضغط على الصورة
document.querySelectorAll('.popup-image').forEach(image => {
  image.addEventListener('click', () => {
    const popup = document.getElementById('image-popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = image.src;
    popup.style.display = 'flex';
  });
});

// لما تضغط على زر الإغلاق
document.querySelector('.popup .close').addEventListener('click', () => {
  document.getElementById('image-popup').style.display = 'none';
});
// *************************
const sections = document.querySelectorAll(".section");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function showSection(index) {
  sections.forEach((sec, i) => {
    sec.classList.toggle("active", i === index);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sections.length;
  showSection(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  showSection(currentIndex);
});
