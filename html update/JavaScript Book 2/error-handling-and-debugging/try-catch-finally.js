var feed = document.getElementById('feed');
response = ' {"deals": [{"title": "Farrow and Ball",... ' //JSON data

if(response){
  try{
    var dealData = JSON.parse(reponse); //try to parse JSON
    showContent(dealData); //show JSON data
  } catch(e){
    var errorMessage = e.name + ' ' + e.message;  //create error msg
    console.log(errorMessage); //show devs msg
    feed.innerHTML = '<em>Sorry, could not load deals</em>'; //users msg
  }finally{
    var link = document.createElement('a'); //add refresh link
    link.innerHTML = ' <a href="try-catch-finally.html">reload</a>';
    feed.appendChild(link);
  }
}

//function showContent() to display deals goes here
