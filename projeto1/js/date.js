const date = new Date();
var s = date.getSeconds()
var m = date.getMinutes()
m = checkTime(m)
s = checkTime2(s)
let H = date.getHours() + ":" + m + ":" + s
let D = date.getDay()
let M = date.getMonth() + 1
let Y = date.getFullYear()


function checkTime(k) {
    if (k < 10) {
        return "0" + k
    } else {
        return k
    }
}

function checkTime2(t) {
    if (t < 10) {
        return "0" + t
    } else {
        return t
    }
}

document.getElementById("date").innerHTML=H + " " + D + "/" + M + "/" + Y + " "
