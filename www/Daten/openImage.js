var xPosition;
var yPosition;
var bild;
var imgMode;

window.addEventListener('load', function() {
	const queryParams = new URLSearchParams(window.location.search);
	bild = queryParams.get("bild");
	xPosition= queryParams.get("xPos");
	yPosition= queryParams.get("yPos");
	imgMode= queryParams.get("imgMode");
  	loadImage();
});


function loadImage() {
 	// img src="../GBilder/G150/' + bildURL + '.jp
	var blattNr = bild.substr(2, 3);
	document.title  = 'M\u00fcnchener Wolfram-Handschrift (Cgm 19), Bl. ' + blattNr;
	var imgSrc=getImgSrc();
	const image = document.getElementById("imageToShow");
	image.src = imgSrc;
	if (imgMode === "register" || imgMode=== "bildLinkGast" ) { // only scroll for registers
    	window.scrollTo(xPosition, yPosition);
    	  setTimeout(function() {
    		window.scrollTo(xPosition, yPosition);
  			}, 200); // delay the call to scrollTo() by 500 milliseconds
    }
}

function getImgSrc() {
	if (imgMode === "register") {
    	return '../../cgm19/GBilder/G150/' + bild + '.jpg';
    }
}
