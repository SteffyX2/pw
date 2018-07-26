var message = new Array();
message[0] =  "[S-------]";
message[1] =  "[-S------]";
message[2] =  "[--S-----]";
message[3] =  "[---S----]";
message[4] =  "[----S---]";
message[5] =  "[-----S--]";
message[6] =  "[------S-]";
message[7] =  "[-------S]";
message[8] =  "[------S-]";
message[9] =  "[-----S--]";
message[10] = "[----S---]";
message[11] = "[---S----]";
message[12] = "[--S-----]";
message[13] = "[-S------]";
message[14] = "[S-------]";
message[15] = "[1337]";
var reps = 2;
var speed = 50; var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;
function doTheThing() {
T = message[mC];
}
else {
C = 0;
s = 0;
mC++;
if(mC > p - 1) mC = 0;
sT = null;
doTheThing();
}
}
doTheThing();
