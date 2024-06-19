window.addEventListener('load', function() {
  setRegisterListeners();
});


function setRegisterListeners() {
	const registerLinks = document.querySelectorAll('.registerLink');
	registerLinks.forEach(function(registerLink) {
    	registerLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const registerLink = event.target.closest('.registerLink');
        if (registerLink) {
        	const data = registerLink.getAttribute("data").split(',');
        	openImage(data[0],parseInt(data[1],10), parseInt(data[2], 10), 'register');
           }
    });
}


function openImage(bild, xPos, yPos, mode) {
    const currentWindowscrollY = window.scrollY; // remember the current position in the current window
    const url = "openImage.html" + "?bild=" + encodeURIComponent(bild) + "&xPos=" + encodeURIComponent(xPos) + "&yPos=" + encodeURIComponent(yPos) + "&imgMode=" + encodeURIComponent(mode);
	var windowFeatures = "width=1200,scrollbars=yes,height=580,resizable=yes,status=yes";
    let newWindow = window.open(url, "_blank", windowFeatures);
    newWindow.addEventListener("beforeunload", function() {
        window.scrollTo(0, currentWindowscrollY); // scroll back to previous position when new window is closed
    });
}