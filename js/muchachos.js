var message = new Array();
message[0] =  "MUCHACHOS";
message[1] =  "MUCHACHO$";
message[2] =  "MUCHACHOS";
message[3] =  "MUCHACHO$";
message[4] =  "MUCHACHOS";
message[5] =  "MUCHACHO$";
message[6] =  "MUCHACHOS";
message[7] =  "MUCHACHO$;
message[8] =  "MUCHACHOS";
message[9] =  "MUCHACHO$";
message[10] = "MUCHACHOS";
message[11] = "MUCHACHO$";
message[12] = "MUCHACHOS";
message[13] = "MUCHACHO$";
message[14] = "MUCHACHOS";
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
