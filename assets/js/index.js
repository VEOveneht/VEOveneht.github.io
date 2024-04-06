const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
	nav.classList.toggle("sticky", window.scrollY > 0);
});
