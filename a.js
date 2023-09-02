
alert("PRESS START TO BEGIN THE GAME!");
var size = 1;
var final_level = 10;
var num = Math.trunc(Math.random()*1000000000);
var string = num.toString();
console.log(string)
var input = "";
var start = 0;
var playable = false;
var startable = true;
function reset(){
startable = true;
alert("wrong, start again");
$("h2").text("LEVEL #0");
size = 1;
num = Math.trunc(Math.random()*1000000000);
string = num.toString();
console.log(string)
input = "";
start = 0;
playable = false;
};
function press_button(n){

    switch(n){
    case 0:
        $("#red").css('opacity','0.5');
        setTimeout(function() {$("#red").css('opacity','1');} , "100");
        break;
    case 1:
        $("#blue").css('opacity','0.5');
        setTimeout(function() {$("#blue").css('opacity','1');} , "100");
        break;
    case 2:
        $("#green").css('opacity','0.5');
        setTimeout(function() {$("#green").css('opacity','1');} , "100");    
        break;
    case 3:
        $("#yellow").css('opacity','0.5');
        setTimeout(function() {$("#yellow").css('opacity','1');} , "100");
        break;
    }
};

function play(i){
if(i==size)
    {playable = true;return;}
var n = Number(string[i])%4;
press_button(n);
setTimeout(function(){play(i+1);},1000);
};

function final()
{
    alert("YOU HAVE WON!");
    reset();
}

$("#play").click(function(){
//input ="";
if(!startable)
    return;
start = 0;
startable = false;
playable = false;
play(0);
$("h2").text("LEVEL #" +size);
size++;
});
$(".button").click(function(event) {
    if(!playable)
        return;

    var id = $(this).attr('id');
    console.log(id);
    console.log(Number(string[start])%4);
    $(event.delegateTarget).css('opacity','0.5');
    setTimeout(function() {$(event.delegateTarget).css('opacity','1');} , "30");
    console.log(start);
    var corr = false;
    if(id == "red" && Number(string[start])%4 == 0)
    {start ++; console.log("correct"); corr = true;}
    if(id == "green" && Number(string[start])%4 == 2)
    {start ++; console.log("correct"); corr = true;}
    if(id == "yellow" && Number(string[start])%4 == 3)
    {start ++; console.log("correct"); corr = true;}
    if(id == "blue" && Number(string[start])%4 == 1)
    {start ++; console.log("correct"); corr = true;}
    if(!corr)
    {reset();}
    if(start == size)
    {alert("NEXT LEVEL!"); playable = false; startable = true;}
    if(start== final_level)
        finish();
});

$("#reset").click(() => {reset();});

$("#rules").click(()=> {alert("Repeat the Sequence of Colors Pressed")});