// Create logo text into a circle
// new CircleType(document.getElementById("nav-logo"));

// Create the custom cursor with extra effects
let kursorx = new kursor({
    type: 2,
    color: "#000"
})

// Change the dimensions of the cursor when it hovers over hoverables
const hoverables = [...document.querySelectorAll(".hoverable")];

hoverables.forEach(hoverable => {
    hoverable.addEventListener("mouseenter", onMouseEnterHoverable);
    hoverable.addEventListener("mouseleave", onMouseLeaveHoverable);
});

function onMouseEnterHoverable(e) {
    console.log(`entering ${e.srcElement.id}`);

    // Change the blending mode and size of kursor and kursorChild
    kursorx.kursor.classList.add("cursor-hover");
}

function onMouseLeaveHoverable(e) {
    console.log(`leaving ${e.srcElement.id}`);

    // Change the blending mode and size of kursor and kursorChild
    kursorx.kursor.classList.remove("cursor-hover");
}


// Fade in the hero h1 text when the document loads
const heroH1 = document.querySelector(".hero h1");
window.addEventListener("load", (e) => {
    heroH1.style.cssText += "opacity: 1;";
    // move back to original position
    heroH1.style.cssText += "transform: translate3d(0, 0, 0);";
});

// Trigger the sticky navbar
const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});