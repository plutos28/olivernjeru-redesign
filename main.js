// Create logo text into a circle
new CircleType(document.getElementById("nav-logo"));

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