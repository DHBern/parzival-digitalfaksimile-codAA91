// Variablendeklaration;

var anzeigeModus = "";
//var curSlide = parent.curSlideX;
//var zoom = parent.zoomX;
//var rectoVerso = parent.rectoVersoX;
//var zusatz = "";
//var bildURL = "";
//var buch = 1;

var lageTxt = ". Lage, ";
var lagenAngabe = "";
var blattTxt = "Bl. ";
var seitenAngabe = "";
var blattAngabe = "";
var buchAuswahl = 2;
var browser;
var os;
var xmlURL = "RScripts/bildverz.xml";
//var xmlURL;
aktBuch = parent.aktBuch;
var oesz=unescape("%F6%DF");
var ae = unescape("%e4");
var xmlDoc;
var bildbeschreibungen;
//systemWeiche();
importXML();

var illustrationenArr = new Array('8r','18v','20r','21r','23r','28v','29v','38r','40v','47r','47v','52v','56r','57v','58r','59v','60v','61v','62r','63v','118r','118v','126r','128r','156v','158v','165v','166v');

//Menu Abschnitte wählen
function MM_jumpMenuParts(){ 
	if (document.naviHSR.selectBook.value != "javascript:") {
		if (document.naviHSR.selectBook.selectedIndex == 1) {

			var temp = document.naviHSR.selectBook.value;
			rectoVerso = temp.substring(0,1);
			curSlide = -2;
			document.naviHSR.selectBook.selectedIndex = 1;

			if (zoom==50) {
				bildAnzeigeDS();
			} else {
				bildAnzeigeES();
			}

		} else {
			var temp = document.naviHSR.selectBook.value;
			rectoVerso = temp.substring(0,1);
			curSlide = parseInt(temp.substring(1));
			document.naviHSR.selectBook.selectedIndex = 0;

			if (zoom==50) {
				if (rectoVerso=="v") {
					curSlide++;
				}
				bildAnzeigeDS();
			} else {
				bildAnzeigeES();
			}
		}
	}
}



function goNextBook () {
	if (aktBuch < 16) {
		document.naviHSR.selectBook.selectedIndex = (++aktBuch + 1);
	} else {return;}

	var temp = document.naviHSR.selectBook.value;
	rectoVerso = temp.substring(0,1);
	curSlide = parseInt(temp.substring(1));

	if (zoom==50) {
		if (rectoVerso=="v") {
			curSlide++;
		}
		bildAnzeigeDS();
	} else {
		bildAnzeigeES();
	}
}



function goPrevBook () {
	if (aktBuch > 1) {
		document.naviHSR.selectBook.selectedIndex = (--aktBuch + 1);
	} else if ((aktBuch == 1) || (curSlide > 1)) {
		document.naviHSR.selectBook.selectedIndex = (aktBuch + 1);
	} else {
		return;
	}

	var temp = document.naviHSR.selectBook.value;
	rectoVerso = temp.substring(0,1);
	curSlide = parseInt(temp.substring(1));
	
	if (zoom==50) {
		if (rectoVerso=="v") {
			curSlide++;
		}
		bildAnzeigeDS();
	} else {
		bildAnzeigeES();
	}
}





function submitenter(myfield,e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13) {
		if (myfield.name == "Blatt") {
			document.naviHSR.Vers.value = "";;
			checkSeitenEingabe();
		}	else if (myfield.name == "Vers") {
			document.naviHSR.Blatt.value = "";
   		checkVersEingabe();
   	}

	} else

	return true;

}



function goNextPage() {
	if (zoom == 50) {
		if (curSlide <= 182) {
			curSlide++;
			window.localStorage.setItem('localStoreCurSlide', curSlide);
			//window.localStorage.setItem('localStoreRectoVerso', rectoVerso);

			bildAnzeigeDS();
		}
	} else {
		if (!(curSlide == 182 && rectoVerso == "v")) {
			if (rectoVerso == "v") {
				curSlide++;
				rectoVerso = "r";
			} else {
				rectoVerso = "v";
			}
			window.localStorage.setItem('localStoreCurSlide', curSlide);
			window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
			bildAnzeigeES();
		}
	}
}



function goPrevPage() {
	if (zoom == 50) {
		if (curSlide > -2) {
			curSlide--;
			window.localStorage.setItem('localStoreCurSlide', curSlide);
			//window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
			bildAnzeigeDS();
		}
	} else {
		if (!(curSlide == -2 && rectoVerso == "r")) {
			if (rectoVerso == "r") {
				curSlide--;
				rectoVerso = "v";
			} else {
				rectoVerso = "r";
			}
		}
		window.localStorage.setItem('localStoreCurSlide', curSlide);
		window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
		bildAnzeigeES();
	}
}



function checkSeitenEingabe() {

	var curSlideAlt = curSlide;
	var rectoVersoAlt = rectoVerso;
	var seitenEingabe = document.naviHSR.Blatt.value;

	if (seitenEingabe == "0" || seitenEingabe == "" || isNaN(parseInt(seitenEingabe))) {document.naviHSR.Blatt.value = ""; return}

	while (seitenEingabe.charAt(0)=="0") { //Führende 0'en abschneiden
		seitenEingabe = seitenEingabe.substring(1, seitenEingabe.length);
	}

	var temp = seitenEingabe.charAt(seitenEingabe.length - 1);

	if (temp == "r" || temp == "v") {
		curSlide = seitenEingabe.substring(0, seitenEingabe.length - 1);
		rectoVerso = seitenEingabe.substring(seitenEingabe.length - 1, seitenEingabe.length);
	} else if ((seitenEingabe.charCodeAt(seitenEingabe.length - 1) > 47) && (seitenEingabe.charCodeAt(seitenEingabe.length - 1) < 58)) {
		curSlide = seitenEingabe;
		rectoVerso = "r";
	} else {alert("Bitte geben Sie eine gültige Blattanzeige ein."); return;}

		

	if (zoom == 50) {
		if (rectoVerso == "v") {
			curSlide = ++curSlide;
		}

		document.naviHSR.Blatt.value = "";
		if ((curSlide > 0) && (curSlide < 181)) {
			bildAnzeigeDS();
		} else {

			alert("Das erste paginierte Blatt der Handschrift ist Bl. 1, das letzte paginierte Blatt ist Bl. 180. Die Vorsatzblätter und die Buchdeckel können Sie von dort aus über die Buttons \"zurück-\" bzw. \"weiterblättern\" erreichen."); curSlide = curSlideAlt; rectoVerso = rectoVersoAlt;

		}
	} else {
		if ((curSlide > 0) && (curSlide < 181)) {
			bildAnzeigeES();
		} else {
			alert("Das erste paginierte Blatt der Handschrift ist Bl. 1, das letzte paginierte Blatt ist Bl. 180. Die Vorsatzblätter und die Buchdeckel können Sie von dort aus über die Buttons \"zurück-\" bzw. \"weiterblättern\" erreichen."); curSlide = curSlideAlt; rectoVerso = rectoVersoAlt;
		}
	}
	document.naviHSR.Blatt.value = "";
}





function bildAnzeigeES() {
	if (((curSlide > -3) && (curSlide < 183))) {
		var blatt = curSlide + rectoVerso + "";
		blattInfo(blatt);
		var curSlideStr = curSlide += '';
		switch (curSlideStr.length) {
			case 1: zusatz = "00"; break;
			case 2: zusatz = "0"; break;
			default: zusatz = ""; break;
		}		

		// Bildname und Pfad ermitteln und Bild laden
		var temp = "R" + zusatz + curSlide + rectoVerso;
		bildURL = "../RBilder/" + zoom + "/" + temp + ".jpg";
		//alert("bildURL: " + bildURL);

		switch (blatt) {

			case "0v": blattAngabe = "Iv"; lagenAngabe = ""; buchAuswahl = 0; break;
			case "0r": blattAngabe = "Ir"; lagenAngabe = ""; buchAuswahl = 0; break;
			case "-1v": blattAngabe = "Vorsatzblatt"; lagenAngabe = ""; bildURL = "../RBilder/" + zoom + "/Rvs001v.jpg"; buchAuswahl = 0; break;
			case "-1r": blattAngabe = "Vorsatzblatt"; lagenAngabe = ""; bildURL = "../RBilder/" + zoom + "/Rvs001r.jpg"; buchAuswahl = 0; break;
			case "-2v": blattAngabe = "Buchdeckel"; lagenAngabe = ""; bildURL = "../RBilder/" + zoom + "/Rvs002v.jpg"; buchAuswahl = 0; break;
			case "-2r": blattAngabe = "Buchdeckel vorne"; lagenAngabe = ""; bildURL = "../RBilder/" + zoom + "/Rvs002r.jpg"; buchAuswahl = 1; break;
			case "181r": blattAngabe = "Vorsatzblatt"; lagenAngabe = ""; buchAuswahl = 0; break;
			case "181v": blattAngabe = "Vorsatzblatt"; lagenAngabe = ""; buchAuswahl = 0; break;
			case "182r": blattAngabe = "Buchdeckel"; lagenAngabe = ""; buchAuswahl = 0; break;
			case "182v": blattAngabe = "Buchdeckel außen"; lagenAngabe = ""; buchAuswahl = 18; break;
			default: blattAngabe = "Bl. " + blatt; lagenAngabe = lagenNr + lagenName; buchAuswahl = aktBuch + 1; break;

		}

		

		document.getElementById('versAnzeige').innerHTML = konkordanz;
		document.getElementById('blattAnzeige').innerHTML = blattAngabe;
		document.getElementById('lagenAnzeige').innerHTML = lagenAngabe;
		window.document.ImgLagensymbol.src = "../images/Lagensymbole/" + lagenSymb + ".gif";
		document.naviHSR.selectBook.selectedIndex = buchAuswahl;
		document.images['imgFaksimile'].src = bildURL;
		if (imgDescr) {
			window.document.getElementById('bildbeschreibung').style.visibility='visible';  
			window.document.getElementById('miniaturansicht').style.visibility='visible';
			window.document.getElementById('bildbeschreibungHell').style.visibility='hidden';  
			window.document.getElementById('miniaturansichtHell').style.visibility='hidden';
		} else {
			window.document.getElementById('bildbeschreibung').style.visibility='hidden';  
			window.document.getElementById('miniaturansicht').style.visibility='hidden';
			window.document.getElementById('bildbeschreibungHell').style.visibility='visible';  
			window.document.getElementById('miniaturansichtHell').style.visibility='visible';
		}

		window.defaultStatus = "Berner Parzival-Handschrift, " + blattAngabe + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	}	
}



function bildAnzeigeDS() {
	var blatt = curSlide + "";
	blattInfoDS(blatt);
	var curSlideStr = curSlide += '';

	switch (curSlideStr.length) {

		case 1: var zusatz = "00"; break;
		case 2: var zusatz = "0"; break;
		default: var zusatz = ""; break;

	}

	var temp = "R" + zusatz + curSlide;
	var bildURL = "../RBilder/50/" + temp + ".jpg";
	//alert("bildURL: " + bildURL);

	switch (curSlide) {

		case "0": seitenAngabe = "Vorsatzbl. / Bl. Ir"; lagenAngabe = ""; buchAuswahl = 0; break;
		case "1": seitenAngabe = "Bl. Iv / Bl. " + curSlide + "r"; lagenAngabe = lagenNr + lageTxt + lagenName; buchAuswahl = 2; break;
		case "181": seitenAngabe = "Bl. " + (curSlide-1) + "v / Vorsatzbl."; lagenAngabe = ""; buchAuswahl = aktBuch + 1; break;
		case "182": seitenAngabe = "Vorsatzbl. / Buchdeckel"; lagenAngabe = ""; buchAuswahl = 0; break;
		case "183": seitenAngabe = "Buchdeckel außen"; lagenAngabe = ""; buchAuswahl = 18; break;
		case "-1": seitenAngabe = "Buchdeckel / Vorsatzbl."; lagenAngabe = ""; bildURL = "../RBilder/50/Rvs001.jpg"; buchAuswahl = 0; break;
		case "-2": seitenAngabe = "Buchdeckel vorne"; lagenAngabe = ""; bildURL = "../RBilder/50/Rvs002.jpg"; buchAuswahl = 1; break;
		default: seitenAngabe = "Bl. " + (curSlide-1) + "v / " + curSlide + "r"; lagenAngabe = lagenNr + lageTxt + lagenName; buchAuswahl = aktBuch + 1; break;

	}

	document.getElementById('blattAnzeige').innerHTML = seitenAngabe;
	document.getElementById('versAnzeige').innerHTML = konkordanz;
	window.document.ImgLagensymbol.src = "../images/LagensymboleDoppelt/" + lagenSymb + ".gif";
	document.getElementById('lagenAnzeige').innerHTML = lagenAngabe;
	document.naviHSR.selectBook.selectedIndex = buchAuswahl;
	document.images['imgFaksimile'].src = bildURL;

	if (imgDescr) {
		window.document.getElementById('bildbeschreibung').style.visibility='visible'; 
		window.document.getElementById('miniaturansicht').style.visibility='visible';
		window.document.getElementById('bildbeschreibungHell').style.visibility='hidden';  
		window.document.getElementById('miniaturansichtHell').style.visibility='hidden';
	} else {
		window.document.getElementById('bildbeschreibung').style.visibility='hidden'; 
		window.document.getElementById('miniaturansicht').style.visibility='hidden';
		window.document.getElementById('bildbeschreibungHell').style.visibility='visible';  
		window.document.getElementById('miniaturansichtHell').style.visibility='visible';
	}

	window.defaultStatus = "Berner Parzival-Handschrift, " + seitenAngabe + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
}



function zoom150() {
	switch (Number(zoom)) {

		case 50: if((curSlide == "-2") && (rectoVerso == "r")) {break;} else {rectoVerso ="v"; curSlide--;	linkeSeite = curSlide + rectoVerso;	break;}
		case 100: break;
		case 150: return; break;

	}

	zoom = 150; 
	bildAnzeigeES();
}



function zoom100() {
	switch (Number(zoom)) {

		case 50: 
		if((curSlide == "-2") && (rectoVerso == "r")) {
			break;
		} else {
			rectoVerso ="v"; 
			curSlide--;	
			linkeSeite = curSlide + rectoVerso;	
			break;
		}
		case 100: return; break;
		case 150: break;
	}

	zoom = 100;
	bildAnzeigeES();	
}



function zoom50() {

	switch (true) {

		case  Number(zoom) > 50: if (rectoVerso == "v") {curSlide++}; break;
		case  Number(zoom) == 50: return; break;

	}

	zoom = 50;
	bildAnzeigeDS();
}

function ansichtKonv() {
	//
	if ((String(window.location).indexOf("material") != -1) || (String(window.location).indexOf("einfuehrung") != -1)) {
		window.localStorage.setItem('localStoreCurSlide', '1');
		window.localStorage.setItem('localStoreAnsicht', 'konv');
		window.localStorage.setItem('localStoreZoomStufe', 50);
		window.localStorage.setItem('localStoreRectoVerso', 'doppelseitig');
		curSlide = '1';
		zoom = 50;
		//alert("material");

	} else {
		window.localStorage.setItem('localStoreCurSlide', curSlide);
		window.localStorage.setItem('localStoreAnsicht', "konv");
		window.localStorage.setItem('localStoreZoomstufe', zoom);
		window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
		//alert("nicht material");
	}
	//alert("curSlide: " + curSlide);
	//alert("rectoVerso in ansichtKonv: " + rectoVerso + "; curSlide " + curSlide);
	var url_konv = "konventionell.html";

	if (Number(zoom) == 50) {
		curSlide = curSlide;
	} else if ((Number(zoom) != 50) && (rectoVerso == "v" )) {
		curSlide = -- curSlide;
		//rectoVerso = "v";
	}
	
	
	
	//alert("local: " + window.localStorage.getItem('localStoreCurSlide'));
	window.location.href = url_konv;

}

function ansichtZoom() {

	var url_zoom = "zoomify.html";

	if ((zoom != 50) && (rectoVerso == "v")) {
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


function ansichtMiniatur() {
	//alert("curSlide: " + curSlide + ", zoom: " + zoom + ", rectoVerso: " + rectoVerso);
	var url_miniatur = "miniaturen.html";
	curSlide = window.localStorage.getItem('localStoreCurSlide');
	ansicht = window.localStorage.getItem('localStoreAnsicht');
	zoom = window.localStorage.getItem('localStoreZoomStufe');
	rectoVerso = window.localStorage.getItem('localStoreRectoVerso');
		
	if(zoom == 50) {
		if ((curSlide == "8") || (curSlide == "20") || (curSlide == "21") || (curSlide == "23") || (curSlide == "38") || (curSlide == "47") || (curSlide == "56") || (curSlide == "118") || (curSlide == "126") || (curSlide == "128")) {
			rectoVerso = "r";
		} else {
			rectoVerso = "v"; curSlide--;
		}
	} else {
		rectoVerso = rectoVerso;
	}
	
	window.localStorage.setItem('localStoreCurSlide', curSlide);
	window.localStorage.setItem('localStoreAnsicht', "miniatur");
	window.localStorage.setItem('localStoreZoomStufe', zoom);
	window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
	//alert("zoom: " + zoom + " ; curSlide: " + curSlide + "; rectoVerso: " + rectoVerso);
	window.location.href = url_miniatur;
}

function ansichtMiniaturStart() {
	
	if (String(window.location).indexOf("Daten") != -1) {
		var url_miniatur = "miniaturen.html";
	} else {
		var url_miniatur = "Daten/miniaturen.html";
	}
	
	curSlide = "8";
	rectoVerso = "r";
	zoom = "50";
	
	window.localStorage.setItem('localStoreCurSlide', curSlide);
	window.localStorage.setItem('localStoreAnsicht', "miniatur");
	window.localStorage.setItem('localStoreZoomStufe', zoom);
	window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
	//alert("zoom: " + zoom + " ; curSlide: " + curSlide + "; rectoVerso: " + rectoVerso);
	//alert("localStorage Zoomstufe: " + window.localStorage.getItem('localStoreZoomStufe'));
	window.location.href = url_miniatur;
}


function ansichtMiniaturen() {

	var url_nav = "navigation_miniaturen.html";
	var url_img = "image_miniatur.html";
	parent.curSlideX = curSlide;
	parent.zoomX = zoom;

	if(zoom == 50) {
		if ((curSlide == "8") || (curSlide == "20") || (curSlide == "21") || (curSlide == "23") || (curSlide == "38") || (curSlide == "47") || (curSlide == "56") || (curSlide == "118") || (curSlide == "126") || (curSlide == "128")) {
			parent.rectoVersoX = "r";
		} else {
			parent.rectoVersoX = "v"; parent.curSlideX--;
		}
	} else {
		parent.rectoVersoX = rectoVerso;
	}
	parent.RImage.location.href = url_img;
	parent.navigation.location.href = url_nav;

}


function bildAnsichtKonv() {

	// Prüfen auf Parameter
	
	var strHref = window.location.href;
	// wenn Parameter für Seite angegeben werden
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
		//alert("curSlide: " + curSlide + " rectoVerso: " + rectoVerso + " zoom: " + zoom);
		/*if (strQueryAnsicht == "cod") {
			window.RImage.location.href = "image_konv.html";
			window.frames["navigation"].location.href = "navigation_konv.html";
			ansicht = "konv";
		} else {
			window.RImage.location.href = "image_miniatur.html";
			window.navigation.location.href = "navigation_miniaturen.html";
			ansicht = "miniatur";
		}*/
	}
	
	//alert("curSlide: " + curSlide + ", ansicht: " + ansicht + ", zoomStufe: " + zoom + ", rectoVerso: " + rectoVerso);
	if (zoom == 50) {
		//alert("doppelseitig");
		bildAnzeigeDS();
	} else {
		//alert("einseitig");
		bildAnzeigeES();
	}
}

/*
function importXML() {
	//alert("Nicht erschrecken :o) konventionelle Ansicht");
	if (document.implementation && document.implementation.createDocument) {
		xmlDoc = document.implementation.createDocument("", "", null);
		xmlDoc.onload = xmlLoaded;
	} else if (window.ActiveXObject) {
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.onreadystatechange = function () {
			if (xmlDoc.readyState == 4) xmlLoaded()
		};
 	}
	else
	{
		alert('Your browser can\'t handle this script');
		return;
	}
	xmlDoc.load(xmlURL);
}
*/

function importXML() {
	var xmlURL = "RScripts/bildverz.xml";
	 // Eine Verbindung zurm XML-Dokument aufbauen
  	var Connect = new XMLHttpRequest();
  	// einzulesendes XML-Dokument definieren und Anfrage senden
  	Connect.open("GET", xmlURL, false);
  	Connect.setRequestHeader("Content-Type", "text/xml");
  	Connect.send(null);
  	// Die Antwort in einem XML-Dokument speichern
  	var xmlDoc = Connect.responseXML;
  	// Das Wurzelelement in einer Variable speichern
  	bildbeschreibungen = xmlDoc.childNodes[0];
	
	//alert("erster Knoten 5: " + bildbeschreibungen.children[1].getElementsByTagName('tit1')[0].firstChild.nodeValue);
	//var titel = bildbeschreibungen.illustration[1].getElementsByTagName('tit1')[0].firstChild.nodeValue;
	
}



function xmlLoaded() {
	return true;
}



function init() {
	
	importXML();
	if (zoom == 50) {
		bildAnzeigeDS();
	} else {
		bildAnzeigeES();
	}
}





function beschreibungAnzeigen(folio) {

	var pfad=self.document.URL;
	var backslash = unescape("%5C");

	if (pfad.indexOf(backslash) != -1) {
		pfad = pfad.replace(/\\/g,"/");
	}

	var temp = pfad.indexOf("Daten");
	var pfadVariabel = pfad.substring(0, temp);
	//alert(pfadVariabel);
	var cssURL = pfadVariabel + "Daten/css/synopse.css";
	var printImgURL = pfadVariabel + "images/print.jpg";
	var jsURL = pfadVariabel + "Daten/RScripts/print.js";
	var illustration = bildbeschreibungen.getElementsByTagName('illustration');
	//var illustration = xmlDoc.getElementsByTagName('illustration');
	var titel,rubrizierung,uebersetzung,beschreibung,illustrationNr;
	var content = "";
	//alert(illustration);
	for (i = 0; i < 28; i++ ) {
		if (zoom == 50) {
			if ((illustration[i].attributes[0].nodeValue == curSlide + "r") || (illustration[i].attributes[0].nodeValue == (curSlide -1) + "v")) {
				titel = illustration[i].getElementsByTagName('tit1')[0].firstChild.nodeValue;
				rubrizierung = illustration[i].getElementsByTagName('rub')[0].firstChild.nodeValue;
				uebersetzung = illustration[i].getElementsByTagName('transl')[0].firstChild.nodeValue;
				beschreibung = illustration[i].getElementsByTagName('descr')[0].firstChild.nodeValue;		
				illustrationNr = "Illustration " + illustration[i].attributes[1].nodeValue;

				if ((curSlide == 58) || (curSlide == 62)) {
					illustrationNr = "Illustrationen " + illustration[i - 1].attributes[1].nodeValue + " und " + illustration[i].attributes[1].nodeValue;
				}

				content += '<div class=\"bildtitel\">' + titel + '</div>';
 				content += '<div class=\"tit\">' + rubrizierung + '</div>';
				content += '<div class=\"rp\">' + uebersetzung + '</div>';
				content += '<div class=\"bildbeschreibung\">' + beschreibung + '</div>';

			}

		} else {

			if (illustration[i].attributes[0].nodeValue == curSlide + rectoVerso) {
				titel = illustration[i].getElementsByTagName('tit1')[0].firstChild.nodeValue;
				rubrizierung = illustration[i].getElementsByTagName('rub')[0].firstChild.nodeValue;
				uebersetzung = illustration[i].getElementsByTagName('transl')[0].firstChild.nodeValue;
				beschreibung = illustration[i].getElementsByTagName('descr')[0].firstChild.nodeValue;
				illustrationNr = "Illustration " + illustration[i].attributes[1].nodeValue;
				content += '<div class=\"bildtitel\">' + titel + '</div>';
 				content += '<div class=\"tit\">' + rubrizierung + '</div>';
				content += '<div class=\"rp\">' + uebersetzung + '</div>';
				content += '<div class=\"bildbeschreibung\">' + beschreibung + '</div>';

			}
		}
	}

 	content += '<div align=\"center\"><a href=\"javascript:doPrint()\"><img id=\"drucken\" src=\"' + printImgURL + '\" width=\"55\" height=\"34\" border=\"0\"></a></div><br><form name=\"form1\" action=\"\"><center><input type=\"submit\" name=\"schliessen\" value=\"Fenster schließen\" onClick=\"javascript:self.close()\" class=\"Button\"></center></form></body>'
 	content += '</html>';
	var descrHeader = '<html><head><title>' + illustrationNr + '</title><script src=\"' + jsURL + '\" type=\"text/javascript\"></script><link rel=\"stylesheet\" type=\"text/css\" href=\"' + cssURL + '\"></head><body>';
	var breite = 360;
	var hoehe = 600;
	var xPos = screen.width - (breite + 30);
	var yPos = 200;
	var fenster = window.open("", "Bildbeschreibung", "menubar=no,toolbar=no,scrollbars=yes,locationbar=no,directories=no,resizable=yes,width="+ breite + ",height=" + hoehe +",screenX=" + xPos + ",screenY=" + yPos + ",left=" + xPos + ",top=" + yPos + ",status=no");

	if (fenster != 0) {
		fenster.document.open();
 		fenster.document.write(descrHeader + content);
 		fenster.document.close();
	}

	if (fenster.window != focus()) {fenster.window.focus()};
}



function systemWeiche() {

	agt=navigator.userAgent.toLowerCase();
	
	if (agt.indexOf('firefox') >= 0) {
		browser = "Firefox";
		xmlURL = "RScripts/bildverz.xml";
	} else if (agt.indexOf('msie') >=0) {
		browser = "MSIE";
		xmlURL = "RScripts/bildverz.xml";
	} else if (agt.indexOf('safari') >=0) {
		browser = "Safari";
		xmlURL = "RScripts/bildverz.xml";
	}
	alert(xmlURL);
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





function grossFenster(URL2) {
	var breite = screen.availWidth-10;
	var hoehe = screen.availHeight-10;
	links=0
	oben=0 
	F1=open(URL2,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ 	links+",screenX="+links)
	F1.resizeTo(screen.availWidth,screen.availHeight);
}





function transkriptionen(URL3) {
	var breite = screen.availWidth-10;
	var hoehe = screen.availHeight-10;
	links=0
	oben=0 
	F1=open(URL3,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
	F1.resizeTo(screen.availWidth,screen.availHeight);
}



function initialenInfoFenster(URL4) {
	var breite = 500
	var hoehe = 500
	links=(screen.width-breite)/2 
	oben=(screen.height-hoehe)/4 
	F1=open(URL4,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
}





function erlFenster(URL5) {
	var breite = 800
	var hoehe = 500
	links=(screen.width-breite)/2 
	oben=(screen.height-hoehe)/4 
	F1=open(URL5,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ 	links+",screenX="+links)
}



function doPrint() {
	//Nicht zu druckende Elemente ausblenden.
	for (i = 0; i < 5; i++) {
		if (document.images[i]){
			window.document.images[i].style.visibility = "hidden";
			//window.document.images[i].style.display = "none";
		}
	}

	document.form1.schliessen.style.visibility = "hidden";
	//Drucken
	window.print();

	//Nicht zu druckende Elemente wieder einblenden.
	setTimeout("iconsEinblenden()", 2000);
}



function iconsEinblenden() {

	for (i = 0; i < 5; i++) {

		if (document.images[i]){

			document.images[i].style.visibility = "visible";

		}

	}

	document.form1.schliessen.style.visibility = "visible";

}



function TasteGedrueckt(Ereignis) {

	if (navigator.appName == "Netscape") {

		if (parseInt(zoom) != 150) {

			if (Ereignis.which == 37) {

				goPrevPage();

			}

			if (Ereignis.which == 39) {

				goNextPage();

			}

		 	return true;

		}

	}

	if (navigator.appName == "Microsoft Internet Explorer") {

		if (parseInt(zoom) != 150) {

			if (window.event.keyCode == 37) {

				goPrevPage();

				return true;

			} 

			if (window.event.keyCode == 39) {

				goNextPage();

				return true;

			}

		}

	}

}

document.onkeydown = TasteGedrueckt;