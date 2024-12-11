document.querySelectorAll(".fish").forEach((fish) => {
    fish.innerHTML = svgFish;
});

document.querySelectorAll(".fish-blur").forEach((fishBlur) => {
    fishBlur.innerHTML = svgFishBlur;
});

document.querySelectorAll(".water").forEach((water) => {
    water.innerHTML = svgWater
})