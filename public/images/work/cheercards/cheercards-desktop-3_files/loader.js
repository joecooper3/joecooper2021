
// Helper for loading JS asynchronously
function loadScript(url, callback){

	var script = document.createElement('script')
	script.type = 'text/javascript';

	if (script.readyState){  //IE
		script.onreadystatechange = function(){
			if (script.readyState == 'loaded' ||
				script.readyState == 'complete'){
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {  //Others
		script.onload = function(){
			callback();
		};
	}

	script.src = url + '?v=1.5.14';
	document.getElementsByTagName('head')[0].appendChild(script);
}

// Load site JS
loadScript('/wp-content/themes/madwell/js/dist/app.min.js', function(){
	// DEBUG: console.log('Loaded');
});
