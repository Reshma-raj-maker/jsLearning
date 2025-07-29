function showMul(){
let num=parseInt(document.getElementById("num").value);
console.log(num)
let h2=document.createElement("h2")
h2.innerText=`Multiplication Table of ${num}`;
document.body.appendChild(h2)
if(num>0){
    for(i=1;i<=10;i++){
        let mul=i*num;
        let h4=document.createElement("h4");

        h4.innerText=`${i}*${num}=${mul}`;
        document.body.appendChild(h4)
        console.log(`${i}*${num}=${mul}`)
    }
}
}