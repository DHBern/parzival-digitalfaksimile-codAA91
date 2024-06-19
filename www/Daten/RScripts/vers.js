
function checkVersEingabe() {
	var fehlverseArr = new Array(16.29,19.30,21.24,27.19,27.20,56.20,64.29,66.06,70.12,82.28,85.28,88.12,94.26,106.10,110.01,110.02,113.26,115.07,129.03,134.03,140.21,140.28,146.16,159.03,159.04,169.15,169.16,175.04,176.22,179.13,222.27,222.28,224.03,228.17,230.28,244.14,247.26,250.07,250.08,256.20,271.29,307.24,310.21,350.10,353.16,376.28,395.02,414.03,414.04,416.10,418.29,418.30,470.20,474.25,496.07,496.08,498.29,498.30,499.05,499.06,513.04,532.10,553.24,556.04,560.17,560.18,595.03,595.04,605.08,608.22,638.04,654.13,654.14,654.25,654.26,657.28,673.06,690.20,704.14,706.16,736.15,736.16,736.23,736.24,794.23);	

	var vers = "";
	if (document.naviHSR.Vers.value == "") {return;}
	var versEingabe = document.naviHSR.Vers.value;
	
	if (versEingabe.search(/,/)) {
		versEingabe = versEingabe.replace(/,/, ".");
	}
	if (versEingabe.search(/\./) != -1) {
		var punkt = versEingabe.indexOf(".");
		var vPunkt = versEingabe.substring(0, punkt);
		var hPunkt = versEingabe.substring(punkt + 1);
	
		if (hPunkt.length != 2) {
			versEingabe = vPunkt + ".0" + hPunkt;
		}
	} else {
		versEingabe = versEingabe + ".01";
	}
	vers = parseFloat(versEingabe);
	if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {document.naviHSR.Vers.value = ""; return;}
	if (vers < 11.19) {alert("Die Verse 1.1 - 11.19 fehlen in der Berner Parzival-Handschrift."); document.naviHSR.Vers.value = ""; return;}
	if (vers > 827.30) {alert("Der letzte Vers des Parzival ist 827.30."); document.naviHSR.Vers.value = ""; return;}

//Fehlende Verse abfangen
	for (i = 0; i < fehlverseArr.length; i++) {
		var aktValue = fehlverseArr[i];
		if (vers == aktValue) {
			alert("Der Vers " + versEingabe + " fehlt in der Berner Parzival-Handschrift.");
			document.naviHSR.Vers.value = ""; return;
		}
	}
	if (vers >=12.16 && vers <=12.20) {alert("Die Verse 12.16 - 12.20 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}
	if (vers >=32.26 && vers <=32.28) {alert("Die Verse 32.26 - 32.28 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}
	if (vers >=48.21 && vers <=54.06) {alert("Die Verse 48.21 - 54.06 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}
	if (vers >=58.09 && vers <=63.24) {alert("Die Verse 58.09 - 63.24 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}
	if (vers >=288.15 && vers <=293.02) {alert("Die Verse 288.15 - 293.02 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}
	if (vers >=318.05 && vers <=318.08) {alert("Die Verse 318.05 - 318.08 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}
	if (vers >=493.09 && vers <=494.18) {alert("Die Verse 493.09 - 494.18 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}
	if (vers >=764.13 && vers <=774.30) {alert("Die Verse 764.13 - 774.30 fehlen in der Berner Parzival-Handschrift.");document.naviHSR.Vers.value = ""; return;}

//Seite laden gemäss Verseingabe


	if (vers >=30.05 && vers <=32.25) {curSlide=1; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=27.21 && vers <=30.04) {curSlide=1; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=16.30 && vers <=19.21) {curSlide=2; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=19.22 && vers <=22.11) {curSlide=2; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=22.12 && vers <=24.28) {curSlide=3; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=24.29 && vers <=27.17) {curSlide=3; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=27.18 && vers <=27.18) {curSlide=4; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=32.29 && vers <=35.18) {curSlide=4; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=35.19 && vers <=38.03) {curSlide=4; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=38.04 && vers <=38.08) {curSlide=5; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=11.19 && vers <=14.06) {curSlide=5; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=14.07 && vers <=16.23) {curSlide=5; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=16.24 && vers <=16.28) {curSlide=6; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=38.09 && vers <=40.23) {curSlide=6; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=40.24 && vers <=43.11) {curSlide=6; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=43.12 && vers <=45.28) {curSlide=7; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=45.29 && vers <=48.20) {curSlide=7; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=54.07 && vers <=55.20) {curSlide=8; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=55.21 && vers <=58.08) {curSlide=8; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=63.25 && vers <=66.14) {curSlide=9; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=66.15 && vers <=68.27) {curSlide=9; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=68.28 && vers <=71.10) {curSlide=10; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=71.11 && vers <=73.22) {curSlide=10; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=72.23 && vers <=75.06) {curSlide=11; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=76.07 && vers <=78.18) {curSlide=11; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=78.19 && vers <=81.01) {curSlide=12; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=81.02 && vers <=83.13) {curSlide=12; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=83.14 && vers <=85.26) {curSlide=13; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=85.27 && vers <=88.11) {curSlide=13; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=88.13 && vers <=90.27) {curSlide=14; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=90.28 && vers <=93.10) {curSlide=14; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=93.11 && vers <=95.26) {curSlide=15; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=95.27 && vers <=98.12) {curSlide=15; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=98.13 && vers <=100.25) {curSlide=16; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=100.26 && vers <=103.09) {curSlide=16; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=103.10 && vers <=105.19) {curSlide=17; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=105.20 && vers <=108.05) {curSlide=17; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=108.06 && vers <=110.23) {curSlide=18; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=110.24 && vers <=112.04) {curSlide=18; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=112.05 && vers <=114.18) {curSlide=19; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=114.19 && vers <=117.02) {curSlide=19; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=117.03 && vers <=117.06) {curSlide=20; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=117.07 && vers <=119.20) {curSlide=20; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=119.21 && vers <=121.08) {curSlide=21; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=121.09 && vers <=123.24) {curSlide=21; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=123.25 && vers <=126.08) {curSlide=22; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=126.09 && vers <=128.19) {curSlide=22; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=128.20 && vers <=129.20) {curSlide=23; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=129.21 && vers <=132.04) {curSlide=23; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=132.05 && vers <=134.18) {curSlide=24; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=134.19 && vers <=137.05) {curSlide=24; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=137.06 && vers <=139.21) {curSlide=25; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=139.22 && vers <=142.10) {curSlide=25; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=142.11 && vers <=144.26) {curSlide=26; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=144.27 && vers <=147.10) {curSlide=26; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=147.11 && vers <=149.27) {curSlide=27; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=149.28 && vers <=152.14) {curSlide=27; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=152.15 && vers <=154.26) {curSlide=28; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=154.27 && vers <=155.16) {curSlide=28; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=155.17 && vers <=157.30) {curSlide=29; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=158.01 && vers <=158.24) {curSlide=29; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=158.25 && vers <=161.13) {curSlide=30; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=161.14 && vers <=163.30) {curSlide=30; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=164.01 && vers <=166.16) {curSlide=31; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=166.17 && vers <=169.01) {curSlide=31; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=169.02 && vers <=171.19) {curSlide=32; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=171.20 && vers <=174.01) {curSlide=32; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=174.02 && vers <=176.18) {curSlide=33; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=176.19 && vers <=179.11) {curSlide=33; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=179.12 && vers <=181.27) {curSlide=34; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=181.28 && vers <=184.11) {curSlide=34; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=184.12 && vers <=186.23) {curSlide=35; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=186.24 && vers <=189.12) {curSlide=35; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=189.13 && vers <=192.01) {curSlide=36; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=192.02 && vers <=194.23) {curSlide=36; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=194.24 && vers <=197.10) {curSlide=37; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=197.11 && vers <=199.28) {curSlide=37; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=199.29 && vers <=200.23) {curSlide=38; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=200.24 && vers <=203.06) {curSlide=38; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=203.07 && vers <=205.19) {curSlide=39; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=205.20 && vers <=208.06) {curSlide=39; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=208.07 && vers <=210.20) {curSlide=40; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=210.21 && vers <=211.26) {curSlide=40; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=211.27 && vers <=214.10) {curSlide=41; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=214.11 && vers <=216.28) {curSlide=41; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=216.29 && vers <=219.17) {curSlide=42; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=219.18 && vers <=222.06) {curSlide=42; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=222.07 && vers <=224.22) {curSlide=43; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=224.23 && vers <=227.09) {curSlide=43; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=227.10 && vers <=229.27) {curSlide=44; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=229.28 && vers <=232.14) {curSlide=44; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=232.15 && vers <=235.02) {curSlide=45; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=235.03 && vers <=237.18) {curSlide=45; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=237.19 && vers <=240.07) {curSlide=46; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=240.08 && vers <=242.08) {curSlide=46; rectoVerso="v"; seiteKorrektur();}
	//Bilder auf Bll. 47r/v
	else if (vers >=242.09 && vers <=244.26) {curSlide=48; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=244.27 && vers <=247.08) {curSlide=48; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=247.09 && vers <=249.23) {curSlide=49; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=249.24 && vers <=252.10) {curSlide=49; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=252.11 && vers <=254.27) {curSlide=50; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=254.28 && vers <=257.10) {curSlide=50; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=257.11 && vers <=259.22) {curSlide=51; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=259.23 && vers <=262.10) {curSlide=51; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=262.11 && vers <=264.30) {curSlide=52; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=265.01 && vers <=266.22) {curSlide=52; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=266.23 && vers <=269.09) {curSlide=53; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=269.10 && vers <=271.30) {curSlide=53; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=272.01 && vers <=274.16) {curSlide=54; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=274.17 && vers <=277.02) {curSlide=54; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=277.03 && vers <=279.22) {curSlide=55; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=279.23 && vers <=282.08) {curSlide=55; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=282.09 && vers <=283.13) {curSlide=56; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=283.14 && vers <=286.06) {curSlide=56; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=286.07 && vers <=293.12) {curSlide=57; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=293.13 && vers <=294.20) {curSlide=57; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=294.21 && vers <=295.28) {curSlide=58; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=295.29 && vers <=298.12) {curSlide=58; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=298.13 && vers <=300.26) {curSlide=59; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=300.27 && vers <=301.27) {curSlide=59; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=301.28 && vers <=304.13) {curSlide=60; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=304.14 && vers <=305.27) {curSlide=60; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=305.27 && vers <=308.10) {curSlide=61; rectoVerso="r"; seiteKorrektur();}
	// Abbildung auf 61v
	else if (vers >=308.11 && vers <=309.06) {curSlide=62; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=309.07 && vers <=311.25) {curSlide=62; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=311.26 && vers <=314.15) {curSlide=63; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=314.16 && vers <=315.05) {curSlide=63; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=315.06 && vers <=317.25) {curSlide=64; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=317.26 && vers <=320.19) {curSlide=64; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=320.20 && vers <=323.02) {curSlide=65; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=323.02 && vers <=325.16) {curSlide=65; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=325.17 && vers <=328.01) {curSlide=66; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=328.02 && vers <=330.17) {curSlide=66; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=330.18 && vers <=333.07) {curSlide=67; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=333.08 && vers <=335.24) {curSlide=67; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=335.25 && vers <=338.03) {curSlide=68; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=338.04 && vers <=340.16) {curSlide=68; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=340.17 && vers <=343.02) {curSlide=69; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=343.04 && vers <=345.18) {curSlide=69; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=345.19 && vers <=347.29) {curSlide=70; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=347.30 && vers <=350.13) {curSlide=70; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=350.14 && vers <=352.26) {curSlide=71; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=352.27 && vers <=355.11) {curSlide=71; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=355.12 && vers <=357.19) {curSlide=72; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=357.20 && vers <=360.01) {curSlide=72; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=360.02 && vers <=362.14) {curSlide=73; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=362.15 && vers <=364.26) {curSlide=73; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=364.27 && vers <=367.05) {curSlide=74; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=367.06 && vers <=369.21) {curSlide=74; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=369.22 && vers <=372.04) {curSlide=75; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=372.05 && vers <=374.14) {curSlide=75; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=374.15 && vers <=376.30) {curSlide=76; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=377.01 && vers <=379.18) {curSlide=76; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=379.19 && vers <=382.01) {curSlide=77; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=382.02 && vers <=384.17) {curSlide=77; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=384.18 && vers <=386.24) {curSlide=78; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=386.25 && vers <=389.05) {curSlide=78; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=389.06 && vers <=391.17) {curSlide=79; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=391.18 && vers <=393.26) {curSlide=79; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=393.27 && vers <=396.06) {curSlide=80; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=396.07 && vers <=398.11) {curSlide=80; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=398.12 && vers <=400.18) {curSlide=81; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=400.19 && vers <=402.29) {curSlide=81; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=402.30 && vers <=405.10) {curSlide=82; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=405.11 && vers <=407.21) {curSlide=82; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=407.22 && vers <=410.02) {curSlide=83; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=410.03 && vers <=412.12) {curSlide=83; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=412.13 && vers <=414.20) {curSlide=84; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=414.21 && vers <=416.29) {curSlide=84; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=416.30 && vers <=419.11) {curSlide=85; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=419.12 && vers <=421.23) {curSlide=85; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=421.24 && vers <=424.06) {curSlide=86; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=424.07 && vers <=426.16) {curSlide=86; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=426.17 && vers <=428.28) {curSlide=87; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=428.29 && vers <=431.10) {curSlide=87; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=431.11 && vers <=433.20) {curSlide=88; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=433.21 && vers <=436.03) {curSlide=88; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=436.04 && vers <=438.15) {curSlide=89; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=438.16 && vers <=440.29) {curSlide=89; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=440.30 && vers <=443.12) {curSlide=90; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=443.13 && vers <=445.24) {curSlide=90; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=445.25 && vers <=447.30) {curSlide=91; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=448.01 && vers <=450.08) {curSlide=91; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=450.09 && vers <=452.18) {curSlide=92; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=452.19 && vers <=454.27) {curSlide=92; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=454.28 && vers <=457.09) {curSlide=93; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=457.10 && vers <=459.24) {curSlide=93; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=459.25 && vers <=462.05) {curSlide=94; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=462.06 && vers <=464.19) {curSlide=94; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=464.20 && vers <=466.30) {curSlide=95; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=467.01 && vers <=469.12) {curSlide=95; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=469.13 && vers <=471.25) {curSlide=96; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=471.26 && vers <=474.10) {curSlide=96; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=474.11 && vers <=476.23) {curSlide=97; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=476.24 && vers <=479.05) {curSlide=97; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=479.06 && vers <=481.18) {curSlide=98; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=481.19 && vers <=484.01) {curSlide=98; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=484.02 && vers <=486.12) {curSlide=99; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=486.13 && vers <=488.23) {curSlide=99; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=488.24 && vers <=491.03) {curSlide=100; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=491.04 && vers <=494.23) {curSlide=100; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=494.24 && vers <=497.06) {curSlide=101; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=497.07 && vers <=499.22) {curSlide=101; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=499.23 && vers <=502.04) {curSlide=102; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=502.05 && vers <=504.12) {curSlide=102; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=504.13 && vers <=506.22) {curSlide=103; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=506.23 && vers <=509.05) {curSlide=103; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=509.06 && vers <=511.12) {curSlide=104; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=511.13 && vers <=513.23) {curSlide=104; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=513.24 && vers <=515.30) {curSlide=105; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=516.01 && vers <=518.10) {curSlide=105; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=518.11 && vers <=520.21) {curSlide=106; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=520.22 && vers <=522.27) {curSlide=106; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=522.28 && vers <=525.04) {curSlide=107; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=525.05 && vers <=527.14) {curSlide=107; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=527.15 && vers <=529.23) {curSlide=108; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=529.24 && vers <=532.01) {curSlide=108; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=532.02 && vers <=534.08) {curSlide=109; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=534.09 && vers <=536.13) {curSlide=109; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=536.14 && vers <=538.20) {curSlide=110; rectoVerso="r"; seiteKorrektur();}
	else if (vers >=543.02 && vers <=545.09) {curSlide=110; rectoVerso="v"; seiteKorrektur();}
	else if (vers >=545.10 && vers <=547.11) {curSlide=111; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=543.02 && vers <=545.09) {curSlide=111; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=545.10 && vers <=547.11) {curSlide=112; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=547.12 && vers <=549.17) {curSlide=112; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=549.18 && vers <=551.24) {curSlide=113; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=551.25 && vers <=554.01) {curSlide=113; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=554.02 && vers <=556.10) {curSlide=114; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=556.11 && vers <=558.18) {curSlide=114; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=558.19 && vers <=561.01) {curSlide=115; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=561.02 && vers <=563.13) {curSlide=115; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=563.14 && vers <=565.22) {curSlide=116; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=565.23 && vers <=568.01) {curSlide=116; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=568.02 && vers <=570.14) {curSlide=117; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=570.15 && vers <=572.30) {curSlide=117; rectoVerso="v"; seiteKorrektur();}
	// Abbildungen auf 118r/v
	else if (vers >=573.01 && vers <=575.13) {curSlide=119; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=575.14 && vers <=577.22) {curSlide=119; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=577.23 && vers <=579.30) {curSlide=120; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=580.01 && vers <=582.10) {curSlide=120; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=582.11 && vers <=584.15) {curSlide=121; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=584.16 && vers <=586.21) {curSlide=121; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=586.22 && vers <=588.28) {curSlide=122; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=588.29 && vers <=591.04) {curSlide=122; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=591.05 && vers <=593.12) {curSlide=123; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=593.13 && vers <=594.18) {curSlide=123; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=595.25 && vers <=598.05) {curSlide=124; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=598.06 && vers <=600.09) {curSlide=124; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=600.10 && vers <=602.13) {curSlide=125; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=602.14 && vers <=604.21) {curSlide=125; rectoVerso="v"; seiteKorrektur();} 
	// Abbildung auf 126r 
	else if (vers >=604.22 && vers <=607.02) {curSlide=126; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=607.03 && vers <=609.08) {curSlide=127; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=609.09 && vers <=611.18) {curSlide=127; rectoVerso="v"; seiteKorrektur();} 
	// Abbildung auf 128r 
	else if (vers >=611.19 && vers <=613.28) {curSlide=128; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=613.29 && vers <=616.03) {curSlide=129; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=616.04 && vers <=618.10) {curSlide=129; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=618.11 && vers <=620.21) {curSlide=130; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=620.22 && vers <=622.29) {curSlide=130; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=622.30 && vers <=625.06) {curSlide=131; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=625.07 && vers <=627.15) {curSlide=131; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=627.16 && vers <=629.24) {curSlide=132; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=629.25 && vers <=632.05) {curSlide=132; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=632.06 && vers <=634.14) {curSlide=133; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=634.15 && vers <=636.23) {curSlide=133; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=636.24 && vers <=639.03) {curSlide=134; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=639.04 && vers <=641.15) {curSlide=134; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=641.16 && vers <=643.22) {curSlide=135; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=643.23 && vers <=646.04) {curSlide=135; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=646.05 && vers <=648.17) {curSlide=136; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=648.18 && vers <=650.28) {curSlide=136; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=650.29 && vers <=653.08) {curSlide=137; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=653.09 && vers <=655.22) {curSlide=137; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=655.23 && vers <=658.07) {curSlide=138; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=658.08 && vers <=660.20) {curSlide=138; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=660.21 && vers <=663.02) {curSlide=139; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=663.03 && vers <=665.11) {curSlide=139; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=665.12 && vers <=667.23) {curSlide=140; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=667.24 && vers <=669.30) {curSlide=140; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=670.01 && vers <=672.10) {curSlide=141; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=672.11 && vers <=674.21) {curSlide=141; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=674.22 && vers <=676.27) {curSlide=142; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=676.28 && vers <=679.06) {curSlide=142; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=679.07 && vers <=681.12) {curSlide=143; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=681.13 && vers <=683.21) {curSlide=143; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=683.22 && vers <=685.29) {curSlide=144; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=685.30 && vers <=688.10) {curSlide=144; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=688.11 && vers <=690.22) {curSlide=145; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=690.23 && vers <=692.30) {curSlide=145; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=693.01 && vers <=695.06) {curSlide=146; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=695.07 && vers <=697.13) {curSlide=146; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=697.14 && vers <=699.21) {curSlide=147; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=699.22 && vers <=701.26) {curSlide=147; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=701.27 && vers <=704.04) {curSlide=148; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=704.05 && vers <=706.14) {curSlide=148; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=706.15 && vers <=708.27) {curSlide=149; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=708.28 && vers <=711.06) {curSlide=149; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=711.07 && vers <=713.20) {curSlide=150; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=713.21 && vers <=715.30) {curSlide=150; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=716.01 && vers <=718.09) {curSlide=151; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=718.10 && vers <=720.18) {curSlide=151; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=720.19 && vers <=722.26) {curSlide=152; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=722.27 && vers <=725.08) {curSlide=152; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=725.09 && vers <=727.18) {curSlide=153; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=727.19 && vers <=729.25) {curSlide=153; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=729.26 && vers <=732.03) {curSlide=154; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=732.04 && vers <=734.05) {curSlide=154; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=734.06 && vers <=736.08) {curSlide=155; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=736.09 && vers <=738.13) {curSlide=155; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=738.14 && vers <=740.03) {curSlide=156; rectoVerso="r"; seiteKorrektur();} 
	// Abbildung auf 156v 
	else if (vers >=740.03 && vers <=742.01) {curSlide=157; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=742.02 && vers <=744.05) {curSlide=157; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=744.06 && vers <=746.11) {curSlide=158; rectoVerso="r"; seiteKorrektur();} 
	// Abbildung auf 158v  
	else if (vers >=746.12 && vers <=748.17) {curSlide=159; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=748.18 && vers <=750.25) {curSlide=159; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=750.26 && vers <=753.01) {curSlide=160; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=753.02 && vers <=755.10) {curSlide=160; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=755.11 && vers <=757.20) {curSlide=161; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=757.21 && vers <=759.27) {curSlide=161; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=759.28 && vers <=762.08) {curSlide=162; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=762.09 && vers <=775.04) {curSlide=162; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=775.05 && vers <=777.13) {curSlide=163; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=777.14 && vers <=779.24) {curSlide=163; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=779.25 && vers <=782.04) {curSlide=164; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=782.05 && vers <=784.13) {curSlide=164; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=784.14 && vers <=785.30) {curSlide=165; rectoVerso="r"; seiteKorrektur();} 
	// Abbildung auf 165v 
	else if (vers >=786.01 && vers <=787.30) {curSlide=166; rectoVerso="r"; seiteKorrektur();} 
	// Abbildung auf 166v 
	else if (vers >=788.01 && vers <=790.04) {curSlide=167; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=790.05 && vers <=792.09) {curSlide=167; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=792.10 && vers <=794.17) {curSlide=168; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=794.18 && vers <=796.29) {curSlide=168; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=796.29 && vers <=799.05) {curSlide=169; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=799.06 && vers <=801.10) {curSlide=169; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=801.11 && vers <=803.11) {curSlide=170; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=803.12 && vers <=805.14) {curSlide=170; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=805.15 && vers <=807.25) {curSlide=171; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=807.26 && vers <=810.02) {curSlide=171; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=810.03 && vers <=812.05) {curSlide=172; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=812.06 && vers <=814.10) {curSlide=172; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=814.11 && vers <=816.14) {curSlide=173; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=816.15 && vers <=818.19) {curSlide=173; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=818.20 && vers <=820.29) {curSlide=174; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=820.30 && vers <=823.06) {curSlide=174; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=823.07 && vers <=825.09) {curSlide=175; rectoVerso="r"; seiteKorrektur();} 
	else if (vers >=825.10 && vers <=827.06) {curSlide=175; rectoVerso="v"; seiteKorrektur();} 
	else if (vers >=827.07 && vers <=827.30) {curSlide=176; rectoVerso="r"; seiteKorrektur();} 
	else {alert("Der Vers " + vers + " fehlt in der Berner Parzival-Handschrift."); document.naviHSR.Vers.value = "";}
	
}

function seiteKorrektur() {
	if (parent.ansicht == "konv") {	
		if (zoom==50) {
			if (rectoVerso=="v") {
				curSlide++;
			}
			document.naviHSR.Vers.value = "";
			bildAnzeigeDS();
		} else {
			document.naviHSR.Vers.value = "";
			bildAnzeigeES();
		}
	} else {
		if (rectoVerso == "v") {
			curSlide++;
		}
		document.naviHSR.Vers.value = "";
		bildAnzeigeZoom();
	}
}