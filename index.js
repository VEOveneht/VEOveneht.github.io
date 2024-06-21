const sidebar = document.getElementById('sidebar')
const banner = document.getElementById('banner')
const navLinks = document.querySelectorAll('.list_nav')

navLinks.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        navLinks.forEach((otherItem) => {
            if(otherItem !== item) {
                otherItem.style.color = "#a5a5a5"
            } 
        })
    })
    item.addEventListener("mouseleave", () => {
        navLinks.forEach((otherItem) => {
            if(otherItem !== item) {
                otherItem.style.color = "black"
            }
        })
    })

})

function showSide() {
    sidebar.style.width = '100%'
}

function hideSide() {
    sidebar.style.width = '0%'
}

document.addEventListener('scroll', ()=> {
    let sticky = 1;
    if(pageYOffset >= sticky) {
        document.getElementById('nav').classList.add('sticky')
        document.getElementById('banner').classList.add('banner')
    } else {
        document.getElementById('nav').classList.remove('sticky')
        document.getElementById('banner').classList.remove('banner')
    }
})