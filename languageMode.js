 // 0 - EN, 1 - PT

function clickPT(){
    if (sessionStorage.language) {
        sessionStorage.language = 1;
    } else {
        sessionStorage.language = 0;
    }
    hideShowLang();
    console.log("language mode: ", sessionStorage.language);
}

function clickEN(){
    if (sessionStorage.language) {
        sessionStorage.language = 0;
    } else {
        sessionStorage.language = 1;
    }
    hideShowLang();
    console.log("language mode: ", sessionStorage.language);
}

// default
let textPT = document.querySelectorAll(".PT");
textPT.forEach((text) => {
    text.style.display = "none";
});



document.querySelector("body").onload = function(){hideShowLang()};

function hideShowLang(){
    if(sessionStorage.language == 1){
        let textPT = document.querySelectorAll(".PT");
        textPT.forEach((text) => {
            text.style.display = "block";
        });
        let textEN = document.querySelectorAll(".EN");
        textEN.forEach((text) => {
            text.style.display = "none";
        });

    }
    else {
        let textPT = document.querySelectorAll(".PT");
        textPT.forEach((text) => {
            text.style.display = "none";
        });
        let textEN = document.querySelectorAll(".EN");
        textEN.forEach((text) => {
            text.style.display = "block";
        });
    }
}