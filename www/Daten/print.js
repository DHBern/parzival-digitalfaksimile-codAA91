
window.addEventListener('load', function() {
  setListeners();
});

function setListeners() {
	printButton = document.getElementById('printButton');
	printButton.style.cursor = "pointer";
	printButton.addEventListener("click", function() {
  		doPrint();
	});

	const schliessenLinks = document.querySelectorAll('.schliessen');
	schliessenLinks.forEach(function(schliessenButton) {
    	schliessenButton.style.cursor = "pointer";
    	schliessenButton.addEventListener("click", function() {
  		self.close();
		});
    });

}


function doPrint()
{
   //Nicht zu druckende Elemente ausblenden.
   document.images['printButton'].style.visibility="hidden";
   document.images['schliessen'].style.visibility="hidden";
   document.form1.schliessen.style.visibility = "hidden";
	console.log('printing?');

   //Drucken
   window.print();

  
   //Nicht zu druckende Elemente wieder einblenden.
   document.images['printButton'].style.visibility="visible";
   document.images['schliessen'].style.visibility="visible";
   document.form1.schliessen.style.visibility = "visible";
 
  return;
}

