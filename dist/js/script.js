// Fungsi untuk mengganti kunci situs dengan kunci yang telah Anda atur di sisi server
function setHcaptchaSiteKey() {
    var siteKey = "YOUR_SITE_KEY_HERE"; // Ganti dengan kunci situs hCaptcha Anda
    var hcaptchaContainer = document.getElementById("hcaptcha-container");
    hcaptchaContainer.innerHTML = ''; // Hapus elemen yang mungkin sudah ada
    var hcaptchaDiv = document.createElement("div");
    hcaptchaDiv.className = "h-captcha";
    hcaptchaDiv.dataset.sitekey = siteKey;
    hcaptchaContainer.appendChild(hcaptchaDiv);
}

// Panggil fungsi untuk mengatur kunci situs saat halaman dimuat
window.addEventListener("load", setHcaptchaSiteKey);// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
