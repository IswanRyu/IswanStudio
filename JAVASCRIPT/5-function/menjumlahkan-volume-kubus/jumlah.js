function jumlahvolume2kubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    
    total = volumeA + volumeB;
    
    return total;
}

a = prompt("Masukkan panjang sisi kubus A: ");
b = prompt("Masukkan panjang sisi kubus B: ");

alert("Total volume kubus A dan B adalah: " + jumlahvolume2kubus(a, b));