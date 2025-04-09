function generatePriceList(girl) {
    let priceList = document.querySelector(".price-list");

    if (priceList) {
        const priceItems = [
            { category: "Crush", items: [
                { name: "Shoe", price: girl.shoe },
                { name: "Barefoot", price: girl.barefoot },
                { name: "Inshoe", price: girl.inshoe },
                { name: "Butt", price: girl.butt },
                { name: "Breast", price: girl.breast },
                { name: "Hands", price: girl.hands }
            ]},
            { category: "Vore", items: [
                { name: "Swallow", price: girl.swallow },
                { name: "Chewing", price: girl.chewing }
            ]},
            { category: "Extras", items: [
                { name: "F. Worship", price: girl.fWorship },
                { name: "F. Massage", price: girl.fMassage },
                { name: "Antiacids", price: girl.anitacids },
                { name: "Toenails", price: girl.toenails }
            ]}
        ];

        priceItems.forEach(group => {
            let categoryElement = document.createElement("div");
            categoryElement.classList.add("price-category");
            categoryElement.textContent = group.category;
            priceList.appendChild(categoryElement);

            group.items.forEach(item => {
                let itemElement = document.createElement("div");
                itemElement.classList.add("price-item");
                itemElement.innerHTML = `<span>${item.name}</span> <span>${item.price}</span>`;
                priceList.appendChild(itemElement);
            });
        });
    }
}

function loadProfileContent(girl) {
    const servicesElement = document.getElementById("services-count");
    const description = document.getElementById("description");
    const quote = document.getElementById("quote");
    const name = document.getElementById("name");
    if (servicesElement && description && quote && name) {
        const logoPath = '../../../assets/Logo.png';
        const logoLinkValue = './../../../whoWeAre.html';
        const linksForThisPage = [
            { text: 'Location', href: '#' },
            { text: 'About us', href: './../../../whoWeAre.html' },
            { text: 'Our girls', href: './../ourGirls.html' },
            { text: 'Gallery', href: '#' },
            { text: 'Work with us', href: '#' }
        ];

        generateNavbar(linksForThisPage, logoPath, logoLinkValue);

        generatePriceList(girl);

        servicesElement.textContent = girl.services;
        description.textContent = girl.description;
        quote.textContent = girl.quote;
        name.textContent = girl.name;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadProfileContent(iori);
});