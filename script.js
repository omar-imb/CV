const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");

/* ABRIR / CERRAR MENU */

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
});

/* CERRAR MENU AL HACER CLICK */

const menuLinks = document.querySelectorAll(".side-menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        sideMenu.classList.remove("active");

    });

});