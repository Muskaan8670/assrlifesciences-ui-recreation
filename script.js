let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides(i) {
    slides.forEach(slide => slide.classList.remove("active"));

    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;

    slides[index].classList.add("active");
}

// Next button
document.querySelector(".next").addEventListener("click", () => {
    index++;
    showSlides(index);
});

// Prev button
document.querySelector(".prev").addEventListener("click", () => {
    index--;
    showSlides(index);
});

// Auto slide
setInterval(() => {
    index++;
    showSlides(index);
}, 3000);

showSlides(index);

let teamSlides = document.querySelectorAll(".team-slide");
let teamIndex = 0;

function showTeamSlide(i) {
    teamSlides.forEach(slide => slide.classList.remove("active"));

    if (i >= teamSlides.length) teamIndex = 0;
    if (i < 0) teamIndex = teamSlides.length - 1;

    teamSlides[teamIndex].classList.add("active");
}

// Next
document.querySelector(".team-next").addEventListener("click", () => {
    teamIndex++;
    showTeamSlide(teamIndex);
});

// Prev
document.querySelector(".team-prev").addEventListener("click", () => {
    teamIndex--;
    showTeamSlide(teamIndex);
});

// Auto Slide
setInterval(() => {
    teamIndex++;
    showTeamSlide(teamIndex);
}, 4000);

showTeamSlide(teamIndex);

let testimonialSlides = document.querySelectorAll(".testimonial-slide");
let testimonialDots = document.querySelectorAll(".dot");
let testimonialIndex = 0;

function showTestimonialSlide(i) {
    testimonialSlides.forEach(slide => slide.classList.remove("active"));
    testimonialDots.forEach(dot => dot.classList.remove("active"));

    if (i >= testimonialSlides.length) testimonialIndex = 0;
    if (i < 0) testimonialIndex = testimonialSlides.length - 1;

    testimonialSlides[testimonialIndex].classList.add("active");
    testimonialDots[testimonialIndex].classList.add("active");
}

// Next
document.querySelector(".next").addEventListener("click", () => {
    testimonialIndex++;
    showTestimonialSlide(testimonialIndex);
});

// Prev
document.querySelector(".prev").addEventListener("click", () => {
    testimonialIndex--;
    showTestimonialSlide(testimonialIndex);
});

// Auto Slide
setInterval(() => {
    testimonialIndex++;
    showTestimonialSlide(testimonialIndex);
}, 4000);

showTestimonialSlide(testimonialIndex);

const playBtn = document.getElementById("playBtn");
const videoPopup = document.getElementById("videoPopup");
const closeVideo = document.getElementById("closeVideo");
const popupVideo = document.getElementById("popupVideo");

playBtn.addEventListener("click", () => {
    videoPopup.classList.add("active");
    popupVideo.play();
});

closeVideo.addEventListener("click", () => {
    videoPopup.classList.remove("active");
    popupVideo.pause();
    popupVideo.currentTime = 0;
});

