var getdayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
var getdayMonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var getNow = new Date();
var dayOfTheWeek = getNow.getDay();
document.getElementById("year1").innerHTML = new Date().getFullYear();
function repDefault() {
document.body.innerHTML = document.body.innerHTML
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
} repDefault();
