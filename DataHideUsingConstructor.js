
function counterClosure(){
var count=0;
this.increment= function (){
    count++;
    console.log(count)
}
this.decrement= function (){
    count--;
    console.log(count)
}
}
var counter1=new counterClosure()
counter1.increment();
