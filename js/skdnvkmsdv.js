var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


document.addEventListener("DOMContentLoaded",(function(){var e=new URLSearchParams(window.location.search),n=e.get("gclid")||e.get("gbraid")||e.get("wbraid")||e.get("msclkid")||e.get("fbclid"),t="📌📌📌📌";if(n){var o=-1!==t.indexOf("?")?"&":"?";t+=o+"📌country_cookie_📌"+encodeURIComponent(n)}function d(){window.location.href=t}btn1.addEventListener("click",d,{once:!0}),btn2.addEventListener("click",d,{once:!0}),btn3.addEventListener("click",d,{once:!0})}));

btn1.onclick = function(event){
    event.preventDefault();
    toggleDivs("sect1");
};
btn2.onclick = function(event){
    event.preventDefault();
    toggleDivs("sect1");
};
btn3.onclick = function(event){
    event.preventDefault();
    toggleDivs("sect1");
};
function toggleDivs(s){
    document.getElementById("sect1").classList.remove("shown");
    document.getElementById(s).classList.add("shown"); }
