function count() {
    for (let i = 0; i < 5; i++) {
        function clos(x) {
            setTimeout(function () {
                console.log(x)
            }, 1000 * i)
        }
        clos(i)

    }
}
count()

