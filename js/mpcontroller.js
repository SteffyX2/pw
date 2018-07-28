function SetVolume(val) 
	{
       	var player = document.getElementById('player');
        player.muted = false;
        player.volume = val / 100;
   	}
