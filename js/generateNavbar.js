function generateNavbar(navLinks, logoPath, logoLinkValue) {
    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) {
        console.error("Navbar container not found!");
        return;
    }

    // Create navbar div
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    
    // Add logo
    const logoLink = document.createElement('a');
    logoLink.href = logoLinkValue;
    const logoImage = document.createElement('img');
    logoImage.src = logoPath;
    logoImage.style.height = "162px";
    logoImage.style.width = "297px";
    logoLink.appendChild(logoImage);
    navbar.appendChild(logoLink);

    // Add dynamic links
    navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        navbar.appendChild(anchor);
    });

    // Append navbar to the container
    navbarContainer.appendChild(navbar);
}