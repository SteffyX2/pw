var message = new Array();
message[0] =  "[S]";
message[1] =  "[ST]";
message[2] =  "[STE]";
message[3] =  "[STEF]";
message[4] =  "[STEFF]";
message[5] =  "[STEFFY]";
message[6] =  "[STEFFYX]";
message[7] =  "[STEFFYX.PW]";
message[8] =  "[STEFFYX]";
message[9] =  "[STEFFY]";
message[10] = "[STEFF]";
message[11] = "[STEF]";
message[12] = "[STE]";
message[13] = "[ST]";
message[14] = "[S]";
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
A();
}
function A() {
s++;
if (s > 15) { s = 1;}
if (s == 1)  { document.title = '[S] '+T+' '; }
if (s == 2)  { document.title = '[x] '+T+' '; }
if (s == 3)  { document.title = '[S]  '+T+' '; }
if (s == 4)  { document.title = '[x]  '+T+' '; }
if (s == 5)  { document.title = '[S] '+T+' '; }
if (s == 6)  { document.title = '[x] '+T+' '; }
if (s == 7)  { document.title = '[S]  '+T+' '; }
if (s == 8)  { document.title = '[x]  '+T+' '; }
if (s == 9)  { document.title = '[S] '+T+' '; }
if (s == 10) { document.title = '[x] '+T+' '; }
if (s == 11) { document.title = '[S]  '+T+' '; }
if (s == 12) { document.title = '[x]  '+T+' '; }
if (s == 13) { document.title = '[S] '+T+' '; }
if (s == 14) { document.title = '[x] '+T+' '; }
if (s == 15) { document.title = '[S]  '+T+' '; }
if (C < (15 * reps)) {
sT = setTimeout("A()", speed);
C++;
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
