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

// =====================================
// CAMBIAR IDIOMA
// =====================================


const translations = {

    es: {

        // MENU
        menuAbout: "Sobre mí",
        menuSkills: "Habilidades",
        menuProjects: "Proyectos",
        menuContact: "Contacto",

        // HERO
        heroTitle: "Ingeniero en TI y Sistemas Inteligentes",

        heroDescription:
            "Desarrollo web, UX/UI, inteligencia artificial y experiencias interactivas.",

        heroButton: "Ver proyectos",

        // SECCIONES
        aboutTitle: "Sobre mí",
        skillsTitle: "Habilidades",
        projectsTitle: "Proyectos",
        experienceTitle: "Experiencia",
        educationTitle: "Educación",
        contactTitle: "Contacto",

        aboutText1:
        "Soy Ingeniero en Tecnologías de la Información con especialidad en Diseño Interactivo. Me apasiona crear experiencias digitales que combinen funcionalidad, accesibilidad y diseño.",

        aboutText2:
        "Tengo experiencia en desarrollo web, UX/UI, análisis de datos y ciberseguridad. Disfruto trabajar en proyectos donde pueda integrar tecnología, creatividad y resolución de problemas.",

        project1Title:
        "Proyecto Jenga Háptico",

        project1Description:
        "Simulación interactiva en Unity.",

        project2Title:
        "Página Web Flem Studio",

        project2Description:
        "Creación de una página para el estudio de animación Flem.",

        repoButton:
        "Ver repositorio",

        visitButton:
        "Visitar página",

        experienceCompany:
        "W Tech — Becario en Tecnologías de la Información",

        experienceDescription:
        "Participé en auditorías de seguridad y rendimiento web, análisis de productos tecnológicos y diseño de interfaces enfocadas en UX/UI.",

        education1Title:
        "Universidad Panamericana",

        education1Description:
        "Ingeniería en Tecnologías de la Información y Sistemas Inteligentes",

        education2Title:
        "Especialidad en Diseño Interactivo",

        education2Description:
        "Universidad Panamericana",

        contactDescription:
        "¿Te interesa trabajar conmigo o colaborar en algún proyecto? Puedes contactarme a través de cualquiera de estos medios.",

        emailTitle:
        "Email",

        linkedinTitle:
        "LinkedIn",

        linkedinButton:
        "Ver perfil",

        githubTitle:
        "GitHub",

        githubButton:
        "Ver proyectos"

    },

    en: {

        // MENU
        menuAbout: "About Me",
        menuSkills: "Skills",
        menuProjects: "Projects",
        menuContact: "Contact",

        // HERO
        heroTitle: "IT and Intelligent Systems Engineer",

        heroDescription:
            "Web development, UX/UI, artificial intelligence and interactive experiences.",

        heroButton: "View Projects",

        // SECCIONES
        aboutTitle: "About Me",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        experienceTitle: "Experience",
        educationTitle: "Education",
        contactTitle: "Contact",

        aboutText1:
        "I am an Information Technology Engineer specialized in Interactive Design. I am passionate about creating digital experiences that combine functionality, accessibility and design.",

        aboutText2:
        "I have experience in web development, UX/UI, data analysis and cybersecurity. I enjoy working on projects where I can integrate technology, creativity and problem solving.",

        project1Title:
        "Haptic Jenga Project",

        project1Description:
        "Interactive Unity simulation.",

        project2Title:
        "Flem Studio Website",

        project2Description:
        "Development of a website for the Flem animation studio.",

        repoButton:
        "View Repository",

        visitButton:
        "Visit Website",

        experienceCompany:
        "W Tech — IT Intern",

        experienceDescription:
        "Participated in web security and performance audits, technology product analysis and UX/UI-focused interface design.",

        education1Title:
        "Universidad Panamericana",

        education1Description:
        "Information Technology and Intelligent Systems Engineering",

        education2Title:
        "Interactive Design Specialization",

        education2Description:
        "Universidad Panamericana",

        contactDescription:
        "Interested in working with me or collaborating on a project? Feel free to reach out through any of the following channels.",

        emailTitle:
        "Email",

        linkedinTitle:
        "LinkedIn",

        linkedinButton:
        "View Profile",

        githubTitle:
        "GitHub",

        githubButton:
        "View Projects"

    }

};


function changeLanguage(lang) {

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }

    });

}


const btnES = document.getElementById("btn-es");
const btnEN = document.getElementById("btn-en");

btnES.addEventListener("click", () => {

    changeLanguage("es");

    btnES.classList.add("active");
    btnEN.classList.remove("active");

    localStorage.setItem("language", "es");

});

btnEN.addEventListener("click", () => {

    changeLanguage("en");

    btnEN.classList.add("active");
    btnES.classList.remove("active");

    localStorage.setItem("language", "en");

});