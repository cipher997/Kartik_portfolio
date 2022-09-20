//smooth crolling
const heroSection = document.querySelector(".aka");

document.querySelector("ak").addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});
