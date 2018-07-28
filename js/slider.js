var inputRange = document.getElementsByClassName('range')[0],
inputRange.min = 0;
inputRange.max = 100;

function SetVolume(val) 
			{
       				var player = document.getElementById('player');
				      player.muted = false;
        			player.volume = val / 100;
   		}

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

//By Eric Grucza
