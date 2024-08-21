var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    btn1.onclick = function(event){
        event.preventDefault();
        toggleDivs("sect1");
		window.location.href = "https://[AFFLINK]";
    };
    btn2.onclick = function(event){
        event.preventDefault();
        toggleDivs("sect1");
		window.location.href = "https://[AFFLINK]";
    };
    btn3.onclick = function(event){
        event.preventDefault();
        toggleDivs("sect1");
		window.location.href = "https://[AFFLINK]";
    };
    function toggleDivs(s){
    document.getElementById("sect1").classList.remove("shown");
    document.getElementById(s).classList.add("shown");
}
