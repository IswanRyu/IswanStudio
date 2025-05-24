function pawagam(namaPawagam, lokasi, kapasitiOrang, orang, pendapatan) {
    this.namaPawagam = namaPawagam;
    this.lokasi = lokasi;
    this.kapasitiOrang = kapasitiOrang;
    this.orang = orang;
    this.hargaTiket = {
        dewasa: 15.00,
        pelajar: 12.00,
        wargaEmas: 10.00,
        kanakKanak: 8.00 };
    this.pendapatan = pendapatan;

    this.OrangMasukPawagam = function (bilanganOrang, umur) {
        this.kapasitiOrang -= bilanganOrang;
        this.orang += bilanganOrang;
        if (umur === 'dewasa') {
            this.pendapatan += bilanganOrang * this.hargaTiket.dewasa;
            console.log(bilanganOrang + ' orang dewasa telah masuk ke dalam ' + this.namaPawagam);
        } else if (umur === 'remaja') {
            this.pendapatan += bilanganOrang * this.hargaTiket.pelajar;
            console.log(bilanganOrang + ' orang remaja telah masuk ke dalam ' + this.namaPawagam);
        } else if (umur === 'warga emas') {
            this.pendapatan += bilanganOrang * this.hargaTiket.wargaEmas;
            console.log(bilanganOrang + ' orang warga emas telah masuk ke dalam ' + this.namaPawagam);
        } else if (umur === 'kanak kanak') {
            this.pendapatan += bilanganOrang * this.hargaTiket.kanakKanak;
            console.log(bilanganOrang + ' orang kanak kanak telah masuk ke dalam ' + this.namaPawagam);
        } else {
            console.log('Umur tidak sah!');
        }
        console.log('jumlah harga keseluruhan : RM' + this.pendapatan.toFixed(2));
        return this.orang;
    }

    this.OrangKeluarPawagam = function (bilanganOrang) {
        this.kapasitiOrang += bilanganOrang;
        this.orang -= bilanganOrang;
        console.log(bilanganOrang + ' orang telah keluar dari ' + this.namaPawagam);
        console.log('Jumlah orang dalam pawagam sekarang adalah ' + this.orang + ' orang');
        console.log('Jumlah tempat duduk yang masih ada adalah ' + this.kapasitiOrang + ' orang');
        if (this.kapasitiOrang <= 0) {
            console.log('Pawagam sudah penuh!');
        }
        return this.orang;
    }

}

var pawagamSabah = new pawagam ('Golden Screen Cinemas', 'kota kinabalu', 100, 0, 0); 