//Array Method

// 1. forEach
// forEach(callback, thisArg)
// Mengulangi setiap elemen array


var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
angka.forEach(function(e) {
    console.log(e);
});


var buah = ["epal", "pisang", "durian"]; // item tu adalah epal, pisang, durian
// index tu adalah 0, 1, 2
// array tu adalah ["epal", "pisang", "durian"]
buah.forEach(function(item, index, array) {
    console.log("index ke-" + index + " adalah " + item);
    console.log('array asal : ' + array);
});
