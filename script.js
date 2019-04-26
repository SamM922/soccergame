/*global $*/
let match1home;
let match1away;
let match2home;
let match2away;
$.ajax({
  headers: { 'X-Auth-Token': 'be21abd9a7c24d45ae61d1460a6bdfc8' },
  url: "https://api.football-data.org/v2/competitions/CL/matches?stage=SEMI_FINALS",
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
    match1home = response.matches[0].homeTeam.name;
    match1away = response.matches[0].awayTeam.name;
    match2home = response.matches[1].homeTeam.name;
    match2away = response.matches[1].awayTeam.name;
    console.log(response.matches[0]);
});
$("#match1home").click(function(){
    $("#result").html(match1home);
    $("#image").html("<img src = http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4ee.png></img>");
});
$("#match1away").click(function(){
    $("#result").html(match1away);
    $("#image").html("<img src = http://www.freelogovectors.net/wp-content/uploads/2018/08/ajax-logo.png></img>");
});
$("#match2home").click(function(){
    $("#result").html(match2home);
    $("#image").html("<img src = https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png></img>");
});
$("#match2away").click(function(){
    $("#result").html(match2away);
    $("#image").html("<img src = https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png></img>");
});