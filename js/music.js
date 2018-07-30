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
			var j = 0;
			document.getElementById("player").volume = 0;
			document.getElementById("prev").addEventListener('click',prevf);
			function prevf(){
				if(i==0 && j==1)
				{
					i=videoCount-2;
					j=0;
				}
				else if(i==0)
					i=videoCount-1;	
				document.getElementById("player").setAttribute("src",videoSource[i]);
				document.getElementById("player").play();
				
				}
			document.getElementById("next").addEventListener('click',nextf);
			function nextf(){
				if(i>=videoCount-1 || j==1)
				{
					i=0;
					j=0;
				}
				else if(i<videoCount-1 && j==0)
					i++;	
				document.getElementById("player").setAttribute("src",videoSource[i]);
				document.getElementById("player").play();		
				}
			document.getElementById("player").addEventListener('ended',myHandler,false);
			function myHandler()
			{
				if(i == (videoCount-1))
				{
					document.getElementById("player").setAttribute("src",videoSource[i]);
					document.getElementById("player").play();
					j=1;
					i=0;
				}
				else
				{
					i++;
					document.getElementById("player").setAttribute("src",videoSource[i]);
					document.getElementById("player").play();
					j=0;
				}  	
			}
