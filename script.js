// script.js

document.addEventListener("DOMContentLoaded", () => {
  const qrImages = document.querySelectorAll(".qr-img");

  qrImages.forEach(img => {
    img.addEventListener("click", () => {
      alert("📷 เปิดกล้องมือถือแล้วสแกนเพื่อดูรายละเอียดได้เลย!");
    });
  });

  const surpriseText = [
    "ขออัลลอฮ์ทรงประทานบารอกัตให้กับคู่บ่าวสาว 💕",
    "รักกันให้นาน เป็นแบบอย่างที่ดีนะ",
    "อย่าลืมแมวด้วยนะ! 🐱",
    "จงเป็นคู่ชีวิตที่เสริมศรัทธากันและกัน 🕌",
  ];

  setInterval(() => {
    const rand = Math.floor(Math.random() * surpriseText.length);
    console.log(surpriseText[rand]);
  }, 10000); // ทุก 10 วินาที
});
