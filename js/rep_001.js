var getdayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
var getdayMonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var getNow = new Date();
var dayOfTheWeek = getNow.getDay();
function repAll() {
if (year1 === null) {
var year1 = 0;
} else if (year1 !== null) {
document.getElementById("year1").innerHTML = new Date().getFullYear();}
document.body.innerHTML = document.body.innerHTML
.replaceAll("<u>HIGH</u>", "<span style=\"color:#8A8A8A;\"> <u>HIGH</u></span>")
.replaceAll("[MainColor]", "#F19220")
} repAll();
if (typeof network === "undefined" || network === "gu" || network === null) {
function repGu2() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopBut]", "&sub5=topbut")
.replaceAll("[FixedBut]", "&sub5=fixedbut")
.replaceAll("[SecBut]", "&sub5=secbut")
.replaceAll("[ThiBut]", "&sub5=thibut")
.replaceAll("[GuaBut]", "&sub5=guabut")
.replaceAll("[LastBut]", "&sub5=lastbut")
.replaceAll("[Pack1]", "&sub5=pack1")
.replaceAll("[Pack2]", "&sub5=pack2")
.replaceAll("[Pack3]", "&sub5=pack3")
.replaceAll("[Pack4]", "&sub5=pack4")
.replaceAll("[Pack5]", "&sub5=pack5")
.replaceAll("[PackC]", "&sub5=pack-c")
} repGu2();
} else if (network === "bg") {
function repBg() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopBut]", "&subid5=topbut")
.replaceAll("[FixedBut]", "&subid5=fixedbut")
.replaceAll("[SecBut]", "&subid5=secbut")
.replaceAll("[ThiBut]", "&subid5=thibut")
.replaceAll("[GuaBut]", "&subid5=guabut")
.replaceAll("[LastBut]", "&subid5=lastbut")
.replaceAll("[Pack1]", "&subid5=pack1")
.replaceAll("[Pack2]", "&subid5=pack2")
.replaceAll("[Pack3]", "&subid5=pack3")
.replaceAll("[Pack4]", "&subid5=pack4")
.replaceAll("[Pack5]", "&subid5=pack5")
.replaceAll("[PackC]", "&subid5=pack-c")
} repBg();
} else if (network === "cb") {
function repCb() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopBut]", "")
.replaceAll("[FixedBut]", "")
.replaceAll("[SecBut]", "")
.replaceAll("[ThiBut]", "")
.replaceAll("[GuaBut]", "")
.replaceAll("[LastBut]", "")
.replaceAll("[Pack1]", "")
.replaceAll("[Pack2]", "")
.replaceAll("[Pack3]", "")
.replaceAll("[Pack4]", "")
.replaceAll("[Pack5]", "")
.replaceAll("[PackC]", "")
} repCb();
}
