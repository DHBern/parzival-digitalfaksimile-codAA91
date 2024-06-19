var os;
var browser;
var backslash = unescape("%5c");
var bildURL;
var bildURL2;
var seitenAngabe;

document.addEventListener("DOMContentLoaded", function() {
  const myBody = document.getElementById("myBody");
  if (!myBody) {return;}
  const page = myBody.getAttribute("data");
  faksimilePZ(page);
  setLinks();
  setPositionLinks()
  importXML("../RScripts/bildverz.xml");
  initTranskript();
});


// setting styles
// generic event listener for all seitenangabe elements
function setLinks() {
	const faksimileLinks = document.querySelectorAll('.faksimilePZ');
	faksimileLinks.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('.faksimilePZ');
        if (faksimileLink) {
        	const page = faksimileLink.getAttribute("data");
        	faksimilePZ(page);
           }
    });

	document.addEventListener("click", function(event) {
        const bildbeschreibung = event.target.closest('.bildBeschreibung');
        if (bildbeschreibung) {
        	const page = bildbeschreibung.getAttribute("data");
        	beschreibungAnzeigen(page);
           }
    });
}


// setting styles
// generic event listener for all seitenangabe elements
function setPositionLinks() {
	const faksimileLinks = document.querySelectorAll('.imageLink');
	faksimileLinks.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('.imageLink');
        if (faksimileLink) {
        	const data = faksimileLink.getAttribute("data").split(',');
        	faksimilePZPositionieren(data[0], data[1], data[2]);
           }
    });
}


function faksimilePZ(seite) {

	systemWeiche();
	var zusatz ="";
	while (seite.charAt(0) == "0") {
		zusatz += "0";
		seite = seite.substr(1, seite.length - 1);
	}

	var pfad=self.document.URL
		var backslash = unescape("%5C");
	if (pfad.indexOf(backslash) != -1) {
		pfad = pfad.replace(/\\/g,"/");
	}
	var temp = pfad.indexOf("Daten");
	var pfadVariabel = pfad.substring(0, temp);
	bildURL = pfadVariabel + "RBilder/100/R" + zusatz + seite + ".jpg";
	bildURL2 = pfadVariabel + "RBilder/150/R" + zusatz + seite + ".jpg";
	
	var content='<html>'
	content+='\n<head>'
	content+='<title>Berner Parzival - Transkription</title>'
	content+='\n<script type="text/javascript">'
	content+='\n'
	content+='\nfunction Vollbild() {'
	content+='\n'
	content+='\nvar content2=\'<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"' + bildURL2 + '\" onClick=\"self.close()\"></body></html>\''
	content+='\nvar breite=screen.availWidth;'
	content+='\nvar hoehe=screen.availHeight;'
	content+='\nvar ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,")'
	content+='\nff.document.open()'
	content+='\nff.document.write(content2)'
	content+='\nff.document.close()'
	content+='\n}'
	content+='\nfunction verschieben(xPos,yPos) {'
	content+='\nalert(xPos);'
	content+='\nthis.scrollTo(xPos,yPos);'
	content+='\n}'
	content+='\n</script>'
	content+='\n'
	content+='\n'
	content+='\n</head>'
	content+='\n<body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\">'
	content+='\n<img src="' + bildURL + '"'
	content+=' onClick="Vollbild()">'
	content+='\n</body>'
	content+='\n</html>';
	parent.frames['rechts'].document.open();
	parent.frames['rechts'].document.write(content);
	parent.frames['rechts'].document.close();
	statusZeile(seite);
}

function faksimilePZPositionieren(seite,xPos,yPos) {
	this.parent.xPos = xPos;
	this.parent.yPos = yPos;
	
	systemWeiche();
	
	seitenAngabe = seite;
	while (seitenAngabe.charCodeAt(0) > 57) {
		seitenAngabe = seitenAngabe.substr(1, seitenAngabe.length - 1);
	}
	seitenAngabe = seitenAngabe.substr(0, 4);
	while (seitenAngabe.charCodeAt(0) == 48) {
		seitenAngabe = seitenAngabe.substr(1, seitenAngabe.length - 1);
	}

	var pfad=self.document.URL;
	var backslash = unescape("%5C");
	if (pfad.indexOf(backslash) != -1) {
		pfad = pfad.replace(/\\/g,"/");
	}
	var temp = pfad.indexOf("Daten");
	var pfadVariabel = pfad.substring(0, temp);
	bildURL = bildURL2 = pfadVariabel + "RBilder/150/R" + seite + ".jpg"
	var content='<html>'
	content+='\n<head>'
	content+='<title>Berner Parzival-Handschrift (Cod. AA 91) - Transkription</title>'
	content+='\n<script type="text/javascript">'
	content+='\n'
	content+='\nfunction Vollbild() {'
	content+='\n'
	content+='\nvar content2=\'<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"' + bildURL2 + '\" onClick=\"self.close()\"></body></html>\''
	content+='\nvar breite=screen.availWidth;'
	content+='\nvar hoehe=screen.availHeight;'
	content+='\nvar ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,")'
	content+='\nff.document.open()'
	content+='\nff.document.write(content2)'
	content+='\nff.document.close()'
	content+='\n}'
	content+='\nfunction verschieben(xPos,yPos) {'
	content+='\nthis.scrollTo(xPos,yPos);'
	content+='\n}'
	content+='\n</script>'
	content+='\n'
	content+='\n'
	content+='\n</head>'
	content+='\n<body onLoad=verschieben(this.parent.xPos,this.parent.yPos)>'
	content+='\n<img src="' + bildURL + '"'
	content+=' onClick="Vollbild()">'
	content+='\n</body>'
	content+='\n</html>';
	parent.frames['rechts'].document.open();
	parent.frames['rechts'].document.write(content);
	parent.frames['rechts'].document.close();
	statusZeile(seitenAngabe);
}


function statusZeile(seite) {
	var statusText;
	switch (seite) {
		case "2v": statusText = "Berner Parzival-Handschrift, vorderes Vorsatzblatt, Abdruck auf Buchdeckel (gespiegelt)"; break;
		case "181v": statusText = "Berner Parzival-Handschrift, hinteres Vorsatzblatt"; break;
		default: statusText = "Berner Parzival-Handschrift, Bl. " + seite; break;
	}
	window.defaultStatus = statusText; 
	window.status = statusText; 
	return true;
}

function systemWeiche() {
	agt=navigator.userAgent.toLowerCase();
	if (agt.indexOf('firefox') >= 0) {
		browser = "Firefox";
	} else if (agt.indexOf('msie') >=0) {
		browser = "MSIE";
	}
	sys=(navigator.platform)?navigator.platform.toLowerCase():agt;
	os=((sys.indexOf('mac')>=0)?"Macintosh":(sys.indexOf('unix')>=0 || sys.indexOf('linux')>=0 || sys.indexOf('x11')>=0 || sys.indexOf('x 11')>=0)?"Linux/Unix":(sys.indexOf('os/2')>=0)?"OS/2":(sys.indexOf('win')>=0)?"Windows":"");
}
