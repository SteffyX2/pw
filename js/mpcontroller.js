function SetVolume(val) 
	{
       	var player = document.getElementById('player');
        player.muted = false;
        player.volume = val / 100;
   	}


var inputRange=document.getElementsByClassName('range')[0];
var texts=document.getElementsByClassName('text')[0];
// move gradient
inputRange.addEventListener('input', function() {
    if (this.value > 5) {
        inputRange.classList.add('step2');
	texts.classList.add('step2');   
    }
    if (this.value > 10) {
        inputRange.classList.add('step3');
	texts.classList.add('step3');     
    }
    if (this.value > 15) {
        inputRange.classList.add('step4'); 
	texts.classList.add('step4');     
    }
	
    if (this.value > 20) {
        inputRange.classList.add('step5'); 
	texts.classList.add('step5');     
    }
	
    if (this.value > 25) {
        inputRange.classList.add('step6'); 
	texts.classList.add('step6');     
    }
	
    if (this.value > 30) {
        inputRange.classList.add('step7'); 
	texts.classList.add('step7');     
    }
	
    if (this.value > 35) {
        inputRange.classList.add('step8'); 
	texts.classList.add('step8');     
    }
	
    if (this.value > 40) {
        inputRange.classList.add('step9'); 
	texts.classList.add('step9');     
    }
	
    if (this.value > 45) {
        inputRange.classList.add('step10'); 
	texts.classList.add('step10');     
    }
	
    if (this.value > 50) {
        inputRange.classList.add('step11'); 
	texts.classList.add('step11');     
    }
	
    if (this.value > 55) {
        inputRange.classList.add('step12'); 
	texts.classList.add('step12');     
    }
	
    if (this.value > 60) {
        inputRange.classList.add('step13'); 
	texts.classList.add('step13');     
    }
	
    if (this.value > 65) {
        inputRange.classList.add('step14'); 
	texts.classList.add('step14');     
    }
	
    if (this.value > 70) {
        inputRange.classList.add('step15'); 
	texts.classList.add('step15');     
    }
	
    if (this.value > 75) {
        inputRange.classList.add('step16'); 
	texts.classList.add('step16');     
    }
	
    if (this.value > 80) {
        inputRange.classList.add('step17'); 
	texts.classList.add('step17');     
    }
	
    if (this.value > 85) {
        inputRange.classList.add('step18'); 
	texts.classList.add('step18');     
    }
	
    if (this.value > 90) {
        inputRange.classList.add('step19'); 
	texts.classList.add('step19');     
    }
	
    if (this.value > 95) {
        inputRange.classList.add('step20'); 
	texts.classList.add('step20');     
    }

    //Change slide thumb color on way down
    if (this.value < 5) {
        inputRange.classList.remove('step2');
	texts.classList.remove('step2');   
    }
    if (this.value < 10) {
        inputRange.classList.remove('step3');
	texts.classList.remove('step3');     
    }
    if (this.value < 15) {
        inputRange.classList.remove('step4'); 
	texts.classList.remove('step4');     
    }
	
    if (this.value < 20) {
        inputRange.classList.remove('step5'); 
	texts.classList.remove('step5');     
    }
	
    if (this.value < 25) {
        inputRange.classList.remove('step6'); 
	texts.classList.remove('step6');     
    }
	
    if (this.value < 30) {
        inputRange.classList.remove('step7'); 
	texts.classList.remove('step7');     
    }
	
    if (this.value < 35) {
        inputRange.classList.remove('step8'); 
	texts.classList.remove('step8');     
    }
	
    if (this.value < 40) {
        inputRange.classList.remove('step9'); 
	texts.classList.remove('step9');     
    }
	
    if (this.value < 45) {
        inputRange.classList.remove('step10'); 
	texts.classList.remove('step10');     
    }
	
    if (this.value < 50) {
        inputRange.classList.remove('step11'); 
	texts.classList.remove('step11');     
    }
	
    if (this.value < 55) {
        inputRange.classList.remove('step12'); 
	texts.classList.remove('step12');     
    }
	
    if (this.value < 60) {
        inputRange.classList.remove('step13'); 
	texts.classList.remove('step13');     
    }
	
    if (this.value < 65) {
        inputRange.classList.remove('step14'); 
	texts.classList.remove('step14');     
    }
	
    if (this.value < 70) {
        inputRange.classList.remove('step15'); 
	texts.classList.remove('step15');     
    }
	
    if (this.value < 75) {
        inputRange.classList.remove('step16'); 
	texts.classList.remove('step16');     
    }
	
    if (this.value < 80) {
        inputRange.classList.remove('step17'); 
	texts.classList.remove('step17');     
    }
	
    if (this.value < 85) {
        inputRange.classList.remove('step18'); 
	texts.classList.remove('step18');     
    }
	
    if (this.value < 90) {
        inputRange.classList.remove('step19'); 
	texts.classList.remove('step19');     
    }
	
    if (this.value < 95) {
        inputRange.classList.remove('step20'); 
	texts.classList.remove('step20');     
    }
});

//xx Eric Grucza
