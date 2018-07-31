var audio = document.getElementById('player');
 
document.getElementById('mute').addEventListener('click', function (e)
{
e = e || window.event;
audio.muted = !audio.muted;
e.preventDefault();
}, false);

function changeImage() {
    var image = document.getElementById('mute');
    if (image.src.match("unmute")) {
        image.src = "/css/files/mute.png";
    } else {
        image.src = "/css/files/unmute.png";
    }
}
