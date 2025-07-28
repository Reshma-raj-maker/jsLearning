
function counterClosure(){
var count=0;
return function counter(){
    count++;
    console.log(count)
}
}
var countret=counterClosure()

countret();
