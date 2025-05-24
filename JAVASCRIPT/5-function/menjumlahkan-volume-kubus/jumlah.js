function jumlahvolume2kubus(a, b) {
    var volumeA;
    var volumeB;
    var total;
    
    volumeA = a * a * a;
    volumeB = b * b * b;
    
    total = volumeA + volumeB;
    
    return total;
}

var a = parseInt(prompt("Masukkan panjang sisi kubus A: "));
var b = parseInt(prompt("Masukkan panjang sisi kubus B: "));

alert("Total volume kubus A dan B adalah: " + jumlahvolume2kubus(a, b));