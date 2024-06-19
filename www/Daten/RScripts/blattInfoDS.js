function blattInfoDS(blatt) {
	switch (blatt) {
// 1. Lage / 4 Einzelblätter
		case "-3": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		case "-2": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		case "-1": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		case "0": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break;
		case "1": lagenNr="1"; lagenSymb="L6_02r_destr"; lagenName="zerst&ouml;rt"; konkordanz="30.05&#150;32.25"; aktBuch = 1; imgDescr = false; break;
		case "2": lagenNr="1"; lagenSymb="L6_04r_destr"; lagenName="zerst&ouml;rt"; konkordanz="27.21&#150;30.04 / 16.30&#150;19.21"; aktBuch = 1; imgDescr = false; break;
		case "3": lagenNr="1"; lagenSymb="L6_05r_destr"; lagenName="zerst&ouml;rt"; konkordanz="19.22&#150;22.11 / 22.12&#150;24.28"; aktBuch = 1; imgDescr = false; break;
// 1. Lage / 1 Unio
		case "4": lagenNr="1"; lagenSymb="L6_06r_destr"; lagenName="zerst&ouml;rt"; konkordanz="24.29&#150;27.17 / 27.18, 32.29&#150;35.18"; aktBuch = 1; imgDescr = false; break;
		case "5": lagenNr="1"; lagenSymb="L6_07r_destr"; lagenName="zerst&ouml;rt"; konkordanz="35.19&#150;38.03 / 38.04&#150;08, 11.19&#150;14.06"; aktBuch = 1; imgDescr = false; break;
// 1. Lage / 3 Einzelblätter
		case "6": lagenNr="1"; lagenSymb="L6_08r_destr"; lagenName="zerst&ouml;rt"; konkordanz="14.07&#150;16.23 / 16.24&#150;28, 38.09&#150;40.23"; aktBuch = 1; imgDescr = false; break;
		case "7": lagenNr="1"; lagenSymb="L6_09r_destr"; lagenName="zerst&ouml;rt"; konkordanz="40.24&#150;43.11 / 43.12&#150;45.28"; aktBuch = 1; imgDescr = false; break;
		case "8": lagenNr="1"; lagenSymb="L6_11r_destr"; lagenName="zerst&ouml;rt"; konkordanz="45.29&#150;48.20 / 54.07&#150;55.20"; aktBuch = 1; imgDescr = true; break;
// 2. Lage / 1 Sexternio
		case "9": lagenNr="1./2"; lagenSymb="L6_12v_destr_L6_01r"; lagenName="zerst&ouml;rt/Sext."; konkordanz="55.21&#150;58.08 / 63.25&#150;66.14"; aktBuch = 2; imgDescr = false; break;
		case "10": lagenNr="2"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="66.15&#150;71.10"; aktBuch = 2; imgDescr = false; break;
		case "11": lagenNr="2"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="71.11&#150;76.06"; aktBuch = 2; imgDescr = false; break;
		case "12": lagenNr="2"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="76.07&#150;81.01"; aktBuch = 2; imgDescr = false; break;
		case "13": lagenNr="2"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="81.02&#150;85.26"; aktBuch = 2; imgDescr = false; break;
		case "14": lagenNr="2"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="85.27&#150;90.27"; aktBuch = 2; imgDescr = false; break;
		case "15": lagenNr="2"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="90.28&#150;95.26"; aktBuch = 2; imgDescr = false; break;
		case "16": lagenNr="2"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="95.27&#150;100.25"; aktBuch = 2; imgDescr = false; break;
		case "17": lagenNr="2"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="100.26&#150;105.19"; aktBuch = 2; imgDescr = false; break;
		case "18": lagenNr="2"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="105.20&#150;110.23"; aktBuch = 2; imgDescr = false; break;
		case "19": lagenNr="2"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="110.24&#150;114.18"; aktBuch = 2; imgDescr = true; break;
		case "20": lagenNr="2"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="114.19&#150;117.06"; aktBuch = 3; imgDescr = true; break;
// 3. Lage / 1 Sexternio
		case "21": lagenNr="2./3"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="117.07&#150;121.08"; aktBuch = 3; imgDescr = true; break;
		case "22": lagenNr="3"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="121.09&#150;126.08"; aktBuch = 3; imgDescr = false; break;
		case "23": lagenNr="3"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="126.09&#150;129.20"; aktBuch = 3; imgDescr = true; break;
		case "24": lagenNr="3"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="129.21&#150;134.18"; aktBuch = 3; imgDescr = false; break;
		case "25": lagenNr="3"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="134.19&#150;139.21"; aktBuch = 3; imgDescr = false; break;
		case "26": lagenNr="3"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="139.22&#150;144.26"; aktBuch = 3; imgDescr = false; break;
		case "27": lagenNr="3"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="144.27&#150;149.27"; aktBuch = 3; imgDescr = false; break;
		case "28": lagenNr="3"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="149.28&#150;154.26"; aktBuch = 3; imgDescr = false; break;
		case "29": lagenNr="3"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="154.27&#150;157.30"; aktBuch = 3; imgDescr = true; break;
		case "30": lagenNr="3"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="158.01&#150;161.13"; aktBuch = 3; imgDescr = true; break;
		case "31": lagenNr="3"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="161.14&#150;166.16"; aktBuch = 3; imgDescr = false; break;
		case "32": lagenNr="3"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="166.17&#150;171.19"; aktBuch = 3; imgDescr = false; break;
// 4. Lage / 1 Octernio
		case "33": lagenNr="3./4"; lagenSymb="L6_12v_L8_01r"; lagenName="Sext./Okt."; konkordanz="171.20&#150;176.18"; aktBuch = 3; imgDescr = false; break;
		case "34": lagenNr="4"; lagenSymb="L8_02r"; lagenName="Okternio"; konkordanz="176.19&#150;181.27"; aktBuch = 4; imgDescr = false; break;
		case "35": lagenNr="4"; lagenSymb="L8_03r"; lagenName="Okternio"; konkordanz="181.28&#150;186.23"; aktBuch = 4; imgDescr = false; break;
		case "36": lagenNr="4"; lagenSymb="L8_04r"; lagenName="Okternio"; konkordanz="186.24&#150;192.01"; aktBuch = 4; imgDescr = false; break;
		case "37": lagenNr="4"; lagenSymb="L8_05r"; lagenName="Okternio"; konkordanz="192.02&#150;197.10"; aktBuch = 4; imgDescr = false; break;
		case "38": lagenNr="4"; lagenSymb="L8_06r"; lagenName="Okternio"; konkordanz="197.11&#150;200.23"; aktBuch = 4; imgDescr = true; break;
		case "39": lagenNr="4"; lagenSymb="L8_07r"; lagenName="Okternio"; konkordanz="200.24&#150;205.19"; aktBuch = 4; imgDescr = false; break;
		case "40": lagenNr="4"; lagenSymb="L8_08r"; lagenName="Okternio"; konkordanz="205.20&#150;210.20"; aktBuch = 4; imgDescr = false; break;
		case "41": lagenNr="4"; lagenSymb="L8_09r"; lagenName="Okternio"; konkordanz="210.21&#150;214.10"; aktBuch = 4; imgDescr = true; break;
		case "42": lagenNr="4"; lagenSymb="L8_10r"; lagenName="Okternio"; konkordanz="214.11&#150;219.17"; aktBuch = 4; imgDescr = false; break;
		case "43": lagenNr="4"; lagenSymb="L8_11r"; lagenName="Okternio"; konkordanz="219.18&#150;224.22"; aktBuch = 5; imgDescr = false; break;
		case "44": lagenNr="4"; lagenSymb="L8_12r"; lagenName="Okternio"; konkordanz="224.23&#150;229.27"; aktBuch = 5; imgDescr = false; break;
		case "45": lagenNr="4"; lagenSymb="L8_13r"; lagenName="Okternio"; konkordanz="229.28&#150;235.02"; aktBuch = 5; imgDescr = false; break;
		case "46": lagenNr="4"; lagenSymb="L8_14r"; lagenName="Okternio"; konkordanz="235.03&#150;240.07"; aktBuch = 5; imgDescr = false; break;
		case "47": lagenNr="4"; lagenSymb="L8_15r"; lagenName="Okternio"; konkordanz="240.08&#150;242.08"; aktBuch = 5; imgDescr = true; break;
		case "48": lagenNr="4"; lagenSymb="L8_16r"; lagenName="Okternio"; konkordanz="242.09&#150;244.26"; aktBuch = 5; imgDescr = true; break;
// 5. Lage / 1 Sexternio
		case "49": lagenNr="4./5"; lagenSymb="L8_16v_L6_01r"; lagenName="Okt./Sext."; konkordanz="244.27&#150;249.23"; aktBuch = 5; imgDescr = false; break;
		case "50": lagenNr="5"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="249.24&#150;254.27"; aktBuch = 5; imgDescr = false; break;
		case "51": lagenNr="5"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="254.28&#150;259.22"; aktBuch = 5; imgDescr = false; break;
		case "52": lagenNr="5"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="259.23&#150;264.30"; aktBuch = 5; imgDescr = false; break;
		case "53": lagenNr="5"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="265.01&#150;269.09"; aktBuch = 5; imgDescr = true; break;
		case "54": lagenNr="5"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="269.10&#150;274.16"; aktBuch = 5; imgDescr = false; break;
		case "55": lagenNr="5"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="274.17&#150;279.22"; aktBuch = 5; imgDescr = false; break;
		case "56": lagenNr="5"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="279.23&#150;283.13"; aktBuch = 6; imgDescr = true; break;
		case "57": lagenNr="5"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="283.14&#150;293.12"; aktBuch = 6; imgDescr = false; break;
		case "58": lagenNr="5"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="293.13&#150;295.28"; aktBuch = 6; imgDescr = true; break;
		case "59": lagenNr="5"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="295.29&#150;300.26"; aktBuch = 6; imgDescr = false; break;
		case "60": lagenNr="5"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="300.27&#150;304.13"; aktBuch = 6; imgDescr = true; break;
// 6. Lage / 1 Sexternio
		case "61": lagenNr="5./6"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="304.14&#150;308.10"; aktBuch = 6; imgDescr = true; break;
		case "62": lagenNr="6"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="355.12-r / 308.11&#150;309.06"; aktBuch = 6; imgDescr = true; break;
		case "63": lagenNr="6"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="309.07&#150;314.15"; aktBuch = 6; imgDescr = false; break;
		case "64": lagenNr="6"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="314.16&#150;317.25"; aktBuch = 6; imgDescr = true; break;
		case "65": lagenNr="6"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="317.26&#150;323.02"; aktBuch = 6; imgDescr = false; break;
		case "66": lagenNr="6"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="323.03&#150;328.01"; aktBuch = 6; imgDescr = false; break;
		case "67": lagenNr="6"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="328.02&#150;333.07"; aktBuch = 6; imgDescr = false; break;
		case "68": lagenNr="6"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="333.08&#150;338.03"; aktBuch = 7; imgDescr = false; break;
		case "69": lagenNr="6"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="338.04&#150;343.03"; aktBuch = 7; imgDescr = false; break;
		case "70": lagenNr="6"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="343.04&#150;347.29"; aktBuch = 7; imgDescr = false; break;
		case "71": lagenNr="6"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="347.30&#150;352.26"; aktBuch = 7; imgDescr = false; break;
		case "72": lagenNr="6"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="352.27&#150;357.19"; aktBuch = 7; imgDescr = false; break;
// 7. Lage / 1 Sexternio
		case "73": lagenNr="6./7"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="357.20&#150;362.14"; aktBuch = 7; imgDescr = false; break;
		case "74": lagenNr="7"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="362.15&#150;367.05"; aktBuch = 7; imgDescr = false; break;
		case "75": lagenNr="7"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="367.06&#150;372.04"; aktBuch = 7; imgDescr = false; break;
		case "76": lagenNr="7"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="372.05&#150;376.30"; aktBuch = 7; imgDescr = false; break;
		case "77": lagenNr="7"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="377.01&#150;382.01"; aktBuch = 7; imgDescr = false; break;
		case "78": lagenNr="7"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="382.02&#150;386.24"; aktBuch = 7; imgDescr = false; break;
		case "79": lagenNr="7"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="386.25&#150;391.17"; aktBuch = 7; imgDescr = false; break;
		case "80": lagenNr="7"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="391.18&#150;396.06"; aktBuch = 7; imgDescr = false; break;
		case "81": lagenNr="7"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="396.07&#150;400.18"; aktBuch = 8; imgDescr = false; break;
		case "82": lagenNr="7"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="400.19&#150;405.10"; aktBuch = 8; imgDescr = false; break;
		case "83": lagenNr="7"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="405.11&#150;410.02"; aktBuch = 8; imgDescr = false; break;
		case "84": lagenNr="7"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="410.03&#150;414.20"; aktBuch = 8; imgDescr = false; break;
// 8. Lage / 1 Sexternio
		case "85": lagenNr="7./8"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="414.21&#150;419.11"; aktBuch = 8; imgDescr = false; break;
		case "86": lagenNr="8"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="419.12&#150;424.06"; aktBuch = 8; imgDescr = false; break;
		case "87": lagenNr="8"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="424.07&#150;428.28"; aktBuch = 8; imgDescr = false; break;
		case "88": lagenNr="8"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="428.29&#150;433.20"; aktBuch = 9; imgDescr = false; break;
		case "89": lagenNr="8"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="433.21&#150;438.15"; aktBuch = 9; imgDescr = false; break;
		case "90": lagenNr="8"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="438.16&#150;443.12"; aktBuch = 9; imgDescr = false; break;
		case "91": lagenNr="8"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="443.13&#150;447.30"; aktBuch = 9; imgDescr = false; break;
		case "92": lagenNr="8"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="448.01&#150;452.18"; aktBuch = 9; imgDescr = false; break;
		case "93": lagenNr="8"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="452.19&#150;457.09"; aktBuch = 9; imgDescr = false; break;
		case "94": lagenNr="8"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="457.10&#150;462.05"; aktBuch = 9; imgDescr = false; break;
		case "95": lagenNr="8"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="462.06&#150;466.30"; aktBuch = 9; imgDescr = false; break;
		case "96": lagenNr="8"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="467.01&#150;471.25"; aktBuch = 9; imgDescr = false; break;
// 9. Lage / 1 Sexternio
		case "97": lagenNr="8./9"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="471.26&#150;476.23"; aktBuch = 9; imgDescr = false; break;
		case "98": lagenNr="9"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="476.24&#150;481.18"; aktBuch = 9; imgDescr = false; break;
		case "99": lagenNr="9"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="481.19&#150;486.12"; aktBuch = 9; imgDescr = false; break;
		case "100": lagenNr="9"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="486.13&#150;491.03"; aktBuch = 9; imgDescr = false; break;
		case "101": lagenNr="9"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="491.04&#150;497.06"; aktBuch = 9; imgDescr = false; break;
		case "102": lagenNr="9"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="497.07&#150;502.04"; aktBuch = 9; imgDescr = false; break;
		case "103": lagenNr="9"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="502.05&#150;506.22"; aktBuch = 10; imgDescr = false; break;
		case "104": lagenNr="9"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="506.23&#150;511.12"; aktBuch = 10; imgDescr = false; break;
		case "105": lagenNr="9"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="511.13&#150;515.30"; aktBuch = 10; imgDescr = false; break;
		case "106": lagenNr="9"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="516.01&#150;520.21"; aktBuch = 10; imgDescr = false; break;
		case "107": lagenNr="9"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="520.22&#150;525.04"; aktBuch = 10; imgDescr = false; break;
		case "108": lagenNr="9"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="525.05&#150;529.23"; aktBuch = 10; imgDescr = false; break;
// 10. Lage / 1 Sexternio
		case "109": lagenNr="9./10"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="529.24&#150;534.08"; aktBuch = 10; imgDescr = false; break;
		case "110": lagenNr="10"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="534.09&#150;538.20"; aktBuch = 10; imgDescr = false; break;
		case "111": lagenNr="10"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="538.21&#150;543.01"; aktBuch = 10; imgDescr = false; break;
		case "112": lagenNr="10"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="543.02&#150;547.11"; aktBuch = 10; imgDescr = false; break;
		case "113": lagenNr="10"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="547.12&#150;551.24"; aktBuch = 10; imgDescr = false; break;
		case "114": lagenNr="10"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="551.25&#150;556.10"; aktBuch = 11; imgDescr = false; break;
		case "115": lagenNr="10"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="556.11&#150;561.01"; aktBuch = 11; imgDescr = false; break;
		case "116": lagenNr="10"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="561.02&#150;565.22"; aktBuch = 11; imgDescr = false; break;
		case "117": lagenNr="10"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="565.23&#150;570.14"; aktBuch = 11; imgDescr = false; break;
		case "118": lagenNr="10"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="570.15&#150;572.30"; aktBuch = 11; imgDescr = true; break;
		case "119": lagenNr="10"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="573.01&#150;575.13"; aktBuch = 11; imgDescr = true; break;
		case "120": lagenNr="10"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="575.14&#150;579.30"; aktBuch = 11; imgDescr = false; break;
// 11. Lage / 1 Sexternio
		case "121": lagenNr="10./11"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="580.01&#150;584.15"; aktBuch = 12; imgDescr = false; break;
		case "122": lagenNr="11"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="584.16&#150;588.28"; aktBuch = 12; imgDescr = false; break;
		case "123": lagenNr="11"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="588.29&#150;593.12"; aktBuch = 12; imgDescr = false; break;
		case "124": lagenNr="11"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="593.13&#150;598.05"; aktBuch = 12; imgDescr = false; break;
		case "125": lagenNr="11"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="598.06&#150;602.13"; aktBuch = 12; imgDescr = false; break;
		case "126": lagenNr="11"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="602.14&#150;604.21"; aktBuch = 12; imgDescr = true; break;
		case "127": lagenNr="11"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="604.22&#150;609.08"; aktBuch = 12; imgDescr = false; break;
		case "128": lagenNr="11"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="609.09&#150;611.18"; aktBuch = 12; imgDescr = true; break;
		case "129": lagenNr="11"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="611.19&#150;616.03"; aktBuch = 12; imgDescr = false; break;
		case "130": lagenNr="11"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="616.04&#150;620.21"; aktBuch = 12; imgDescr = false; break;
		case "131": lagenNr="11"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="620.22&#150;625.06"; aktBuch = 12; imgDescr = false; break;
		case "132": lagenNr="11"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="625.07&#150;629.24"; aktBuch = 13; imgDescr = false; break;
// 12. Lage / 1 Sexternio
		case "133": lagenNr="11./12"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="629.25&#150;634.14"; aktBuch = 13; imgDescr = false; break;
		case "134": lagenNr="12"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="634.15&#150;639.03"; aktBuch = 13; imgDescr = false; break;
		case "135": lagenNr="12"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="639.04&#150;643.22"; aktBuch = 13; imgDescr = false; break;
		case "136": lagenNr="12"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="643.23&#150;648.17"; aktBuch = 13; imgDescr = false; break;
		case "137": lagenNr="12"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="648.18&#150;653.08"; aktBuch = 13; imgDescr = false; break;
		case "138": lagenNr="12"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="653.09&#150;658.07"; aktBuch = 13; imgDescr = false; break;
		case "139": lagenNr="12"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="658.08&#150;663.02"; aktBuch = 13; imgDescr = false; break;
		case "140": lagenNr="12"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="663.03&#150;667.23"; aktBuch = 13; imgDescr = false; break;
		case "141": lagenNr="12"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="667.24&#150;672.10"; aktBuch = 13; imgDescr = false; break;
		case "142": lagenNr="12"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="672.11&#150;676.27"; aktBuch = 13; imgDescr = false; break;
		case "143": lagenNr="12"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="676.28&#150;681.12"; aktBuch = 14; imgDescr = false; break;
		case "144": lagenNr="12"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="681.13&#150;685.29"; aktBuch = 14; imgDescr = false; break;
// 13. Lage / 1 Sexternio
		case "145": lagenNr="12./13"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="685.30&#150;690.22"; aktBuch = 14; imgDescr = false; break;
		case "146": lagenNr="13"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="690.23&#150;695.06"; aktBuch = 14; imgDescr = false; break;
		case "147": lagenNr="13"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="695.07&#150;699.21"; aktBuch = 14; imgDescr = false; break;
		case "148": lagenNr="13"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="699.22&#150;704.04"; aktBuch = 14; imgDescr = false; break;
		case "149": lagenNr="13"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="704.05&#150;708.27"; aktBuch = 14; imgDescr = false; break;
		case "150": lagenNr="13"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="708.28&#150;713.20"; aktBuch = 14; imgDescr = false; break;
		case "151": lagenNr="13"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="713.21&#150;718.09"; aktBuch = 14; imgDescr = false; break;
		case "152": lagenNr="13"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="718.10&#150;722.26"; aktBuch = 14; imgDescr = false; break;
		case "153": lagenNr="13"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="722.27&#150;727.18"; aktBuch = 14; imgDescr = false; break;
		case "154": lagenNr="13"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="727.19&#150;732.03"; aktBuch = 14; imgDescr = false; break;
		case "155": lagenNr="13"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="732.04&#150;736.08"; aktBuch = 15; imgDescr = false; break;
		case "156": lagenNr="13"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="736.09&#150;740.02"; aktBuch = 15; imgDescr = false; break;
// 14. Lage / 1 Sexternio
		case "157": lagenNr="13./14"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="740.03&#150;742.01"; aktBuch = 15; imgDescr = true; break;
		case "158": lagenNr="14"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="742.02&#150;746.11"; aktBuch = 15; imgDescr = false; break;
		case "159": lagenNr="14"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="746.12&#150;748.17"; aktBuch = 15; imgDescr = true; break;
		case "160": lagenNr="14"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="748.18&#150;753.01"; aktBuch = 15; imgDescr = false; break;
		case "161": lagenNr="14"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="753.02&#150;757.20"; aktBuch = 15; imgDescr = false; break;
		case "162": lagenNr="14"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="757.21&#150;762.08"; aktBuch = 15; imgDescr = false; break;
		case "163": lagenNr="14"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="762.09&#150;777.13"; aktBuch = 15; imgDescr = false; break;
		case "164": lagenNr="14"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="777.14&#150;782.04"; aktBuch = 15; imgDescr = false; break;
		case "165": lagenNr="14"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz="782.05&#150;785.30"; aktBuch = 15; imgDescr = false; break;
		case "166": lagenNr="14"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz="786.01&#150;787.30"; aktBuch = 16; imgDescr = true; break;
		case "167": lagenNr="14"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz="788.01&#150;790.04"; aktBuch = 16; imgDescr = true; break;
		case "168": lagenNr="14"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz="790.05&#150;794.17"; aktBuch = 16; imgDescr = false; break;
// 15. Lage / 1 Sexternio
		case "169": lagenNr="14./15"; lagenSymb="L6_12v_L6_01r"; lagenName="Sext./Sext."; konkordanz="794.18&#150;799.05"; aktBuch = 16; imgDescr = false; break;
		case "170": lagenNr="15"; lagenSymb="L6_02r"; lagenName="Sexternio"; konkordanz="799.06&#150;803.11"; aktBuch = 16; imgDescr = false; break;
		case "171": lagenNr="15"; lagenSymb="L6_03r"; lagenName="Sexternio"; konkordanz="803.12&#150;807.25"; aktBuch = 16; imgDescr = false; break;
		case "172": lagenNr="15"; lagenSymb="L6_04r"; lagenName="Sexternio"; konkordanz="807.26&#150;812.05"; aktBuch = 16; imgDescr = false; break;
		case "173": lagenNr="15"; lagenSymb="L6_05r"; lagenName="Sexternio"; konkordanz="812.06&#150;816.14"; aktBuch = 16; imgDescr = false; break;
		case "174": lagenNr="15"; lagenSymb="L6_06r"; lagenName="Sexternio"; konkordanz="816.16&#150;820.29 (816.15/816.16 vertauscht)"; aktBuch = 16; imgDescr = false; break;
		case "175": lagenNr="15"; lagenSymb="L6_07r"; lagenName="Sexternio"; konkordanz="820.30&#150;825.09"; aktBuch = 16; imgDescr = false; break;
		case "176": lagenNr="15"; lagenSymb="L6_08r"; lagenName="Sexternio"; konkordanz="825.10&#150;827.30-6"; aktBuch = 16; imgDescr = false; break;
		case "177": lagenNr="15"; lagenSymb="L6_09r"; lagenName="Sexternio"; konkordanz=""; aktBuch = 16; imgDescr = false; break;
		case "178": lagenNr="15"; lagenSymb="L6_10r"; lagenName="Sexternio"; konkordanz=""; aktBuch = 16; imgDescr = false; break;
		case "179": lagenNr="15"; lagenSymb="L6_11r"; lagenName="Sexternio"; konkordanz=""; aktBuch = 16; imgDescr = false; break;
		case "180": lagenNr="15"; lagenSymb="L6_12r"; lagenName="Sexternio"; konkordanz=""; aktBuch = 16; imgDescr = false; break;
		case "181": lagenNr="15"; lagenSymb="L6_12v"; lagenName="Sexternio"; konkordanz=""; aktBuch = 16; imgDescr = false; break;
		case "182": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 17; imgDescr = false; break;
		case "183": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 17; imgDescr = false; break;
		return;
	}
}