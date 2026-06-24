// Trending Section
const slider = document.querySelector("#slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const trending = [
    {
        image: "assets/thumbnails/1.webp"
    },
    {
        image: "assets/thumbnails/2.webp"
    },
    {
        image: "assets/thumbnails/3.webp"
    },
    {
        image: "assets/thumbnails/4.webp"
    },
    {
        image: "assets/thumbnails/5.webp"
    },
    {
        image: "assets/thumbnails/6.webp"
    },
    {
        image: "assets/thumbnails/7.webp"
    },
    {
        image: "assets/thumbnails/8.webp"
    },
    {
        image: "assets/thumbnails/9.webp"
    },
    {
        image: "assets/thumbnails/10.jpg"
    }
];


slider.innerHTML = trending
    .map(
        (movie, index) => `
    <div class="card-wrapper">
    <span class="rank">${index + 1}</span>

    <div class="slider-card">
        <img src="${movie.image}" alt="">
    </div>
</div>
    `
    )
    .join("");

const scrollAmount = 300;

nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

function updateButtons() {

    // Left button
    if (slider.scrollLeft <= 5) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "flex";
    }

    // Right button
    if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
    ) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "flex";
    }

}

slider.addEventListener("scroll", updateButtons);

updateButtons();

// Features Section

const cardsData = [
    {
        title: "Enjoy on your TV",
        desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
    },
    {
        title: "Download your shows to watch offline",
        desc: "Save your favorites easily and always have something to watch."
    },
    {
        title: "Watch everywhere",
        desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
        title: "Create profiles for kids",
        desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
    }
];

const featureGrid = document.getElementById("featureGrid");

cardsData.forEach(card => {
    featureGrid.innerHTML += `
    <div class="feature-card">
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
    </div>
  `;
});


// for FAQs Section

const faqs = [
    {
        question: "What is Netflix?",
        answer:
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
        question: "How much does Netflix cost?",
        answer:
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100/month."
    },
    {
        question: "Where can I watch?",
        answer:
            "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question: "How do I cancel?",
        answer:
            "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix?",
        answer:
            "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is Netflix good for kids?",
        answer:
            "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
];

const faqContainer = document.getElementById("faq");

faqContainer.innerHTML = faqs.map((item) => `
    <div class="faq-item">
        <button class="faq-question">
            <span>${item.question}</span>
            <span class="icon">+</span>
        </button>

        <div class="faq-answer">
            <p>${item.answer}</p>
        </div>
    </div>
`).join("");

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isOpen) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });

});