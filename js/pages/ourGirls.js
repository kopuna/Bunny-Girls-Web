document.addEventListener("DOMContentLoaded", () => {
    const logoPath = './../../assets/Logo.png';
    const logoLinkValue = './../../whoWeAre.html';
    const servicesElementAsuna = document.getElementById("services-count-asuna");
    const servicesElementIori = document.getElementById("services-count-iori");
    const servicesElementLamii = document.getElementById("services-count-lamii");
    const servicesElementMika = document.getElementById("services-count-mika");
    const servicesElementToki = document.getElementById("services-count-toki");
    const servicesElementYuka = document.getElementById("services-count-yuka");
    const linksForThisPage = [
        { text: 'Location', href: '#' },
        { text: 'About us', href: './../../whoWeAre.html' },
        { text: 'Our girls', href: './ourGirls.html' },
        { text: 'Gallery', href: './../gallery/gallery.html' },
        { text: 'Work with us', href: '#' }
    ];
    
    generateNavbar(linksForThisPage, logoPath, logoLinkValue);
    
    servicesElementAsuna.textContent = asuna.girl.services;
    servicesElementIori.textContent = iori.girl.services;
    servicesElementLamii.textContent = lamii.girl.services;
    servicesElementMika.textContent = mika.girl.services;
    servicesElementToki.textContent = toki.girl.services;
    servicesElementYuka.textContent = yuka.girl.services;
});