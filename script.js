const currentYear = new Date();
document.getElementById("current_year").innerHTML = currentYear.getFullYear();

// main_name = Farid Akanda

gsap.registerPlugin(SplitText);
let split = SplitText.create(".main_name", {type: "chars, words, line"});
gsap.from(split.chars, {
    duration: 0.5,
    xPercent: -100,
    autoAlpha: 0,
    stagger: 0.2
});
// gsap.to(".box", {
//     rotation: 36,
//     duration: 1,
//     x: 100
// });

// adding here script code for making animation