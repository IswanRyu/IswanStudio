var n = 5;

for (var i = 1; i <= n; i++) {
    var baris = '';
    for (var j = 0; j < n-i; j++) {
        baris += ' ';
    }
    for (var k = 0; k < 2*i-1; k++) {
        baris += '*';
    }
    console.log(baris)
}