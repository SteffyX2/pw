var message = new Array();
message[0] =  "[D]";
message[1] =  "[DE]";
message[2] =  "[DEE]";
message[3] =  "[DEEF]";
message[4] =  "[DEEF.]";
message[5] =  "[DEEF.P]";
message[6] =  "[DEEF.PW]";
message[7] =  "[ur mom gay]";
message[8] =  "[DEEF.PW]";
message[9] =  "[DEEF.P]";
message[10] = "[DEEF.]";
message[11] = "[DEEF]";
message[12] = "[DEE]";
message[13] = "[DE]";
message[14] = "[D]";
message[15] = "[OwO]";
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
