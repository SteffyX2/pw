function SetVolume(val) 
	{
       	var player = document.getElementById('player');
        player.muted = false;
        player.volume = val / 100;
   	}

var inputRange = document.getElementsByClassName('range')[0],
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
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
    }
    if (this.value > 60) {
        inputRange.classList.add('pink');
    }

    //Change slide thumb color on way down
    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple');
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');
    }
});

var text = document.getElementsByClassName('range')[0];
    maxValue = 100; // the higher the smoother when dragging
    currValue, rafID;

// set min/max value
text.min = 0;
text.max = maxValue;

// move gradient
text.addEventListener('input', function() {
    //Change slide thumb color on way up
    if (this.value > 20) {
        text.classList.add('ltpurple');
    }
    if (this.value > 40) {
        text.classList.add('purple');
    }
    if (this.value > 60) {
        text.classList.add('pink');
    }

    //Change slide thumb color on way down
    if (this.value < 20) {
        text.classList.remove('ltpurple');
    }
    if (this.value < 40) {
        text.classList.remove('purple');
    }
    if (this.value < 60) {
        text.classList.remove('pink');
    }
});

//xx Eric Grucza
