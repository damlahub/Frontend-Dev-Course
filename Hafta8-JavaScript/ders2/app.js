const sureHesapla=(zaman,goster)=>{
    var timer=zaman,dakika,saniye;
    setInterval(() => {
        dakika=parseInt(timer/60, 10);
        saniye=parseInt(timer%60, 10);
        dakika=dakika<10?"0"+dakika:dakika;
        saniye=saniye<10?"0"+saniye:saniye;

        goster.innerText=dakika+":"+saniye;
        if(--timer<0){
            if(confirm("Cıkmak ister misiniz?")){
                window.close();
            }else{
                timer=zaman;
            }
        }
    }, 1000);
}

window.onload=()=>{
    var zamanlayici=30*1;
    var gosterge = document.querySelector("#sure"); 
    sureHesapla(zamanlayici,gosterge);  
}

// ----------------------------------------------

$('.sayac').counterUp({delay:10,time:1000});
