let colorMode = document.querySelector('.color-mode');

colorMode.addEventListener('click', () => {
    if (colorMode.classList == 'color-mode'){
        // 1 - light
        if (typeof Storage !== "undefined") {
            if (sessionStorage.colormode) {
                sessionStorage.colormode = 1;
            }else{
                sessionStorage.colormode = 0;
            }
        }

        changeToLight();
    }
    else{
        // 0 - dark
        if (typeof Storage !== "undefined") {
            if (sessionStorage.colormode) {
                sessionStorage.colormode = 0;
            }else{
                sessionStorage.colormode = 0;
            }
        }

        changeToDark();
    }
    console.log("Color mode: ", sessionStorage.colormode);
})

//document.querySelector("body").onload = function () {

    if (typeof Storage !== "undefined") {
        if (sessionStorage.colormode) {
            if(sessionStorage.colormode == 1){
                changeToLight();
            }
            else {
                changeToDark();
            }
        }
    }
    
//};

function changeToDark(){
    let ball = document.querySelector(".color-mode-ball");
    let r = document.querySelector(":root");

    colorMode.classList = "color-mode";
    ball.classList = "color-mode-ball";

    r.style.setProperty("--white", "var(--d-c1)");
    r.style.setProperty("--nenufar-small", "var(--d-c2)");
    r.style.setProperty("--nenufar-big", "var(--d-c3)");
    r.style.setProperty("--lake", "var(--d-c4)");
    r.style.setProperty("--background", "var(--d-c5)");
    r.style.setProperty("--black", "var(--d-c6)");
    r.style.setProperty("--detail", "var(--d-c7)");
    r.style.setProperty("--detail-not", "var(--l-c7)");
    r.style.setProperty("--shadow", "var(--d-c8)");

    for (let i = 1; i <= 5; i++) {
    r.style.setProperty("--petal" + i, "var(--d-f" + i + ")");
    }
}

function changeToLight(){
    let ball = document.querySelector(".color-mode-ball");
    let r = document.querySelector(":root");

    colorMode.classList = "color-mode light";
    ball.classList = "color-mode-ball light";

    r.style.setProperty("--white", "var(--l-c1)");
    r.style.setProperty("--nenufar-small", "var(--l-c2)");
    r.style.setProperty("--nenufar-big", "var(--l-c3)");
    r.style.setProperty("--lake", "var(--l-c4)");
    r.style.setProperty("--background", "var(--l-c5)");
    r.style.setProperty("--black", "var(--l-c6)");
    r.style.setProperty("--detail", "var(--l-c7)");
    r.style.setProperty("--detail-not", "var(--d-c7)");
    r.style.setProperty("--shadow", "var(--l-c8)");

    for (let i = 1; i <= 5; i++) {
        r.style.setProperty("--petal" + i, "var(--l-f" + i + ")");
    }
}