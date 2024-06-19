var transkription = false;
var curSlide = window.localStorage.getItem('localStoreCurSlide');
var ansicht = window.localStorage.getItem('localStoreAnsicht');
var zoom = window.localStorage.getItem('localStoreZoomStufe');
var rectoVerso = window.localStorage.getItem('localStoreRectoVerso');


window.addEventListener('load', function() {
  setListeners();
  bildAnsichtKonv();
});

function setListeners() {

	infoButton = document.getElementById('infoButton');
	infoButton.addEventListener("click", function() {
  		infoFenster('info.html');
	});

	prevPage = document.getElementById('blaettern2');
	prevPage.addEventListener('click', goPrevPage);

	nextPage = document.getElementById('blaettern3');
	nextPage.addEventListener('click', goNextPage);

	prevBook = document.getElementById('blaettern1');
	prevBook.addEventListener('click', goPrevBook);

	nextBook = document.getElementById('blaettern4');
	nextBook.addEventListener('click', goNextBook);

	miniaturLink = document.getElementById('miniaturLink');
	miniaturLink.addEventListener('click', ansichtMiniaturStart);

	g150 = document.getElementById('g150');
	g150.addEventListener('click', zoom150);

	g100 = document.getElementById('g100');
	g100.addEventListener('click', zoom100);

	g50 = document.getElementById('g50');
	g50.addEventListener('click', zoom50);

	buchSelect = document.getElementById("buchSelect");
	buchSelect.addEventListener("change", MM_jumpMenuParts);

	versEingabe = document.getElementById("versEingabe");
	versEingabe.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
    		submitenter(versEingabe, event);
  		}
	});

	blattInput = document.getElementById("blattInput");
	blattInput.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
    		submitenter(blattInput, event);
  		}
	});

	submitVers = document.getElementById('submitVers');
	submitVers.addEventListener("click", function() {
  		checkVersEingabe();
	});

	submitBlatt = document.getElementById('submitBlatt');
	submitBlatt.addEventListener("click", function() {
  		checkSeitenEingabe();
	});

	zoomButton = document.getElementById('zoom');
	zoomButton.addEventListener("click", function() {
  		ansichtZoom(curSlide);
	});

	miniaturansicht = document.getElementById('miniaturansicht');
	miniaturansicht.addEventListener("click", function() {
  		ansichtMiniatur();
	});

	bildbeschreibung = document.getElementById('bildbeschreibung');
	bildbeschreibung.addEventListener("click", function() {
  		beschreibungAnzeigen(curSlide + rectoVerso);
	});
}

document.onkeydown = TasteGedrueckt;

function TasteGedrueckt(Ereignis) {
    var zoom = parent.navigation.zoom;
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
        //zoom *= 1;
        //alert (typeof zoom);
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

