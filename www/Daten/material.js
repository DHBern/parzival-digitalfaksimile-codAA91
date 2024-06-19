var erlaeuterungen;

window.addEventListener('load', function() {
  setListeners();
});

function setListeners() {
	erlaeuterungen = document.getElementById('erl');
	erlaeuterungen.addEventListener("click", function() {
  		erlFenster('erlaeuterungen.html');
	});

	miniaturLink = document.getElementById('miniaturLink');
	miniaturLink.addEventListener("click", function() {
  		ansichtMiniatur();
	});
}


function materialInit() {
	window.localStorage.setItem('localStoreCurSlide', '8');
	window.localStorage.setItem('localStoreZoomStufe', 50);
	window.localStorage.setItem('localStoreRectoVerso', 'v');
}