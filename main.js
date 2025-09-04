// Brighten Blocks minimal script to avoid 404 on GitHub Pages
(function () {
	var heading = document.querySelector('h1');
	if (heading) {
		heading.insertAdjacentHTML('afterend', '<p style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial;line-height:1.6">Site is live. You can replace <code>main.js</code> with your app code or deploy the production build to <code>build/index.html</code>.</p>');
	}
	console.log('Brighten Blocks main.js loaded');
})(); 