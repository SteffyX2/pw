var message = new Array();
message[0] =  "[SEFFYX]";
message[1] =  "[STEFFYX.PW]";
message[2] =  "[SEFFYX]";
message[3] =  "[STEFFYX.PW]";
message[4] =  "[SEFFYX]";
message[5] =  "[STEFFYX.PW]";
message[6] =  "[STEFFYX]";
message[7] =  "[STEFFYX.PW]";
message[8] =  "[STEFFYX]";
message[9] =  "[STEFFYX.PW]";
message[10] = "[SEFFYX]";
message[11] = "[STEFFYX.PW]";
message[12] = "[SEFFYX]";
message[13] = "[STEFFYX.PW]";
message[14] = "[SEFFYX]";
message[15] = "[21000]";
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
