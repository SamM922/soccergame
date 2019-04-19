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
});
$("#match1away").click(function(){
    $("#result").html(match1away);
});
$("#match2home").click(function(){
    $("#result").html(match2home);
});
$("#match2away").click(function(){
    $("#result").html(match2away);
});