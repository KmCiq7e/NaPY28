var getdayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
var getdayMonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var getNow = new Date();
var dayOfTheWeek = getNow.getDay();
if (network === "bg") {
function repBg() {
document.getElementById("year1").innerHTML = new Date().getFullYear();
document.body.innerHTML = document.body.innerHTML
.replaceAll("<u>HIGH</u>", "<span style=\"color:#ff0000;\"> <u>HIGH</u></span>")
.replaceAll("[TopBut]", "&subid5=topbut")
.replaceAll("[FixedBut]", "&subid5=fixedbut")
.replaceAll("[SecBut]", "&subid5=secbut")
.replaceAll("[ThiBut]", "&subid5=thibut")
.replaceAll("[GuaBut]", "&subid5=guabut")
.replaceAll("[MainColor]", "#F19220")
.replaceAll("[Pack1]", "&subid5=pack1")
.replaceAll("[Pack2]", "&subid5=pack2")
.replaceAll("[Pack3]", "&subid5=pack3")
.replaceAll("[Pack4]", "&subid5=pack4")
.replaceAll("[Pack5]", "&subid5=pack5")
.replaceAll("[PackC]", "&subid5=pack-c")
} repBg();
} else if (network === "cb") {
function repCb() {
document.getElementById("year1").innerHTML = new Date().getFullYear();
document.body.innerHTML = document.body.innerHTML
.replaceAll("<u>HIGH</u>", "<span style=\"color:#ff0000;\"> <u>HIGH</u></span>")
.replaceAll("[MainColor]", "#F19220")
} repCb();
} else {
function repGu() {
document.getElementById("year1").innerHTML = new Date().getFullYear();
document.body.innerHTML = document.body.innerHTML
.replaceAll("<u>HIGH</u>", "<span style=\"color:#ff0000;\"> <u>HIGH</u></span>")
.replaceAll("[TopBut]", "&sub5=topbut")
.replaceAll("[FixedBut]", "&sub5=fixedbut")
.replaceAll("[SecBut]", "&sub5=secbut")
.replaceAll("[ThiBut]", "&sub5=thibut")
.replaceAll("[GuaBut]", "&sub5=guabut")
.replaceAll("[MainColor]", "#F19220")
.replaceAll("[Pack1]", "&sub5=pack1")
.replaceAll("[Pack2]", "&sub5=pack2")
.replaceAll("[Pack3]", "&sub5=pack3")
.replaceAll("[Pack4]", "&sub5=pack4")
.replaceAll("[Pack5]", "&sub5=pack5")
.replaceAll("[PackC]", "&sub5=pack-c")
} repGu();
}
