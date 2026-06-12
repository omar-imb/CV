const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".side-menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        sideMenu.classList.remove("active");

    });

});