//nombor
var lagi = true;
while (lagi) {
    alert('selamat datang ke permainan teka nombor');
    var nombor = prompt('Masukkan nombor antara 1 hingga 10 yang ingin anda teka : ');
    var comp = math.random()* 10;
    var hasil = '';

    //menentukan rules
    for( var i = 3; i > 0; i--) {
        var kesempatan = i - 1;
        if (nombor == '')  {
            hasil = 'nombor tidak boleh kosong';
            i = 0;
        } else {
            if (nombor == comp) {
                hasil = 'Tahniah anda meneka nombor yang betul\nNombor yang dicari adalah : ' + comp;
                i = 0;
            } else if (nombor < comp) {
                if (kesempatan == 0) {
                    hasil = 'Kesempatan anda telah habis dan anda telah GAGAL!\nNombor yang dicari adalah : ' + comp;
                    i = 0;
                } else {
                    hasil = 'Nombor yang anda masukkan terlalu rendah\nTinggal ' + kesempatan + ' kesempatan lagi';
                }
            } else if (nombor > comp) {
                if (kesempatan == 0) {
                    hasil = 'Kesempatan anda telah habis dan anda telah GAGAL!\nNombor yang dicari adalah : ' + comp;
                    i = 0;
                } else {
                    hasil = 'Nombor yang anda masukkan terlalu tinggi\nTinggal ' + kesempatan + ' kesempatan lagi';
                }
            } else if (nombor > 10) {
                hasil = 'Anda memasukkan nombor melebihi 10!';
            }
        }
    }
    lagi = confirm('Adakah anda ingin bermain teka nombor lagi?');
}
alert('terima kasih telah bermain teka nombor')