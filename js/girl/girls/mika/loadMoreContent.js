function pieChart(girl) {
    const ctx = document.getElementById('servicesChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Vore', 'Crush'],
            datasets: [{
                label: 'Services',
                data: [girl.vores, girl.crushes],
                backgroundColor: ['#e44d8f', '#3399ff'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function loadMoreContent(girl) {
    const aboutHer = document.getElementById("aboutHer");
    const name = document.getElementById("name");
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    const footSize = document.getElementById("footSize");
    const vores = document.getElementById("vores");
    const crushes = document.getElementById("crushes");
    const logoPath = '../../../../assets/Logo.png';
    const logoLinkValue = './../../../../whoWeAre.html';
    const linksForThisPage = [
        { text: 'Location', href: '#' },
        { text: 'About us', href: './../../../../whoWeAre.html' },
        { text: 'Our girls', href: './../../ourGirls.html' },
        { text: 'Gallery', href: '#' },
        { text: 'Work with us', href: '#' }
    ];

    generateNavbar(linksForThisPage, logoPath, logoLinkValue);

    pieChart(girl);

    aboutHer.textContent = girl.aboutHer;
    name.textContent = girl.name;
    height.textContent = girl.height;
    weight.textContent = girl.weight;
    footSize.textContent = girl.footSize;
    vores.textContent = girl.vores;
    crushes.textContent = girl.crushes;
}

document.addEventListener("DOMContentLoaded", () => {
    loadMoreContent(mika);
});