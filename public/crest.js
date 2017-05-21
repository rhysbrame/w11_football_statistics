var Crest = function(url){
  searchTeam();
  makeRequest(url, requestComplete);
};

var makeRequest = function(url,requestComplete){
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.setRequestHeader('X-Auth-Token', '389231fe99ff411cb6e63d6a8aa3ea56');
  request.addEventListener('load', requestComplete);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var data = JSON.parse(jsonString);
  display(data);
}

var searchTeam = function(){
  
  var searchQuery = document.getElementById('search-query');
  
  searchQuery.addEventListener('keyup', function(){
    var url = 'http://api.football-data.org/v1/teams/' + this.value;
    makeRequest(url, requestComplete);

  })
}

var display = function(data){
  var htmlCrest = document.querySelector('img');
  htmlCrest.src = data.crestUrl;
  var htmlTeamName = document.getElementById('teamName');
  htmlTeamName.innerText= data.name;
  console.log("displayed crest", data);
}