document.querySelectorAll(".water").forEach((water) => {
    water.innerHTML = svgWater;
})

document.querySelectorAll(".water-half").forEach((we) => {
    e.innerHTML = svgWaterHalf;
});

document.querySelectorAll(".flower").forEach((flower) => {
    flower.innerHTML = svgFlower;
});

document.querySelectorAll(".nenufar-big").forEach((e) => {
    e.innerHTML = svgNenufarBig;
});

document.querySelectorAll(".nenufar-small").forEach((e) => {
    e.innerHTML = svgNenufarSmall;
});

// -------------------

document.querySelectorAll(".fish").forEach((fish) => {
    fish.innerHTML = svgFish;
});

document.querySelectorAll(".fish-blur").forEach((fishBlur) => {
    fishBlur.innerHTML = svgFishBlur;
});

document.querySelectorAll(".flower-aqua").forEach((e) => {
    e.innerHTML = svgFlowerAqua;
});
document.querySelectorAll(".flower-blue").forEach((e) => {
    e.innerHTML = svgFlowerBlue;
});
document.querySelectorAll(".flower-gold").forEach((e) => {
    e.innerHTML = svgFlowerGold;
});
document.querySelectorAll(".flower-green").forEach((e) => {
    e.innerHTML = svgFlowerGreen;
});
document.querySelectorAll(".flower-red").forEach((e) => {
    e.innerHTML = svgFlowerRed;
});

// ------------------

document.querySelectorAll(".profile").forEach((e) => {
    e.innerHTML = svgProfilePhoto;
});

document.querySelectorAll(".profile-svg").forEach((e) => {
    e.innerHTML = svgProfilePhotoSVG;
});

// ------------------

document.querySelectorAll(".EN-en").forEach((e) => {
    e.innerHTML = svgENen;
});

document.querySelectorAll(".PT-pt").forEach((e) => {
    e.innerHTML = svgPTpt;
});

// -------------------
/*
document.querySelectorAll(".proj-img").forEach((e) => {
    e.innerHTML = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="img-circle">
            <circle r="45" cx="50" cy="50" fill="var(--nenufar-small)" />
            </clipPath>
        </defs>
        <image width="100" height="100" href="/assets/fish.svg" clip-path="url(#img-circle)" />
    </svg>
    `;
}) */

// ------------------ GROUPS

/* MAIN
    <div onclick="openAbout()" class="group-main">
        <div class="flower"></div>
        <div class="profile"></div>
        <div class="nenufar-big"></div>
        <div class="nenufar-small"></div>
        <h1>Leonor <br> Medeiros</h1>
        <p class="subtitle">Portfolio</p>
    </div>
*/

/* FOOTER
    <div class="group-footer">
        <div class="nenufar-big base"></div>
        <div class="nenufar-big pt"></div>
        <div class="nenufar-small en"></div>
        <div class="EN-en"></div>
        <div class="PT-pt"></div>
        <div class="text"><p>@LM <br><br> dec 2024</p></div>
    </div>
*/

/* CONTACT
    <div class="group-contact">
        <div class="flower"></div>
        <a class="nenufar-big" href="/contact.html"></a>
        <div class="nenufar-small github"></div>
        <div class="nenufar-small linkedin"></div>
        <div class="nenufar-small artstation"></div>
        <div class="nenufar-small youtube"></div>
        <div class="title"><h2>Contact Me</h2></div>
        <div class="github-link"><a target="_blank" href="https://github.com/LeonorMe">GitHub</a></div>
        <div class="linkedin-link"><a target="_blank" href="https://www.linkedin.com/in/leonor-medeiros-ab9269234/">LinkedIn</a></div>
        <div class="artstation-link"><a target="_blank" href="https://leonormedeiros.artstation.com/">Art Station</a></div>
        <div class="youtube-link"><a target="_blank" href="https://www.youtube.com/channel/UCfm2RQ1aN3jFYA5qJDPV7EQ">Youtube</a></div>
    </div>
*/

/* PROJECT GROUP
<div class="group-project-group">
    <div class="flower"></div>
    <a class="nenufar-big" href="/project.html"></a>
    <div class="nenufar-small proj1"></div>
    <div class="nenufar-small proj2"></div>
    <div class="nenufar-small proj3"></div>
    <div class="nenufar-small proj4"></div>
    <div class="title"><h2>Project Type</h2></div>
    <div class="proj1-link"><a target="_blank" href="/project.html">Project1---</a></div>
    <div class="proj2-link"><a target="_blank" href="/project.html">Project2---</a></div>
    <div class="proj3-link"><a target="_blank" href="/project.html">Project3----</a></div>
    <div class="proj4-link"><a target="_blank" href="/project.html">Project4---</a></div>
</div>
*/

/* PROJECT

    <div class="group-project">
        <div class="f flower"></div>
        <a class="nenufar-big" href="/project.html"></a>
        <div class="nenufar-small"></div>
        <div class="proj-img"></div>
        <div class="title"><h2>Project <br><br> Name</h2></div>
        <div class="proj-date"><p>MM <br><br> YYYY</p></div>
    </div>

*/