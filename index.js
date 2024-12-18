/* let waterColorEle = document.querySelector(".water-color");
let r = document.querySelector(":root");
waterColorEle.fill = getComputedStyle(r).getPropertyValue("--lake");
console.log("ind ", waterColorEle.fill);
*/

function openAbout() {
    document.querySelector(".about").style.display = "block";
}

function closeAbout() {
    document.querySelector(".about").style.display = "none";
}