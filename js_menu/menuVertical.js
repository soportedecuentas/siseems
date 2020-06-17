navHover = function() {
	if (document.getElementById("navmenu-h") != null) {
		var lis = document.getElementById("navmenu-h").getElementsByTagName("LI");
		
		for (var i = 0; i < lis.length; i++) {
			lis[i].onmouseover = function(){
				this.className += " iehover";
				activarobjetos(false);
			}
			lis[i].onmouseout = function(){
				this.className = this.className.replace(new RegExp(" iehover\\b"), "");
				activarobjetos(true);
			}
		}
	}
}

//bloquerar Objetos
function activarobjetos(visibility){
	/*
		 _toggleTroubleElements('hidden', false);
		 _toggleTroubleElements : function(visibility, content){
	*/
	var version = parseFloat(navigator.appVersion.split('MSIE')[1]);
	if(version < 7){
	var selects = document.getElementsByTagName('select');
		for(var i = 0; i < selects.length; i++) {
			selects[i].style.visibility = visibility;
		}
		var iframes = document.getElementsByTagName('iframe');
		for (i = 0; i != iframes.length; i++) {
			iframes[i].style.visibility = visibility;
		}
	}
}
	
if (window.attachEvent){
	window.attachEvent("onload", navHover);
}

//funcion para convertir a mayusculas 
var last;
function Focus(elemento) { last = elemento.value;  }
function Blur(elemento) {   if (last != elemento.value) {    elemento.value=elemento.value.toUpperCase(); }}
 
 