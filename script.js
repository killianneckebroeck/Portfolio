function changeLanguage(lang) {
    if (!translations[lang]) return; // Controleer of de taal bestaat
    
    localStorage.setItem("selectedLanguage", lang); // Sla de taal op in localStorage
    
    // Zoek alle vertaalbare elementen en update hun tekst
    document.getElementById("navAbout").innerHTML = translations[lang]["navAbout"];
    document.getElementById("navSkills").innerHTML = translations[lang]["navSkills"];
    document.getElementById("navProjects").innerHTML = translations[lang]["navProjects"];
    document.getElementById("navContact").innerHTML = translations[lang]["navContact"];

    document.getElementById("aboutTitle").innerHTML = translations[lang]["aboutTitle"];
    document.getElementById("aboutText1").innerHTML = translations[lang]["aboutText1"];
    document.getElementById("aboutText2").innerHTML = translations[lang]["aboutText2"];
    document.getElementById("aboutText3").innerHTML = translations[lang]["aboutText3"];
    document.getElementById("aboutText4").innerHTML = translations[lang]["aboutText4"];
    document.getElementById("aboutText5").innerHTML = translations[lang]["aboutText5"];
    document.getElementById("skillsTitle").innerHTML = translations[lang]["skillsTitle"];
    document.getElementById("projectsTitle").innerHTML = translations[lang]["projectsTitle"];
    document.getElementById("splendorText").innerHTML = translations[lang]["splendorText"];
    document.getElementById("flexsoText").innerHTML = translations[lang]["flexsoText"];
    document.getElementById("titleSOK").innerHTML = translations[lang]["titleSOK"];

    document.getElementById("textSOK").innerHTML = translations[lang]["textSOK"];
    document.getElementById("SAPBuildAppsText").innerHTML = translations[lang]["SAPBuildAppsText"];
    document.getElementById("SAPFioriAppText").innerHTML = translations[lang]["SAPFioriAppText"];

    document.querySelector(".footer-text").innerHTML = translations[lang]["footerText"];
    document.querySelector(".email-button").innerHTML = translations[lang]["emailButton"];
    document.querySelector(".linkedin-button").innerHTML = translations[lang]["linkedinButton"];
    document.querySelector(".cv-button").innerHTML = translations[lang]["cvButton"];

    

    
}

// Controleer bij het laden van de pagina of er een opgeslagen taal is
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "nl"; // Standaard naar NL
    changeLanguage(savedLang);
});

function toggleMenu() {
    let nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
}

// script.js uitbreiden:
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector("nav ul").classList.remove("active");
    });
});
  