const year = new Date();
const y = year.getFullYear();
document.getElementById("current_year").innerHTML = y;


gsap.to(".box", {
    rotation: 36,
    duration: 1,
    x: 100
});