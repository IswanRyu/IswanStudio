var n = '';
var s = 10;

for (var i = 0; i < s; i++) {
    for (var j = s; j > i; j--) {
        n += ' ';
    }
    for( var k = 0; k <= j; k++) {
        n += '*';
    }
    n += '\n';
}
console.log(n);