// JavaScript Document
function doPrint() {
	//Nicht zu druckende Elemente ausblenden.
	for (i = 0; i < 5; i++) {
		if (document.images[i]){
			window.document.images[i].style.visibility = "hidden";
		}
	}
	
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
}

function register(bildURL, xPos, yPos) {
	//alert("register");
	var ue = "%FC"
	var blattNr = bildURL.substr(2, 3);
	var fensterName = "Blatt " + blattNr;
	xPosition = xPos;
	yPosition = yPos;
	var content='<html>'
		content+='\n<head>'
		content+='\n<title>M' + unescape(ue) + 'nchener Wolfram-Handschrift (Cgm 19), Bl. ' + blattNr + '</title>'
		content+='\n<script type="text/javascript">'
		content+='\nfunction verschieben() {'
		content+='\nwindow.scrollTo(' + xPosition + ',' + yPosition + ');'
		content+='\n}'
		content+='\n</script>'
		content+='\n</head>'
		content+='\n<body onLoad=\"javascript:verschieben()\" marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\">'
		content+='\n<img src="G150/' + bildURL + '.jpg">'
		content+='\n</body>'
		content+='\n</html>';
		//alert(content);
		fenster = window.open("", "fensterName", "width=1200,scrollbars=yes,height=580,resizable=yes,status=yes");
		fenster.focus();
		fenster.document.open();
		fenster.document.write(content);
		fenster.document.close();
		fenster.defaultStatus = "M" + unescape(ue) + "nchener Wolfram-Handschrift (Cgm 19), Bl. " + blattNr;
}

