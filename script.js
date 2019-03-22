//Precode
/*global $*/
$("button").hide();
$("#start").show();
function r3070(){
    let i = (Math.random());
    console.log(i);
    if (i <= 0.3) {
        return true;
    } else {
        return false;
    }
}
function r4060(){
    let i = (Math.random());
    console.log(i);
    if (i <= 0.4) {
        return true;
    } else {
        return false;
    }
}
function r5050(){
    let i = (Math.random());
    console.log(i);
    if (i <= 0.5) {
        return true;
    } else {
        return false;
    }
}
function r6040(){
    let i = (Math.random());
    console.log(i);
    if (i <= 0.6) {
        return true;
    } else {
        return false;
    }
}
function r7030(){
    let i = (Math.random());
    console.log(i);
    if (i <= 0.7) {
        return true;
    } else {
        return false;
    }
}
function r8020(){
    let i = (Math.random());
    console.log(i);
    if (i <= 0.8) {
        return true;
    } else {
        return false;
    }
}
function randStart(){
    let i = (Math.random());
    console.log(i);
    if (i <= 0.5) {
        return "defense";
    } else {
        return "attack";
    }
}
//end Precode
//start functions
function hideStart(){
    $("#start").hide();
}
//end functions
//start .clicks
$("#start").click(function(){
    let r = randStart();
    if(r === "attack"){
        
    } else {
        
    }
    hideStart();
});
//end .clicks