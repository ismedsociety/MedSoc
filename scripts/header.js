
const header = document.querySelector("header");

document.addEventListener("scroll", (event) => {
    if (window.scrollY < 1) header.className = "docked";
    else header.className = "";
});
