let nav=document.querySelector("nav");
let backTop=document.querySelector(".backTop");

let distance= 200;

window.onscroll = function () {
    FixedNav();
}

const FixedNav=()=>{
    console.log(distance);
    if(window.scrollY>distance){
        nav.style.position="fixed";
        nav.style.animation = "navAnimation 1s ease-out";
        nav.style.backgroundColor="purple";
        backTop.style.display="block";
        backTop.addEventListener("click", (e)=>{
            e.preventDefault();
            window.scrollTo(0,0);
        });
    }else{
        nav.style.position="relative";
        nav.style.animation = "none";
        nav.style.backgroundColor="black";
        backTop.style.display="none";
    }
}