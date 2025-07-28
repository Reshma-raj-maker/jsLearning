

function findday() {
    let num = parseInt(document.getElementById('day').value)
    console.log(num)
    let day;
    switch (num) {
        case 1: day = 'Monday'
            break;
        case 2: day = 'Tuesday'
            break;
            case 3: day='Wednesday'
            break;
            case 4: day='Thursday'
            break;
            case 5: day='Friday'
            break;
            case 6: day='Saturday'
            break;
            case 7:day ='Sunday'
            break;

    }
   
    let h1=document.createElement("h1");
    h1.innerText=`${day}`
    document.body.appendChild(h1)
}