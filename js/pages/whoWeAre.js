document.addEventListener("DOMContentLoaded", () => {
    const logoPath = './assets/Logo.png';
    const logoLinkValue = './whoWeAre.html';
    const linksForThisPage = [
        { text: 'Location', href: '#' },
        { text: 'About us', href: './whoWeAre.html' },
        { text: 'Our girls', href: './views/ourGirls/ourGirls.html' },
        { text: 'Gallery', href: './views/gallery/gallery.html' },
        { text: 'Work with us', href: '#' }
    ];
    
    generateNavbar(linksForThisPage, logoPath, logoLinkValue);
});