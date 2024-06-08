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
.replaceAll("[PreB]", "&sub5=preb")
.replaceAll("[FixB]", "&sub5=fixb")
.replaceAll("[SecB]", "&sub5=secb")
.replaceAll("[Pkg1]", "&sub5=pkg1")
.replaceAll("[Pkg2]", "&sub5=pkg2")
.replaceAll("[Pkg3]", "&sub5=pkg3")
.replaceAll("[Pkg4]", "&sub5=pkg4")
.replaceAll("[Pkg5]", "&sub5=pkg5")
.replaceAll("[PkgC]", "&sub5=pkgc")
.replaceAll("[TopBm]", "&sub5=topbm")
.replaceAll("[PreBm]", "&sub5=prebm")
.replaceAll("[FixBm]", "&sub5=fixbm")
.replaceAll("[SecBm]", "&sub5=secbm")
.replaceAll("[Pkg1m]", "&sub5=pkg1m")
.replaceAll("[Pkg2m]", "&sub5=pkg2m")
.replaceAll("[Pkg3m]", "&sub5=pkg3m")
.replaceAll("[Pkg4m]", "&sub5=pkg4m")
.replaceAll("[Pkg5m]", "&sub5=pkg5m")
.replaceAll("[PkgCm]", "&sub5=pkgcm")
.replaceAll("[Flag]", "&sub5=flg")
} repGu();
} else if (network === "bg") {
function repBg() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopB]", "&subid2=topb")
.replaceAll("[PreB]", "&subid2=preb")
.replaceAll("[FixB]", "&subid2=fixb")
.replaceAll("[SecB]", "&subid2=secb")
.replaceAll("[Pkg1]", "&subid2=pkg1")
.replaceAll("[Pkg2]", "&subid2=pkg2")
.replaceAll("[Pkg3]", "&subid2=pkg3")
.replaceAll("[Pkg4]", "&subid2=pkg4")
.replaceAll("[Pkg5]", "&subid2=pkg5")
.replaceAll("[PkgC]", "&subid2=pkgc")
.replaceAll("[TopBm]", "&subid2=topbm")
.replaceAll("[PreBm]", "&subid2=prebm")
.replaceAll("[FixBm]", "&subid2=fixbm")
.replaceAll("[SecBm]", "&subid2=secbm")
.replaceAll("[Pkg1m]", "&subid2=pkg1m")
.replaceAll("[Pkg2m]", "&subid2=pkg2m")
.replaceAll("[Pkg3m]", "&subid2=pkg3m")
.replaceAll("[Pkg4m]", "&subid2=pkg4m")
.replaceAll("[Pkg5m]", "&subid2=pkg5m")
.replaceAll("[PkgCm]", "&subid2=pkgcm")
.replaceAll("[Flag]", "&subid2=flg")
} repBg();
} else if (network === "cb") {
function repCb() {
document.body.innerHTML = document.body.innerHTML
.replaceAll("[TopB]", "")
.replaceAll("[PreB]", "")
.replaceAll("[FixB]", "")
.replaceAll("[SecB]", "")
.replaceAll("[Pkg1]", "")
.replaceAll("[Pkg2]", "")
.replaceAll("[Pkg3]", "")
.replaceAll("[Pkg4]", "")
.replaceAll("[Pkg5]", "")
.replaceAll("[PkgC]", "")
.replaceAll("[TopBm]", "")
.replaceAll("[PreBm]", "")
.replaceAll("[FixBm]", "")
.replaceAll("[SecBm]", "")
.replaceAll("[Pkg1m]", "")
.replaceAll("[Pkg2m]", "")
.replaceAll("[Pkg3m]", "")
.replaceAll("[Pkg4m]", "")
.replaceAll("[Pkg5m]", "")
.replaceAll("[PkgCm]", "")
.replaceAll("[Flag]", "")
} repCb();
}
