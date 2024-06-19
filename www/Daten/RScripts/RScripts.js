// JavaScript Document

aktBuch = parent.aktBuch;
var seitenAngabe = "";
var lagenAngabe = "";
var buchAuswahl = 2;
var oesz=unescape("%F6%DF");
var sz=unescape("%DF");
var browser;
var os;
var xmlURL = "RScripts/bildverz.xml";
var cssURL;
var xmlDoc;
var bildbeschreibungen;


//systemWeiche();
importXML();
//Menu Abschnitte wählen

function MM_jumpMenuParts(){ 
	if (document.naviHSR.selectBook.value != "javascript:") {
		if (document.naviHSR.selectBook.selectedIndex == 1) {
			var temp = document.naviHSR.selectBook.value;
			rectoVerso = temp.substring(0,1);
			curSlide = -2;
			document.naviHSR.selectBook.selectedIndex = 1;
		} else {
			var buch = document.naviHSR.selectBook.value;
			rectoVerso = buch.substring(0,1);
			curSlide = parseInt(buch.substring(1));
			document.naviHSR.selectBook.selectedIndex = 0;
		}
		if (rectoVerso=="v") {curSlide++;}
		bildAnzeigeZoom();
	}
}



function goNextBook () {
	if (aktBuch < 16) {
		document.naviHSR.selectBook.selectedIndex = (++aktBuch + 1);
	} else {return;}
	
	var temp = document.naviHSR.selectBook.value;
	rectoVerso = temp.substring(0,1);
	curSlide = parseInt(temp.substring(1));
	
	if (rectoVerso=="v") {
		curSlide++;
	}	
	bildAnzeigeZoom();
}



function goPrevBook () {
	if (aktBuch > 1) {
		document.naviHSR.selectBook.selectedIndex = (aktBuch);
	} else if ((aktBuch == 1) || (curSlide > 1)) {
		document.naviHSR.selectBook.selectedIndex = (aktBuch + 1);
	} else {
		return;
	}

	var temp = document.naviHSR.selectBook.value;
	rectoVerso = temp.substring(0,1);
	curSlide = parseInt(temp.substring(1));

	if (rectoVerso=="v") {
		curSlide++;
	}

	bildAnzeigeZoom();
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
	if (curSlide <= 182) {
		curSlide++;
		bildAnzeigeZoom();
	}
}



function goPrevPage() {
	if (curSlide > -2) {
		curSlide--;
		bildAnzeigeZoom();
	}
}



function checkSeitenEingabe() {

	var curSlideAlt = curSlide;
	var seitenEingabe = document.naviHSR.Blatt.value;

	if (seitenEingabe == "0" || seitenEingabe == "") {return}

	while (seitenEingabe.charAt(0)=="0") { //Führende 0'en abschneiden
		seitenEingabe = seitenEingabe.substring(1, seitenEingabe.length);
	}

	var temp = seitenEingabe.charCodeAt(seitenEingabe.length - 1);
	if ((47 > temp) && (temp < 58)) {
		seitenEingabe += "r";
	}

	var temp = seitenEingabe.search(/v/);

	if (temp==-1) { //Eingabe enthält kein v
		curSlide = parseInt(seitenEingabe);
	}	else {       //Eingabe enthält ein v
		curSlide = parseInt(seitenEingabe) + 1; 
	}

	if ((curSlide > 0) && (curSlide < 181)) {
		bildAnzeigeZoom();
	} else {

		alert("Das erste paginierte Blatt der Handschrift ist Bl. 1, das letzte paginierte Blatt ist Bl. 180. Die Vorsatzblätter und die Buchdeckel können Sie von dort aus über die Buttons \"zurück-\" bzw. \"weiterblättern\" erreichen."); curSlide = curSlideAlt;

	}

	document.naviHSR.Blatt.value = "";

}


function bildAnzeigeZoom() {
	//alert ("localZoom: " + window.localStorage.getItem('localStoreCurSlide'));
	var blatt = curSlide + "";
	blattInfoDS(blatt);
	var lageTxt = ". Lage, ";

	// Zusammensetzen des Dateinamens der Bilder

	var curSlideStr = curSlide += '';
	
	switch (curSlideStr.length) {

		case 1: zusatz = "00"; break;
		case 2: zusatz = "0"; break;
		default: zusatz = ""; break;

	}

	var temp = "R" + zusatz + curSlide;

	switch (curSlide) {

		case "0": seitenAngabe = "Vorsatzbl. / Bl. Ir"; lagenAngabe = ""; temp = "R000"; buchAuswahl = 0; break;
		case "1": seitenAngabe = "Bl. Iv / Bl. " + curSlide + "r"; lagenAngabe = lagenNr + lageTxt + lagenName; buchAuswahl = 2; break;
		case "181": seitenAngabe = "Bl. " + (curSlide-1) + "v / Vorsatzbl."; lagenAngabe = ""; buchAuswahl = aktBuch + 1; break;
		case "182": seitenAngabe = "Vorsatzbl. / Buchdeckel"; lagenAngabe = ""; temp = "R182"; buchAuswahl = 0; break;
		case "183": seitenAngabe = "Buchdeckel außen"; lagenAngabe = ""; temp = "R183"; buchAuswahl = 18; break;
		case "-1": seitenAngabe = "Buchdeckel / Vorsatzbl."; lagenAngabe = ""; temp = "Rvs001"; buchAuswahl = 0; break;
		case "-2": seitenAngabe = "Buchdeckel vorne"; lagenAngabe = ""; temp = "Rvs002"; buchAuswahl = 1; break;
		default: seitenAngabe = "Bl. " + (curSlide-1) + "v / " + curSlide + "r"; lagenAngabe = lagenNr + lageTxt + lagenName; buchAuswahl = aktBuch + 1; break;

	}	
	
	Z.showImage("myContainer", temp, "zLogoVisible=0");
	
	// Befüllen der Textfelder für Blatt- und Versnummer sowie der Lage bzw. des Lagensymbols
	document.getElementById('blattAnzeige').innerHTML = seitenAngabe;
	document.getElementById('versAnzeige').innerHTML = konkordanz;
	document.getElementById('lagenAnzeige').innerHTML = lagenAngabe;
	window.document.ImgLagensymbol.src = "../images/LagensymboleDoppelt/" + lagenSymb + ".gif";
	document.naviHSR.selectBook.selectedIndex = buchAuswahl;

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

	window.defaultStatus = "Berner Parzival-Handschrift, " + seitenAngabe;	

}



function ansichtKonv() {
	//alert("rectoVerso in ansichtKonv: " + rectoVerso + "; curSlide " + curSlide);
	var url_konv = "konventionell.html";

	if (Number(zoom) == 50) {
		curSlide = curSlide;
	} else if ((Number(zoom) != 50) && (rectoVerso == "v" )) {
		curSlide = -- curSlide;
		//rectoVerso = "v";
	}
	
	
	window.localStorage.setItem('localStoreCurSlide', curSlide);
	window.localStorage.setItem('localStoreAnsicht', "konv");
	window.localStorage.setItem('localStoreZoomstufe', zoom);
	window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
	//alert("local: " + window.localStorage.getItem('localStoreCurSlide'));
	window.location.href = url_konv;

}



function ansichtMiniaturen() {

	var url_nav = "navigation_miniaturen.html";

	var url_img = "image_miniatur.html";

	if ((curSlide == "8") || (curSlide == "20") || (curSlide == "21") || (curSlide == "23") || (curSlide == "38") || (curSlide == "47") || (curSlide == "56") || (curSlide == "118") || (curSlide == "126") || (curSlide == "128")) {

		parent.rectoVersoX = "r"; parent.curSlideX = curSlide;

	} else {

		parent.rectoVersoX = "v"; parent.curSlideX = --curSlide;

	}

	parent.ansicht = "miniatur";

	parent.RImage.location.href = url_img;

	parent.navigation.location.href = url_nav;

}

function ansichtMiniatur() {
	
	//alert("ansichtMiniatur");
	var url_miniatur = "miniaturen.html";

	
		if ((curSlide == "8") || (curSlide == "20") || (curSlide == "21") || (curSlide == "23") || (curSlide == "38") || (curSlide == "47") || (curSlide == "56") || (curSlide == "118") || (curSlide == "126") || (curSlide == "128")) {
			rectoVerso = "r";
		} else {
			rectoVerso = "v"; curSlide--;
		}
	
	
	window.localStorage.setItem('localStoreCurSlide', curSlide);
	window.localStorage.setItem('localStoreAnsicht', "miniatur");
	window.localStorage.setItem('localStoreZoomStufe', zoom);
	window.localStorage.setItem('localStoreRectoVerso', rectoVerso);
	//alert("zoom: " + zoom + " ; curSlide: " + curSlide + "; rectoVerso: " + rectoVerso);
	//alert("localStorage Zoomstufe: " + window.localStorage.getItem('localStoreZoomStufe'));
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



function infoFenster(URL1) {
	var breite = 500;
	var hoehe = 500;
	links=(screen.width-breite)/2 
	oben=(screen.height-hoehe)/4 
	F1=open(URL1,"","scrollbars=yes, resizable=yes, status=yes, width="+ breite+",height="+ hoehe+",top="+ oben+",screenY="+oben+",left="+ links+",screenX="+links)
}



/*function importXML() {
	//alert("Nicht erschrecken :o) Zoom-Ansicht");
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
}*/

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
	
	/*for (var i = 0; i < Customers.children.length; i++) {
   		var Customer = Customers.children[i];
   		// Access each of the data values.
   		var Name = Customer.getElementsByTagName("Name");
   
  	}
	
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
	//alert("xmlURL: " + xmlURL);
	xmlDoc.load(xmlURL);*/
}



function xmlLoaded() {
	return true;
}



function init() {
	importXML();
	bildAnzeigeZoom();
}


function beschreibungAnzeigen(folio) {
	var pfad=self.document.URL;
	var backslash = unescape("%5C");

	if (pfad.indexOf(backslash) != -1) {
		pfad = pfad.replace(/\\/g,"/");
	}

	var temp = pfad.indexOf("Daten");
	var pfadVariabel = pfad.substring(0, temp);
	var cssURL = pfadVariabel + "Daten/css/synopse.css";
	var printImgURL = pfadVariabel + "images/print.jpg";
	var jsURL = pfadVariabel + "Daten/RScripts/print.js";
	var illustration = bildbeschreibungen.getElementsByTagName('illustration');
	//var illustration = xmlDoc.getElementsByTagName('illustration');
	var titel,rubrizierung,beschreibung,illustrationNr;
	var content = "";

	for (i = 0; i < 28; i++ ) {
		if ((illustration[i].attributes[0].nodeValue == curSlide + "r") || (illustration[i].attributes[0].nodeValue == (curSlide -1) + "v")) {
			titel = illustration[i].getElementsByTagName('tit1')[0].firstChild.nodeValue;
			rubrizierung = illustration[i].getElementsByTagName('rub')[0].firstChild.nodeValue;
			uebersetzung = illustration[i].getElementsByTagName('transl')[0].firstChild.nodeValue;
			beschreibung = illustration[i].getElementsByTagName('descr')[0].firstChild.nodeValue;
			illustrationNr = "Illustration " + illustration[i].attributes[1].nodeValue;

			if ((folio == "57v / 58r") || (folio == "61v / 62r")) {
				illustrationNr = "Illustrationen " + illustration[i - 1].attributes[1].nodeValue + " und " + illustration[i].attributes[1].nodeValue;
			}

			content += '<div class=\"bildtitel\">' + titel + '</div>';
 			content += '<div class=\"tit\">' + rubrizierung + '</div>';
			content += '<div class=\"rp\">' + uebersetzung + '</div>';
			content += '<div class=\"bildbeschreibung\">' + beschreibung + '</div>';
		}
	}

 	content += '<div align=\"center\"><a href=\"javascript:doPrint()\"><img id=\"drucken\" src=\"' + printImgURL + '\" width=\"55\" height=\"34\" border=\"0\"></a></div><br><form name=\"form1\" action=\"\"><center><input type=\"submit\" name=\"schliessen\" value=\"Fenster schließen\" onClick=\"javascript:self.close()\" class=\"Button\"></center></form></body>'
 	content += '</html>';
	var descrHeader = '<html><head><title>' + illustrationNr + '</title><link rel=\"stylesheet\" type=\"text/css\" href=\"' + cssURL + '\"></head><body>';
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



function doPrint() {

	//Nicht zu druckende Elemente ausblenden.
	for (i = 0; i < 5; i++) {
		if (document.images[i]){
			window.document.images[i].style.visibility = "hidden";
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