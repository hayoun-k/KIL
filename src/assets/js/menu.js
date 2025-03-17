import gsap from "gsap";

const menu = document.getElementById("mobileMenu");
const navBar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");

if (window.innerWidth < 1024) {
  gsap.set(navList, {height: 0});
  // gsap.set(navList, {height: 0});
}


menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navList.classList.toggle("active");

  if (menu.classList.contains("active")) {
    gsap.to(navList, {height: "auto", duration: 0.3, ease: "power1.inOut"});
    // gsap.to(navList, {height: "auto", duration: 0.3, ease: "power1.inOut"});
  } else {
    // gsap.to(navList, { height: 0, duration: 0.3, ease: "power1.inOut"});
    gsap.to(navList, { height: 0, duration: 0.3, ease: "power1.inOut"});
  }

});