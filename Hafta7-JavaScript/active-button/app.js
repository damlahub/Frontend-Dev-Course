let menu=document.getElementById("menu");
let menuItem=document.getElementsByClassName("menu-item");

for (let i=0; i<menuItem.length; i++) {
    menuItem[i].addEventListener("click", function() {
        let active=document.getElementsByClassName("active");
        active[0].className = active[0].className.replace("active", "");
        this.className += " active";
    });
}

// const Show=()=>{
//     let password = document.getElementById("password");
//     if(password.type == "password") {
//     password.type="text/plain";
//     } else {
//     password.type="password";
//     }
// }

let checkbox = document.getElementById("checkbox");

checkbox.addEventListener("click", function(){
    if(checkbox.checked) {
        document.getElementById("password").type="text";
    } else {
        document.getElementById("password").type="password";
    }
});

function changeColor(){
    let bg=document.getElementById("bgColor");
    let form=document.querySelector(".form");
    form.style.backgroundColor=bg.value;
}


let sayi1=document.querySelector(".value1");
let sayi2=document.querySelector(".value2");
let sonuc=0;
let sonucText=document.querySelector(".sonucText");
function DegerKontrol(){
    if(sayi1.value=="" || sayi2.value==""){
        alert("Please Enter A Value");
    }
}

function topla(){
    DegerKontrol();
    sonuc=parseInt(sayi1.value) + parseInt(sayi2.value);
    console.log(sonuc);
    sonucText.innerHTML=sonuc;
}
function cikar(){
    DegerKontrol();
    sonuc=parseInt(sayi1.value) - parseInt(sayi2.value);
    console.log(sonuc);
    sonucText.innerHTML=sonuc;
}
function carp(){
    DegerKontrol();
    sonuc=parseInt(sayi1.value) * parseInt(sayi2.value);
    console.log(sonuc);
    sonucText.innerHTML=sonuc;
}
function bol(){
    try {
        DegerKontrol();
        sonuc=parseInt(sayi1.value) / parseInt(sayi2.value);
        sonucText.innerHTML=sonuc; 
        if(sonucText.innerHTML=="Infinity"){
            sonucText.innerHTML="Bölünemez"
        }
    } catch (error) {
        alert("Error: " + error);
    }

}


// ------------------------------------------------------------------------------------------------------
let productsCounter=document.getElementById("products-counter");

function productArttır(){
    productsCounter.value++;
    if(productsCounter.value>10){
        productsCounter.value=10;
    }
}

function productEksilt(){
    productsCounter.value--;
    if(productsCounter.value<=0){
        productsCounter.value=0;
    }  
}