const sidebar = document.getElementById('sidebar');
const listNav = document.querySelectorAll('.list_nav');
const linkList = document.querySelectorAll('.link_list');
const nav = document.getElementById('nav');
const banner = document.getElementById('banner');
const showSection = document.getElementById('show_section');

// * Menu
function showSide() {
    sidebar.style.width = "100%"
}

function hideSide() {
    sidebar.style.width = "0%"
}

// Sticky Navigation When Scroll
let sticky = 1;
window.onscroll = function() {
if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
    banner.classList.add("banner")
} else {
    nav.classList.remove('sticky')
    banner.classList.remove("banner")
}}

// Hover for Navigation When Mouse Enter and Leave
listNav.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        listNav.forEach((otherItem) => {
            if(otherItem === item) {
                otherItem.style.color = "white"
            } else {
                otherItem.style.color = "#555555"
            }
        })
    })
    item.addEventListener("mouseleave", () => {
        listNav.forEach((otherItem) => {
            if(otherItem !== item) {
                otherItem.style.color = "white";
            }
        })
    })
})

// Hover for My Works When Mouse Enter and Leave 
linkList.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        linkList.forEach((otherItem) => {
            if(otherItem === item) {
                otherItem.style.color = "white"
            } else {
                otherItem.style.color = "gray"
            }
        })
    })
    item.addEventListener("mouseleave", () => {
        linkList.forEach((otherItem) => {
            if(otherItem !== item) {
                otherItem.style.color = "white";
            }
        })
    })
})

// When i Click this, it will add innerHTML within id "show_section"
function Project() {
    const thisProject = 
        (`<div id="my_project">
        <h1>My Project</h1>
        </div>`)
    showSection.innerHTML = thisProject
}
function FakeProject() {
    const thisFakeProject = 
        (`<div id="fake_project">
        <h1>Fake Project</h1>
        </div>`)
    showSection.innerHTML = thisFakeProject
}
function Assignments() {
    const thisAssignments = 
        (`<div id="assignments">
        <h1>My Assignments</h1>
        </div>`)
    showSection.innerHTML = thisAssignments
}
function Tools() {
    const thisTools = 
        (`<div id="tools">
        <h1>Tools</h1>
        </div>`)
    showSection.innerHTML = thisTools
}