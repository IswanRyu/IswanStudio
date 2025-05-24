//this
function Halo() {
    console.log(this); // window
    console.log('hello');
}
var obj1 = new Halo();
var obj2 = new Halo();