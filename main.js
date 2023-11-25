let toggle = document.querySelectorAll(".header .links");
toggle.forEach((element) =>
  element.addEventListener("click", function () {
    document.querySelector(".header .links ul").classList.toggle("visible");
  })
);
