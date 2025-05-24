// constructor
var mhs1 = {
    nama: 'Rizky',
    kadpengenalan: '1234567881',
    email: 'rizky@gmail.com',
    jurusan: 'Teknik Informatika',
}

var mhs2 = {
    nama: 'alia',
    kadpengenalan: '1234567890',
    email: 'alia@gmail.com',
    jurusan: 'Teknik Informatika',
}

function buatObjectMahasiswa(nama, kadpengenalan, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.kadpengenalan = kadpengenalan;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('hannah', '1234567891', 'hannah@gmail.com', 'Teknik Informatika');

function Mahasiswa(nama, kadpengenalan, email, jurusan) {
    this.nama = nama;
    this.kadpengenalan = kadpengenalan;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('halwa', '1234567892', 'halwa@gmail.com', 'Teknik Informatika');