//Method Array

// 1. map

// // map(callback, thisArg)
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var angka2 = angka.map(function(e) {
    return e * 2;
})
console.log(angka2.join(' - '));
