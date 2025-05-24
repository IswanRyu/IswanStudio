//method array

// 1. filter

// filter(callback(currentValue[, index[, array]])[, thisArg])
// Mengembalikan elemen array yang memenuhi kriteria tertentu
var angka = [1,4,3,6,5,2,8,7,9,10,12,11,14,16,13,17,15,,19,18,20];
var angkaGenap = angka.filter(function(a) {
    return a > 5; 
});

angkaGenap = angkaGenap.sort(function(a,b) {
    return a - b; 
}); 

console.log(angkaGenap.join(' - '));