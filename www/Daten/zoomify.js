var curSlide = window.localStorage.getItem('localStoreCurSlide');
var ansicht = window.localStorage.getItem('localStoreAnsicht');
var zoom = window.localStorage.getItem('localStoreZoomStufe');
var rectoVerso = window.localStorage.getItem('localStoreRectoVerso');
var transkription = false


window.addEventListener('load', function() {
   bildAnzeigeZoom();
   setListeners();
});


function setListeners() {

	infoButton = document.getElementById('info');
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

	buchSelect = document.getElementById("buchMenu");
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
  		ansichtKonv(curSlide);
	});

	miniaturen = document.getElementById('miniaturen');
	miniaturen.addEventListener("click", function() {
  		ansichtMiniaturStart();
	});

	miniaturansicht = document.getElementById('miniaturansicht');
	miniaturansicht.addEventListener("click", function() {
  		ansichtMiniatur();
	});

	bildbeschreibung = document.getElementById('bildbeschreibung');
	bildbeschreibung.addEventListener("click", function() {
  		beschreibungAnzeigen(curSlide - 1 + 'v / ' + curSlide + 'r');
	});
}
