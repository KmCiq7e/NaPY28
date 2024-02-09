function repAddParams() {
const a = new URLSearchParams(window.location.search);
var b = document.getElementsByTagName('a');
for (var c = 0; c < b.length; c++) {
var d = b[c];
if (d.href.indexOf('?') === -1) {
d.href += '?';}
if (a.toString()) {
if (d.href.indexOf('?') === -1) {
d.href += '?' + a.toString();
} else {
d.href += '&' + a.toString();}}}
} repAddParams();
