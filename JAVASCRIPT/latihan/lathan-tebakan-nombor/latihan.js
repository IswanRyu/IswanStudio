var lagi = true;
while(lagi) {
    alert('Selamat datang di game tebak angka');
    var nomborTebakan = prompt('Sila masukkan nombor yang ingin ditebak\n1 hingga 20\n : ');
    var nomborSebenar = Math.random() * 20;
    var hasil = '';

    for ( i = 3; i > 0; i--) {
        percubaan = i - 1;
        if (nombor == '') {
            alert('anda harus memasukkan nombor');
            i = 0;
        }
    }
    lagi = confirm('masih ingin bermain?');
}
alert('terims kasih kerana bermain');