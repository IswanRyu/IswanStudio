var item = prompt('masukkan nama makanan /  minuman : \n (cth: nasi, daging, susu, burger, softdrink');

switch( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman yang kamu pilih SEHAT!');
        break;
    case 'burger' :
    case 'softdrink' :
        alert('makanan / minuman yang kamu pilih TIDAK SEHAT!');
        break;
    default :
        alert('makanan / minuman yang kamu pilih TIDAK ADA DALAM DAFTAR!');
        break;
}