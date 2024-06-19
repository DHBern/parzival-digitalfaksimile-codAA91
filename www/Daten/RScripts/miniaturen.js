var curMiniature = 1;
var oesz=unescape("%F6%DF");
var pfadMiniaturen = "50mini";
var curSlide = 8;
var rectoVerso = "r"
var blatt;
//var xmlURL;
var xmlURL = "../RScripts/bildverz.xml";
var cssURL;
var ersterAufruf = "ja";


window.addEventListener('load', function() {
  setListeners();
    miniaturAnzeigen();
	importXML();
	initTranskript();
  //bildAnsichtKonv();
  //ansichtMiniaturStart();
});

function setListeners() {

	infoButton = document.getElementById('infoButton');
	if (infoButton) {
    	infoButton.addEventListener("click", function() {
  		infoFenster('info.html');
		});
    }

	prevMiniatur = document.getElementById('blaettern2');
	prevMiniatur.addEventListener('click', goPrevMiniature);

	nextMiniatur = document.getElementById('blaettern3');
	nextMiniatur.addEventListener('click', goNextMiniature);

	zoomButton = document.getElementById('zoom');
	zoomButton.addEventListener("click", function() {
  		ansichtZoom(curSlide);
	});

	miniaturansicht = document.getElementById('miniaturansicht');
	miniaturansicht.addEventListener("click", function() {
  		ansichtKonv();
	});

	bildbeschreibung = document.getElementById('bildbeschreibung');
	bildbeschreibung.addEventListener("click", function() {
  		beschreibungAnzeigen(blatt);
	});

	g150 = document.getElementById('g150');
	g150.addEventListener("click", function() {
  		groesseAendern(150);
	});

	g100 = document.getElementById('g100');
	g100.addEventListener("click", function() {
  		groesseAendern(100);
	});

	g50 = document.getElementById('g50');
	g50.addEventListener("click", function() {
  		groesseAendern(50);
	});

	miniaturMenu = document.getElementById("miniaturMenu");
	miniaturMenu.addEventListener("change", miniaturWaehlen);

	// bildAnsichtKonv();
}

function miniaturWaehlen(){ 
	
	if (document.naviHSR.selectMiniatur.value != "javascript:") {
		curMiniature = document.naviHSR.selectMiniatur.selectedIndex;
		var temp = document.naviHSR.selectMiniatur.value;
		rectoVerso = temp.substring(0,1);
		curSlide = parseInt(temp.substring(1));
		document.naviHSR.selectMiniatur.selectedIndex = curMiniature;
		window.localStorage.setItem('localStoreCurSlide', curSlide);
		window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
		window.localStorage.setItem('localStoreAnsicht', "miniatur");
		//alert("rectoVerso: " + rectoVerso);
		miniaturAnzeigen();
	}
}

function goNextMiniature() {
	if (curMiniature < 29) {
		curMiniature++;
		var temp = document.naviHSR.selectMiniatur[curMiniature].value;
		rectoVerso = temp.substring(0,1);
		curSlide = parseInt(temp.substring(1));
		document.naviHSR.selectMiniatur.selectedIndex = curMiniature;
		miniaturAnzeigen();
	}
}

function goPrevMiniature() {
	if (curMiniature > 1) {
		curMiniature--;
		var temp = document.naviHSR.selectMiniatur[curMiniature].value;
		rectoVerso = temp.substring(0,1);
		curSlide = parseInt(temp.substring(1));
		var blatt = curSlide + rectoVerso;
		document.naviHSR.selectMiniatur.selectedIndex = curMiniature;
		miniaturAnzeigen();
	}
}

function groesseAendern(zoom) {
	switch(zoom) {
		case 50: zoom = 50;  window.localStorage.setItem('localStoreZoomStufe', zoom); miniaturAnzeigen(); break;
		case 100: zoom = 100; window.localStorage.setItem('localStoreZoomStufe', zoom); miniaturAnzeigen(); break;
		case 150: zoom = 150; window.localStorage.setItem('localStoreZoomStufe', zoom); miniaturAnzeigen(); break;
	}
}

function miniaturAnzeigen() {
	var strHref = window.location.href;
	// wenn Parameter für Seite angegeben werden
	if (strHref.indexOf("?") > -1  && ersterAufruf === "ja") {
		//alert(ersterAufruf);
		var strQueryString = strHref.substr(strHref.indexOf("?") + 1).toLowerCase();
		var aQueryString = strQueryString.split("&");
		var strQueryBlatt = aQueryString[0];
		var strQueryGroesse = aQueryString[1];
		var strQueryAnsicht = aQueryString[2];
		
		for (i = 0; i < 2; i++) {
			if (strQueryBlatt.charAt(0)=="0") {
				strQueryBlatt = strQueryBlatt.substring(1, strQueryBlatt.length);
			}
		}
		curSlide = strQueryBlatt.substring(0, strQueryBlatt.length - 1);
		rectoVerso = strQueryBlatt.substring(strQueryBlatt.length - 1, strQueryBlatt.length);
		zoom = Number(strQueryGroesse);
		ersterAufruf = "nein";
		//alert(zoom);
	} else {
		//alert("else");
		zoom = window.localStorage.getItem('localStoreZoomStufe');
	}
	
	
	/*
	if (strHref.indexOf("?") > -1 ){
		//alert("parameter");
    	var strQueryString = strHref.substr(strHref.indexOf("?") + 1).toLowerCase();
		var aQueryString = strQueryString.split("&");
		var strQueryBlatt = aQueryString[0];
		var strQueryGroesse = aQueryString[1];
		var strQueryAnsicht = aQueryString[2];
		
		for (i = 0; i < 2; i++) {
			if (strQueryBlatt.charAt(0)=="0") {
				strQueryBlatt = strQueryBlatt.substring(1, strQueryBlatt.length);
			}
		}
		curSlide = strQueryBlatt.substring(0, strQueryBlatt.length - 1);
		
		rectoVerso = strQueryBlatt.substring(strQueryBlatt.length - 1, strQueryBlatt.length);
		zoom = Number(strQueryGroesse);
		if (zoom == 50 && rectoVerso == "v") {
			curSlide = ++curSlide;
		}
		alert("curSlide: " + curSlide + " rectoVerso: " + rectoVerso + " zoom: " + zoom);
		/*if (strQueryAnsicht == "cod") {
			window.RImage.location.href = "image_konv.html";
			window.frames["navigation"].location.href = "navigation_konv.html";
			ansicht = "konv";
		} else {
			window.RImage.location.href = "image_miniatur.html";
			window.navigation.location.href = "navigation_miniaturen.html";
			ansicht = "miniatur";
		}*/
	
	
	
	
	
	//alert("Miniatur anzeigen zoooom: " + zoom);
	blatt = curSlide + rectoVerso;
	blattInfo(blatt);
	
	var temp = rectoVerso + curSlide;
	for (i = 1; i < 29; i++) {
		if (document.naviHSR.selectMiniatur[i].value.indexOf(temp) != -1) {
			curMiniature = i;
		}
	}
	
	var curSlideStr = curSlide += '';
	switch (curSlideStr.length) {
		case 1: zusatz = "00"; break;
		case 2: zusatz = "0"; break;
		default: zusatz = ""; break;
	}
	if ((zoom == 100) || (zoom == 150)) {
		pfadMiniaturen = zoom + "";
	} else {
		pfadMiniaturen = "50mini";
	}
	// Bildname und Pfad ermitteln und Bild laden
	var temp = "R" + zusatz + curSlide + rectoVerso;
	bildURL = "../RBilder/" + pfadMiniaturen + "/" + temp + ".jpg";
	//alert("bildURL: " + bildURL);
	blattAngabe = "Bl. " + blatt;
	lagenAngabe = lagenNr + lagenName;
	
	//alert("lagenAngabe: " + lagenAngabe);
	document.getElementById('versAnzeige').innerHTML = konkordanz;
	document.getElementById('blattAnzeige').innerHTML = blattAngabe;
	document.getElementById('lagenAnzeige').innerHTML = lagenAngabe;
	window.document.ImgLagensymbol.src = "../images/Lagensymbole/" + lagenSymb + ".gif";
	document.naviHSR.selectMiniatur.selectedIndex = curMiniature;
	document.images['imgFaksimile'].src = bildURL;
	//parent.RImage.document.imgFaksimile.src = bildURL;
	if (imgDescr) {window.document.getElementById('bildbeschreibung').style.visibility='visible';
	} else {window.document.getElementById('bildbeschreibung').style.visibility='hidden';}
	window.defaultStatus = "Berner Parzival-Handschrift, " + blattAngabe + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	window.localStorage.setItem('localStoreAnsicht', "miniatur");
}

function ansichtKonv() {
	
	//alert("rectoVerso in ansichtKonv: " + rectoVerso + "; curSlide " + curSlide);
	var url_konv = "konventionell.html";

	if (Number(zoom) == 50 && rectoVerso == "v") {
		curSlide = ++curSlide;
	} else if ((Number(zoom) != 50) && (rectoVerso == "v" )) {
		//curSlide = -- curSlide;
		//rectoVerso = "v";
	}
	
	
	window.localStorage.setItem('localStoreCurSlide', curSlide);
	window.localStorage.setItem('localStoreAnsicht', "konv");
	window.localStorage.setItem('localStoreZoomstufe', zoom);
	window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
	//alert("local: " + window.localStorage.getItem('localStoreCurSlide'));
	window.location.href = url_konv;
}

function ansichtZoom(seite) {
	//alert("curSlide: " + curSlide + ", zoom: " + zoom + ", ansicht: " + ansicht);
	var url_zoom = "zoomify.html";

	if ((zoom != 50) && (rectoVerso == "v")) {
		curSlide = ++curSlide;
	} else if ((ansicht == "miniatur") && (zoom == 50) && (rectoVerso == "v")) {
		curSlide = ++curSlide;
	} else {
		curSlide = curSlide;
	}
	
	
	
	window.localStorage.setItem('localStoreCurSlide', curSlide);
	window.localStorage.setItem('localStoreAnsicht', "zoom");
	window.localStorage.setItem('localStoreZoomStufe', zoom);
	window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
	
	//alert("localStorage Zoomstufe: " + window.localStorage.getItem('localStoreZoomStufe'));
	window.location.href = url_zoom;
}


function systemWeiche() {
	agt=navigator.userAgent.toLowerCase();
	if (agt.indexOf('firefox') >= 0) {
		browser = "Firefox";
		xmlURL = "RScripts/bildverz.xml";
		cssURL = "css/synopse.css";
	} else if (agt.indexOf('msie') >=0) {
		browser = "MSIE";
		xmlURL = "RScripts/bildverz.xml";
		cssURL = "css/synopse.css";
	} else if (agt.indexOf('safari') >=0) {
		browser = "Safari";
		xmlURL = "RScripts/bildverz.xml";
		cssURL = "css/synopse.css";
	}
	sys=(navigator.platform)?navigator.platform.toLowerCase():agt;
	os=((sys.indexOf('mac')>=0)?"Macintosh":(sys.indexOf('unix')>=0 || sys.indexOf('linux')>=0 || sys.indexOf('x11')>=0 || sys.indexOf('x 11')>=0)?"Linux/Unix":(sys.indexOf('os/2')>=0)?"OS/2":(sys.indexOf('win')>=0)?"Windows":"");
}

function infoFenster(URL1) {
	var breite = 600
	var hoehe = 500
	links=(screen.width-breite)/2 
	oben=(screen.height-hoehe)/4 

	F1=open(URL1,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ 	links+",screenX="+links)
}
