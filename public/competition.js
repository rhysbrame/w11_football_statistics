data = [];

var Competition = function(url){
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
  data = JSON.parse(jsonString);
  console.log("inside ", data);
  console.log("inside ", event);
  populateDropdown(data);
}

var populateDropdown = function(competitions){
  var htmlSelectTag = document.getElementById("competition-selector");

  for (competition of competitions) {
    var option = document.createElement('option');
    option.value = competition.id;
    option.innerText = competition.caption;
    htmlSelectTag.appendChild(option);
  }
    var link = competition
  
  htmlSelectTag.addEventListener('change', function(event) {
    // var competitionCode = event.srcElement.value
    // console.log(event.srcElement.value);
    // var link = competitions[0]._links.leagueTable.href
    displayCompetition(link);
  });

}


var displayCompetition = function(link) {
  console.log("inside last function ", data)
  var listCompetition = document.getElementById('competition-list');
  
  var newList = document.createElement('li');
console.log("link function:", link)
  newList.innerText = link;
  listCompetition.appendChild(newList);
}











