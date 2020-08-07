let previousScrollPosition = window.pageYOffset;
let currentScrollPosition = previousScrollPosition;
let button = document.querySelector(".link-red");
let logo = document.querySelector("#logo");

button.addEventListener("click", navToggle);

window.onscroll = function() {
  let currentScrollPosition = window.pageYOffset;
  console.log(
    `current ${currentScrollPosition}\nprevious ${previousScrollPosition}`
  );
  if (
    previousScrollPosition > currentScrollPosition ||
    previousScrollPosition == 0
  ) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-7vh";
  }

  previousScrollPosition = currentScrollPosition;
};

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    console.log("running!");
  } else {
    e.target.classList.remove("active");
    gsap.to("#white", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    console.log("destroyed!");
  }
}

console.log(logo.querySelector("#white"));
previousScrollPosition = 0;
