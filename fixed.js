let colorMode = document.querySelector('.color-mode');

colorMode.addEventListener('click', () => {
    let ball = document.querySelector('.color-mode-ball');
    
    let r = document.querySelector(':root');

    if (colorMode.classList == 'color-mode'){
        colorMode.classList = "color-mode light";
        ball.classList = "color-mode-ball light";

        r.style.setProperty("--white", "var(--l-c1)");
        r.style.setProperty("--nenufar-small", "var(--l-c2)");
        r.style.setProperty("--nenufar-big", "var(--l-c3)");
        r.style.setProperty("--lake", "var(--l-c4)");
        r.style.setProperty("--background", "var(--l-c5)");
        r.style.setProperty("--detail", "var(--l-c6)");
        r.style.setProperty("--shadow", "var(--l-c7)");
    }
    else{
        colorMode.classList = 'color-mode';
        ball.classList = "color-mode-ball";

        r.style.setProperty("--white", "var(--d-c1)");
        r.style.setProperty("--nenufar-small", "var(--d-c2)");
        r.style.setProperty("--nenufar-big", "var(--d-c3)");
        r.style.setProperty("--lake", "var(--d-c4)");
        r.style.setProperty("--background", "var(--d-c5)"); 
        r.style.setProperty("--detail", "var(--d-c6)");
        r.style.setProperty("--shadow", "var(--d-c7)");
    }
})