$(document).ready(function () {
    let num = 1;
    let btnAni;

    function bChange() {
        num++;
        if (num > 45) num = 0;
        $(".banner").css("background-position", "0 -" + 175 * num + "px")
    }
    function bChangR() {
        num--;
        setTimeout(function () {
            $(".banner").css("background-position", "0 -" + 175 * num + "px")
            if (num < 1) {
                return false
            } else {
                bChangR()
            }
        }, 40)
    }

    $(".banner").mouseenter(function () {
        btnAni = setInterval(bChange, 40)
    })
    $(".banner").mouseleave(function () {
        clearInterval(btnAni)
        bChangR()
    })
})