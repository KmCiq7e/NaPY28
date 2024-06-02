var countDownDate = new Date().getTime() + (1000 * 60 * min) + (1000 * sec);
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
if (Math.floor((distance % (1000 * 60)) / 1000) < 10) {
var seconds = "0" + Math.floor((distance % (1000 * 60)) / 1000);
} else { var seconds = Math.floor((distance % (1000 * 60)) / 1000);}
if (document.getElementById("countdown") !== null) {document.getElementById("countdown").innerHTML = minutes + ":" + seconds;}
if (document.getElementById("countdown2") !== null) {document.getElementById("countdown2").innerHTML = minutes + ":" + seconds;}
if (distance < 2000) {
sec = 2.5;
countDownDate = new Date().getTime() + (1000 * sec);}
}, 1000);
