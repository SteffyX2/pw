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
			var i = 1;
			document.getElementById("player").volume = 0.5;
			function SetVolume(val) 
			{
       				var player = document.getElementById('player');
				player.muted = false;
        			player.volume = val / 100;
   			}
			document.getElementById("player").addEventListener('ended',myHandler,false);
			function myHandler()
			{
				if(i == (videoCount-1))
				{
					document.getElementById("player").setAttribute("src",videoSource[i]);
					document.getElementById("player").play();
					i = 0;
				}
				else
				{
					document.getElementById("player").setAttribute("src",videoSource[i]);
					document.getElementById("player").play();
					i++;
				}  	
