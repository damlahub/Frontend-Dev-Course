let header = document.querySelector("#header");
let intro = document.querySelector("#intro");
header.style.zIndex="55";

let headerDistance = intro.offsetHeight-100;
console.log(headerDistance);

window.onscroll = function () {
    FixedScroll();
}

function FixedScroll() {
    if (window.scrollY > headerDistance) {
        header.querySelector(".row").classList.remove("bg-warning");
        header.querySelector(".row").classList.add("bg-white");
        header.style.top = "0";
    } else {
        header.querySelector(".row").classList.add("bg-warning");
        header.querySelector(".row").classList.remove("bg-white");
    }
}
