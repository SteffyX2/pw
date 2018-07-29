function SetVolume(val) 
	{
       	var player = document.getElementById('player');
        player.muted = false;
        player.volume = val / 100;
   	}


var inputRange = document.getElementsByClassName('range')[0],
    maxValue = 100,
  
 
// set min/max value
inputRange.min = 0;
inputRange.max = maxValue;

// move gradient
inputRange.addEventListener('input', function() {
    if (this.value > 20) {
        inputRange.classList.add('ltpurple');
        texts.classList.add('ltpurple');	    
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
	texts.classList.add('ltpurple');
    }
    if (this.value > 60) {
        inputRange.classList.add('pink');  
	texts.classList.add('ltpurple');
    }

    //Change slide thumb color on way down
    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
     	texts.classList.add('ltpurple');
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple'); 
	texts.classList.add('ltpurple');    
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');  
	texts.classList.add('ltpurple');    
    }
});

//xx Eric Grucza
