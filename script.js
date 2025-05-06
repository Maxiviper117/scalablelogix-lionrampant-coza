// Animate the h1 and loader using GSAP
window.addEventListener("DOMContentLoaded", () => {
    // Animate the h1
    gsap.from("h1", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    // Typewriter effect
    const text = "We’re building something exciting for you...";
    const subtitle = document.getElementById("subtitle");
    subtitle.textContent = "";

    let tl = gsap.timeline();

    tl.to(subtitle, {
        duration: 2,
        text: {
            value: text,
            delimiter: "",
        },
        ease: "none",
        repeat: -1,
        repeatDelay: 1,
        onRepeat: () => {
            subtitle.textContent = "";
        },
    });
});
