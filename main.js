const menuButton = document.getElementById("menu-toggle");
const navList = document.getElementById("navigation-list");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const header = document.getElementById("header");
window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

let currentPageUrl = window.location.href;
const navLinks = document.querySelectorAll(".nav-links li a");
for (let i = 0; i < navLinks.length; i++) {
  let link = navLinks[i];
  if (link.href === currentPageUrl) {
    link.classList.add("active");
    break;
  }
}
