var tanya = true;
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilihan : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if ( comp < 0.34) {
        comp = 'gajah';
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if ( p == comp) {
        hasil = 'SERI!';
    } else if ( p == 'gajah') {
        //if ( comp == 'orang') {
        //    hasil = 'MENANG!';
        //} else {
        //    hasil = 'KALAH!';
        //}
        hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!';

    } else if ( p == 'orang') {
        hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if ( p == 'semut') {
        hasil = ( comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Anda memasukkan pilihan yang tiada dalam cerita!'
    }

    //menampilkan hasilnya
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n' + 'Maka hasilnya adalah : Kamu ' + hasil)

    tanya = confirm('Nak main lagi?');
}

alert('terima kasih telah bermain dengan saya.')