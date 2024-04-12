const home = document.getElementById("home");
const contact = document.getElementById("contact");
const skills = document.getElementById("skills");
const cv = document.getElementById("cv");
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