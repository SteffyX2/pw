function SetVolume(val) 
	{
       	var player = document.getElementById('player');
        player.muted = false;
        player.volume = val / 100;
   	}

var inputRange = document.getElementsByClassName('range')[0],
var texter = document.getElementsByClassName('text');
    maxValue = 100, // the higher the smoother when dragging
    currValue, rafID;

// set min/max value
inputRange.min = 0;
inputRange.max = maxValue;

// move gradient
inputRange.addEventListener('input', function() {
    //Change slide thumb color on way up
    if (this.value > 20) {
        inputRange.classList.add('ltpurple');
        texter.classList.add('ltpurple');
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
        texter.classList.add('purple');

    }
    if (this.value > 60) {
        inputRange.classList.add('pink');
	texter.classList.add('pink');   
    }

    //Change slide thumb color on way down
    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
        texter.classList.remove('ltpurple');
    
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple');
	texter.classList.remove('purple');    
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');
	texter.classList.remove('pink');    
    }
});

//xx Eric Grucza
