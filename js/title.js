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
A();
}
function A() {
s++;
if (s > 15) { s = 1;}
if (s == 1)  { document.title = '(!@_@)> '+T+' '; }
if (s == 2)  { document.title = '(!#_#)> '+T+' '; }
if (s == 3)  { document.title = '(!^_^)> '+T+' '; }
if (s == 4)  { document.title = '(!O_O)> '+T+' '; }
if (s == 5)  { document.title = '(!U_U)> '+T+' '; }
if (s == 6)  { document.title = '(!W_W)> '+T+' '; }
if (s == 7)  { document.title = '(!T_T)> '+T+' '; }
if (s == 8)  { document.title = '(!Z_Z)> '+T+' '; }
if (s == 9)  { document.title = '(!X_X)> '+T+' '; }
if (s == 10) { document.title = '(!R_R)> '+T+' '; }
if (s == 11) { document.title = '(!K_K)> '+T+' '; }
if (s == 12) { document.title = '(!H_H)> '+T+' '; }
if (s == 13) { document.title = '(!V_V)> '+T+' '; }
if (s == 14) { document.title = '(!N_N)> '+T+' '; }
if (s == 15) { document.title = '(!Y_Y)> '+T+' '; }
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
