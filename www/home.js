window.localStorage.setItem('localStoreCurSlide', '1');
window.localStorage.setItem('localStoreAnsicht', 'konv');
window.localStorage.setItem('localStoreZoomStufe', 50);
window.localStorage.setItem('localStoreRectoVerso', 'doppelseitig');

localStorage.setItem('localStoreCurSlide', '1');

window.addEventListener('load', function() {
	window.defaultStatus="Berner Parzival-Handschrift (Cod. AA 91)";
  	setListeners();
});

function setListeners() {
	infoFensterStart = document.getElementById('impressumStart');
	infoFensterStart.addEventListener("click", function() {
  		infoFenster('Daten/impressum.html');
	});

	anleitungStart = document.getElementById('anleitungStart');
	anleitungStart.addEventListener("click", function() {
  		infoFenster('Daten/anleitung.html');
	});

	miniaturStart = document.getElementById('miniaturStart');
	miniaturStart.addEventListener("click", function() {
  		ansichtMiniaturStart();
	});
}