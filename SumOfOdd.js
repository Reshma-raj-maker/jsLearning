function oddSum() {
    let lt = parseInt(document.getElementById('lim').value)
    console.log(lt);
    let sum = 0;
    for (i = 1; i <= lt; i++) {
        if ((i % 2) != 0) {

            sum = sum + i;


        }
    }
    let h4 = document.createElement("h4");
    h4.innerText = `sum of odd Numbers Are:${sum}`;
    document.body.appendChild(h4)
}