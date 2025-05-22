document.addEventListener("DOMContentLoaded", () => {
    const logoPath = './../../assets/Logo.png';
    const logoLinkValue = './../../whoWeAre.html';
    const servicesElementAsuna = document.getElementById("services-count-asuna");
    const servicesElementIori = document.getElementById("services-count-iori");
    const servicesElementLami = document.getElementById("services-count-lami");
    const servicesElementMika = document.getElementById("services-count-mika");
    const servicesElementToki = document.getElementById("services-count-toki");
    const servicesElementYuka = document.getElementById("services-count-yuka");
    const linksForThisPage = [
        { text: 'Location', href: '#' },
        { text: 'About us', href: './../../whoWeAre.html' },
        { text: 'Our girls', href: './ourGirls.html' },
        { text: 'Gallery', href: '#' },
        { text: 'Work with us', href: '#' }
    ];
    
    generateNavbar(linksForThisPage, logoPath, logoLinkValue);
    
    servicesElementAsuna.textContent = asuna.girl.services;
    servicesElementIori.textContent = iori.girl.services;
    servicesElementLami.textContent = lami.girl.services;
    servicesElementMika.textContent = mika.girl.services;
    servicesElementToki.textContent = toki.girl.services;
    servicesElementYuka.textContent = yuka.girl.services;
});