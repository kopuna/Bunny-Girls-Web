class girl {
    girl;
    logoPath;
    logoLinkValue;
    linksForThisPage;

    // put a whole object in here. I've already done it with objects and dont want a book of a constructor
    constructor(girl, logoPath, logoLinkValue, linksForThisPage) {
        this.girl = girl;
        this.logoPath = logoPath;
        this.logoLinkValue = logoLinkValue;
        this.linksForThisPage = linksForThisPage;
    }

    loadProfileContent() {
        const servicesElement = document.getElementById("services-count");
        const description = document.getElementById("description");
        const quote = document.getElementById("quote");
        const name = document.getElementById("name");

        generateNavbar(this.linksForThisPage, this.logoPath, this.logoLinkValue);

        servicesElement.textContent = this.girl.services;
        description.textContent = this.girl.description;
        quote.textContent = this.girl.quote;
        name.textContent = this.girl.name;

        let priceList = document.querySelector(".price-list");
    
        if (priceList) {
            const priceItems = [
                { category: "My Prices <3", items: []},
                { category: "Crush", items: [
                    { name: "Shoe", price: this.girl.shoe },
                    { name: "Barefoot", price: this.girl.barefoot },
                    { name: "Inshoe", price: this.girl.inshoe },
                    { name: "Butt", price: this.girl.butt },
                    { name: "Breast", price: this.girl.breast },
                    { name: "Hands", price: this.girl.hands }
                ]},
                { category: "Vore", items: [
                    { name: "Swallow", price: this.girl.swallow },
                    { name: "Chewing", price: this.girl.chewing }
                ]},
                { category: "Extras", items: [
                    { name: "F. Worship", price: this.girl.fWorship },
                    { name: "F. Massage", price: this.girl.fMassage },
                    { name: "Antiacids", price: this.girl.anitacids },
                    { name: "Toenails", price: this.girl.toenails }
                ]}
            ];
    
            priceItems.forEach(group => {
                let categoryElement = document.createElement("div");
                if (group.category == "My Prices <3") {
                    categoryElement.classList.add("list-header");
                } else {
                    categoryElement.classList.add("price-category");
                }
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

    loadMoreContent() {
        const aboutHer = document.getElementById("aboutHer");
        const name = document.getElementById("name");
        const height = document.getElementById("height");
        const weight = document.getElementById("weight");
        const footSize = document.getElementById("footSize");
        const vores = document.getElementById("vores");
        const crushes = document.getElementById("crushes");
        const ctx = document.getElementById('servicesChart').getContext('2d');
        const qna = document.getElementById('qna');
        const logoPath = '../../../../assets/Logo.png';
        const logoLinkValue = './../../../../whoWeAre.html';
        const linksForThisPage = [
            { text: 'Location', href: '#' },
            { text: 'About us', href: './../../../../whoWeAre.html' },
            { text: 'Our girls', href: './../../ourGirls.html' },
            { text: 'Gallery', href: './../../gallery.html' },
            { text: 'Work with us', href: '#' }
        ];
    
        generateNavbar(linksForThisPage, logoPath, logoLinkValue);
    
        aboutHer.textContent = this.girl.aboutHer;
        name.textContent = this.girl.name;
        height.textContent = this.girl.height;
        weight.textContent = this.girl.weight;
        footSize.textContent = this.girl.footSize;
        vores.textContent = this.girl.vores;
        crushes.textContent = this.girl.crushes;
        
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Vore', 'Crush'],
                datasets: [{
                    label: 'Services',
                    data: [this.girl.vores, this.girl.crushes],
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

        for (let i = 0; i < this.girl.questions.length; i++) {
            let questionElement = document.createElement("div");
            questionElement.innerHTML = `<strong>` + this.girl.questions[i] + `</strong>` + `<br>`;
            questionElement.style.textAlign = "left";
            qna.appendChild(questionElement);
            let answerElement = document.createElement("div");
            answerElement.innerHTML = this.girl.answers[i] + `<br><br>`;
            answerElement.style.textAlign = "left";
            qna.appendChild(answerElement);
        }
        if (this.girl.name == 'Yuka') {
            let extra = document.createElement("div");
            extra.innerHTML = `<strong>` + '*She secretly also joined because Toki said she would get a lot of guys worshiping her feet.*' + `</strong>`
            qna.appendChild(extra);
        }
    }

    loadGalleryContent(assetData) {
        const logoPath = '../../../../assets/Logo.png';
        const logoLinkValue = './../../../../whoWeAre.html';
        const linksForThisPage = [
            { text: 'Location', href: '#' },
            { text: 'About us', href: './../../../../whoWeAre.html' },
            { text: 'Our girls', href: './../../ourGirls.html' },
            { text: 'Gallery', href: './../../../gallery/gallery.html' },
            { text: 'Work with us', href: '#' }
        ];

        generateNavbar(linksForThisPage, logoPath, logoLinkValue);

        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');
        const video = document.getElementById('lightbox-video');
        const navButtons = document.getElementsByClassName('nav-btn');
        const assetButtons = document.querySelectorAll('.asset');

        let currentGroup = [];
        let currentIndex = 0;

        assetButtons.forEach((button, groupIndex) => {
            button.addEventListener('click', function (e) {
                e.preventDefault();

                currentGroup = assetData[groupIndex];
                currentIndex = 0;
                showItem(currentGroup[currentIndex]);
            });
        });

        function showItem(src) {
            const isVideo = src.endsWith('.mp4');

            if (isVideo) {
                img.style.display = 'none';
                video.style.display = 'block';
                video.src = src;
                video.play();
            } else {
                video.pause();
                video.src = '';
                video.style.display = 'none';
                img.style.display = 'block';
                img.src = src;
            }

            for (let btn of navButtons) {
                btn.style.display = (!isVideo && currentGroup.length > 1) ? 'block' : 'none';
            }

            lightbox.style.display = 'flex';
        }


        function closeLightbox() {
            lightbox.style.display = 'none';
            video.pause();
            video.src = '';
        }

        document.getElementById('lightbox').addEventListener('click', function (e) {
            if (e.target === this) {
                closeLightbox();
            }
        });

        document.querySelector('.lightbox .close').addEventListener('click', closeLightbox);

        document.getElementById('prevBtn').addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
            showItem(currentGroup[currentIndex]);
        });

        document.getElementById('nextBtn').addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % currentGroup.length;
            showItem(currentGroup[currentIndex]);
        });

        document.addEventListener('keydown', function (e) {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % currentGroup.length;
                    showItem(currentGroup[currentIndex]);
                }
                if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
                    showItem(currentGroup[currentIndex]);
                }
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            }
        });
    }
}
