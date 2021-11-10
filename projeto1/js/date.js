const date = new Date();
var s = date.getSeconds()
var m = date.getMinutes()
let H = date.getHours() + ":" + m + ":" + s
let D = date.getDay()
let M = date.getMonth()
let Y = date.getFullYear()
m = checkTime(m)
s = checkTime2(s)
document.getElementById("date").innerHTML=H + " " + D + "/" + M + "/" + Y + " "

function checkTime(k) {
    if (k < 10) {
        return "0" + k
    } else {
        return k
    }
}

function checkTime2(k) {
    if (k < 10) {
        return "0" + k
    } else {
        return k
    }
}