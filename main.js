// toggle & responsive navigation
const navSlide = () => {
    const burgeer = document.querySelector(".burger")
    const navList = document.querySelector("nav")

    burgeer.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burgeer.classList.toggle("toogle-burger");
    });
};

navSlide();

// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};