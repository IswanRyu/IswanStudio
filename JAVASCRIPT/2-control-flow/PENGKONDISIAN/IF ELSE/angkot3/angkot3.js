var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot no. ' + noAngkot + ' tidak beroperasi dengan baik.')
    }
}