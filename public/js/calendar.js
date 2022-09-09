// tahunbaru
// Tahun baruuuuuu
var countDownDate = new Date("Jan 01, 2023 00:00:00").getTime();

// Update Hitungan Mundur Setiap 1 Detik
var x = setInterval(function() {

    // Mengambil Tanggal Dan Waktu
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Kalkulator Waktu Hari, Jam, Menit, Detik 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Menampilkan Hasil Di Dalam element Menggunakan id="time"
    document.getElementById("tahunbaru").innerHTML = days + "Hari  " + hours + "Jam " + minutes + "Menit " + seconds + "Detik ";

    // Ketika countdown timer sudah berakhir Maka Tulisan Berakhir
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("tahunbaru").innerHTML = "Berakhir";
    }
}, 1000);
