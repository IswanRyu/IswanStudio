//Method Array

// 1. sort

// sort(compareFunction)
// Mengurutkan elemen array

var angka = [1,2,5,3,6,8,4,7,9,10];
console.log(angka.join(' - '));
angka.sort(function(a,b) {
    return a - b; // ascending
})
console.log(angka.join(' - '));