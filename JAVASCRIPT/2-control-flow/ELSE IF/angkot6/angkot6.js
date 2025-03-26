var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Bas no. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Bas no. ' + noAngkot + ' kerja lebih masa.');
    } else {
        console.log('Bas no. ' + noAngkot + ' tidak beroperasi dengan baik.');
    }
}
