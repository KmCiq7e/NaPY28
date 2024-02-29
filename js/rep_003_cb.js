var getdayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
var getdayMonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var getNow = new Date();
var dayOfTheWeek = getNow.getDay();
function repDefault() {
document.getElementById("year1").innerHTML = new Date().getFullYear();
document.body.innerHTML = document.body.innerHTML
.replaceAll("[MainColor]", "#F19220")
} repDefault();
