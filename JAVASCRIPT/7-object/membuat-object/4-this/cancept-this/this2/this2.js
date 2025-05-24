//this
var obj = {a : 10, nama : 'iswandee'};
obj.halo = function() {
    console.log(this); 
    console.log('hello');
}
obj.halo();