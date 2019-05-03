/*global $*/
let match1home;
let match1away;
let match2home;
let match2away;
let qmatch1fhome;
let qmatch1faway;
let qmatch1shome;
let qmatch1saway;
let qmatch2fhome;
let qmatch2faway;
let qmatch2shome;
let qmatch2saway;
let qmatch3fhome;
let qmatch3faway;
let qmatch3shome;
let qmatch3saway;
let qmatch4fhome;
let qmatch4faway;
let qmatch4shome;
let qmatch4saway;
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
$("#qmatch1f").click(function() {
    $("#qresult").html("Liverpool " + qmatch1fhome + "-" + qmatch1faway + " Porto");
});
$("#qmatch2f").click(function() {
    $("#qresult").html("Tottenham " + qmatch2fhome + "-" + qmatch2faway + " Man City");
});
$("#qmatch3f").click(function() {
    $("#qresult").html("Ajax " + qmatch3fhome + "-" + qmatch3faway + " Juventus");
});
$("#qmatch4f").click(function() {
    $("#qresult").html("Man United " + qmatch4fhome + "-" + qmatch4faway + " Barcelona");
});
$("#qmatch1s").click(function() {
    $("#qresult").html("Porto " + qmatch1shome + "-" + qmatch1saway + " Liverpool");
});
$("#qmatch2s").click(function() {
    $("#qresult").html("Man City " + qmatch2shome + "-" + qmatch2saway + " Tottenham");
});
$("#qmatch3s").click(function() {
    $("#qresult").html("Juventus " + qmatch3shome + "-" + qmatch3saway + " Ajax");
});
$("#qmatch4s").click(function() {
    $("#qresult").html("Barcelona " + qmatch4shome + "-" + qmatch4saway + " Man United");
});
$.ajax({
  headers: { 'X-Auth-Token': 'be21abd9a7c24d45ae61d1460a6bdfc8' },
  url: "https://api.football-data.org/v2/competitions/CL/matches?stage=QUARTER_FINALS",
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
    qmatch1fhome = response.matches[0].score.fullTime.homeTeam;
    qmatch1faway = response.matches[0].score.fullTime.awayTeam;
    qmatch1shome = response.matches[6].score.fullTime.homeTeam;
    qmatch1saway = response.matches[6].score.fullTime.awayTeam;
    qmatch2fhome = response.matches[1].score.fullTime.homeTeam;
    qmatch2faway = response.matches[1].score.fullTime.awayTeam;
    qmatch2shome = response.matches[7].score.fullTime.homeTeam;
    qmatch2saway = response.matches[7].score.fullTime.awayTeam;
    qmatch3fhome = response.matches[2].score.fullTime.homeTeam;
    qmatch3faway = response.matches[2].score.fullTime.awayTeam;
    qmatch3shome = response.matches[4].score.fullTime.homeTeam;
    qmatch3saway = response.matches[4].score.fullTime.awayTeam;
    qmatch4fhome = response.matches[3].score.fullTime.homeTeam;
    qmatch4faway = response.matches[3].score.fullTime.awayTeam;
    qmatch4shome = response.matches[5].score.fullTime.homeTeam;
    qmatch4saway = response.matches[5].score.fullTime.awayTeam;
});