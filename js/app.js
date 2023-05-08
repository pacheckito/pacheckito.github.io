const bars = document.querySelector(".bars");
const headerRightSide = document.querySelector(".header .rightSide");
let lastClickTime = 0;

bars.addEventListener("click", (event) => {
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime < 250) {
    event.preventDefault();
    return;
  }
  lastClickTime = currentTime;
  bars.classList.toggle("active");
  headerRightSide.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth == 769) {
    bars.classList.remove("active");
    headerRightSide.classList.remove("active");
  }
});

// dark and light mode

const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");
const darkLightMode = document.querySelector(".dark_light_mode");

darkLightModeFun();
darkLightMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkLightModeFun();
});

function darkLightModeFun() {
  if (document.body.classList.contains("dark")) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "flex";
  } else {
    moonIcon.style.display = "flex";
    sunIcon.style.display = "none";
  }
}
