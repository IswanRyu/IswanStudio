var s = 5;

for ( var i = 0; i < s; i++) {
    var baris = '';
    for ( var j = 0; j < s-i; j++) {
        baris += ' ';}
    for ( var k = 0; k <= i; k++) {
        baris += '*';
    }
    console.log(baris);
}