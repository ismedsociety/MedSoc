
const header = document.querySelector("header");
header.className = "docked";

document.addEventListener("scroll", (event) => {
    if (window.scrollY < 1) header.className = "docked";
    else header.className = "";
});
