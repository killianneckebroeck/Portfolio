// Object met vertalingen
const translations = {
    "nl": {
        "aboutTitle": "Over Mij",
        "skillsTitle": "Vaardigheden",
        "projectsTitle": "Projecten",
        "contactTitle": "Contact",
        "aboutText": "Hallo, ik ben Killian Neckebroeck, een derdejaarsstudent Toegepaste Informatica aan HoGent...",
        "emailButton": "Stuur een e-mail",
        "linkedinButton": "Bekijk mijn LinkedIn",
        "cvButton": "Download mijn CV",
        "footerText": "Wil je samenwerken of gewoon een vraag stellen? Neem gerust contact op! 📩"
    },
    "en": {
        "aboutTitle": "About Me",
        "skillsTitle": "Skills",
        "projectsTitle": "Projects",
        "contactTitle": "Contact",
        "aboutText": "Hello, I am Killian Neckebroeck, a third-year Applied Computer Science student at HoGent...",
        "emailButton": "Send an email",
        "linkedinButton": "View my LinkedIn",
        "cvButton": "Download my CV",
        "footerText": "Want to collaborate or just ask a question? Feel free to get in touch! 📩"
    }
};

// Functie om de taal te wijzigen
function changeLanguage(lang) {
    document.getElementById("aboutTitle").textContent = translations[lang]["aboutTitle"];
    document.getElementById("skillsTitle").textContent = translations[lang]["skillsTitle"];
    document.getElementById("projectsTitle").textContent = translations[lang]["projectsTitle"];
    document.getElementById("contactTitle").textContent = translations[lang]["contactTitle"];
    document.getElementById("aboutText").textContent = translations[lang]["aboutText"];
    document.getElementById("emailButton").textContent = translations[lang]["emailButton"];
    document.getElementById("linkedinButton").textContent = translations[lang]["linkedinButton"];
    document.getElementById("cvButton").textContent = translations[lang]["cvButton"];
    document.getElementById("footerText").textContent = translations[lang]["footerText"];
}
