const navigation = document.querySelectorAll(".list_nav");
const autoscroll = document.querySelector(".scrollup");
const nav = document.querySelector("nav");
const banner = document.querySelector("#banner");
const menu = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");
const sticky = nav.offsetTop;

function showSide() {
    sidebar.style.width = "100%";
    menu.style.display = "none"
}

function hideSide() {
    sidebar.style.width = "0%";
    menu.style.display = "block"

}
window.onscroll = function() {
    scroll();
};



function scroll() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        banner.classList.add("banner");
    } else {
        nav.classList.remove("sticky");
        banner.classList.remove("banner");
    }
}

navigation.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        navigation.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.style.color = "#a5a5a5";
            }
        });
    });
    item.addEventListener("mouseleave", () => {
        navigation.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.style.color = "black";
            }
        });
    });
});

autoscroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});