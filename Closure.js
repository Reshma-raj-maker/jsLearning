function outest(){
    var c=27;
function outer(b) {
    //var a = 10;
     function inner() {
        
        console.log(a,b,c)
       
    }
     let a = 0;
     return inner;
}
return outer;
}

let a=200
var outermost=outest()
var out=outermost('hi');
out()