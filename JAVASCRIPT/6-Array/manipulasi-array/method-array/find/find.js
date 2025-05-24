//Method Array

// 1. find

// find(callback(currentValue[, index[, array]])[, thisArg])
// Mengembalikan elemen pertama yang memenuhi kriteria tertentu

var angka = [1,4,3,6,5,2,8,7,9,10,12,11,14,16,13,17,15,,19,18,20];
var angkaDicari = angka.find(function(a) {
    return a > 5; 
})
console.log(angkaDicari);