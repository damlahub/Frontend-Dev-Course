// const message=prompt("Mesajınız");

// // alert("Uyarı Mesajı");
// // console.log("Hello World!");

// let number1,number2;
// let total=0;

// number1=prompt("Birinci Sayıyı Giriniz..."); //Veri tipi string olarak alır.
// number2=prompt("İkinci Sayıyı Giriniz...");

// total=Number(number1) + Number(number2);

// alert(total);

// alert(typeof(total));


// console.log(message);

// const message=prompt("Mesajınız");

// let userMessageContainer=document.querySelector("#user-message");

// document.body.style.background="linear-gradient(90deg,pink,purple)";

// let paragraph=document.createElement("h2");

// paragraph.innerHTML=`paragraf`;
// paragraph.style.color="#ffffff";
// document.body.appendChild(paragraph);

// userMessageContainer.innerHTML=message;


// ------------------Text Değiştirme -------------------
let text=document.getElementById("text");
let label=document.getElementById("label");
const change=()=>{
    if(text.value){
        label.textContent=text.value;
    }else{
     alert("Boş değer girmeyiniz.");   
    }
}
const dark=()=>{
    // document.body.style.background=prompt("İngilizce Arka Plan Renk Giriniz");
    // document.body.style.color=prompt("İngilizce Yazı Renk Giriniz");    
    let random=Math.floor(Math.random()*999);
    let randomText=Math.floor(Math.random()*999);
    document.body.style.background=`#${random}`;
    document.body.style.color=`#${randomText}`;
}
const light=()=>{
    document.body.style.background="white";
    document.body.style.color="black";
}

const operators=()=>{
    // console.log(5>6); //false
    // console.log(10!=20); //true
    // console.log(0.0 === 0);

    if(6>5){
        console.log("6, 5'ten büyüktür.");
    }else{
        console.log("6, 5'ten küçüktür.");
    }
}
operators();


// -------------------------------------------------------------------------
const Login=()=>{
    const user_userName="admin";
    const user_password="123";
    let userName=document.getElementById("username");
    let password=document.getElementById("password");

    if(userName.value=== user_userName && password.value=== user_password){
        alert("Giriş Yapıldı.");
    }else if(!userName.value.trim() || !password.value.trim()){
        alert("boş bıraktınız");
    }
    else{
        alert("Kullanıcı Adı veya Şifre Yanlış.");
        userName.value="";
        password.value="";
    }
}


