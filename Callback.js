setTimeout(function(){console.log("time")},5000)

function a(b){
console.log("a")
b();
}
a(function b(){
console.log("b")
})