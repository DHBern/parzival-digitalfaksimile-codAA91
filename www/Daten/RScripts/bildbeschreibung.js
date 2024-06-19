// JavaScript Document

//var xmlURL;
var browser;
var os;
var zoom = 50;
var xmlDoc;
var bildbeschreibungen;
var xmlURL;

function init() {
   	transkription = false;
	curSlide = window.localStorage.getItem('localStoreCurSlide');
	ansicht = window.localStorage.getItem('localStoreAnsicht');
	zoom = window.localStorage.getItem('localStoreZoomStufe');
	rectoVerso = window.localStorage.getItem('localStoreRectoVerso');
	importXML();
	initTranskript();
    bildAnsichtKonv();
}

function initTranskript() {
	importXMLTranskript();
}



function importXML(xmlURL = "RScripts/bildverz.xml") {
	//alert("XML");
	//var xmlURL = "RScripts/bildverz.xml";
	xmlUrl = xmlURL;
	 // Eine Verbindung zurm XML-Dokument aufbauen
  	var Connect = new XMLHttpRequest();
  	// einzulesendes XML-Dokument definieren und Anfrage senden
  	Connect.open("GET", xmlURL, false);
  	Connect.setRequestHeader("Content-Type", "text/xml");
  	Connect.send(null);
  	// Die Antwort in einem XML-Dokument speichern
	  var xmlDoc = Connect.responseXML;
	  //alert(xmlDoc);
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

function importXMLTranskript() {
	xmlURL = "../" + xmlURL;
	cssURL = "../" + cssURL;
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

function xmlLoaded() {
	return true;
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
	console.log(illustration);
	//alert("Bildbeschreibung 2: " + illustration[3].getElementsByTagName('tit1')[0].firstChild.nodeValue);
	var titel,rubrizierung,uebersetzung,beschreibung,illustrationNr;
	var content = "<body>";
	console.log('my folio' + folio);
	for (i = 0; i < 28; i++ ) {
			// console.log(illustration[i].attributes[0].nodeValue );
			if (illustration[i].attributes[0].nodeValue == folio) {
            	console.log('found ' + folio);
            	console.log(illustration[i].attributes);
				titel =  illustration[i].getElementsByTagName('tit1')[0].firstChild.nodeValue;
				
				//alert("titel: " + titel);
				
				rubrizierung = illustration[i].getElementsByTagName('rub')[0].firstChild.nodeValue;
				uebersetzung = illustration[i].getElementsByTagName('transl')[0].firstChild.nodeValue;
				beschreibung = illustration[i].getElementsByTagName('descr')[0].firstChild.nodeValue;
				illustrationNr = "Illustration " + illustration[i].attributes[1].nodeValue;
				content += '<div class=\"bildtitel\">' + titel + '</div>';
 				content += '<div class=\"tit\">' + rubrizierung + '</div>';
				content += '<div class=\"rp\">' + uebersetzung + '</div>';
				content += '<div class=\"bildbeschreibung\">' + beschreibung + '</div>';
			} else { console.log('no image description for folio ' + folio + 'available'); }
	}
 	content += '<div align=\"center\"><a href=\"javascript:doPrint()\"><img id=\"drucken\" src=\"' + printImgURL + '\" width=\"55\" height=\"34\" border=\"0\"></a></div><br><form name=\"form1\" action=\"\"><center><input type=\"submit\" name=\"schliessen\" value=\"Fenster schlie&szlig;en\" onClick=\"javascript:self.close()\" class=\"Button\"></center></form></body>'
 	content += '</html>';
	
	//alert("content: " + content);
	
	var descrHeader = '<html><head><title>' + illustrationNr + '</title><script src=\"' + jsURL + '\" type=\"text/javascript\"></script><link rel=\"stylesheet\" type=\"text/css\" href=\"' + cssURL + '\"></head>'+content;
	//alert (descrHeader);
	var breite = 400;
	var hoehe = 600;
	//if (transkription == false) {var xPos = screen.width - (breite + 30);} else {var xPos = 10;}
	var xPos = 10;
	var yPos = 200;
	//var MeinFenster = window.open("", "Bildbeschreibung", "menubar=no,toolbar=no,scrollbars=yes,locationbar=no,directories=no,resizable=yes,width=360,height=600,left=xPos,top=200"); 
	var myFenster = window.open("about:blank", "Bildbeschreibung", "menubar=no,toolbar=no,scrollbars=yes,locationbar=no,directories=no,resizable=yes,width="+ breite + ",height=" + hoehe +",screenX=" + xPos + ",screenY=" + yPos + ",left=" + xPos + ",top=" + yPos + ",status=no");
	if (myFenster != 0) {
		myFenster.document.open();
		myFenster.document.write(descrHeader);
		//myFenster.document.focus();
	} else {
		alert ("Kein fenster");
	}
	if (myFenster.window != focus()) {myFenster.window.focus()};
}