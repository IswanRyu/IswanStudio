//this
function halo() {
    console.log(this); // window
    console.log('hello');
}
this.halo();