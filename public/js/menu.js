







// Function 2


    tag_battery_status = document.querySelector('small#battery_status');
    tag_battery_level = document.querySelector('span#battery_level');
   


//Batre hp
     setInterval(function() {
         navigator.getBattery().then(battery=> {
             battery_level = String(battery.level).split('.')[1];
             tag_battery_level.innerHTML = `${(battery_level.length <= 1)? oud(Number(battery_level)): battery_level}% ${battery.charging ? 'charging': 'discharging'}`;
         });
     },
         10);

//Visit

$.getJSON("https://api.countapi.xyz/hit/botcahx-rest-api.herokuapp.com/visitor", function(response) {
    $("#visitor").text(response.value);
})


//COUNT TIME

var countDownDate = new Date("Jan 01, 2024 00:00:00").getTime();

// Update Hitungan Mundur Setiap 1 Detik
var x = setInterval(function() {

    //  Tanggal Dan Waktu
    var now = new Date().getTime();

    // Jarak Waktu
    var distance = countDownDate - now;

    // Kalkulator Waktu Hari, Jam, Menit, Detik 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Results
    document.getElementById("jadwaltime").innerHTML = days + "Hari  " + hours + "Jam " + minutes + "Menit " + seconds + "Detik ";

    // End
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("jadwaltime").innerHTML = "Happy New Year🎺";
    }
}, 1000);
//Jam
let scrollToTopRoundedfasfauserninjaXfa2xtextprimary=document.querySelector('div#row-no-guttersalign-items-center');let fasfauserninjaXfa2xtextprimary=document.querySelector('div#text-xsfont-weight-boldtext-uppercase-mb-1');setInterval(()=>{var widthdeVicewidthXinitialscalesHrinkno=new Date();const Jam= widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2,0);const jam= widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2,0);const menit= widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2,0);const Menit = widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2,0);const Detik = widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2,0);const detik= widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2,0);const jaM= widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2,0);const mEnit= widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2,0);const detIk= widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2,0);if(Jam<4){fasfauserninjaXfa2xtextprimary.innerHTML="Selamat Dini Hari";}else if(jam<11){fasfauserninjaXfa2xtextprimary.innerHTML="Selamat Pagi";}else if(Jam<16){fasfauserninjaXfa2xtextprimary.innerHTML="Selamat Siang";}else if(jam<20){fasfauserninjaXfa2xtextprimary.innerHTML="Selamat Petang";}else{fasfauserninjaXfa2xtextprimary.innerHTML="Selamat Malam";}scrollToTopRoundedfasfauserninjaXfa2xtextprimary.innerHTML=jaM+":"+mEnit+":"+detIk},250);

