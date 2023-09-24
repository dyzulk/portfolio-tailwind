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
window.addEventListener("load", setHcaptchaSiteKey);
