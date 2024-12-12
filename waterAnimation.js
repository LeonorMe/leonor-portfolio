/*document.querySelectorAll(".water").forEach((water) => {
    water.addEventListener('click', 
        alert("water clicked")
    )
});*/

document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
    let i = 0;
    while (i < 3) {
        const ripple = document.createElement("div");

        ripple.className = "ripple";
        document.body.appendChild(ripple);

        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;

        ripple.style.animation = "ripple-effect .8s ease-out";
        ripple.style.animationDelay = `0.${i}s`;
        ripple.onanimationend = () => document.body.removeChild(ripple);

        i += 2;
    }
}
