function faktorial(n) {
    var hasil = 1;
    for (var i = n; i > 0; i--) {
        hasil *= i;
    }
    return hasil;
}
console.log(faktorial(5));