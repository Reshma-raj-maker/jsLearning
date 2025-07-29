for(let i=1;i<=5;i++){
    let space= '';
    for(let j=1;j<=i;j++){
        space += '*' + '';
    }
    let h3=document.createElement("h3");
    h3.innerText=(`${space}`);
    document.body.appendChild(h3)
    
    console.log(space);
}