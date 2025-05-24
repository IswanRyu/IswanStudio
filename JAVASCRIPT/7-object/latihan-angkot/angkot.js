//membuat object angkot
function bas(pemandu, laluan, penumpang, pendapatan) {
    this.pemandu = pemandu;
    this.laluan = laluan;
    this.penumpang = penumpang;
    this.pendapatan = pendapatan;

    this.penumpangNaik = function (penumpang) {
        this.penumpang.push(penumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namapenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('bas masih kosong');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === namapenumpang) {
                this.penumpang[i] = undefined;
                this.pendapatan += bayar;
                return this.penumpang;
            }
        }
    }
}

var bas1 = new bas ('Iswandee', ['SMKR', 'matan'], [], 0);
var bas2 = new bas ('Joni', ['SMKA', 'kilimu'], [], 0);