import "./style.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// Animate the h1 and loader using GSAP
window.addEventListener("DOMContentLoaded", () => {
    let h1split = SplitText.create("h1", {
        type: "words,chars",
        wordsClass: "word",
        charsClass: "char",
        autoSplit: true,
        onSplit: (self) => {
            return gsap.from(self.chars, {
                opacity: 0,
                y: 50,
                stagger: 0.05,
                duration: 0.5,
            });
        },
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
