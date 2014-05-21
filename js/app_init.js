﻿/////////////////
// DEV DEBUGER //
/////////////////
var blockAlerts = 0;
window.onerror = function(e, url, line) {
	if(window.localStorage.getItem("config_debug") == "active" && blockAlerts == 0) {
		if(confirm('onerror: ' + e + ' URL:' + url + ' Line:' + line)) { blockAlerts = 0; } else { blockAlerts = 1; }
		//if(window.external) { window.external.Notify('onerror: ' + e + ' URL:' + url + ' Line:' + line); } 
		console.log('onerror: ' + e + ' URL:' + url + ' Line:' + line);
	}
	//if(typeof spinner == 'function') {
	//	spinner('stop');
	//}
	//setTimeout(function() {
	//	if(typeof getAnalytics == 'function') {
			//getAnalytics('error: ' + e + ' URL:' + url + ' Line:' + line);
	//	}
	//},600);
	//return false;
}
//////////////
// VIEWPORT //
//////////////
function initJS() {
document.write('<meta name="viewport" id="viewPort" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, minimal-ui" />');	
/////////
// CSS //
/////////
document.write("<link rel='stylesheet' type='text/css' id='coreCss'   href='" + hostLocal + "css/index.css' />");
document.write("<link rel='stylesheet' type='text/css' id='coreFonts' href='" + hostLocal + "css/fonts.css' />");
///////////
// WINJS //
///////////
if(navigator.userAgent.match(/MSApp/i)) {
	//document.write('<link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />');
	document.write('<script src="//Microsoft.WinJS.1.0/js/base.js"><\/script>');
	//document.write('<script src="//Microsoft.WinJS.1.0/js/ui.js"><\/script>');
}
/////////////////////
// CORDOVA/DESKTOP //
/////////////////////
if(document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1 && navigator.userAgent.match(/(iPhone|iPod|iPad|Android|IEMobile)/)) {
	document.write("<script type='text/javascript' src='" + hostLocal + "js/cordova.js'><\/script>");
	document.write("<script type='text/javascript' src='" + hostLocal + "js/facebook-connect.js'><\/script>");
	document.write("<script type='text/javascript' src='" + hostLocal + "js/facebook-js-sdk.js'><\/script>");
} else {
	document.write("<script type='text/javascript' src='" + hostLocal + "js/facebook-js-sdk.min.js'><\/script>");
}
////////
// JS //
////////
document.write("<script type='text/javascript' src='" + hostLocal + "js/iscroll.js'><\/script>");
//JQUERY
document.write("<script type='text/javascript' src='" + hostLocal + "js/jquery.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/jquery.ui.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/jquery.color.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/jquery.nicescroll.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/jquery.touchswipe.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/jquery.spin.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/jquery.nprogress.js'><\/script>");
if(!navigator.userAgent.match(/(MSIE)/)) {
	document.write("<script type='text/javascript' src='" + hostLocal + "js/quo.js'><\/script>");
}
//DB
document.write("<script type='text/javascript' src='" + hostLocal + "js/html5sql.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/localstoragedb.js'><\/script>");
//UTILS
document.write("<script type='text/javascript' src='" + hostLocal + "js/highcharts.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/mobiscroll.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/calculator.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/carpe_slider.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/galocalstorage.js'><\/script>");
/////////
// APP //
/////////
//document.write("<script type='text/javascript' src='" + hostLocal + "js/app_bootstrap.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_lib.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_lang.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_setup.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_build.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_static.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_dynamic.js'><\/script>");
document.write("<script type='text/javascript' src='" + hostLocal + "js/app_custom_core.js'><\/script>");
}

if(navigator.userAgent.match(/MSApp/i)) {
	MSApp.execUnsafeLocalFunction(function() {
		initJS();
	});
} else {
	initJS();
}

