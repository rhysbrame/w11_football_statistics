var app = function(){
  var url = 'http://api.football-data.org/v1/teams/86';
  searchTeam();
  makeRequest(url, requestComplete);
}

var searchTeam = function(){
  
  var searchQuery = document.getElementById('search-query');

  searchQuery.addEventListener('keyup', function(){
    var url = 'http://api.football-data.org/v1/teams/' + this.value;
    makeRequest(url, requestComplete);
  })

}

var makeRequest = function(url,callback){
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.setRequestHeader('X-Auth-Token', '389231fe99ff411cb6e63d6a8aa3ea56');
  request.addEventListener('load', requestComplete);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var teamData = JSON.parse(jsonString);
  display(teamData);
  console.log(teamData);
}

var display = function(teamData){
  var htmlCrest = document.querySelector('img');
  htmlCrest.src = teamData.crestUrl;
  var htmlTeamName = document.getElementById('teamName');
  htmlTeamName.innerText= teamData.name;
}

window.addEventListener('load', app);