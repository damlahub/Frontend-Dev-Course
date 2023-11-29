// var sayi =0;
// var sayac=0;
// var toplam =0;
// sayi= Number(prompt("Bir Sayı Giriniz..."));

// while (sayac<sayi) {
//     sayac++;
//     toplam+=sayac;
//     console.log(sayac);
//     console.log(toplam);
// }
// console.log("Toplam: " + toplam);
// for ( sayac = 1; sayac < sayi; sayac++) {
//  toplam+=sayac;
//  console.log(sayac);
//  console.log("Toplam"+toplam);
// }
const sayiListele= ()=>{
    let sayi=document.getElementById("sayi");
    let hata=document.getElementById("hata");

    if(sayi.value<1){
        hata.style.backgroundColor="red";
        hata.innerText="Hata";
        hata.style.display="inline-block";
    }else{
        hata.style.display="none";
        const liste =document.querySelector("#sayiListesi");
        liste.innerHTML="Liste";
        for (let i = 1; i <= sayi.value; i++) {
            const li =document.createElement("li");
            const date=document.createElement("input");
            date.type="checkbox";
            li.appendChild(date);
            liste.appendChild(li);
        }
    }
}