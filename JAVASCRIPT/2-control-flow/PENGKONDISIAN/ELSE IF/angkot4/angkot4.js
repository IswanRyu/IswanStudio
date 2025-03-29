var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log('Bas no. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot === 8) {
        console.log('Bas no. ' + noAngkot + ' kerja lebih masa.');
    } else {
        console.log('Bas no. ' + noAngkot + ' tidak beroperasi dengan baik.');
    }
}
