const navigation = document.querySelectorAll(".list_nav");
const autoscroll = document.querySelector(".scrollup");
const nav = document.querySelector("nav");
const banner = document.querySelector("#banner");
const menu = document.querySelector("#menu");
const mepng = document.querySelector("#mepng");
const sidebar = document.querySelector(".sidebar");
const sticky = nav.offsetTop;



const showSide = () => {
    sidebar.style.width = "100%";
    menu.style.display = "none"
}

const hideSide = () => {
    sidebar.style.width = "0%";
    menu.style.display = "flex"
}
window.onscroll = () => {
    scroll();
};

const scroll = () => {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        banner.style.height = "8vh";
        mepng.style.filter = "none";
        autoscroll.style.opacity = "80%";
    } else {
        nav.classList.remove("sticky");
        banner.style.height = "0vh";
        mepng.style.filter = "drop-shadow(4px 4px 4px black)"
        autoscroll.style.opacity = "0%";
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