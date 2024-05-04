var getdayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var getdayMonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var getNow = new Date();
var dayOfTheWeek = getNow.getDay();
var thisYear = getNow.getFullYear();
document.getElementById("yearf").innerHTML = thisYear;
if (typeof network === "undefined" || network === "gu" || network === null) {
function repGu() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopB]", "&sub5=topb")
.replaceAll("[FixB]", "&sub5=fixb")
.replaceAll("[SecB]", "&sub5=secb")
.replaceAll("[ThiB]", "&sub5=thib")
.replaceAll("[GuaB]", "&sub5=guab")
.replaceAll("[LstB]", "&sub5=lstb")
.replaceAll("[Pkg1]", "&sub5=pkg1")
.replaceAll("[Pkg2]", "&sub5=pkg2")
.replaceAll("[Pkg3]", "&sub5=pkg3")
.replaceAll("[Pkg4]", "&sub5=pkg4")
.replaceAll("[Pkg5]", "&sub5=pkg5")
.replaceAll("[PkgC]", "&sub5=pkgc")
} repGu();
} else if (network === "bg") {
function repBg() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopB]", "&subid5=topb")
.replaceAll("[FixB]", "&subid5=fixb")
.replaceAll("[SecB]", "&subid5=secb")
.replaceAll("[ThiB]", "&subid5=thib")
.replaceAll("[GuaB]", "&subid5=guab")
.replaceAll("[LstB]", "&subid5=lstb")
.replaceAll("[Pkg1]", "&subid5=pkg1")
.replaceAll("[Pkg2]", "&subid5=pkg2")
.replaceAll("[Pkg3]", "&subid5=pkg3")
.replaceAll("[Pkg4]", "&subid5=pkg4")
.replaceAll("[Pkg5]", "&subid5=pkg5")
.replaceAll("[PkgC]", "&subid5=pkgc")
} repBg();
} else if (network === "cb") {
function repCb() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopB]", "")
.replaceAll("[FixB]", "")
.replaceAll("[SecB]", "")
.replaceAll("[ThiB]", "")
.replaceAll("[GuaB]", "")
.replaceAll("[LstB]", "")
.replaceAll("[Pkg1]", "")
.replaceAll("[Pkg2]", "")
.replaceAll("[Pkg3]", "")
.replaceAll("[Pkg4]", "")
.replaceAll("[Pkg5]", "")
.replaceAll("[PkgC]", "")
} repCb();
}
