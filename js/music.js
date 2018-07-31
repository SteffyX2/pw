			var videoSource = new Array();
			videoSource[0]="css/files/same.mp4";
			videoSource[1]="css/files/steppa.mp4";
			videoSource[2]="css/files/lostit.mp4";
			videoSource[3]="css/files/dejavu.mp4";	
			videoSource[4]="css/files/switch.mp4";
			var videoCount = videoSource.length;
			document.getElementById("player").setAttribute("src",videoSource[0]);
			document.getElementById("player").play();
			var unmute = document.getElementById("player");
			var i = 0;
			document.getElementById("player").volume = 0.5;
			document.getElementById("mute").addEventListener('click',mutef);
			function mutef(){
			if(unmute.muted)
				unmute.muted = false;
			else
				unmute.muted = true;
			}
			document.getElementById("mute").addEventListener('click',changef);
			function changef(){
			var image = document.getElementById('mute');
    			if (image.src.match("unmute")) 
			{
    			    image.src = "/css/files/mute.png";
   		 	} 
			else 
			  {
       				image.src = "/css/files/unmute.png";
  			  }
			}
			document.getElementById("prev").addEventListener('click',prevf);
			function prevf(){
				if(i==0)
					i=videoCount-1;
				else
					i--;
				document.getElementById("player").setAttribute("src",videoSource[i]);
				document.getElementById("player").play();
				}
			document.getElementById("next").addEventListener('click',nextf);
			function nextf(){
				if(i>=videoCount-1)
					i=0;
				else
					i++;	
				document.getElementById("player").setAttribute("src",videoSource[i]);
				document.getElementById("player").play();		
				}
			document.getElementById("player").addEventListener('ended',myHandler,false);
			function myHandler()
			{
				if(i == (videoCount-1))
				{
					document.getElementById("player").setAttribute("src",videoSource[0]);
					document.getElementById("player").play();
					i=0;
				}
				else
				{
					i++;
					document.getElementById("player").setAttribute("src",videoSource[i]);
					document.getElementById("player").play();
				}  	
			}

function SetVolume(val) 
	{
  	var image = document.getElementById('mute');
	var player = document.getElementById('player');
        player.muted = false;
        player.volume = val / 100;
	if(player.volume==0)
		image.src = "css/files/mute.png";
	else
		image.src= "css/files/unmute.png";
		
   	}
var inputRange=document.getElementsByClassName('range')[0];
var texts=document.getElementsByClassName('text')[0];

// move gradient
inputRange.addEventListener('input', function() {
    if (this.value > 2) {
        inputRange.classList.add('step2');
	texts.classList.add('step2');   
    }
    if (this.value > 4) {
        inputRange.classList.add('step3');
	texts.classList.add('step3');     
    }
    if (this.value > 5) {
        inputRange.classList.add('step4'); 
	texts.classList.add('step4');     
    }
	
    if (this.value > 7) {
        inputRange.classList.add('step5'); 
	texts.classList.add('step5');     
    }
	
    if (this.value > 9) {
        inputRange.classList.add('step6'); 
	texts.classList.add('step6');     
    }
	
    if (this.value > 11) {
        inputRange.classList.add('step7'); 
	texts.classList.add('step7');     
    }
	
    if (this.value > 13) {
        inputRange.classList.add('step8'); 
	texts.classList.add('step8');     
    }
	
    if (this.value > 15) {
        inputRange.classList.add('step9'); 
	texts.classList.add('step9');     
    }
	
    if (this.value > 17) {
        inputRange.classList.add('step10'); 
	texts.classList.add('step10');     
    }
	
    if (this.value > 18) {
        inputRange.classList.add('step11'); 
	texts.classList.add('step11');     
    }
	
    if (this.value > 20) {
        inputRange.classList.add('step12'); 
	texts.classList.add('step12');     
    }
	
    if (this.value > 22) {
        inputRange.classList.add('step13'); 
	texts.classList.add('step13');     
    }
	
    if (this.value > 23) {
        inputRange.classList.add('step14'); 
	texts.classList.add('step14');     
    }
	
    if (this.value > 24) {
        inputRange.classList.add('step15'); 
	texts.classList.add('step15');     
    }
	
    if (this.value > 25) {
        inputRange.classList.add('step16'); 
	texts.classList.add('step16');     
    }
	
    if (this.value > 27) {
        inputRange.classList.add('step17'); 
	texts.classList.add('step17');     
    }
	
    if (this.value > 29) {
        inputRange.classList.add('step18'); 
	texts.classList.add('step18');     
    }
	
    if (this.value > 31) {
        inputRange.classList.add('step19'); 
	texts.classList.add('step19');     
    }
	
    if (this.value > 33) {
        inputRange.classList.add('step20'); 
	texts.classList.add('step20');     
    }
	
    if (this.value > 35) {
        inputRange.classList.add('step21'); 
	texts.classList.add('step21');     
    }
	
    if (this.value > 37) {
        inputRange.classList.add('step22'); 
	texts.classList.add('step22');     
    }
	
    if (this.value > 38) {
        inputRange.classList.add('step23'); 
	texts.classList.add('step23');     
    }
	
    if (this.value > 40) {
        inputRange.classList.add('step24'); 
	texts.classList.add('step24');     
    }
	
    if (this.value > 42) {
        inputRange.classList.add('step25'); 
	texts.classList.add('step25');     
    }
	
    if (this.value > 43) {
        inputRange.classList.add('step26'); 
	texts.classList.add('step26');     
    }
	
    if (this.value > 44) {
        inputRange.classList.add('step27'); 
	texts.classList.add('step27');     
    }
	
    if (this.value > 45) {
        inputRange.classList.add('step28'); 
	texts.classList.add('step28');     
    }
	
    if (this.value > 46) {
        inputRange.classList.add('step29'); 
	texts.classList.add('step29');     
    }
	
    if (this.value > 47) {
        inputRange.classList.add('step30'); 
	texts.classList.add('step30');     
    }
	
    if (this.value > 49) {
        inputRange.classList.add('step31'); 
	texts.classList.add('step31');     
    }
	
    if (this.value > 50) {
        inputRange.classList.add('step32'); 
	texts.classList.add('step32');     
    }
	
    if (this.value > 52) {
        inputRange.classList.add('step33'); 
	texts.classList.add('step33');     
    }
	
    if (this.value > 54) {
        inputRange.classList.add('step34'); 
	texts.classList.add('step34');     
    }
	
    if (this.value > 55) {
        inputRange.classList.add('step35'); 
	texts.classList.add('step35');     
    }
	
    if (this.value > 57) {
        inputRange.classList.add('step36'); 
	texts.classList.add('step36');     
    }
	
    if (this.value > 58) {
        inputRange.classList.add('step37'); 
	texts.classList.add('step37');     
    }
	
    if (this.value > 60) {
        inputRange.classList.add('step38'); 
	texts.classList.add('step38');     
    }
	
    if (this.value > 61) {
        inputRange.classList.add('step39'); 
	texts.classList.add('step39');     
    }
	
    if (this.value > 63) {
        inputRange.classList.add('step40'); 
	texts.classList.add('step40');     
    }
	
    if (this.value > 64) {
        inputRange.classList.add('step41'); 
	texts.classList.add('step41');     
    }
	
    if (this.value > 65) {
        inputRange.classList.add('step42'); 
	texts.classList.add('step42');     
    }
	
    if (this.value > 67) {
        inputRange.classList.add('step43'); 
	texts.classList.add('step43');     
    }
	
    if (this.value > 69) {
        inputRange.classList.add('step44'); 
	texts.classList.add('step44');     
    }
	
    if (this.value > 71) {
        inputRange.classList.add('step45'); 
	texts.classList.add('step45');     
    }
	
    if (this.value > 72) {
        inputRange.classList.add('step46'); 
	texts.classList.add('step46');     
    }
	
    if (this.value > 73) {
        inputRange.classList.add('step47'); 
	texts.classList.add('step47');     
    }
	
    if (this.value > 75) {
        inputRange.classList.add('step48'); 
	texts.classList.add('step48');     
    }
	
    if (this.value > 77) {
        inputRange.classList.add('step49'); 
	texts.classList.add('step49');     
    }
	
    if (this.value > 79) {
        inputRange.classList.add('step50'); 
	texts.classList.add('step50');     
    }
	
    if (this.value > 80) {
        inputRange.classList.add('step51'); 
	texts.classList.add('step51');     
    }
	
    if (this.value > 81) {
        inputRange.classList.add('step52'); 
	texts.classList.add('step52');     
    }
	
    if (this.value > 83) {
        inputRange.classList.add('step53'); 
	texts.classList.add('step53');     
    }
	
    if (this.value > 85) {
        inputRange.classList.add('step54'); 
	texts.classList.add('step54');     
    }
	
    if (this.value > 86) {
        inputRange.classList.add('step55'); 
	texts.classList.add('step55');     
    }
	
    if (this.value > 88) {
        inputRange.classList.add('step56'); 
	texts.classList.add('step56');     
    }
	
    if (this.value > 90) {
        inputRange.classList.add('step57'); 
	texts.classList.add('step57');     
    }
	
    if (this.value > 92) {
        inputRange.classList.add('step58'); 
	texts.classList.add('step58');     
    }
	
    if (this.value > 93) {
        inputRange.classList.add('step59'); 
	texts.classList.add('step59');     
    }
	
    if (this.value > 95) {
        inputRange.classList.add('step60'); 
	texts.classList.add('step60');     
    }
	
    if (this.value > 96) {
        inputRange.classList.add('step61'); 
	texts.classList.add('step61');     
    }
	
    if (this.value > 98) {
        inputRange.classList.add('step62'); 
	texts.classList.add('step62');     
    }
	
    if (this.value > 99) {
        inputRange.classList.add('step63'); 
	texts.classList.add('step63');     
    }
	
    if (this.value == 100) {
        inputRange.classList.add('step64'); 
	texts.classList.add('step64');     
    }

    //Change slide thumb color on way down
    if (this.value < 2) {
        inputRange.classList.remove('step2');
	texts.classList.remove('step2');   
    }
    if (this.value < 4) {
        inputRange.classList.remove('step3');
	texts.classList.remove('step3');     
    }
    if (this.value < 5) {
        inputRange.classList.remove('step4'); 
	texts.classList.remove('step4');     
    }
	
    if (this.value < 7) {
        inputRange.classList.remove('step5'); 
	texts.classList.remove('step5');     
    }
	
    if (this.value < 9) {
        inputRange.classList.remove('step6'); 
	texts.classList.remove('step6');     
    }
	
    if (this.value < 11) {
        inputRange.classList.remove('step7'); 
	texts.classList.remove('step7');     
    }
	
    if (this.value < 13) {
        inputRange.classList.remove('step8'); 
	texts.classList.remove('step8');     
    }
	
    if (this.value < 15) {
        inputRange.classList.remove('step9'); 
	texts.classList.remove('step9');     
    }
	
    if (this.value < 17) {
        inputRange.classList.remove('step10'); 
	texts.classList.remove('step10');     
    }
	
    if (this.value < 18) {
        inputRange.classList.remove('step11'); 
	texts.classList.remove('step11');     
    }
	
    if (this.value < 20) {
        inputRange.classList.remove('step12'); 
	texts.classList.remove('step12');     
    }
	
    if (this.value < 22) {
        inputRange.classList.remove('step13'); 
	texts.classList.remove('step13');     
    }
	
    if (this.value < 23) {
        inputRange.classList.remove('step14'); 
	texts.classList.remove('step14');     
    }
	
    if (this.value < 24) {
        inputRange.classList.remove('step15'); 
	texts.classList.remove('step15');     
    }
	
    if (this.value < 25) {
        inputRange.classList.remove('step16'); 
	texts.classList.remove('step16');     
    }
	
    if (this.value < 27) {
        inputRange.classList.remove('step17'); 
	texts.classList.remove('step17');     
    }
	
    if (this.value < 29) {
        inputRange.classList.remove('step18'); 
	texts.classList.remove('step18');     
    }
	
    if (this.value < 31) {
        inputRange.classList.remove('step19'); 
	texts.classList.remove('step19');     
    }
	
    if (this.value < 33) {
        inputRange.classList.remove('step20'); 
	texts.classList.remove('step20');     
    }
	
    if (this.value < 35) {
        inputRange.classList.remove('step21'); 
	texts.classList.remove('step21');     
    }
	
    if (this.value < 37) {
        inputRange.classList.remove('step22'); 
	texts.classList.remove('step22');     
    }
	
    if (this.value < 38) {
        inputRange.classList.remove('step23'); 
	texts.classList.remove('step23');     
    }
	
    if (this.value < 40) {
        inputRange.classList.remove('step24'); 
	texts.classList.remove('step24');     
    }
	
    if (this.value < 42) {
        inputRange.classList.remove('step25'); 
	texts.classList.remove('step25');     
    }
	
    if (this.value < 43) {
        inputRange.classList.remove('step26'); 
	texts.classList.remove('step26');     
    }
	
    if (this.value < 44) {
        inputRange.classList.remove('step27'); 
	texts.classList.remove('step27');     
    }
	
    if (this.value < 45) {
        inputRange.classList.remove('step28'); 
	texts.classList.remove('step28');     
    }
	
    if (this.value < 46) {
        inputRange.classList.remove('step29'); 
	texts.classList.remove('step29');     
    }
	
    if (this.value < 47) {
        inputRange.classList.remove('step30'); 
	texts.classList.remove('step30');     
    }
	
    if (this.value < 49) {
        inputRange.classList.remove('step31'); 
	texts.classList.remove('step31');     
    }
	
    if (this.value < 50) {
        inputRange.classList.remove('step32'); 
	texts.classList.remove('step32');     
    }
	
    if (this.value < 52) {
        inputRange.classList.remove('step33'); 
	texts.classList.remove('step33');     
    }
	
    if (this.value < 54) {
        inputRange.classList.remove('step34'); 
	texts.classList.remove('step34');     
    }
	
    if (this.value < 55) {
        inputRange.classList.remove('step35'); 
	texts.classList.remove('step35');     
    }
	
    if (this.value < 57) {
        inputRange.classList.remove('step36'); 
	texts.classList.remove('step36');     
    }
	
    if (this.value < 58) {
        inputRange.classList.remove('step37'); 
	texts.classList.remove('step37');     
    }
	
    if (this.value < 60) {
        inputRange.classList.remove('step38'); 
	texts.classList.remove('step38');     
    }
	
    if (this.value < 61) {
        inputRange.classList.remove('step39'); 
	texts.classList.remove('step39');     
    }
	
    if (this.value < 63) {
        inputRange.classList.remove('step40'); 
	texts.classList.remove('step40');     
    }
	
    if (this.value < 64) {
        inputRange.classList.remove('step41'); 
	texts.classList.remove('step41');     
    }
	
    if (this.value < 65) {
        inputRange.classList.remove('step42'); 
	texts.classList.remove('step42');     
    }
	
    if (this.value < 67) {
        inputRange.classList.remove('step43'); 
	texts.classList.remove('step43');     
    }
	
    if (this.value < 69) {
        inputRange.classList.remove('step44'); 
	texts.classList.remove('step44');     
    }
	
    if (this.value < 71) {
        inputRange.classList.remove('step45'); 
	texts.classList.remove('step45');     
    }
	
    if (this.value < 72) {
        inputRange.classList.remove('step46'); 
	texts.classList.remove('step46');     
    }
	
    if (this.value < 73) {
        inputRange.classList.remove('step47'); 
	texts.classList.remove('step47');     
    }
	
    if (this.value < 75) {
        inputRange.classList.remove('step48'); 
	texts.classList.remove('step48');     
    }
	
    if (this.value < 77) {
        inputRange.classList.remove('step49'); 
	texts.classList.remove('step49');     
    }
	
    if (this.value < 79) {
        inputRange.classList.remove('step50'); 
	texts.classList.remove('step50');     
    }
	
    if (this.value < 80) {
        inputRange.classList.remove('step51'); 
	texts.classList.remove('step51');     
    }
	
    if (this.value < 81) {
        inputRange.classList.remove('step52'); 
	texts.classList.remove('step52');     
    }
	
    if (this.value < 83) {
        inputRange.classList.remove('step53'); 
	texts.classList.remove('step53');     
    }
	
    if (this.value < 85) {
        inputRange.classList.remove('step54'); 
	texts.classList.remove('step54');     
    }
	
    if (this.value < 86) {
        inputRange.classList.remove('step55'); 
	texts.classList.remove('step55');     
    }
	
    if (this.value < 88) {
        inputRange.classList.remove('step56'); 
	texts.classList.remove('step56');     
    }
	
    if (this.value < 90) {
        inputRange.classList.remove('step57'); 
	texts.classList.remove('step57');     
    }
	
    if (this.value < 92) {
        inputRange.classList.remove('step58'); 
	texts.classList.remove('step58');     
    }
	
    if (this.value < 93) {
        inputRange.classList.remove('step59'); 
	texts.classList.remove('step59');     
    }
	
    if (this.value < 95) {
        inputRange.classList.remove('step60'); 
	texts.classList.remove('step60');     
    }
	
    if (this.value < 96) {
        inputRange.classList.remove('step61'); 
	texts.classList.remove('step61');     
    }
	
    if (this.value < 98) {
        inputRange.classList.remove('step62'); 
	texts.classList.remove('step62');     
    }
	
    if (this.value < 99) {
        inputRange.classList.remove('step63'); 
	texts.classList.remove('step63');     
    }
	
    if (this.value < 100) {
        inputRange.classList.remove('step64'); 
	texts.classList.remove('step64');     
    }
});

//xx Eric Grucza
