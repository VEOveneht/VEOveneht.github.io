const nav = document.querySelector("nav");
const sidebar = document.querySelector(".sidebar");
const showbtn = document.querySelector(".showbtn");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function() {
    nav.classList.toggle("sticky", window.scrollY > 0);
});

function showBar() {
    sidebar.style.display = "flex";
    sidebar.style.width = "100%";
    main.style.display = "none";
    footer.style.display = "none";
}

function closeBar() {
    sidebar.style.width = "0px";
    main.style.filter = "blur()";
    main.style.display = "block";
    footer.style.display = "block";
}