const main = document.querySelector("main");
const nav = document.querySelector("nav");
const scrollup = document.querySelector("#scrollup");
const home = document.querySelector(".home");
const contact = document.querySelector(".contact");
const skills = document.querySelector(".skills");
const cv = document.querySelector(".cv");
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const log = console.log;

home.addEventListener("mouseenter", () => {
	contact.style.color = "gray";
	skills.style.color = "gray";
	cv.style.color = "gray";
});

home.addEventListener("mouseleave", () => {
	contact.style.color = "#ffae17";
	skills.style.color = "#ffae17";
	cv.style.color = "#ffae17";
});

contact.addEventListener("mouseenter", () => {
	home.style.color = "gray";
	skills.style.color = "gray";
	cv.style.color = "gray";
});

contact.addEventListener("mouseleave", () => {
	home.style.color = "#ffae17";
	skills.style.color = "#ffae17";
	cv.style.color = "#ffae17";
});

skills.addEventListener("mouseenter", () => {
	home.style.color = "gray";
	contact.style.color = "gray";
	cv.style.color = "gray";
});

skills.addEventListener("mouseleave", () => {
	home.style.color = "#ffae17";
	contact.style.color = "#ffae17";
	cv.style.color = "#ffae17";
});

cv.addEventListener("mouseenter", () => {
	home.style.color = "gray";
	contact.style.color = "gray";
	skills.style.color = "gray";
});

cv.addEventListener("mouseleave", () => {
	home.style.color = "#ffae17";
	contact.style.color = "#ffae17";
	skills.style.color = "#ffae17";
});

scrollup.addEventListener("click", () => {
	nav.scrollIntoView({ behavior: "smooth" });
});

function showbar() {
	sidebar.style.display = "flex";
	sidebar.style.width = "100%";
}

function hidebar() {
	sidebar.style.width = "0%";
}
