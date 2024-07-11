<title>Title</title>
    <style>
        body, html {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: auto;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var urlParams = new URLSearchParams(window.location.search);
            var affUrl = '[AffLink]';
			var addParams = urlParams.toString();
			if (affUrl.indexOf('?') === -1) {
                    affUrl += '?' + addParams;
                } else {
                    affUrl += '&' + addParams;
                }
			
            function redirectToUrl() {
                window.location.href = affUrl;
            }

            document.addEventListener('mousemove', redirectToUrl, { once: true });
            document.addEventListener('click', redirectToUrl, { once: true });
            document.addEventListener('touchstart', redirectToUrl, { once: true });
        });
    </script>
